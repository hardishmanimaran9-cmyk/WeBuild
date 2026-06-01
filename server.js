const http = require("node:http");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { URL } = require("node:url");

function loadLocalEnv() {
  const envPath = path.join(__dirname, ".env");
  if (!fs.existsSync(envPath)) return;
  for (const line of fs.readFileSync(envPath, "utf8").split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const separator = trimmed.indexOf("=");
    if (separator < 1) continue;
    const key = trimmed.slice(0, separator).trim();
    const value = trimmed.slice(separator + 1).trim().replace(/^['"]|['"]$/g, "");
    if (!process.env[key]) process.env[key] = value;
  }
}

loadLocalEnv();

const PORT = Number(process.env.PORT || 3001);
const PUBLIC_DIR = __dirname;
const DATA_DIR = process.env.WEBILLS_DATA_DIR || (process.env.VERCEL ? path.join(os.tmpdir(), "webills-data") : path.join(__dirname, "data"));
const LOCAL_DB_PATH = path.join(DATA_DIR, "webills-db.json");

const baseDashboard = {
  todaySales: 186420,
  invoiceCount: 27,
  gstCollected: 28460,
};

const seed = {
  products: [
    { id: 1, barcode: "8909001", name: "Corsair Vengeance 16GB DDR5 RAM", batch: "RAM-DDR5-16-CV", stock: 18, reorderPoint: 6, mrp: 4890, cost: 3950, gstRate: 18, expiry: "Lifetime warranty" },
    { id: 2, barcode: "8909002", name: "Samsung 980 NVMe SSD 1TB", batch: "SSD-NVME-1TB-S98", stock: 9, reorderPoint: 7, mrp: 6490, cost: 5320, gstRate: 18, expiry: "5 year warranty" },
    { id: 3, barcode: "8909003", name: "ASUS Prime B760M Motherboard", batch: "MB-B760M-AP", stock: 5, reorderPoint: 4, mrp: 11250, cost: 9300, gstRate: 18, expiry: "3 year warranty" },
    { id: 4, barcode: "8909004", name: "Logitech G102 Gaming Mouse", batch: "MOU-G102-LG", stock: 32, reorderPoint: 12, mrp: 1695, cost: 1180, gstRate: 18, expiry: "2 year warranty" },
    { id: 5, barcode: "8909005", name: "HP K500F USB Keyboard", batch: "KEY-K500F-HP", stock: 26, reorderPoint: 10, mrp: 899, cost: 610, gstRate: 18, expiry: "1 year warranty" },
    { id: 6, barcode: "8909006", name: "Dell 24 Inch FHD Monitor", batch: "MON-24FHD-DELL", stock: 7, reorderPoint: 3, mrp: 12490, cost: 10100, gstRate: 18, expiry: "3 year warranty" },
    { id: 7, barcode: "8909007", name: "Cooler Master 550W SMPS", batch: "PSU-550W-CM", stock: 11, reorderPoint: 5, mrp: 3990, cost: 3150, gstRate: 18, expiry: "5 year warranty" },
    { id: 8, barcode: "8909008", name: "Ant Esports RGB Cabinet", batch: "CAB-RGB-AE", stock: 8, reorderPoint: 4, mrp: 3490, cost: 2650, gstRate: 18, expiry: "1 year warranty" },
    { id: 9, barcode: "8909009", name: "Intel Core i5 Processor", batch: "CPU-I5-12400F", stock: 6, reorderPoint: 3, mrp: 13990, cost: 12100, gstRate: 18, expiry: "3 year warranty" },
    { id: 10, barcode: "8909010", name: "TP-Link USB WiFi Adapter", batch: "NET-WIFI-TPL", stock: 21, reorderPoint: 8, mrp: 799, cost: 510, gstRate: 18, expiry: "3 year warranty" },
    { id: 11, barcode: "8909011", name: "Lenovo 65W Laptop Charger", batch: "CHR-65W-LNV", stock: 14, reorderPoint: 6, mrp: 1890, cost: 1280, gstRate: 18, expiry: "1 year warranty" },
    { id: 12, barcode: "8909012", name: "HDMI 2.1 Cable 2M", batch: "CBL-HDMI21-2M", stock: 42, reorderPoint: 15, mrp: 399, cost: 155, gstRate: 18, expiry: "6 month warranty" },
    { id: 13, barcode: "8909013", name: "Kingston SATA SSD 480GB", batch: "SSD-SATA-480-KG", stock: 16, reorderPoint: 9, mrp: 2890, cost: 2280, gstRate: 18, expiry: "3 year warranty" },
    { id: 14, barcode: "8909014", name: "Arctic 120mm Cooling Fan", batch: "FAN-120-AR", stock: 28, reorderPoint: 10, mrp: 690, cost: 390, gstRate: 18, expiry: "1 year warranty" },
  ],
  customers: [
    { id: 1, name: "Walk-in Customer", phone: "-", creditLimit: 0, whatsappOptIn: false },
    { id: 2, name: "SURYA", phone: "+91 93424 02904", creditLimit: 75000, whatsappOptIn: true },
    { id: 3, name: "HARDISH", phone: "+91 93609 29997", creditLimit: 90000, whatsappOptIn: true },
    { id: 4, name: "Corporate IT Desk", phone: "+91 90030 30303", creditLimit: 250000, whatsappOptIn: true },
  ],
  invoices: [],
  purchaseEntries: [],
  gstPayments: [],
  adviceHistory: [],
};

let memory = structuredClone(seed);
let pg = null;
let dbMessage = "Laptop JSON database active. Data persists locally on this computer.";

function ensureLocalDatabase() {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  if (fs.existsSync(LOCAL_DB_PATH)) {
    memory = { ...structuredClone(seed), ...JSON.parse(fs.readFileSync(LOCAL_DB_PATH, "utf8")) };
    return;
  }
  saveMemoryDatabase();
}

function saveMemoryDatabase() {
  if (pg) return;
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(LOCAL_DB_PATH, JSON.stringify(memory, null, 2));
}

function toCamelProduct(row) {
  return {
    id: Number(row.id),
    barcode: row.barcode,
    name: row.name,
    batch: row.batch,
    stock: Number(row.stock),
    reorderPoint: Number(row.reorder_point),
    mrp: Number(row.mrp),
    cost: Number(row.cost),
    gstRate: Number(row.gst_rate),
    expiry: String(row.expiry).slice(0, 24),
  };
}

function toCamelCustomer(row) {
  return {
    id: Number(row.id),
    name: row.name,
    phone: row.phone,
    creditLimit: Number(row.credit_limit),
    whatsappOptIn: Boolean(row.whatsapp_opt_in),
  };
}

async function connectPostgres() {
  if (!process.env.DATABASE_URL) return;
  try {
    const { Pool } = require("pg");
    pg = new Pool({ connectionString: process.env.DATABASE_URL });
    await pg.query("select 1");
    await ensurePostgresSchema();
    dbMessage = "Connected to PostgreSQL through DATABASE_URL.";
  } catch (error) {
    pg = null;
    dbMessage = `PostgreSQL unavailable: ${error.message}. Using demo memory.`;
  }
}

async function ensurePostgresSchema() {
  const schemaPath = path.join(__dirname, "db", "schema.sql");
  if (!fs.existsSync(schemaPath)) return;
  const schema = fs.readFileSync(schemaPath, "utf8");
  await pg.query(schema);
  const existing = await pg.query("select count(*)::int as count from products");
  if (existing.rows[0].count > 0) return;
  for (const product of seed.products) {
    await pg.query(
      `insert into products
        (barcode, name, batch, stock, reorder_point, mrp, cost, gst_rate, expiry)
       values ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
      [product.barcode, product.name, product.batch, product.stock, product.reorderPoint, product.mrp, product.cost, product.gstRate, product.expiry],
    );
  }
  for (const customer of seed.customers) {
    await pg.query(
      `insert into customers (name, phone, credit_limit, whatsapp_opt_in)
       values ($1, $2, $3, $4)`,
      [customer.name, customer.phone, customer.creditLimit, customer.whatsappOptIn],
    );
  }
}

async function getProducts() {
  if (!pg) return memory.products;
  const result = await pg.query("select * from products order by id");
  return result.rows.map(toCamelProduct);
}

async function getCustomers() {
  if (!pg) return memory.customers;
  const result = await pg.query("select * from customers order by id");
  return result.rows.map(toCamelCustomer);
}

async function getDashboard() {
  const products = await getProducts();
  if (!pg) {
    const activeInvoices = memory.invoices.filter((invoice) => invoice.status !== "CANCELLED");
    const todaySales = activeInvoices.reduce((sum, invoice) => sum + invoice.grandTotal, baseDashboard.todaySales);
    const gstCollected = activeInvoices.reduce((sum, invoice) => sum + invoice.tax, baseDashboard.gstCollected);
    return {
      todaySales,
      invoiceCount: baseDashboard.invoiceCount + activeInvoices.length,
      cancelledCount: memory.invoices.filter((invoice) => invoice.status === "CANCELLED").length,
      lowStock: products.filter((product) => product.stock <= product.reorderPoint).length,
      gstCollected,
      gstPaid: memory.gstPayments.reduce((sum, payment) => sum + payment.amount, 0),
    };
  }
  const result = await pg.query(`
    select
      coalesce(sum(grand_total), 0)::numeric as today_sales,
      count(*)::int as invoice_count,
      coalesce(sum(tax), 0)::numeric as gst_collected
    from invoices
    where created_at::date = current_date
  `);
  return {
    todaySales: Number(result.rows[0].today_sales) + baseDashboard.todaySales,
    invoiceCount: Number(result.rows[0].invoice_count) + baseDashboard.invoiceCount,
    lowStock: products.filter((product) => product.stock <= product.reorderPoint).length,
    gstCollected: Number(result.rows[0].gst_collected) + baseDashboard.gstCollected,
    gstPaid: 0,
    cancelledCount: 0,
  };
}

async function nextPostgresInvoiceOffset() {
  const result = await pg.query("select count(*)::int as count from invoices");
  return result.rows[0].count;
}

async function createInvoice(payload) {
  const invoiceNo = `INV-${1001 + (pg ? await nextPostgresInvoiceOffset() : memory.invoices.length)}`;
  if (!pg) {
    const invoice = { id: memory.invoices.length + 1, invoiceNo, status: "SAVED", ...payload, createdAt: new Date().toISOString() };
    memory.invoices.push(invoice);
    for (const line of payload.lines) {
      const product = memory.products.find((item) => item.id === line.productId);
      if (product) product.stock = Math.max(0, product.stock - line.qty);
    }
    saveMemoryDatabase();
    return invoiceNo;
  }
  const client = await pg.connect();
  try {
    await client.query("begin");
    const invoice = await client.query(
      `insert into invoices
        (invoice_no, customer_id, payment_mode, subtotal, tax, discount, grand_total)
       values ($1, $2, $3, $4, $5, $6, $7)
       returning id`,
      [invoiceNo, payload.customerId, payload.paymentMode, payload.subtotal, payload.tax, payload.discount, payload.grandTotal],
    );
    for (const line of payload.lines) {
      await client.query(
        `insert into invoice_lines
          (invoice_id, product_id, product_name, barcode, batch, qty, rate, gst_rate, discount, line_total)
         values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`,
        [
          invoice.rows[0].id,
          line.productId,
          line.name,
          line.barcode,
          line.batch,
          line.qty,
          line.rate,
          line.gstRate,
          line.discount,
          line.qty * line.rate * (1 + line.gstRate / 100) - line.discount,
        ],
      );
      await client.query("update products set stock = greatest(stock - $1, 0) where id = $2", [line.qty, line.productId]);
    }
    await client.query("commit");
    return invoiceNo;
  } catch (error) {
    await client.query("rollback");
    throw error;
  } finally {
    client.release();
  }
}

function listRecentInvoices() {
  return memory.invoices
    .slice()
    .reverse()
    .slice(0, 20)
    .map((invoice) => ({
      invoiceNo: invoice.invoiceNo,
      customerId: invoice.customerId,
      paymentMode: invoice.paymentMode,
      grandTotal: Number(invoice.grandTotal),
      createdAt: invoice.createdAt,
      cancelledAt: invoice.cancelledAt || null,
      status: invoice.status || "SAVED",
      itemCount: invoice.lines.reduce((sum, line) => sum + Number(line.qty), 0),
    }));
}

async function cancelInvoice(invoiceNo, reason = "Customer requested cancellation") {
  if (pg) throw new Error("Invoice cancellation is currently configured for the laptop database.");
  const invoice = memory.invoices.find((item) => item.invoiceNo.toLowerCase() === String(invoiceNo || "").trim().toLowerCase());
  if (!invoice) throw new Error("Invoice number not found in saved laptop bills.");
  if (invoice.status === "CANCELLED") throw new Error(`${invoice.invoiceNo} is already cancelled.`);
  invoice.status = "CANCELLED";
  invoice.cancelledAt = new Date().toISOString();
  invoice.cancelReason = reason;
  for (const line of invoice.lines) {
    const product = memory.products.find((item) => item.id === line.productId || item.barcode === line.barcode);
    if (product) product.stock += Number(line.qty);
  }
  saveMemoryDatabase();
  return {
    invoiceNo: invoice.invoiceNo,
    status: invoice.status,
    cancelledAt: invoice.cancelledAt,
    reason: invoice.cancelReason,
    restoredItems: invoice.lines.map((line) => ({ name: line.name, qty: Number(line.qty), barcode: line.barcode })),
  };
}

function quantityNearWord(lower, word, fallback) {
  const index = lower.indexOf(word);
  if (index < 0) return fallback;
  const before = lower.slice(Math.max(0, index - 34), index);
  const beforeNumbers = [...before.matchAll(/\b(\d+)\b/g)];
  if (beforeNumbers.length) return Number(beforeNumbers[beforeNumbers.length - 1][1]);
  const after = lower.slice(index + word.length, index + word.length + 24);
  const afterNumber = after.match(/\b(\d+)\b/);
  return Number(afterNumber?.[1] || fallback);
}

function normalizeSpokenNumbers(text) {
  const replacements = [
    ["one", "1"],
    ["two", "2"],
    ["three", "3"],
    ["four", "4"],
    ["five", "5"],
    ["ek", "1"],
    ["do", "2"],
    ["teen", "3"],
    ["char", "4"],
    ["paanch", "5"],
    ["oru", "1"],
    ["rendu", "2"],
    ["moonu", "3"],
    ["naalu", "4"],
    ["anju", "5"],
    ["oka", "1"],
    ["moodu", "3"],
    ["nalugu", "4"],
    ["ondu", "1"],
    ["yeradu", "2"],
  ];
  let normalized = String(text || "").toLowerCase();
  for (const [word, number] of replacements) {
    normalized = normalized.replace(new RegExp(`\\b${word}\\b`, "g"), number);
  }
  return normalized;
}

function parseVoiceText(text, language = "en-IN") {
  const lower = normalizeSpokenNumbers(text);
  const dictionary = [
    ["ram", 1, 1, "Matched RAM alias"],
    ["ddr5", 1, 1, "Matched DDR5 alias"],
    ["ssd 1tb", 2, 1, "Matched NVMe SSD 1TB"],
    ["nvme", 2, 1, "Matched NVMe alias"],
    ["motherboard", 3, 1, "Matched motherboard alias"],
    ["board", 3, 1, "Matched board alias"],
    ["mouse", 4, 1, "Matched gaming mouse"],
    ["keyboard", 5, 1, "Matched keyboard"],
    ["monitor", 6, 1, "Matched monitor"],
    ["power supply", 7, 1, "Matched SMPS"],
    ["smps", 7, 1, "Matched SMPS"],
    ["cabinet", 8, 1, "Matched cabinet"],
    ["processor", 9, 1, "Matched processor"],
    ["wifi", 10, 1, "Matched WiFi adapter"],
    ["charger", 11, 1, "Matched laptop charger"],
    ["hdmi", 12, 1, "Matched HDMI cable"],
    ["sata", 13, 1, "Matched SATA SSD"],
    ["fan", 14, 1, "Matched cooling fan"],
  ];
  const products = memory.products.length ? memory.products : seed.products;
  const matches = [];
  for (const [word, productId, defaultQty, reason] of dictionary) {
    if (!lower.includes(word) || matches.some((match) => match.productId === productId)) continue;
    const product = products.find((item) => item.id === productId) || seed.products.find((item) => item.id === productId);
    matches.push({
      productId,
      barcode: product.barcode,
      name: product.name,
      qty: quantityNearWord(lower, word, defaultQty),
      reason,
    });
  }
  const customerId = lower.includes("hardish") ? 3 : lower.includes("surya") ? 2 : 1;
  const paymentMode = lower.includes("upi") ? "UPI" : lower.includes("card") ? "Card" : lower.includes("credit") ? "Credit" : "Cash";
  return { matches, customerId, paymentMode, transcript: text, language };
}

function demoPhotoScan(payload = {}) {
  const mode = payload.mode === "purchase" ? "purchase" : "sales";
  const fileName = payload.fileName || "computer-parts-bill.jpg";
  if (mode === "sales") {
    return {
      mode,
      fileName,
      supplier: "Counter camera bill",
      confidence: 97,
      gst: 3832.2,
      amount: 25122.2,
      items: [
        { productId: 1, barcode: "8909001", name: "Corsair Vengeance 16GB DDR5 RAM", qty: 2, mrp: 4890, gstRate: 18 },
        { productId: 2, barcode: "8909002", name: "Samsung 980 NVMe SSD 1TB", qty: 1, mrp: 6490, gstRate: 18 },
        { productId: 4, barcode: "8909004", name: "Logitech G102 Gaming Mouse", qty: 1, mrp: 1695, gstRate: 18 },
      ],
    };
  }
  return {
    mode,
    fileName,
    supplier: "TechZone Distributor",
    confidence: 98,
    gst: 17640,
    amount: 115640,
    items: [
      { barcode: "8909021", name: "Crucial DDR4 8GB RAM", qty: 20, batch: "RAM-DDR4-8-CR", expiry: "Lifetime warranty", cost: 1450, mrp: 1990, gstRate: 18, reorderPoint: 8 },
      { barcode: "8909022", name: "WD Blue NVMe SSD 500GB", qty: 16, batch: "SSD-NVME-500-WD", expiry: "5 year warranty", cost: 2650, mrp: 3490, gstRate: 18, reorderPoint: 6 },
      { barcode: "8909023", name: "USB-C Multiport Hub", qty: 12, batch: "HUB-USBC-7IN1", expiry: "1 year warranty", cost: 1150, mrp: 1790, gstRate: 18, reorderPoint: 5 },
    ],
  };
}

async function confirmPurchaseEntry(entry) {
  if (!pg) {
    memory.purchaseEntries.push({ ...entry, id: memory.purchaseEntries.length + 1, createdAt: new Date().toISOString() });
    for (const item of entry.items || []) {
      const existing = memory.products.find((product) => product.barcode === item.barcode || product.name === item.name);
      if (existing) {
        existing.stock += Number(item.qty);
        existing.batch = item.batch;
        existing.expiry = item.expiry;
        existing.cost = Number(item.cost);
        existing.mrp = Number(item.mrp);
        existing.gstRate = Number(item.gstRate);
      } else {
        memory.products.push({
          id: Math.max(...memory.products.map((product) => product.id)) + 1,
          barcode: item.barcode,
          name: item.name,
          batch: item.batch,
          stock: Number(item.qty),
          reorderPoint: Number(item.reorderPoint || 10),
          mrp: Number(item.mrp),
          cost: Number(item.cost),
          gstRate: Number(item.gstRate),
          expiry: item.expiry,
        });
      }
    }
    saveMemoryDatabase();
    return;
  }
  const client = await pg.connect();
  try {
    await client.query("begin");
    const purchase = await client.query(
      `insert into purchase_entries (supplier, amount, gst, confidence)
       values ($1, $2, $3, $4)
       returning id`,
      [entry.supplier, entry.amount, entry.gst, entry.confidence],
    );
    for (const item of entry.items || []) {
      await client.query(
        `insert into purchase_entry_lines
          (purchase_entry_id, barcode, product_name, batch, qty, cost, mrp, gst_rate, expiry)
         values ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
        [purchase.rows[0].id, item.barcode, item.name, item.batch, item.qty, item.cost, item.mrp, item.gstRate, item.expiry],
      );
      await client.query(
        `insert into products (barcode, name, batch, stock, reorder_point, mrp, cost, gst_rate, expiry)
         values ($1, $2, $3, $4, $5, $6, $7, $8, $9)
         on conflict (barcode) do update set
           stock = products.stock + excluded.stock,
           batch = excluded.batch,
           mrp = excluded.mrp,
           cost = excluded.cost,
           gst_rate = excluded.gst_rate,
           expiry = excluded.expiry`,
        [item.barcode, item.name, item.batch, item.qty, item.reorderPoint || 10, item.mrp, item.cost, item.gstRate, item.expiry],
      );
    }
    await client.query("commit");
  } catch (error) {
    await client.query("rollback");
    throw error;
  } finally {
    client.release();
  }
}

function payGstPocket(payload = {}) {
  const amount = Number(payload.amount || baseDashboard.gstCollected);
  const payment = {
    receiptNo: `GST-${Date.now().toString().slice(-8)}`,
    amount,
    status: "PAID",
    mode: payload.mode || "UPI / GSTN demo",
    paidAt: new Date().toISOString(),
  };
  memory.gstPayments.push(payment);
  saveMemoryDatabase();
  return payment;
}

function buildOwnerSnapshot() {
  const now = Date.now();
  const fourteenDays = 14 * 24 * 60 * 60 * 1000;
  const activeInvoices = memory.invoices.filter((invoice) => invoice.status !== "CANCELLED");
  const recentInvoices = activeInvoices.filter((invoice) => now - new Date(invoice.createdAt).getTime() <= fourteenDays);
  const soldByProduct = new Map();
  for (const invoice of recentInvoices) {
    for (const line of invoice.lines) {
      soldByProduct.set(line.productId, (soldByProduct.get(line.productId) || 0) + Number(line.qty));
    }
  }
  const slowProducts = memory.products
    .filter((product) => (soldByProduct.get(product.id) || 0) === 0 && product.stock > product.reorderPoint)
    .slice(0, 5)
    .map((product) => ({ name: product.name, stock: product.stock, soldLast14Days: 0 }));
  const lowStock = memory.products
    .filter((product) => product.stock <= product.reorderPoint)
    .slice(0, 5)
    .map((product) => ({ name: product.name, stock: product.stock, reorderPoint: product.reorderPoint }));
  const purchaseTotal = memory.purchaseEntries.reduce((sum, entry) => sum + Number(entry.amount || 0), 0);
  const salesTotal = activeInvoices.reduce((sum, invoice) => sum + Number(invoice.grandTotal || 0), baseDashboard.todaySales);
  return {
    date: new Date().toISOString().slice(0, 10),
    salesTotal,
    purchaseTotal,
    savedBills: baseDashboard.invoiceCount + activeInvoices.length,
    cancelledBills: memory.invoices.filter((invoice) => invoice.status === "CANCELLED").length,
    slowProducts,
    lowStock,
  };
}

function localOwnerAdvice(snapshot) {
  const slow = snapshot.slowProducts.length
    ? `Do not reorder ${snapshot.slowProducts.map((item) => item.name).join(", ")} until existing stock moves.`
    : "No major dead-stock risk was detected in the current laptop database.";
  const low = snapshot.lowStock.length
    ? `Restock ${snapshot.lowStock.map((item) => item.name).join(", ")} before the next busy period.`
    : "Current fast-moving stock is above reorder level.";
  return [
    `Today's tracked sales are Rs.${snapshot.salesTotal.toLocaleString("en-IN", { maximumFractionDigits: 0 })} across ${snapshot.savedBills} bills.`,
    `Tracked purchase bills total Rs.${snapshot.purchaseTotal.toLocaleString("en-IN", { maximumFractionDigits: 0 })}. ${slow}`,
    `${low} Use a RAM + SSD + mouse combo to increase average bill value.`,
  ];
}

async function getOwnerAdvice() {
  const snapshot = buildOwnerSnapshot();
  if (!process.env.OPENAI_API_KEY) {
    return { source: "Laptop AI rule engine", snapshot, advice: localOwnerAdvice(snapshot) };
  }
  try {
    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || "gpt-5.2",
        input: `You are an advisor for SINGAPORE SHOPPEE. Give exactly 3 short practical retail actions based only on this JSON snapshot. Mention slow stock and purchasing discipline when relevant. Snapshot: ${JSON.stringify(snapshot)}`,
      }),
    });
    if (!response.ok) throw new Error(`OpenAI request failed: ${response.status}`);
    const result = await response.json();
    const text = String(result.output_text || "").trim();
    const advice = text
      .split(/\n+/)
      .map((line) => line.replace(/^\s*[-*\d.)]+\s*/, "").trim())
      .filter(Boolean)
      .slice(0, 3);
    const finalAdvice = advice.length ? advice : localOwnerAdvice(snapshot);
    memory.adviceHistory.push({ source: "OpenAI Responses API", snapshot, advice: finalAdvice, createdAt: new Date().toISOString() });
    saveMemoryDatabase();
    return { source: "OpenAI Responses API", snapshot, advice: finalAdvice };
  } catch (error) {
    return { source: "Laptop AI rule engine", snapshot, advice: localOwnerAdvice(snapshot), note: error.message };
  }
}

function sendJson(res, data, status = 200) {
  res.writeHead(status, { "Content-Type": "application/json", "Cache-Control": "no-store" });
  res.end(JSON.stringify(data));
}

function sendError(res, error, status = 500) {
  sendJson(res, { error: error.message || String(error) }, status);
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 1_000_000) reject(new Error("Request body too large"));
    });
    req.on("end", () => resolve(body ? JSON.parse(body) : {}));
    req.on("error", reject);
  });
}

function serveStatic(req, res) {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const requested = url.pathname === "/" ? "/index.html" : url.pathname;
  const filePath = path.normalize(path.join(PUBLIC_DIR, requested));
  if (!filePath.startsWith(PUBLIC_DIR)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }
  fs.readFile(filePath, (error, content) => {
    if (error) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }
    const ext = path.extname(filePath);
    const type =
      ext === ".html"
        ? "text/html"
        : ext === ".css"
          ? "text/css"
          : ext === ".js"
            ? "text/javascript"
            : ext === ".svg"
              ? "image/svg+xml"
              : "application/octet-stream";
    res.writeHead(200, { "Content-Type": type });
    res.end(content);
  });
}

async function route(req, res) {
  const url = new URL(req.url, `http://${req.headers.host}`);
  try {
    if (url.pathname === "/api/health") {
      return sendJson(res, {
        ok: true,
        database: pg ? "PostgreSQL" : "Laptop JSON DB",
        message: dbMessage,
        integrations: {
          openaiAdvisor: Boolean(process.env.OPENAI_API_KEY),
          laptopAdvisor: true,
          googleVision: Boolean(process.env.GOOGLE_VISION_API_KEY),
          whatsapp: true,
          gst: true,
        },
      });
    }
    if (url.pathname === "/api/products") return sendJson(res, await getProducts());
    if (url.pathname === "/api/customers") return sendJson(res, await getCustomers());
    if (url.pathname === "/api/dashboard") return sendJson(res, await getDashboard());
    if (url.pathname === "/api/invoices" && req.method === "GET") return sendJson(res, listRecentInvoices());
    if (url.pathname === "/api/ai/voice-invoice" && req.method === "POST") {
      const payload = await readBody(req);
      return sendJson(res, parseVoiceText(payload.text, payload.language));
    }
    if (url.pathname === "/api/ai/owner-advice" && req.method === "POST") {
      return sendJson(res, await getOwnerAdvice());
    }
    if ((url.pathname === "/api/photo-scan" || url.pathname === "/api/purchase-bills/scan") && req.method === "POST") {
      const payload = await readBody(req);
      return sendJson(res, demoPhotoScan(payload));
    }
    if (url.pathname === "/api/purchase-bills/confirm" && req.method === "POST") {
      const payload = await readBody(req);
      await confirmPurchaseEntry(payload);
      return sendJson(res, { products: await getProducts(), dashboard: await getDashboard() });
    }
    if (url.pathname === "/api/gst/pay" && req.method === "POST") {
      const payload = await readBody(req);
      const payment = payGstPocket(payload);
      return sendJson(res, { payment, dashboard: await getDashboard() });
    }
    if (url.pathname === "/api/invoices" && req.method === "POST") {
      const payload = await readBody(req);
      const invoiceNo = await createInvoice(payload);
      return sendJson(res, { invoiceNo, dashboard: await getDashboard(), products: await getProducts() });
    }
    const cancelMatch = url.pathname.match(/^\/api\/invoices\/([^/]+)\/cancel$/);
    if (cancelMatch && req.method === "POST") {
      const payload = await readBody(req);
      const cancellation = await cancelInvoice(decodeURIComponent(cancelMatch[1]), payload.reason);
      return sendJson(res, { cancellation, invoices: listRecentInvoices(), dashboard: await getDashboard(), products: await getProducts() });
    }
    if (url.pathname.startsWith("/api/")) return sendError(res, new Error("Not found"), 404);
    return serveStatic(req, res);
  } catch (error) {
    return sendError(res, error);
  }
}

const ready = connectPostgres().then(() => {
  if (!pg) ensureLocalDatabase();
});

async function handler(req, res) {
  await ready;
  return route(req, res);
}

if (require.main === module) {
  ready.then(() => {
    http.createServer(handler).listen(PORT, () => {
      console.log(`WeBills model running at http://localhost:${PORT}`);
      console.log(dbMessage);
    });
  });
}

module.exports = handler;
