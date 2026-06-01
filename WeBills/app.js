const featureCatalog = [
  ["Voice-to-Invoice", "Mic or typed speech becomes POS lines with customer and payment mode.", "voice", "WORLD FIRST"],
  ["GST Auto-Payment", "GST pocket turns into a paid receipt with compliance status.", "gst", "UNIQUE"],
  ["Daily P&L + WHY Engine", "Owner sees profit, loss reasons, and exact action to take today.", "pnl", "UNIQUE"],
  ["Expense Photo Scanner", "Upload purchase/expense bills and convert them to stock entries.", "scanner", "NEW"],
  ["Loss Autopsy Report", "Find expired, discounted, missing, and slow stock loss causes.", "loss", "WORLD FIRST"],
  ["Weather + Festival Predictor", "Predict demand from rain, salary week, and local events.", "weather", "WORLD FIRST"],
  ["Staff Theft Detector", "Detect voids, drawer mismatch, and suspicious billing patterns.", "theft", "WORLD FIRST"],
  ["Business Health Score", "Score revenue, stock, customer return, and tax health.", "health", "NEW"],
  ["Customer Behaviour AI", "Predict churn, next visit, credit risk, and preferred computer parts.", "customers", "UNIQUE"],
  ["Smart Combo Suggester", "Suggest high-margin accessories during billing.", "combo", "NEW"],
  ["Tax Health Meter", "Track GST and tax thresholds live.", "tax", "UNIQUE"],
  ["Dead Stock Killer", "Find slow-moving inventory and create clearance actions.", "dead", "NEW"],
  ["Nearby Demand Radar", "Surface local demand for missing computer parts.", "demand", "WORLD FIRST"],
  ["Dispute Proof System", "Generate timestamped receipt proof with a hash.", "proof", "NEW"],
  ["Group Buying Network", "Create bulk-buy groups for nearby computer shops.", "group", "WORLD FIRST"],
].map(([name, value, run, badge], index) => ({ id: index + 1, name, value, run, badge }));

const voiceSamples = [
  "Bill SURYA: 2 RAM 16GB, 1 NVMe SSD 1TB, 1 gaming mouse. UPI payment.",
  "Create invoice for HARDISH: 1 motherboard, 1 power supply, 2 cooling fans and 1 HDMI cable. Card payment.",
  "Add 3 laptop chargers, 2 USB keyboards, 1 24 inch monitor and send WhatsApp bill.",
];

const templateNames = {
  thermal: "Thermal POS Bill",
  gst: "A4 GST Tax Invoice",
  mall: "Mall Counter Invoice",
  service: "Service + Parts Invoice",
  wholesale: "Wholesale Tax Bill",
  compact: "Compact 58mm Bill",
  premium: "Premium Electronics Invoice",
  warranty: "Warranty + Serial Invoice",
  delivery: "Delivery Challan",
  quote: "Quotation Proforma",
};

const shopProfiles = {
  singapore: {
    id: "singapore",
    name: "SINGAPORE SHOPPEE",
    username: "singapore",
    password: "webills123",
    area: "Chennai",
    gstin: "33ABCDE1234F1Z5",
  },
  wonders: {
    id: "wonders",
    name: "WONDERS",
    username: "wonders",
    password: "webills123",
    area: "Chennai",
    gstin: "33WONDRS2026Z1",
  },
};

const languageOptions = [
  ["en", "English"],
  ["ta", "Tamil"],
  ["hi", "Hindi"],
  ["te", "Telugu"],
  ["ml", "Malayalam"],
  ["kn", "Kannada"],
];

const i18n = {
  en: {
    appLine: "WeBills Pro by WeBuilds Solution",
    loginTitle: "Open WeBills Pro",
    loginSubtitle: "Select the shop, enter the credentials, and continue to the live POS billing dashboard.",
    loginShopLabel: "Choose shop",
    loginFormTitle: "Secure shop login",
    loginStatus: "Demo ready",
    loginFeatures: "Live features",
    loginShops: "Shop accounts",
    loginAdvisor: "Owner advisor",
    username: "Email or username",
    password: "Password",
    language: "Language",
    openDashboard: "Open POS dashboard",
    loginHelp: "Demo password for both shops: webills123",
    signupDivider: "or create your shop POS",
    signupShopName: "Shop name",
    signupEmail: "Owner email",
    signupPassword: "Create password",
    signupButton: "Create account and open POS",
    signupHelp: "New shops start with default computer-parts stock and the same live features.",
    navPos: "POS Counter",
    navVoice: "Voice Invoice",
    navScanner: "Photo Scan",
    navInventory: "Stock Master",
    navCustomers: "Customers",
    navFeatures: "Live Features",
    navReports: "Reports",
    navCancel: "Cancel Bill",
    navAdvisor: "Owner Advisor",
    navIntegrations: "Integrations",
    newBill: "New bill",
    printPreview: "Print preview",
    saveInvoice: "Save invoice",
    logout: "Logout",
    heroEyebrow: "Scan-first retail workflow",
    heroTitle: "Barcode on top. Product grid below. Print, WhatsApp, GST all in one counter.",
    barcode: "Barcode number",
    barcodePlaceholder: "Scan or type 8909001, 8909002, 8909003...",
    addItem: "Add item",
    currentInvoice: "Current invoice",
    customer: "Customer",
    staff: "Staff",
    checkout: "Checkout",
    billTotal: "Bill total",
    subtotal: "Subtotal",
    gst: "GST",
    gstPocket: "GST pocket",
    discount: "Discount",
    grandTotal: "Grand total",
    whatsappReceiver: "WhatsApp receiver",
    invoiceTemplate: "Invoice template",
    quickAdd: "Quick add computer parts",
    printBill: "Show bill and print",
    sendWhatsApp: "Send bill on WhatsApp",
    payGst: "Pay GST pocket",
    todaySales: "Today sales",
    invoicesSaved: "Invoices saved",
    lowStockAlerts: "Low stock alerts",
    gstCollected: "GST collected",
    titleVoice: "Live voice-to-invoice",
    titleScanner: "Photo scan to bill and inventory",
    titleInventory: "Computer stock intelligence",
    titleCustomers: "Customer behaviour AI",
    titleFeatures: "All 15 ShopOS features live",
    titleReports: "Owner cockpit reports",
    titleCancel: "Cancel bill and return stock",
    titleAdvisor: "Owner AI advisor",
    titleIntegrations: "Live integrations",
    advisorEyebrow: "Daily purchase + sales intelligence",
    advisorTitle: "Owner AI advisor",
    advisorText: "Uses saved bills, purchase scans, cancelled bills, low stock and 14-day movement to generate owner actions.",
    advisorButton: "Generate today's advice",
    advisorListEyebrow: "Owner action list",
    advisorListTitle: "Today's recommendations",
  },
  ta: {
    appLine: "WeBuilds Solution வழங்கும் WeBills Pro",
    loginTitle: "WeBills Pro திறக்கவும்",
    loginSubtitle: "கடையை தேர்வு செய்து, உள்நுழைவு விவரங்களை கொடுத்து POS டாஷ்போர்டுக்கு செல்லவும்.",
    loginShopLabel: "கடை தேர்வு",
    loginFormTitle: "கடை உள்நுழைவு",
    loginStatus: "டெமோ தயார்",
    loginFeatures: "நேரடி அம்சங்கள்",
    loginShops: "கடை கணக்குகள்",
    loginAdvisor: "உரிமையாளர் ஆலோசகர்",
    username: "பயனர் பெயர்",
    password: "கடவுச்சொல்",
    language: "மொழி",
    openDashboard: "POS டாஷ்போர்டு திறக்கவும்",
    loginHelp: "இரு கடைகளுக்கும் டெமோ கடவுச்சொல்: webills123",
    navPos: "POS கவுண்டர்",
    navVoice: "குரல் இன்வாய்ஸ்",
    navScanner: "புகைப்பட ஸ்கேன்",
    navInventory: "ஸ்டாக் மாஸ்டர்",
    navCustomers: "வாடிக்கையாளர்கள்",
    navFeatures: "நேரடி அம்சங்கள்",
    navReports: "அறிக்கைகள்",
    navCancel: "பில் ரத்து",
    navAdvisor: "உரிமையாளர் ஆலோசனை",
    navIntegrations: "இணைப்புகள்",
    newBill: "புதிய பில்",
    printPreview: "பிரிண்ட் முன்னோட்டம்",
    saveInvoice: "இன்வாய்ஸ் சேமி",
    logout: "வெளியேறு",
    heroEyebrow: "ஸ்கேன் முதன்மை விற்பனை வேலை",
    heroTitle: "மேலே பார்கோடு. கீழே பொருள் பட்டியல். பிரிண்ட், WhatsApp, GST ஒரே கவுண்டரில்.",
    barcode: "பார்கோடு எண்",
    barcodePlaceholder: "8909001, 8909002, 8909003 ஸ்கேன்/டைப் செய்யவும்...",
    addItem: "பொருள் சேர்க்க",
    currentInvoice: "தற்போதைய இன்வாய்ஸ்",
    customer: "வாடிக்கையாளர்",
    staff: "பணியாளர்",
    checkout: "செக் அவுட்",
    billTotal: "பில் மொத்தம்",
    subtotal: "துணை மொத்தம்",
    gst: "GST",
    gstPocket: "GST பாக்கெட்",
    discount: "தள்ளுபடி",
    grandTotal: "மொத்தம்",
    whatsappReceiver: "WhatsApp பெறுபவர்",
    invoiceTemplate: "இன்வாய்ஸ் டெம்ப்ளேட்",
    quickAdd: "கம்ப்யூட்டர் பாகங்கள் விரைவு சேர்க்க",
    printBill: "பில் காட்டி பிரிண்ட் செய்ய",
    sendWhatsApp: "WhatsApp-ல் பில் அனுப்பு",
    payGst: "GST பாக்கெட் செலுத்து",
    todaySales: "இன்றைய விற்பனை",
    invoicesSaved: "சேமித்த இன்வாய்ஸ்கள்",
    lowStockAlerts: "குறைந்த ஸ்டாக்",
    gstCollected: "சேகரித்த GST",
    titleVoice: "குரலில் இருந்து இன்வாய்ஸ்",
    titleScanner: "புகைப்பட ஸ்கேன் பில்/ஸ்டாக்",
    titleInventory: "கம்ப்யூட்டர் ஸ்டாக் அறிவு",
    titleCustomers: "வாடிக்கையாளர் AI",
    titleFeatures: "15 ShopOS அம்சங்கள்",
    titleReports: "உரிமையாளர் அறிக்கைகள்",
    titleCancel: "பில் ரத்து மற்றும் ஸ்டாக் திரும்ப",
    titleAdvisor: "உரிமையாளர் AI ஆலோசகர்",
    titleIntegrations: "நேரடி இணைப்புகள்",
    advisorEyebrow: "தினசரி கொள்முதல் + விற்பனை அறிவு",
    advisorTitle: "உரிமையாளர் AI ஆலோசகர்",
    advisorText: "சேமித்த பில்கள், கொள்முதல் ஸ்கேன், ரத்து பில்கள், குறைந்த ஸ்டாக் மற்றும் 14 நாள் இயக்கம் வைத்து ஆலோசனை தரும்.",
    advisorButton: "இன்றைய ஆலோசனை உருவாக்கு",
    advisorListEyebrow: "செயல் பட்டியல்",
    advisorListTitle: "இன்றைய பரிந்துரைகள்",
  },
  hi: {
    appLine: "WeBuilds Solution द्वारा WeBills Pro",
    loginTitle: "WeBills Pro खोलें",
    loginSubtitle: "दुकान चुनें, क्रेडेंशियल डालें, और लाइव POS billing dashboard खोलें.",
    loginShopLabel: "दुकान चुनें",
    loginFormTitle: "Shop login",
    loginStatus: "Demo ready",
    loginFeatures: "Live features",
    loginShops: "Shop accounts",
    loginAdvisor: "Owner advisor",
    username: "Username",
    password: "Password",
    language: "भाषा",
    openDashboard: "POS dashboard खोलें",
    loginHelp: "दोनों दुकानों का demo password: webills123",
    navPos: "POS Counter",
    navVoice: "Voice Invoice",
    navScanner: "Photo Scan",
    navInventory: "Stock Master",
    navCustomers: "Customers",
    navFeatures: "Live Features",
    navReports: "Reports",
    navCancel: "Cancel Bill",
    navAdvisor: "Owner Advisor",
    navIntegrations: "Integrations",
    newBill: "New bill",
    printPreview: "Print preview",
    saveInvoice: "Save invoice",
    logout: "Logout",
    heroEyebrow: "Scan-first retail workflow",
    heroTitle: "ऊपर barcode. नीचे product grid. Print, WhatsApp, GST एक ही counter में.",
    barcode: "Barcode number",
    barcodePlaceholder: "8909001, 8909002, 8909003 scan/type करें...",
    addItem: "Add item",
    currentInvoice: "Current invoice",
    customer: "Customer",
    staff: "Staff",
    checkout: "Checkout",
    billTotal: "Bill total",
    subtotal: "Subtotal",
    gst: "GST",
    gstPocket: "GST pocket",
    discount: "Discount",
    grandTotal: "Grand total",
    whatsappReceiver: "WhatsApp receiver",
    invoiceTemplate: "Invoice template",
    quickAdd: "Quick add computer parts",
    printBill: "Bill दिखाएं और print करें",
    sendWhatsApp: "WhatsApp पर bill भेजें",
    payGst: "GST pocket pay करें",
    todaySales: "Today sales",
    invoicesSaved: "Invoices saved",
    lowStockAlerts: "Low stock alerts",
    gstCollected: "GST collected",
    titleVoice: "Live voice-to-invoice",
    titleScanner: "Photo scan to bill and inventory",
    titleInventory: "Computer stock intelligence",
    titleCustomers: "Customer behaviour AI",
    titleFeatures: "All 15 ShopOS features live",
    titleReports: "Owner cockpit reports",
    titleCancel: "Cancel bill and return stock",
    titleAdvisor: "Owner AI advisor",
    titleIntegrations: "Live integrations",
    advisorEyebrow: "Daily purchase + sales intelligence",
    advisorTitle: "Owner AI advisor",
    advisorText: "Saved bills, purchase scans, cancelled bills, low stock और 14-day movement से owner actions बनते हैं.",
    advisorButton: "आज की advice बनाएं",
    advisorListEyebrow: "Owner action list",
    advisorListTitle: "Today's recommendations",
  },
  te: {
    appLine: "WeBuilds Solution నుండి WeBills Pro",
    loginTitle: "WeBills Pro తెరవండి",
    loginSubtitle: "షాప్ ఎంచుకుని, credentials ఇచ్చి live POS billing dashboard కు వెళ్లండి.",
    loginShopLabel: "షాప్ ఎంచుకోండి",
    loginFormTitle: "Shop login",
    loginStatus: "Demo ready",
    loginFeatures: "Live features",
    loginShops: "Shop accounts",
    loginAdvisor: "Owner advisor",
    username: "Username",
    password: "Password",
    language: "భాష",
    openDashboard: "POS dashboard తెరవండి",
    loginHelp: "రెండు shops demo password: webills123",
    navPos: "POS Counter",
    navVoice: "Voice Invoice",
    navScanner: "Photo Scan",
    navInventory: "Stock Master",
    navCustomers: "Customers",
    navFeatures: "Live Features",
    navReports: "Reports",
    navCancel: "Cancel Bill",
    navAdvisor: "Owner Advisor",
    navIntegrations: "Integrations",
    newBill: "New bill",
    printPreview: "Print preview",
    saveInvoice: "Save invoice",
    logout: "Logout",
    heroEyebrow: "Scan-first retail workflow",
    heroTitle: "పైభాగంలో barcode. కింద product grid. Print, WhatsApp, GST ఒకే counter లో.",
    barcode: "Barcode number",
    barcodePlaceholder: "8909001, 8909002, 8909003 scan/type చేయండి...",
    addItem: "Add item",
    currentInvoice: "Current invoice",
    customer: "Customer",
    staff: "Staff",
    checkout: "Checkout",
    billTotal: "Bill total",
    subtotal: "Subtotal",
    gst: "GST",
    gstPocket: "GST pocket",
    discount: "Discount",
    grandTotal: "Grand total",
    whatsappReceiver: "WhatsApp receiver",
    invoiceTemplate: "Invoice template",
    quickAdd: "Quick add computer parts",
    printBill: "Bill చూపించి print చేయండి",
    sendWhatsApp: "WhatsApp కు bill పంపండి",
    payGst: "GST pocket pay చేయండి",
    todaySales: "Today sales",
    invoicesSaved: "Invoices saved",
    lowStockAlerts: "Low stock alerts",
    gstCollected: "GST collected",
    titleVoice: "Live voice-to-invoice",
    titleScanner: "Photo scan to bill and inventory",
    titleInventory: "Computer stock intelligence",
    titleCustomers: "Customer behaviour AI",
    titleFeatures: "All 15 ShopOS features live",
    titleReports: "Owner cockpit reports",
    titleCancel: "Cancel bill and return stock",
    titleAdvisor: "Owner AI advisor",
    titleIntegrations: "Live integrations",
    advisorEyebrow: "Daily purchase + sales intelligence",
    advisorTitle: "Owner AI advisor",
    advisorText: "Saved bills, purchase scans, cancelled bills, low stock మరియు 14-day movement ఆధారంగా owner actions ఇస్తుంది.",
    advisorButton: "ఈరోజు advice generate చేయండి",
    advisorListEyebrow: "Owner action list",
    advisorListTitle: "Today's recommendations",
  },
  ml: {
    appLine: "WeBuilds Solution ന്റെ WeBills Pro",
    loginTitle: "WeBills Pro തുറക്കുക",
    loginSubtitle: "Shop തിരഞ്ഞെടുക്കുക, credentials നൽകുക, live POS billing dashboard തുറക്കുക.",
    loginShopLabel: "Shop തിരഞ്ഞെടുക്കുക",
    loginFormTitle: "Shop login",
    loginStatus: "Demo ready",
    loginFeatures: "Live features",
    loginShops: "Shop accounts",
    loginAdvisor: "Owner advisor",
    username: "Username",
    password: "Password",
    language: "ഭാഷ",
    openDashboard: "POS dashboard തുറക്കുക",
    loginHelp: "രണ്ട് shops demo password: webills123",
    navPos: "POS Counter",
    navVoice: "Voice Invoice",
    navScanner: "Photo Scan",
    navInventory: "Stock Master",
    navCustomers: "Customers",
    navFeatures: "Live Features",
    navReports: "Reports",
    navCancel: "Cancel Bill",
    navAdvisor: "Owner Advisor",
    navIntegrations: "Integrations",
    newBill: "New bill",
    printPreview: "Print preview",
    saveInvoice: "Save invoice",
    logout: "Logout",
    heroEyebrow: "Scan-first retail workflow",
    heroTitle: "മുകളിൽ barcode. താഴെ product grid. Print, WhatsApp, GST ഒരേ counter-ൽ.",
    barcode: "Barcode number",
    barcodePlaceholder: "8909001, 8909002, 8909003 scan/type ചെയ്യുക...",
    addItem: "Add item",
    currentInvoice: "Current invoice",
    customer: "Customer",
    staff: "Staff",
    checkout: "Checkout",
    billTotal: "Bill total",
    subtotal: "Subtotal",
    gst: "GST",
    gstPocket: "GST pocket",
    discount: "Discount",
    grandTotal: "Grand total",
    whatsappReceiver: "WhatsApp receiver",
    invoiceTemplate: "Invoice template",
    quickAdd: "Quick add computer parts",
    printBill: "Bill കാണിച്ച് print ചെയ്യുക",
    sendWhatsApp: "WhatsApp-ൽ bill അയയ്ക്കുക",
    payGst: "GST pocket pay ചെയ്യുക",
    todaySales: "Today sales",
    invoicesSaved: "Invoices saved",
    lowStockAlerts: "Low stock alerts",
    gstCollected: "GST collected",
    titleVoice: "Live voice-to-invoice",
    titleScanner: "Photo scan to bill and inventory",
    titleInventory: "Computer stock intelligence",
    titleCustomers: "Customer behaviour AI",
    titleFeatures: "All 15 ShopOS features live",
    titleReports: "Owner cockpit reports",
    titleCancel: "Cancel bill and return stock",
    titleAdvisor: "Owner AI advisor",
    titleIntegrations: "Live integrations",
    advisorEyebrow: "Daily purchase + sales intelligence",
    advisorTitle: "Owner AI advisor",
    advisorText: "Saved bills, purchase scans, cancelled bills, low stock, 14-day movement ഉപയോഗിച്ച് owner actions നൽകും.",
    advisorButton: "ഇന്നത്തെ advice generate ചെയ്യുക",
    advisorListEyebrow: "Owner action list",
    advisorListTitle: "Today's recommendations",
  },
  kn: {
    appLine: "WeBuilds Solution ನ WeBills Pro",
    loginTitle: "WeBills Pro ತೆರೆಯಿರಿ",
    loginSubtitle: "Shop ಆಯ್ಕೆ ಮಾಡಿ, credentials ಹಾಕಿ, live POS billing dashboard ತೆರೆಯಿರಿ.",
    loginShopLabel: "Shop ಆಯ್ಕೆ",
    loginFormTitle: "Shop login",
    loginStatus: "Demo ready",
    loginFeatures: "Live features",
    loginShops: "Shop accounts",
    loginAdvisor: "Owner advisor",
    username: "Username",
    password: "Password",
    language: "ಭಾಷೆ",
    openDashboard: "POS dashboard ತೆರೆಯಿರಿ",
    loginHelp: "ಎರಡು shops demo password: webills123",
    navPos: "POS Counter",
    navVoice: "Voice Invoice",
    navScanner: "Photo Scan",
    navInventory: "Stock Master",
    navCustomers: "Customers",
    navFeatures: "Live Features",
    navReports: "Reports",
    navCancel: "Cancel Bill",
    navAdvisor: "Owner Advisor",
    navIntegrations: "Integrations",
    newBill: "New bill",
    printPreview: "Print preview",
    saveInvoice: "Save invoice",
    logout: "Logout",
    heroEyebrow: "Scan-first retail workflow",
    heroTitle: "ಮೇಲೆ barcode. ಕೆಳಗೆ product grid. Print, WhatsApp, GST ಒಂದೇ counter ನಲ್ಲಿ.",
    barcode: "Barcode number",
    barcodePlaceholder: "8909001, 8909002, 8909003 scan/type ಮಾಡಿ...",
    addItem: "Add item",
    currentInvoice: "Current invoice",
    customer: "Customer",
    staff: "Staff",
    checkout: "Checkout",
    billTotal: "Bill total",
    subtotal: "Subtotal",
    gst: "GST",
    gstPocket: "GST pocket",
    discount: "Discount",
    grandTotal: "Grand total",
    whatsappReceiver: "WhatsApp receiver",
    invoiceTemplate: "Invoice template",
    quickAdd: "Quick add computer parts",
    printBill: "Bill ತೋರಿಸಿ print ಮಾಡಿ",
    sendWhatsApp: "WhatsApp ಗೆ bill ಕಳುಹಿಸಿ",
    payGst: "GST pocket pay ಮಾಡಿ",
    todaySales: "Today sales",
    invoicesSaved: "Invoices saved",
    lowStockAlerts: "Low stock alerts",
    gstCollected: "GST collected",
    titleVoice: "Live voice-to-invoice",
    titleScanner: "Photo scan to bill and inventory",
    titleInventory: "Computer stock intelligence",
    titleCustomers: "Customer behaviour AI",
    titleFeatures: "All 15 ShopOS features live",
    titleReports: "Owner cockpit reports",
    titleCancel: "Cancel bill and return stock",
    titleAdvisor: "Owner AI advisor",
    titleIntegrations: "Live integrations",
    advisorEyebrow: "Daily purchase + sales intelligence",
    advisorTitle: "Owner AI advisor",
    advisorText: "Saved bills, purchase scans, cancelled bills, low stock ಮತ್ತು 14-day movement ಬಳಸಿ owner actions ಕೊಡುತ್ತದೆ.",
    advisorButton: "ಇಂದಿನ advice generate ಮಾಡಿ",
    advisorListEyebrow: "Owner action list",
    advisorListTitle: "Today's recommendations",
  },
};

function readCustomShops() {
  try {
    const parsed = JSON.parse(localStorage.getItem("webills-custom-shops") || "{}");
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

const state = {
  products: [],
  customers: [],
  invoices: [],
  lines: [],
  paymentMode: "Cash",
  dashboard: { todaySales: 0, invoiceCount: 0, lowStock: 0, gstCollected: 0, gstPaid: 0 },
  activeFeature: 1,
  scanMode: "sales",
  scanDraft: null,
  lastInvoiceNo: "INV-1001",
  lastFeatureOutput: "Ready. Select a module and run its live demo.",
  lastGstPayment: null,
  activeReceiptType: "invoice",
  shopId: localStorage.getItem("webills-shop") || "singapore",
  pendingLoginShop: localStorage.getItem("webills-shop") || "singapore",
  language: localStorage.getItem("webills-language") || "en",
  authenticated: false,
  customShops: readCustomShops(),
};

const els = {
  addBarcode: document.querySelector("#addBarcode"),
  appLanguage: document.querySelector("#appLanguage"),
  appLayout: document.querySelector("#appLayout"),
  barcodeInput: document.querySelector("#barcodeInput"),
  billRows: document.querySelector("#billRows"),
  billStatus: document.querySelector("#billStatus"),
  billUpload: document.querySelector("#billUpload"),
  blueprintList: document.querySelector("#blueprintList"),
  cancelInvoice: document.querySelector("#cancelInvoice"),
  cancelInvoiceNo: document.querySelector("#cancelInvoiceNo"),
  cancelReason: document.querySelector("#cancelReason"),
  cancelResult: document.querySelector("#cancelResult"),
  cancelStatus: document.querySelector("#cancelStatus"),
  closeReceipt: document.querySelector("#closeReceipt"),
  confirmInventory: document.querySelector("#confirmInventory"),
  customerInsights: document.querySelector("#customerInsights"),
  customerRows: document.querySelector("#customerRows"),
  customerSelect: document.querySelector("#customerSelect"),
  dbHint: document.querySelector("#dbHint"),
  dbMode: document.querySelector("#dbMode"),
  discountTotal: document.querySelector("#discountTotal"),
  featureBoard: document.querySelector("#featureBoard"),
  featureDetail: document.querySelector("#featureDetail"),
  featureDots: document.querySelector("#featureDots"),
  featureNext: document.querySelector("#featureNext"),
  featurePrev: document.querySelector("#featurePrev"),
  featureProgress: document.querySelector("#featureProgress"),
  grandTotal: document.querySelector("#grandTotal"),
  gstCollected: document.querySelector("#gstCollected"),
  gstPocket: document.querySelector("#gstPocket"),
  healthScore: document.querySelector("#healthScore"),
  brandShopName: document.querySelector("#brandShopName"),
  inventoryRows: document.querySelector("#inventoryRows"),
  inventorySearch: document.querySelector("#inventorySearch"),
  invoiceCount: document.querySelector("#invoiceCount"),
  invoiceHistory: document.querySelector("#invoiceHistory"),
  invoiceNo: document.querySelector("#invoiceNo"),
  loginFormTitle: document.querySelector("#loginFormTitle"),
  loginKicker: document.querySelector("#loginKicker"),
  loginLanguage: document.querySelector("#loginLanguage"),
  loginMessage: document.querySelector("#loginMessage"),
  loginPassword: document.querySelector("#loginPassword"),
  loginScreen: document.querySelector("#loginScreen"),
  loginShopCards: document.querySelector("#loginShopCards"),
  loginShopLabel: document.querySelector("#loginShopLabel"),
  loginStatAdvisor: document.querySelector("#loginStatAdvisor"),
  loginStatFeatures: document.querySelector("#loginStatFeatures"),
  loginStatShops: document.querySelector("#loginStatShops"),
  loginStatus: document.querySelector("#loginStatus"),
  loginSubmit: document.querySelector("#loginSubmit"),
  loginSubtitle: document.querySelector("#loginSubtitle"),
  loginTitle: document.querySelector("#loginTitle"),
  loginUsername: document.querySelector("#loginUsername"),
  logoutButton: document.querySelector("#logoutButton"),
  lowStock: document.querySelector("#lowStock"),
  micOrb: document.querySelector("#micOrb"),
  modalImage: document.querySelector("#modalImage"),
  modalPrint: document.querySelector("#modalPrint"),
  modalWhatsApp: document.querySelector("#modalWhatsApp"),
  newBill: document.querySelector("#newBill"),
  parseVoice: document.querySelector("#parseVoice"),
  payGst: document.querySelector("#payGst"),
  printBill: document.querySelector("#printBill"),
  printBillTop: document.querySelector("#printBillTop"),
  quickProducts: document.querySelector("#quickProducts"),
  receiptContent: document.querySelector("#receiptContent"),
  receiptModal: document.querySelector("#receiptModal"),
  reportActions: document.querySelector("#reportActions"),
  reportCogs: document.querySelector("#reportCogs"),
  reportProfit: document.querySelector("#reportProfit"),
  reportRevenue: document.querySelector("#reportRevenue"),
  saveBill: document.querySelector("#saveBill"),
  scanMode: document.querySelector("#scanMode"),
  scanPurchaseBill: document.querySelector("#scanPurchaseBill"),
  scanResults: document.querySelector("#scanResults"),
  scanStatus: document.querySelector("#scanStatus"),
  shareBill: document.querySelector("#shareBill"),
  splash: document.querySelector("#splash"),
  startVoice: document.querySelector("#startVoice"),
  signupEmail: document.querySelector("#signupEmail"),
  signupMessage: document.querySelector("#signupMessage"),
  signupPassword: document.querySelector("#signupPassword"),
  signupShopName: document.querySelector("#signupShopName"),
  signupSubmit: document.querySelector("#signupSubmit"),
  subtotal: document.querySelector("#subtotal"),
  taxTotal: document.querySelector("#taxTotal"),
  templateSelect: document.querySelector("#templateSelect"),
  todaySales: document.querySelector("#todaySales"),
  topProductLine: document.querySelector("#topProductLine"),
  toast: document.querySelector("#toast"),
  uploadPreview: document.querySelector("#uploadPreview"),
  viewTitle: document.querySelector("#viewTitle"),
  advisorMetrics: document.querySelector("#advisorMetrics"),
  advisorResults: document.querySelector("#advisorResults"),
  advisorSource: document.querySelector("#advisorSource"),
  runAdvisor: document.querySelector("#runAdvisor"),
  voiceLanguage: document.querySelector("#voiceLanguage"),
  voiceResult: document.querySelector("#voiceResult"),
  voiceSample: document.querySelector("#voiceSample"),
  voiceStatus: document.querySelector("#voiceStatus"),
  voiceSupport: document.querySelector("#voiceSupport"),
  voiceText: document.querySelector("#voiceText"),
  whatsappRecipient: document.querySelector("#whatsappRecipient"),
  whyBox: document.querySelector("#whyBox"),
};

const titles = {
  pos: "SINGAPORE SHOPPEE POS",
  voice: "Live voice-to-invoice",
  scanner: "Photo scan to bill and inventory",
  inventory: "Computer stock intelligence",
  customers: "Customer behaviour AI",
  features: "All 15 ShopOS features live",
  reports: "Owner cockpit reports",
  cancel: "Cancel bill and return stock",
  advisor: "Owner AI advisor",
  integrations: "Live integrations",
};

const viewTitleKeys = {
  voice: "titleVoice",
  scanner: "titleScanner",
  inventory: "titleInventory",
  customers: "titleCustomers",
  features: "titleFeatures",
  reports: "titleReports",
  cancel: "titleCancel",
  advisor: "titleAdvisor",
  integrations: "titleIntegrations",
};

const navTitleKeys = {
  pos: "navPos",
  voice: "navVoice",
  scanner: "navScanner",
  inventory: "navInventory",
  customers: "navCustomers",
  features: "navFeatures",
  reports: "navReports",
  cancel: "navCancel",
  advisor: "navAdvisor",
  integrations: "navIntegrations",
};

function t(key) {
  return i18n[state.language]?.[key] || i18n.en[key] || key;
}

function allShopProfiles() {
  return { ...shopProfiles, ...state.customShops };
}

function activeShop() {
  return allShopProfiles()[state.shopId] || shopProfiles.singapore;
}

function pendingShop() {
  return allShopProfiles()[state.pendingLoginShop] || shopProfiles.singapore;
}

function shopPosTitle() {
  return `${activeShop().name} POS`;
}

function setText(selector, text) {
  const element = document.querySelector(selector);
  if (element) element.textContent = text;
}

function saveCustomShops() {
  localStorage.setItem("webills-custom-shops", JSON.stringify(state.customShops));
}

function slugifyShopId(value) {
  const base = String(value || "shop").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "shop";
  let id = `custom-${base}`;
  let suffix = 2;
  while (allShopProfiles()[id]) {
    id = `custom-${base}-${suffix}`;
    suffix += 1;
  }
  return id;
}

function setLabel(forId, text) {
  const element = document.querySelector(`label[for="${forId}"]`);
  if (element) element.textContent = text;
}

function titleFor(viewId) {
  if (viewId === "pos") return shopPosTitle();
  const key = viewTitleKeys[viewId];
  return key ? t(key) : titles[viewId] || "WeBills Pro";
}

function currentViewId() {
  return document.querySelector(".view.active")?.id || "pos";
}

function syncLanguageControls() {
  [els.appLanguage, els.loginLanguage].forEach((select) => {
    if (select) select.value = state.language;
  });
  document.body.dataset.language = state.language;
  document.documentElement.lang = state.language === "en" ? "en" : state.language;
}

function applyBranding() {
  const shop = activeShop();
  document.body.dataset.shop = shop.id;
  els.brandShopName.textContent = shop.name;
  els.topProductLine.textContent = t("appLine");
  els.viewTitle.textContent = titleFor(currentViewId());
}

function applyLanguage() {
  syncLanguageControls();
  setText("#loginKicker", t("appLine"));
  setText("#loginTitle", t("loginTitle"));
  setText("#loginSubtitle", t("loginSubtitle"));
  setText("#loginShopLabel", t("loginShopLabel"));
  setText("#loginFormTitle", t("loginFormTitle"));
  setText("#loginStatus", t("loginStatus"));
  setText("#loginStatFeatures", t("loginFeatures"));
  setText("#loginStatShops", t("loginShops"));
  setText("#loginStatAdvisor", t("loginAdvisor"));
  setText("#loginUsernameLabel", t("username"));
  setText("#loginPasswordLabel", t("password"));
  setText("#loginLanguageLabel", t("language"));
  setText("#loginSubmit", t("openDashboard"));
  setText("#loginMessage", t("loginHelp"));
  setText(".signup-divider span", t("signupDivider"));
  setLabel("signupShopName", t("signupShopName"));
  setLabel("signupEmail", t("signupEmail"));
  setLabel("signupPassword", t("signupPassword"));
  setText("#signupSubmit", t("signupButton"));
  setText("#signupMessage", t("signupHelp"));

  document.querySelectorAll("[data-view]").forEach((button) => {
    const marker = button.querySelector("span")?.textContent || "";
    button.innerHTML = `<span>${escapeHtml(marker)}</span>${escapeHtml(t(navTitleKeys[button.dataset.view]))}`;
  });

  els.newBill.textContent = t("newBill");
  els.printBillTop.textContent = t("printPreview");
  els.saveBill.textContent = t("saveInvoice");
  els.logoutButton.textContent = t("logout");
  setText(".counter-copy .eyebrow", t("heroEyebrow"));
  setText(".counter-copy h2", t("heroTitle"));
  setLabel("barcodeInput", t("barcode"));
  els.barcodeInput.placeholder = t("barcodePlaceholder");
  els.addBarcode.textContent = t("addItem");
  setText(".bill-meta .eyebrow", t("currentInvoice"));
  setLabel("customerSelect", t("customer"));
  setLabel("staffSelect", t("staff"));
  setText(".checkout-panel .eyebrow", t("checkout"));
  setText(".checkout-panel h2", t("billTotal"));
  setText(".total-stack div:nth-child(1) span", t("subtotal"));
  setText(".total-stack div:nth-child(2) span", t("gst"));
  setText(".total-stack div:nth-child(3) span", t("gstPocket"));
  setText(".total-stack div:nth-child(4) span", t("discount"));
  setText(".grand-total span", t("grandTotal"));
  setLabel("whatsappRecipient", t("whatsappReceiver"));
  setLabel("templateSelect", t("invoiceTemplate"));
  setText(".quick-products .eyebrow", t("quickAdd"));
  els.printBill.textContent = t("printBill");
  els.shareBill.textContent = t("sendWhatsApp");
  els.payGst.textContent = t("payGst");
  const signalLabels = document.querySelectorAll(".signal-strip article span");
  [t("todaySales"), t("invoicesSaved"), t("lowStockAlerts"), t("gstCollected")].forEach((label, index) => {
    if (signalLabels[index]) signalLabels[index].textContent = label;
  });
  setText("#advisor .advisor-hero .eyebrow", t("advisorEyebrow"));
  setText("#advisor .advisor-hero h2", t("advisorTitle"));
  setText("#advisor .advisor-hero .muted", t("advisorText"));
  els.runAdvisor.textContent = t("advisorButton");
  setText("#advisor .report-grid > .panel:nth-child(2) .eyebrow", t("advisorListEyebrow"));
  setText("#advisor .report-grid > .panel:nth-child(2) h2", t("advisorListTitle"));
  applyBranding();
}

function setLanguage(language) {
  if (!i18n[language]) return;
  state.language = language;
  localStorage.setItem("webills-language", language);
  applyLanguage();
}

function selectLoginShop(shopId) {
  if (!allShopProfiles()[shopId]) return;
  state.pendingLoginShop = shopId;
  localStorage.setItem("webills-shop", shopId);
  const shop = pendingShop();
  document.body.dataset.shop = shop.id;
  els.loginUsername.value = shop.username;
  els.loginPassword.value = shop.password;
  document.querySelectorAll("[data-login-shop]").forEach((button) => button.classList.toggle("active", button.dataset.loginShop === shopId));
  els.loginStatus.textContent = t("loginStatus");
  els.loginMessage.textContent = `${t("loginHelp")} | ${shop.name}`;
}

function showLogin() {
  state.authenticated = false;
  els.appLayout.classList.add("locked");
  els.loginScreen.classList.remove("hide");
  selectLoginShop(state.pendingLoginShop);
}

function showApp() {
  state.authenticated = true;
  els.loginScreen.classList.add("hide");
  els.appLayout.classList.remove("locked");
  applyBranding();
  switchView("pos");
  setTimeout(() => els.barcodeInput.focus(), 80);
}

function login() {
  const username = els.loginUsername.value.trim().toLowerCase();
  const password = els.loginPassword.value;
  const shop = Object.values(allShopProfiles()).find((profile) => profile.username === username && profile.password === password);
  if (!shop) {
    els.loginMessage.textContent = "Login failed. Use singapore/webills123, wonders/webills123, or create your own shop account.";
    els.loginStatus.textContent = "Check login";
    return;
  }
  state.shopId = shop.id;
  state.pendingLoginShop = shop.id;
  localStorage.setItem("webills-shop", shop.id);
  els.loginStatus.textContent = "Opening";
  showApp();
  showToast(`${shop.name} login opened.`);
}

function createCustomShopAccount() {
  const shopName = els.signupShopName.value.trim();
  const email = els.signupEmail.value.trim().toLowerCase();
  const password = els.signupPassword.value;
  if (shopName.length < 2) {
    els.signupMessage.textContent = "Enter the shop name first.";
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    els.signupMessage.textContent = "Enter a valid owner email.";
    return;
  }
  if (password.length < 6) {
    els.signupMessage.textContent = "Password must be at least 6 characters.";
    return;
  }
  const duplicate = Object.values(allShopProfiles()).find((profile) => profile.username === email);
  if (duplicate) {
    els.signupMessage.textContent = "This email already has a shop account. Use login above.";
    return;
  }
  const id = slugifyShopId(shopName);
  const shop = {
    id,
    name: shopName.toUpperCase(),
    username: email,
    password,
    area: "Online / Local shop",
    gstin: `GST-DEMO-${String(Date.now()).slice(-6)}`,
  };
  state.customShops[id] = shop;
  saveCustomShops();
  state.shopId = id;
  state.pendingLoginShop = id;
  localStorage.setItem("webills-shop", id);
  els.loginUsername.value = email;
  els.loginPassword.value = password;
  els.signupMessage.textContent = `${shop.name} created. Default computer-parts stock is ready.`;
  els.loginStatus.textContent = "Account created";
  showApp();
  showToast(`${shop.name} POS account created.`);
}

function logout() {
  showLogin();
  showToast("Logged out. Choose a shop to continue.");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function money(value) {
  return `Rs.${Number(value || 0).toLocaleString("en-IN", { maximumFractionDigits: 2 })}`;
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("show");
  clearTimeout(showToast.timeout);
  showToast.timeout = setTimeout(() => els.toast.classList.remove("show"), 3000);
}

async function api(path, options = {}) {
  const response = await fetch(path, { headers: { "Content-Type": "application/json" }, ...options });
  if (!response.ok) {
    const payload = await response.json().catch(() => ({}));
    throw new Error(payload.error || `Request failed: ${response.status}`);
  }
  return response.json();
}

function totals() {
  const subtotal = state.lines.reduce((sum, line) => sum + line.qty * line.rate, 0);
  const tax = state.lines.reduce((sum, line) => sum + line.qty * line.rate * (line.gstRate / 100), 0);
  const discount = state.lines.reduce((sum, line) => sum + line.discount, 0);
  return { subtotal, tax, discount, grand: subtotal + tax - discount };
}

function renderTotals() {
  const bill = totals();
  els.subtotal.textContent = money(bill.subtotal);
  els.taxTotal.textContent = money(bill.tax);
  els.gstPocket.textContent = money(bill.tax || Math.max(0, state.dashboard.gstCollected - state.dashboard.gstPaid));
  els.discountTotal.textContent = money(bill.discount);
  els.grandTotal.textContent = money(bill.grand);
}

function renderBillRows() {
  if (!state.lines.length) {
    els.billRows.innerHTML = `<tr class="empty-row"><td colspan="9">Scan a barcode, speak an order, or upload a photo bill. Products appear here as billing lines.</td></tr>`;
    renderTotals();
    return;
  }
  els.billRows.innerHTML = state.lines
    .map((line, index) => {
      const amount = line.qty * line.rate * (1 + line.gstRate / 100) - line.discount;
      return `
        <tr>
          <td>${index + 1}</td>
          <td><strong>${escapeHtml(line.name)}</strong><small>${escapeHtml(line.warranty || "Warranty tracked")}</small></td>
          <td>${escapeHtml(line.barcode)}</td>
          <td>${escapeHtml(line.batch)}</td>
          <td class="num-col">
            <span class="qty-control">
              <button data-qty="${line.productId}" data-delta="-1" type="button">-</button>
              <span>${line.qty}</span>
              <button data-qty="${line.productId}" data-delta="1" type="button">+</button>
            </span>
          </td>
          <td class="num-col">${money(line.rate)}</td>
          <td class="num-col">${line.gstRate}%</td>
          <td class="num-col"><strong>${money(amount)}</strong></td>
          <td><button class="remove-line" data-remove="${line.productId}" type="button">X</button></td>
        </tr>
      `;
    })
    .join("");
  renderTotals();
}

function inventoryStatus(product) {
  if (product.stock <= product.reorderPoint) return "Low stock";
  if (product.stock > 25) return "Fast mover";
  return "Healthy";
}

function renderInventory(filter = "") {
  const text = filter.trim().toLowerCase();
  const products = state.products.filter((product) =>
    `${product.name} ${product.barcode} ${product.batch}`.toLowerCase().includes(text),
  );
  els.inventoryRows.innerHTML = products
    .map((product) => {
      const status = inventoryStatus(product);
      return `
        <tr>
          <td><strong>${escapeHtml(product.name)}</strong></td>
          <td>${escapeHtml(product.barcode)}</td>
          <td>${escapeHtml(product.batch)}</td>
          <td class="num-col ${product.stock <= product.reorderPoint ? "stock-low" : "stock-ok"}">${product.stock}</td>
          <td class="num-col">${money(product.mrp)}</td>
          <td class="num-col">${money(product.cost)}</td>
          <td>${escapeHtml(product.expiry)}</td>
          <td><span class="status-pill mini">${status}</span></td>
        </tr>
      `;
    })
    .join("");
}

function renderCustomers() {
  els.customerSelect.innerHTML = state.customers
    .map((customer) => `<option value="${customer.id}">${escapeHtml(customer.name)}</option>`)
    .join("");

  els.customerRows.innerHTML = state.customers
    .filter((customer) => customer.id !== 1)
    .map(
      (customer) => `
        <article class="customer-row">
          <span>
            <strong>${escapeHtml(customer.name)}</strong>
            <small>${escapeHtml(customer.phone)} | Credit limit ${money(customer.creditLimit)}</small>
          </span>
          <strong>${customer.whatsappOptIn ? "WhatsApp ready" : "Walk-in"}</strong>
        </article>
      `,
    )
    .join("");

  els.customerInsights.innerHTML = `
    <article><strong>SURYA</strong><span>Usually buys RAM, SSD and cabinet combos. Next visit predicted in 4 days.</span></article>
    <article><strong>HARDISH</strong><span>High-value buyer. Suggest monitor + keyboard + mouse bundle at checkout.</span></article>
    <article><strong>Auto reminder</strong><span>Credit and warranty messages can open WhatsApp with the right bill proof.</span></article>
  `;
}

function renderQuickProducts() {
  els.quickProducts.innerHTML = state.products
    .slice(0, 8)
    .map(
      (product) => `
        <button class="quick-add" data-barcode="${product.barcode}" type="button">
          <span><strong>${escapeHtml(product.name)}</strong><small>${escapeHtml(product.barcode)} | stock ${product.stock}</small></span>
          <strong>${money(product.mrp)}</strong>
        </button>
      `,
    )
    .join("");
}

function renderDashboard() {
  const revenue = Number(state.dashboard.todaySales || 0);
  const cogs = Math.round(revenue * 0.73);
  const profit = Math.max(revenue - cogs, 24900);
  els.todaySales.textContent = money(revenue);
  els.invoiceCount.textContent = state.dashboard.invoiceCount;
  els.lowStock.textContent = state.dashboard.lowStock;
  els.gstCollected.textContent = money(state.dashboard.gstCollected);
  els.reportRevenue.textContent = money(revenue);
  els.reportCogs.textContent = money(cogs);
  els.reportProfit.textContent = money(profit);
  renderTotals();
}

function renderInvoiceHistory() {
  if (!state.invoices.length) {
    els.invoiceHistory.innerHTML = `<article><strong>No saved laptop bills yet</strong><span>Save a POS invoice, then cancel it here by invoice number.</span></article>`;
    return;
  }
  els.invoiceHistory.innerHTML = state.invoices
    .map(
      (invoice) => `
        <button class="invoice-history-row ${invoice.status === "CANCELLED" ? "cancelled" : ""}" data-cancel-fill="${escapeHtml(invoice.invoiceNo)}" type="button">
          <span>
            <strong>${escapeHtml(invoice.invoiceNo)}</strong>
            <small>${new Date(invoice.createdAt).toLocaleString("en-IN")} | ${invoice.itemCount} item(s)</small>
          </span>
          <span>
            <strong>${money(invoice.grandTotal)}</strong>
            <small>${escapeHtml(invoice.status)}</small>
          </span>
        </button>
      `,
    )
    .join("");
}

async function loadInvoices() {
  state.invoices = await api("/api/invoices");
  renderInvoiceHistory();
}

async function cancelSavedInvoice() {
  const invoiceNo = els.cancelInvoiceNo.value.trim();
  if (!invoiceNo) {
    showToast("Enter a saved invoice number first.");
    return;
  }
  els.cancelStatus.textContent = "Processing";
  const result = await api(`/api/invoices/${encodeURIComponent(invoiceNo)}/cancel`, {
    method: "POST",
    body: JSON.stringify({ reason: els.cancelReason.value.trim() || "Customer requested cancellation" }),
  });
  state.invoices = result.invoices;
  state.dashboard = result.dashboard;
  state.products = result.products;
  renderInvoiceHistory();
  renderDashboard();
  renderInventory(els.inventorySearch.value);
  renderQuickProducts();
  els.cancelStatus.textContent = "Stock restored";
  els.cancelResult.innerHTML = `
    <article><strong>${escapeHtml(result.cancellation.invoiceNo)} cancelled</strong><span>${escapeHtml(result.cancellation.reason)} | inventory restored</span></article>
    ${result.cancellation.restoredItems.map((item) => `<article><strong>${escapeHtml(item.name)}</strong><span>+${item.qty} returned to stock | ${escapeHtml(item.barcode)}</span></article>`).join("")}
  `;
  showToast(`${result.cancellation.invoiceNo} cancelled. Products returned to inventory.`);
}

function renderAdvisor(result) {
  els.advisorSource.textContent = result.source;
  const snapshot = result.snapshot || {};
  const sales = Number(snapshot.salesTotal || state.dashboard.todaySales || 0);
  const purchases = Number(snapshot.purchaseTotal || 0);
  const savedBills = Number(snapshot.savedBills || state.dashboard.invoiceCount || 0);
  const cancelledBills = Number(snapshot.cancelledBills || state.invoices.filter((invoice) => invoice.status === "CANCELLED").length || 0);
  const slowProducts = snapshot.slowProducts || [];
  const lowStock = snapshot.lowStock || [];
  const gstPocket = Math.max(0, Number(state.dashboard.gstCollected || 0) - Number(state.dashboard.gstPaid || 0));
  const profitSignal = Math.max(0, sales - purchases);
  const margin = sales ? Math.round((profitSignal / sales) * 100) : 0;
  const maxBar = Math.max(sales, purchases, profitSignal, gstPocket, 1);
  const purchaseDiscipline = purchases > sales ? "Tighten purchase ordering today" : "Purchases are inside the sales runway";

  els.advisorMetrics.innerHTML = `
    <article><span>Tracked sales</span><strong>${money(sales)}</strong><small>${savedBills} saved bills counted</small></article>
    <article><span>Purchase exposure</span><strong>${money(purchases)}</strong><small>${purchaseDiscipline}</small></article>
    <article><span>Profit signal</span><strong>${money(profitSignal)}</strong><small>${margin}% sales-minus-purchase margin</small></article>
    <article><span>GST pocket</span><strong>${money(gstPocket)}</strong><small>Ready for GST receipt payment</small></article>
    <article><span>Stock pressure</span><strong>${lowStock.length}</strong><small>Low stock lines need reorder review</small></article>
    <article><span>Return risk</span><strong>${cancelledBills}</strong><small>Cancelled bills restored to inventory</small></article>
  `;
  const bars = [
    ["Sales", sales, "sales"],
    ["Purchases", purchases, "purchase"],
    ["Profit", profitSignal, "profit"],
    ["GST", gstPocket, "gst"],
  ]
    .map(([label, value, kind]) => {
      const width = Math.max(8, Math.round((Number(value) / maxBar) * 100));
      return `<div class="advisor-bar ${kind}"><span>${label}</span><i style="width:${width}%"></i><strong>${money(value)}</strong></div>`;
    })
    .join("");
  const stockRows = [...slowProducts, ...lowStock].slice(0, 6);
  const stockChart = stockRows.length
    ? stockRows
        .map((item) => {
          const stock = Number(item.stock || 0);
          const width = Math.min(100, Math.max(10, stock * 4));
          const note = item.soldLast14Days === 0 ? "No sale in 14 days" : `Reorder point ${item.reorderPoint || "-"}`;
          return `<div class="stock-advice-row"><span>${escapeHtml(item.name)}</span><i style="width:${width}%"></i><strong>${stock} units</strong><small>${escapeHtml(note)}</small></div>`;
        })
        .join("")
    : `<div class="stock-advice-row"><span>Stock health</span><i style="width:82%"></i><strong>Good</strong><small>No urgent dead-stock issue detected</small></div>`;

  els.advisorResults.innerHTML = `
    <section class="advisor-graph">
      <div class="advisor-section-head">
        <strong>Sales vs purchase graph</strong>
        <span>${escapeHtml(snapshot.date || new Date().toISOString().slice(0, 10))}</span>
      </div>
      ${bars}
    </section>
    <section class="advisor-stock-chart">
      <div class="advisor-section-head">
        <strong>Stock movement diagnosis</strong>
        <span>${slowProducts.length} slow | ${lowStock.length} low</span>
      </div>
      ${stockChart}
    </section>
    <section class="advisor-action-plan">
      ${result.advice
        .map((advice, index) => `<article><b>Action ${index + 1}</b><span>${escapeHtml(advice)}</span></article>`)
        .join("")}
    </section>
  `;
}

async function runOwnerAdvisor() {
  els.advisorSource.textContent = "Analyzing";
  const result = await api("/api/ai/owner-advice", { method: "POST", body: "{}" });
  renderAdvisor(result);
  showToast(`Owner advice generated by ${result.source}.`);
}

function renderFeatureBoard() {
  const feature = featureCatalog.find((item) => item.id === state.activeFeature) || featureCatalog[0];
  els.featureBoard.innerHTML = `
    <article class="feature-slide">
      <b>${String(feature.id).padStart(2, "0")} | ${escapeHtml(feature.badge)}</b>
      <h2>${escapeHtml(feature.name)}</h2>
      <p>${escapeHtml(feature.value)}</p>
      <div class="feature-slide-index">${String(feature.id).padStart(2, "0")}</div>
    </article>
  `;
  els.featureDots.innerHTML = featureCatalog
    .map(
      (item) => `<button class="feature-dot ${item.id === feature.id ? "active" : ""}" data-feature="${item.id}" type="button" aria-label="Open ${escapeHtml(item.name)}">${String(item.id).padStart(2, "0")}</button>`,
    )
    .join("");
  els.featureProgress.textContent = `${String(feature.id).padStart(2, "0")} / ${String(featureCatalog.length).padStart(2, "0")}`;
  renderFeatureDetail();
}

function stepFeature(delta) {
  const total = featureCatalog.length;
  state.activeFeature = ((state.activeFeature - 1 + delta + total) % total) + 1;
  state.lastFeatureOutput = "Ready. Click Run live demo to execute this module.";
  renderFeatureBoard();
}

function featureMetric(feature) {
  const metrics = {
    voice: ["3", "Matched parts"],
    gst: [money(Math.max(totals().tax, state.dashboard.gstCollected - state.dashboard.gstPaid)), "GST pocket"],
    pnl: ["27%", "Margin"],
    scanner: ["98%", "OCR confidence"],
    loss: [money(8420), "Recoverable loss"],
    weather: [money(16500), "Forecast uplift"],
    theft: ["LOW", "Risk score"],
    health: ["89/100", "Health score"],
    customers: ["72%", "Churn risk found"],
    combo: [money(2594), "Combo upsell"],
    tax: ["GREEN", "Tax status"],
    dead: ["9", "Dead units"],
    demand: ["31%", "Local demand lift"],
    proof: ["SHA", "Receipt proof"],
    group: ["42", "Bulk qty"],
  };
  return metrics[feature.run] || ["LIVE", "Ready"];
}

function renderFeatureDetail() {
  const feature = featureCatalog.find((item) => item.id === state.activeFeature) || featureCatalog[0];
  const [value, label] = featureMetric(feature);
  els.featureDetail.innerHTML = `
    <p class="eyebrow">Live ShopOS module</p>
    <h2>${escapeHtml(feature.name)}</h2>
    <p class="muted">${escapeHtml(feature.value)}</p>
    <div class="module-meter">
      <strong>${escapeHtml(value)}</strong>
      <span>${escapeHtml(label)}</span>
    </div>
    <div class="feature-output">${state.lastFeatureOutput}</div>
    <button class="primary-button full" data-run-feature="${feature.run}" type="button">Run live demo</button>
  `;
}

function renderReports(output) {
  els.reportActions.innerHTML =
    output ||
    `
      <article><strong>Loss autopsy</strong><span>Old SATA SSD stock is slow. Bundle with USB enclosure and clear 9 units.</span></article>
      <article><strong>Tax health meter</strong><span>GST pocket is green. Estimated monthly liability ${money(Math.max(totals().tax, 18460))}.</span></article>
      <article><strong>Demand radar</strong><span>Local demand rising for NVMe SSD 1TB and DDR5 RAM 16GB.</span></article>
      <article><strong>Staff theft detector</strong><span>No high-risk void pattern. One round-bill cluster needs review.</span></article>
    `;
}

function renderBlueprintList() {
  els.blueprintList.innerHTML = featureCatalog
    .map(
      (feature) => `<article><strong>${String(feature.id).padStart(2, "0")} ${escapeHtml(feature.name)}</strong><span>${escapeHtml(feature.value)}</span></article>`,
    )
    .join("");
}

function addProduct(product, qty = 1) {
  const existing = state.lines.find((line) => line.productId === product.id);
  if (existing) {
    existing.qty += qty;
  } else {
    state.lines.push({
      productId: product.id,
      name: product.name,
      barcode: product.barcode,
      batch: product.batch,
      warranty: product.expiry,
      qty,
      rate: Number(product.mrp),
      cost: Number(product.cost),
      gstRate: Number(product.gstRate),
      discount: 0,
    });
  }
  els.billStatus.textContent = "Draft";
  renderBillRows();
  showToast(`${product.name} added.`);
}

function addBarcode() {
  const barcode = els.barcodeInput.value.trim();
  const product = state.products.find((item) => item.barcode === barcode);
  if (!product) {
    showToast("Barcode not found in computer stock master.");
    els.barcodeInput.select();
    return;
  }
  addProduct(product);
  els.barcodeInput.value = "";
  els.barcodeInput.focus();
}

function changeQuantity(productId, delta) {
  const line = state.lines.find((item) => item.productId === productId);
  if (!line) return;
  line.qty += delta;
  if (line.qty <= 0) state.lines = state.lines.filter((item) => item.productId !== productId);
  renderBillRows();
}

function removeLine(productId) {
  state.lines = state.lines.filter((item) => item.productId !== productId);
  renderBillRows();
}

function newBill() {
  state.lines = [];
  els.billStatus.textContent = "Draft";
  state.lastInvoiceNo = `INV-${1001 + state.dashboard.invoiceCount}`;
  els.invoiceNo.textContent = state.lastInvoiceNo;
  renderBillRows();
  setTimeout(() => els.barcodeInput.focus(), 50);
}

function selectedCustomer() {
  return state.customers.find((customer) => customer.id === Number(els.customerSelect.value)) || state.customers[0];
}

function setCustomer(customerId) {
  if (state.customers.some((customer) => customer.id === Number(customerId))) {
    els.customerSelect.value = String(customerId);
  }
}

function setPaymentMode(mode) {
  state.paymentMode = mode;
  document.querySelectorAll(".pay-mode").forEach((button) => button.classList.toggle("active", button.dataset.payment === mode));
}

async function saveBill() {
  if (!state.lines.length) {
    showToast("Add at least one product before saving.");
    return;
  }
  const bill = totals();
  const saved = await api("/api/invoices", {
    method: "POST",
    body: JSON.stringify({
      customerId: Number(els.customerSelect.value),
      paymentMode: state.paymentMode,
      subtotal: bill.subtotal,
      tax: bill.tax,
      discount: bill.discount,
      grandTotal: bill.grand,
      lines: state.lines,
    }),
  });
  state.lastInvoiceNo = saved.invoiceNo;
  els.invoiceNo.textContent = saved.invoiceNo;
  els.billStatus.textContent = "Saved";
  state.dashboard = saved.dashboard;
  state.products = saved.products;
  renderDashboard();
  renderInventory(els.inventorySearch.value);
  renderQuickProducts();
  await loadInvoices();
  showToast(`${saved.invoiceNo} saved successfully.`);
}

function receiptBaseText() {
  const customer = selectedCustomer();
  const bill = totals();
  const rows = state.lines
    .map((line) => `${line.name} x ${line.qty} = ${money(line.qty * line.rate * (1 + line.gstRate / 100) - line.discount)}`)
    .join("\n");
  return [
    `${shopPosTitle()} - WeBills Pro by WeBuilds Solution`,
    `Invoice: ${state.lastInvoiceNo}`,
    `Template: ${els.templateSelect.options[els.templateSelect.selectedIndex].text}`,
    `Customer: ${customer?.name || "Walk-in Customer"}`,
    `Payment: ${state.paymentMode}`,
    rows,
    `GST: ${money(bill.tax)}`,
    `Grand Total: ${money(bill.grand)}`,
    "Warranty and serial numbers stored in WeBills.",
  ].join("\n");
}

function receiptHash() {
  return Math.abs(
    receiptBaseText()
      .split("")
      .reduce((a, c) => ((a << 5) - a + c.charCodeAt(0)) | 0, 0),
  )
    .toString(16)
    .toUpperCase();
}

function receiptText() {
  return `${receiptBaseText()}\nDispute hash: ${receiptHash()}\nThank you.`;
}

function receiptRows() {
  return state.lines
    .map(
      (line) => `
        <div class="receipt-row">
          <span>${escapeHtml(line.name)}<small>${line.qty} x ${money(line.rate)} | GST ${line.gstRate}% | ${escapeHtml(line.batch)}</small></span>
          <strong>${money(line.qty * line.rate * (1 + line.gstRate / 100) - line.discount)}</strong>
        </div>
      `,
    )
    .join("");
}

function receiptImagePayload(type = "invoice") {
  const bill = totals();
  const customer = selectedCustomer();
  if (type === "gst") {
    const payment = state.lastGstPayment || {
      receiptNo: `GST-${Date.now().toString().slice(-6)}`,
      status: "PAID",
      amount: Math.max(bill.tax, state.dashboard.gstCollected - state.dashboard.gstPaid),
      mode: "UPI / GSTN demo",
      paidAt: new Date().toISOString(),
    };
    return {
      title: "GST Payment Receipt",
      fileName: `${payment.receiptNo}-webills-gst-receipt.png`,
      message: `${activeShop().name} GST receipt image generated for ${money(payment.amount)}. Receipt ${payment.receiptNo}.`,
      rows: [
        ["Receipt No", payment.receiptNo],
        ["Status", payment.status],
        ["GST amount", money(payment.amount)],
        ["Mode", payment.mode],
        ["Paid at", new Date(payment.paidAt).toLocaleString("en-IN")],
        ["Compliance", "GREEN - stored in WeBills"],
      ],
      items: [],
      total: money(payment.amount),
      hash: payment.receiptNo,
    };
  }

  const template = templateNames[els.templateSelect.value] || "Invoice";
  return {
    title: template,
    fileName: `${state.lastInvoiceNo}-webills-bill-image.png`,
    message: `${activeShop().name} ${template} image generated for ${customer?.name || "Walk-in Customer"}: ${money(bill.grand)}.`,
    rows: [
      ["Invoice", state.lastInvoiceNo],
      ["Customer", customer?.name || "Walk-in Customer"],
      ["Phone", customer?.phone || "-"],
      ["Payment", state.paymentMode],
      ["Date", new Date().toLocaleString("en-IN")],
    ],
    items: state.lines.map((line) => ({
      name: line.name,
      meta: `${line.qty} x ${money(line.rate)} | GST ${line.gstRate}% | ${line.batch}`,
      amount: money(line.qty * line.rate * (1 + line.gstRate / 100) - line.discount),
    })),
    summary: [
      ["Subtotal", money(bill.subtotal)],
      ["GST pocket", money(bill.tax)],
      ["Grand total", money(bill.grand)],
    ],
    total: money(bill.grand),
    hash: receiptHash(),
  };
}

function wrapCanvasText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = String(text).split(/\s+/);
  let line = "";
  for (const word of words) {
    const testLine = line ? `${line} ${word}` : word;
    if (ctx.measureText(testLine).width > maxWidth && line) {
      ctx.fillText(line, x, y);
      line = word;
      y += lineHeight;
    } else {
      line = testLine;
    }
  }
  if (line) {
    ctx.fillText(line, x, y);
    y += lineHeight;
  }
  return y;
}

function makeReceiptImageBlob(type = "invoice") {
  const payload = receiptImagePayload(type);
  const width = 900;
  const itemHeight = payload.items.length ? payload.items.length * 86 : 0;
  const rowHeight = payload.rows.length * 46;
  const summaryHeight = payload.summary ? payload.summary.length * 48 : 0;
  const height = Math.max(820, 330 + rowHeight + itemHeight + summaryHeight + 170);
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "#eef3f5";
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = "#ffffff";
  ctx.shadowColor = "rgba(16, 25, 35, 0.18)";
  ctx.shadowBlur = 28;
  ctx.shadowOffsetY = 14;
  ctx.fillRect(46, 36, width - 92, height - 72);
  ctx.shadowColor = "transparent";

  ctx.fillStyle = "#101923";
  ctx.fillRect(46, 36, width - 92, 126);
  ctx.fillStyle = "#35d196";
  ctx.fillRect(46, 36, 8, 126);
  ctx.fillStyle = "#ffffff";
  ctx.font = "800 34px Segoe UI, Arial";
  ctx.fillText(shopPosTitle(), 82, 90);
  ctx.font = "600 18px Segoe UI, Arial";
  ctx.fillStyle = "#c8d8df";
  ctx.fillText(`WeBills Pro by WeBuilds Solution | GSTIN ${activeShop().gstin} | ${activeShop().area}`, 82, 123);
  ctx.textAlign = "right";
  ctx.font = "800 26px Segoe UI, Arial";
  ctx.fillStyle = "#ffffff";
  ctx.fillText(payload.title, width - 82, 96);
  ctx.textAlign = "left";

  let y = 205;
  ctx.font = "700 18px Segoe UI, Arial";
  for (const [label, value] of payload.rows) {
    ctx.fillStyle = "#65727c";
    ctx.fillText(label, 82, y);
    ctx.textAlign = "right";
    ctx.fillStyle = "#101923";
    ctx.fillText(String(value), width - 82, y);
    ctx.textAlign = "left";
    y += 46;
  }

  if (payload.items.length) {
    y += 12;
    ctx.strokeStyle = "#d8e0dc";
    ctx.beginPath();
    ctx.moveTo(82, y);
    ctx.lineTo(width - 82, y);
    ctx.stroke();
    y += 34;
    ctx.font = "800 20px Segoe UI, Arial";
    ctx.fillStyle = "#101923";
    ctx.fillText("Items", 82, y);
    y += 28;
    for (const item of payload.items) {
      ctx.font = "800 18px Segoe UI, Arial";
      ctx.fillStyle = "#101923";
      y = wrapCanvasText(ctx, item.name, 82, y, 560, 24);
      ctx.font = "600 15px Segoe UI, Arial";
      ctx.fillStyle = "#65727c";
      ctx.fillText(item.meta, 82, y + 4);
      ctx.textAlign = "right";
      ctx.font = "800 18px Segoe UI, Arial";
      ctx.fillStyle = "#101923";
      ctx.fillText(item.amount, width - 82, y + 4);
      ctx.textAlign = "left";
      y += 44;
    }
  }

  if (payload.summary) {
    y += 8;
    ctx.strokeStyle = "#d8e0dc";
    ctx.beginPath();
    ctx.moveTo(82, y);
    ctx.lineTo(width - 82, y);
    ctx.stroke();
    y += 38;
    for (const [label, value] of payload.summary) {
      ctx.font = label === "Grand total" ? "900 25px Segoe UI, Arial" : "700 18px Segoe UI, Arial";
      ctx.fillStyle = label === "Grand total" ? "#101923" : "#65727c";
      ctx.fillText(label, 82, y);
      ctx.textAlign = "right";
      ctx.fillStyle = "#101923";
      ctx.fillText(value, width - 82, y);
      ctx.textAlign = "left";
      y += label === "Grand total" ? 58 : 44;
    }
  } else {
    y += 40;
    ctx.fillStyle = "#101923";
    ctx.font = "900 30px Segoe UI, Arial";
    ctx.fillText("Paid amount", 82, y);
    ctx.textAlign = "right";
    ctx.fillText(payload.total, width - 82, y);
    ctx.textAlign = "left";
    y += 54;
  }

  ctx.fillStyle = "#f3f7f6";
  ctx.fillRect(82, height - 130, width - 164, 62);
  ctx.fillStyle = "#65727c";
  ctx.font = "700 15px Segoe UI, Arial";
  ctx.fillText(type === "gst" ? "GST receipt proof" : "Dispute proof hash", 108, height - 94);
  ctx.textAlign = "right";
  ctx.fillStyle = "#101923";
  ctx.font = "900 18px Segoe UI, Arial";
  ctx.fillText(payload.hash, width - 108, height - 94);
  ctx.textAlign = "left";
  ctx.fillStyle = "#65727c";
  ctx.font = "600 14px Segoe UI, Arial";
  ctx.fillText("Warranty, serial numbers, and receipt proof stored in WeBills.", 82, height - 42);

  return new Promise((resolve) => {
    canvas.toBlob((blob) => resolve({ blob, ...payload }), "image/png", 0.96);
  });
}

function downloadBlob(blob, fileName) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1200);
}

async function downloadReceiptImage(type = state.activeReceiptType) {
  if (type !== "gst" && !state.lines.length) {
    showToast("Add items first to create a bill image.");
    return;
  }
  const image = await makeReceiptImageBlob(type);
  downloadBlob(image.blob, image.fileName);
  showToast(`${type === "gst" ? "GST receipt" : "Bill"} image downloaded.`);
}

function renderReceipt(type = "invoice") {
  const customer = selectedCustomer();
  const bill = totals();
  const template = els.templateSelect.value;
  els.receiptContent.className = `receipt template-${template}`;

  if (type === "gst") {
    const payment = state.lastGstPayment || {
      receiptNo: `GST-${Date.now().toString().slice(-6)}`,
      status: "PAID",
      amount: Math.max(bill.tax, state.dashboard.gstCollected - state.dashboard.gstPaid),
      mode: "UPI / GSTN demo",
      paidAt: new Date().toISOString(),
    };
    els.receiptContent.innerHTML = `
      <h2>GST Payment Receipt</h2>
      <p>${escapeHtml(activeShop().name)} | WeBills GST Pocket</p>
      <hr />
      <div class="receipt-row"><span>Receipt No</span><strong>${escapeHtml(payment.receiptNo)}</strong></div>
      <div class="receipt-row"><span>Status</span><strong>${escapeHtml(payment.status)}</strong></div>
      <div class="receipt-row"><span>GST amount</span><strong>${money(payment.amount)}</strong></div>
      <div class="receipt-row"><span>Mode</span><strong>${escapeHtml(payment.mode)}</strong></div>
      <div class="receipt-row"><span>Paid at</span><strong>${new Date(payment.paidAt).toLocaleString("en-IN")}</strong></div>
      <hr />
      <p>Compliance status changed to green. Receipt stored in WeBills.</p>
    `;
    return;
  }

  els.receiptContent.innerHTML = `
    <h2>${templateNames[template] || "Invoice"}</h2>
    <p>${escapeHtml(shopPosTitle())} | WeBills Pro by WeBuilds Solution</p>
    <p>GSTIN: ${escapeHtml(activeShop().gstin)} | ${escapeHtml(activeShop().area)}</p>
    <hr />
    <div class="receipt-row"><span>Invoice</span><strong>${escapeHtml(state.lastInvoiceNo)}</strong></div>
    <div class="receipt-row"><span>Customer</span><strong>${escapeHtml(customer?.name || "Walk-in")}</strong></div>
    <div class="receipt-row"><span>Phone</span><strong>${escapeHtml(customer?.phone || "-")}</strong></div>
    <div class="receipt-row"><span>Payment</span><strong>${escapeHtml(state.paymentMode)}</strong></div>
    <hr />
    ${receiptRows()}
    <hr />
    <div class="receipt-row"><span>Subtotal</span><strong>${money(bill.subtotal)}</strong></div>
    <div class="receipt-row"><span>GST pocket</span><strong>${money(bill.tax)}</strong></div>
    <div class="receipt-row receipt-total"><span>Total</span><strong>${money(bill.grand)}</strong></div>
    <hr />
    <p>Dispute proof hash: ${receiptHash()}</p>
    <p>Warranty and serial numbers stored in WeBills.</p>
  `;
}

function openReceipt(type = "invoice") {
  if (type !== "gst" && !state.lines.length) {
    showToast("Add items first to show bill.");
    return;
  }
  state.activeReceiptType = type;
  renderReceipt(type);
  els.receiptModal.classList.add("show");
  els.receiptModal.setAttribute("aria-hidden", "false");
}

function closeReceipt() {
  els.receiptModal.classList.remove("show");
  els.receiptModal.setAttribute("aria-hidden", "true");
}

function openWhatsAppText(message) {
  const phone = els.whatsappRecipient.value;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  const opened = window.open(url, "_blank", "noopener,noreferrer");
  if (!opened) window.location.href = url;
}

async function openWhatsApp(type = "invoice") {
  if (type !== "gst" && !state.lines.length) {
    showToast("Add items before sending WhatsApp bill image.");
    return;
  }
  const image = await makeReceiptImageBlob(type);
  const file = new File([image.blob], image.fileName, { type: "image/png" });
  const shareText = `${image.message}\nImage file: ${image.fileName}`;

  if (navigator.canShare && navigator.canShare({ files: [file] })) {
    await navigator.share({ files: [file], title: image.title, text: shareText });
    showToast(`${type === "gst" ? "GST receipt" : "Bill"} image shared.`);
    return;
  }

  downloadBlob(image.blob, image.fileName);
  openWhatsAppText(`${shareText}\nThe bill image has been downloaded. Attach the PNG in WhatsApp.`);
  showToast("Bill image downloaded and WhatsApp opened.");
}

function switchView(viewId) {
  document.querySelectorAll(".view").forEach((view) => view.classList.toggle("active", view.id === viewId));
  document.querySelectorAll("[data-view]").forEach((button) => button.classList.toggle("active", button.dataset.view === viewId));
  els.viewTitle.textContent = titleFor(viewId);
}

async function parseVoice() {
  const result = await api("/api/ai/voice-invoice", {
    method: "POST",
    body: JSON.stringify({ text: els.voiceText.value, language: els.voiceLanguage.value }),
  });
  els.voiceResult.innerHTML = result.matches.length
    ? result.matches
        .map((match) => `<article><strong>${escapeHtml(match.name)} x ${match.qty}</strong><span>${escapeHtml(match.reason)} | ${escapeHtml(match.barcode)}</span></article>`)
        .join("")
    : `<article><strong>No product match</strong><span>Try RAM, SSD, motherboard, mouse, keyboard, monitor, charger, HDMI, SMPS, fan.</span></article>`;
  setCustomer(result.customerId);
  setPaymentMode(result.paymentMode);
  result.matches.forEach((match) => {
    const product = state.products.find((item) => item.id === match.productId);
    if (product) addProduct(product, match.qty);
  });
  els.voiceStatus.textContent = result.matches.length ? "Bill ready" : "No match";
  els.micOrb.classList.remove("listening");
  if (result.matches.length) switchView("pos");
  showToast(result.matches.length ? "Voice order converted to POS lines." : "No products matched the voice text.");
}

function setupVoiceCapture() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    els.voiceSupport.textContent = "Speech recognition is not available here. Type the order and convert it.";
    els.startVoice.disabled = true;
    return;
  }
  els.voiceSupport.textContent = "Microphone can be allowed on localhost. Speak RAM, SSD, motherboard, monitor, mouse, keyboard.";
  const recognition = new SpeechRecognition();
  recognition.lang = els.voiceLanguage.value;
  recognition.interimResults = false;
  recognition.onstart = () => {
    els.voiceStatus.textContent = "Listening";
    els.micOrb.classList.add("listening");
  };
  recognition.onresult = (event) => {
    els.voiceText.value = event.results[0][0].transcript;
    els.voiceStatus.textContent = "Captured";
    els.micOrb.classList.remove("listening");
  };
  recognition.onerror = () => {
    els.voiceStatus.textContent = "Use text";
    els.micOrb.classList.remove("listening");
    showToast("Microphone could not start. Type the order text instead.");
  };
  recognition.onend = () => els.micOrb.classList.remove("listening");
  els.voiceLanguage.addEventListener("change", () => {
    recognition.lang = els.voiceLanguage.value;
    els.voiceStatus.textContent = els.voiceLanguage.options[els.voiceLanguage.selectedIndex].text;
  });
  els.startVoice.addEventListener("click", () => recognition.start());
}

function previewUpload() {
  const file = els.billUpload.files[0];
  if (!file) return;
  if (file.type.startsWith("image/")) {
    const reader = new FileReader();
    reader.onload = () => {
      els.uploadPreview.innerHTML = `<img src="${reader.result}" alt="Uploaded bill preview" /><span>${escapeHtml(file.name)} loaded. Scan can now generate bill lines.</span>`;
    };
    reader.readAsDataURL(file);
  } else {
    els.uploadPreview.innerHTML = `<strong>${escapeHtml(file.name)}</strong><span>PDF loaded. Demo OCR will extract computer-parts bill lines.</span>`;
  }
  els.scanStatus.textContent = "File loaded";
}

async function scanUploadedFile() {
  if (!els.billUpload.files[0]) {
    showToast("Choose a bill photo or PDF first.");
    return;
  }
  const result = await api("/api/photo-scan", {
    method: "POST",
    body: JSON.stringify({ mode: state.scanMode, fileName: els.billUpload.files[0].name }),
  });
  state.scanDraft = result;
  els.scanStatus.textContent = result.mode === "sales" ? "Bill generated" : "Inventory scanned";
  els.confirmInventory.disabled = result.mode === "sales";
  els.confirmInventory.textContent = result.mode === "sales" ? "Purchase mode only" : "Applying stock...";

  if (result.mode === "sales") {
    els.scanResults.innerHTML = `
      <article><strong>${escapeHtml(result.supplier)}</strong><span>OCR confidence ${result.confidence}% | sales bill generated</span></article>
      ${result.items.map((item) => `<article><strong>${escapeHtml(item.name)} x ${item.qty}</strong><span>${escapeHtml(item.barcode)} | ${money(item.mrp)} | added to POS</span></article>`).join("")}
    `;
    result.items.forEach((item) => {
      const product = state.products.find((p) => p.barcode === item.barcode || p.id === item.productId);
      if (product) addProduct(product, item.qty);
    });
    switchView("pos");
    showToast("Uploaded photo converted into POS bill lines.");
    return;
  }

  const previousStock = new Map(state.products.map((product) => [product.barcode, Number(product.stock)]));
  const applied = await api("/api/purchase-bills/confirm", { method: "POST", body: JSON.stringify(result) });
  state.products = applied.products;
  state.dashboard = applied.dashboard;
  renderInventory(els.inventorySearch.value);
  renderQuickProducts();
  renderDashboard();
  state.scanDraft = null;
  els.confirmInventory.disabled = true;
  els.confirmInventory.textContent = "Inventory updated";
  els.scanStatus.textContent = "Inventory updated";

  els.scanResults.innerHTML = `
    <article><strong>${escapeHtml(result.supplier)} stock bill applied</strong><span>OCR confidence ${result.confidence}% | GST ${money(result.gst)} | inventory database updated now</span></article>
    ${result.items
      .map((item) => {
        const product = state.products.find((entry) => entry.barcode === item.barcode || entry.name === item.name);
        const before = previousStock.get(item.barcode) || 0;
        const after = product ? Number(product.stock) : before + Number(item.qty);
        return `<article><strong>${escapeHtml(item.name)} +${item.qty}</strong><span>${escapeHtml(item.barcode)} | stock ${before} -> ${after} | cost ${money(item.cost)} | MRP ${money(item.mrp)}</span></article>`;
      })
      .join("")}
  `;
  showToast("Purchase stock bill uploaded and inventory updated.");
}

async function confirmInventory() {
  if (!state.scanDraft || state.scanDraft.mode === "sales") {
    showToast("Switch to purchase mode and scan first.");
    return;
  }
  const result = await api("/api/purchase-bills/confirm", { method: "POST", body: JSON.stringify(state.scanDraft) });
  state.products = result.products;
  state.dashboard = result.dashboard;
  renderInventory(els.inventorySearch.value);
  renderQuickProducts();
  renderDashboard();
  els.scanStatus.textContent = "Inventory updated";
  showToast("Computer stock, GST purchase entry, and supplier history updated.");
}

async function payGstPocket() {
  const bill = totals();
  const amount = Math.max(bill.tax, state.dashboard.gstCollected - state.dashboard.gstPaid);
  const result = await api("/api/gst/pay", { method: "POST", body: JSON.stringify({ amount, mode: "UPI / GSTN demo" }) });
  state.lastGstPayment = result.payment;
  state.dashboard = result.dashboard;
  renderDashboard();
  openReceipt("gst");
  showToast("GST pocket paid. Receipt generated.");
}

function updateReportOutput(output, why) {
  switchView("reports");
  renderReports(output);
  if (why) els.whyBox.innerHTML = why;
}

function runFeature(run) {
  const outputs = {
    gst: async () => {
      await payGstPocket();
      return "GST Auto-Payment executed. Paid receipt opened and compliance status changed to green.";
    },
    pnl: () => {
      updateReportOutput(
        `<article><strong>Daily P&L result</strong><span>Revenue ${money(state.dashboard.todaySales)}, COGS ${els.reportCogs.textContent}, profit ${els.reportProfit.textContent}. Action: push SSD + keyboard combo before closing.</span></article>`,
        `<strong>WHY engine</strong><p>Profit improved because NVMe SSD sales rose 18%, gaming mouse combo added ${money(1260)}, and discounts stayed below threshold.</p>`,
      );
      return "Daily P&L generated with WHY analysis and action recommendation.";
    },
    loss: () => {
      updateReportOutput(`<article><strong>Loss autopsy result</strong><span>Loss ${money(8420)}: old SATA SSD stock ${money(3800)}, discount leakage ${money(1420)}, slow hours ${money(3200)}. Fix: bundle old SSD + enclosure this weekend.</span></article>`);
      return "Weekly loss autopsy produced top loss causes and recovery action.";
    },
    weather: () => {
      updateReportOutput(`<article><strong>Demand predictor</strong><span>Rain and salary week detected. Stock USB keyboard, laptop charger, SSD 1TB and gaming mouse. Expected uplift ${money(16500)}.</span></article>`);
      return "Weather and festival demand forecast generated.";
    },
    theft: () => {
      updateReportOutput(`<article><strong>Staff theft detector</strong><span>Risk low. Two voids after payment and one drawer-open event flagged for manager approval.</span></article>`);
      return "Staff anomaly check completed.";
    },
    health: () => {
      switchView("reports");
      els.healthScore.textContent = "89/100";
      renderReports(`<article><strong>Business health score</strong><span>Revenue 24/25, stock 21/25, customer return 22/25, tax 22/25. Total 89/100.</span></article>`);
      return "Business health score recalculated.";
    },
    combo: () => {
      switchView("pos");
      const mouse = state.products.find((p) => p.name.toLowerCase().includes("mouse"));
      const hdmi = state.products.find((p) => p.name.toLowerCase().includes("hdmi"));
      if (mouse) addProduct(mouse, 1);
      if (hdmi) addProduct(hdmi, 1);
      return "Smart combo suggested and added gaming mouse + HDMI cable to the bill.";
    },
    tax: () => {
      updateReportOutput(`<article><strong>Tax health meter</strong><span>GST pocket ${money(Math.max(totals().tax, state.dashboard.gstCollected - state.dashboard.gstPaid))}. Filing status green. Advance tax threshold safe.</span></article>`);
      return "Tax health meter refreshed.";
    },
    dead: () => {
      switchView("inventory");
      renderInventory("SATA");
      return "Dead stock killer filtered old SATA SSD stock and proposed bundle discount campaign.";
    },
    demand: () => {
      updateReportOutput(`<article><strong>Nearby demand radar</strong><span>3km demand: DDR5 RAM up 31%, NVMe SSD up 27%, missing product: USB-C hub. Create supplier order today.</span></article>`);
      return "Nearby demand radar generated a local stock opportunity.";
    },
    proof: () => {
      if (!state.lines.length && state.products[0]) addProduct(state.products[0], 1);
      openReceipt();
      return `Dispute proof receipt generated with hash ${receiptHash()}.`;
    },
    group: () => {
      updateReportOutput(`<article><strong>Group buying network</strong><span>4 nearby computer shops need NVMe SSD 1TB. Combined qty 42. Supplier discount estimated 7%.</span></article>`);
      return "Group buying deal created for nearby shops.";
    },
    scanner: () => {
      switchView("scanner");
      state.scanMode = "purchase";
      document.querySelectorAll(".scan-tab").forEach((tab) => tab.classList.toggle("active", tab.dataset.scanMode === "purchase"));
      els.scanStatus.textContent = "Purchase to stock";
      return "Expense photo scanner opened. Upload an image/PDF and scan it into inventory.";
    },
    voice: () => {
      switchView("voice");
      els.voiceText.value = voiceSamples[0];
      return "Voice invoice module opened with a computer-parts sample ready to convert.";
    },
    customers: () => {
      switchView("customers");
      return "Customer behaviour module opened with churn, credit and WhatsApp actions.";
    },
  };

  const runner = outputs[run] || outputs.pnl;
  Promise.resolve(runner())
    .then((message) => {
      state.lastFeatureOutput = message;
      renderFeatureDetail();
      showToast(message);
    })
    .catch((error) => showToast(error.message));
}

async function loadData() {
  const [health, products, customers, dashboard, invoices] = await Promise.all([
    api("/api/health"),
    api("/api/products"),
    api("/api/customers"),
    api("/api/dashboard"),
    api("/api/invoices"),
  ]);
  state.products = products;
  state.customers = customers;
  state.dashboard = dashboard;
  state.invoices = invoices;
  els.dbMode.textContent = health.database;
  els.dbHint.textContent = health.message;
  renderCustomers();
  renderQuickProducts();
  renderInventory();
  renderDashboard();
  renderFeatureBoard();
  renderReports();
  renderInvoiceHistory();
  renderBlueprintList();
  newBill();
  applyLanguage();
  els.confirmInventory.disabled = state.scanMode === "sales";
  els.confirmInventory.textContent = state.scanMode === "sales" ? "Purchase mode only" : "Auto-updates inventory";
  showLogin();
  runOwnerAdvisor().catch((error) => showToast(error.message));
}

els.loginShopCards.addEventListener("click", (event) => {
  const button = event.target.closest("[data-login-shop]");
  if (button) selectLoginShop(button.dataset.loginShop);
});
els.loginSubmit.addEventListener("click", login);
els.loginPassword.addEventListener("keydown", (event) => {
  if (event.key === "Enter") login();
});
els.loginUsername.addEventListener("keydown", (event) => {
  if (event.key === "Enter") login();
});
els.loginLanguage.addEventListener("change", (event) => setLanguage(event.target.value));
els.appLanguage.addEventListener("change", (event) => setLanguage(event.target.value));
els.logoutButton.addEventListener("click", logout);
els.signupSubmit.addEventListener("click", createCustomShopAccount);
els.signupPassword.addEventListener("keydown", (event) => {
  if (event.key === "Enter") createCustomShopAccount();
});

document.querySelectorAll("[data-view]").forEach((button) => button.addEventListener("click", () => switchView(button.dataset.view)));
document.querySelectorAll(".pay-mode").forEach((button) => {
  button.addEventListener("click", () => setPaymentMode(button.dataset.payment));
});

els.addBarcode.addEventListener("click", addBarcode);
els.barcodeInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") addBarcode();
});
els.billRows.addEventListener("click", (event) => {
  const qtyButton = event.target.closest("[data-qty]");
  const removeButton = event.target.closest("[data-remove]");
  if (qtyButton) changeQuantity(Number(qtyButton.dataset.qty), Number(qtyButton.dataset.delta));
  if (removeButton) removeLine(Number(removeButton.dataset.remove));
});
els.quickProducts.addEventListener("click", (event) => {
  const button = event.target.closest("[data-barcode]");
  if (!button) return;
  const product = state.products.find((item) => item.barcode === button.dataset.barcode);
  if (product) addProduct(product);
});
els.inventorySearch.addEventListener("input", (event) => renderInventory(event.target.value));
els.newBill.addEventListener("click", newBill);
els.saveBill.addEventListener("click", () => saveBill().catch((error) => showToast(error.message)));
els.printBill.addEventListener("click", () => openReceipt());
els.printBillTop.addEventListener("click", () => openReceipt());
els.closeReceipt.addEventListener("click", closeReceipt);
els.modalPrint.addEventListener("click", () => window.print());
els.modalImage.addEventListener("click", () => downloadReceiptImage().catch((error) => showToast(error.message)));
els.shareBill.addEventListener("click", () => openWhatsApp("invoice").catch((error) => showToast(error.message)));
els.modalWhatsApp.addEventListener("click", () => openWhatsApp(state.activeReceiptType).catch((error) => showToast(error.message)));
els.payGst.addEventListener("click", () => payGstPocket().catch((error) => showToast(error.message)));
els.parseVoice.addEventListener("click", () => parseVoice().catch((error) => showToast(error.message)));
els.voiceSample.addEventListener("click", () => {
  els.voiceText.value = voiceSamples[Math.floor(Math.random() * voiceSamples.length)];
});
els.scanMode.addEventListener("click", (event) => {
  const button = event.target.closest("[data-scan-mode]");
  if (!button) return;
  state.scanMode = button.dataset.scanMode;
  document.querySelectorAll(".scan-tab").forEach((tab) => tab.classList.toggle("active", tab === button));
  els.scanStatus.textContent = state.scanMode === "sales" ? "Photo to bill" : "Purchase to stock";
  els.confirmInventory.disabled = state.scanMode === "sales";
  els.confirmInventory.textContent = state.scanMode === "sales" ? "Purchase mode only" : "Auto-updates inventory";
});
els.billUpload.addEventListener("change", previewUpload);
els.scanPurchaseBill.addEventListener("click", () => scanUploadedFile().catch((error) => showToast(error.message)));
els.confirmInventory.addEventListener("click", () => confirmInventory().catch((error) => showToast(error.message)));
els.featureDots.addEventListener("click", (event) => {
  const button = event.target.closest("[data-feature]");
  if (!button) return;
  state.activeFeature = Number(button.dataset.feature);
  state.lastFeatureOutput = "Ready. Click Run live demo to execute this module.";
  renderFeatureBoard();
});
els.featurePrev.addEventListener("click", () => stepFeature(-1));
els.featureNext.addEventListener("click", () => stepFeature(1));
els.featureDetail.addEventListener("click", (event) => {
  const button = event.target.closest("[data-run-feature]");
  if (button) runFeature(button.dataset.runFeature);
});
els.cancelInvoice.addEventListener("click", () => cancelSavedInvoice().catch((error) => {
  els.cancelStatus.textContent = "Needs check";
  showToast(error.message);
}));
els.invoiceHistory.addEventListener("click", (event) => {
  const button = event.target.closest("[data-cancel-fill]");
  if (!button) return;
  els.cancelInvoiceNo.value = button.dataset.cancelFill;
});
els.runAdvisor.addEventListener("click", () => runOwnerAdvisor().catch((error) => showToast(error.message)));
els.templateSelect.addEventListener("change", () => {
  if (els.receiptModal.classList.contains("show")) renderReceipt();
});

setTimeout(() => els.splash.classList.add("hide"), 1500);
setupVoiceCapture();
loadData().catch((error) => {
  els.dbMode.textContent = "Offline";
  els.dbHint.textContent = "API failed to load.";
  showToast(error.message);
});
