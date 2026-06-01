create table if not exists customers (
  id bigserial primary key,
  name text not null,
  phone text not null default '-',
  credit_limit numeric(12, 2) not null default 0,
  whatsapp_opt_in boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists products (
  id bigserial primary key,
  barcode text not null unique,
  name text not null,
  batch text not null,
  stock integer not null default 0,
  reorder_point integer not null default 0,
  mrp numeric(12, 2) not null,
  cost numeric(12, 2) not null,
  gst_rate numeric(5, 2) not null default 0,
  expiry date not null,
  created_at timestamptz not null default now()
);

create table if not exists invoices (
  id bigserial primary key,
  invoice_no text not null unique,
  customer_id bigint references customers(id),
  payment_mode text not null,
  subtotal numeric(12, 2) not null,
  tax numeric(12, 2) not null,
  discount numeric(12, 2) not null default 0,
  grand_total numeric(12, 2) not null,
  created_at timestamptz not null default now()
);

create table if not exists invoice_lines (
  id bigserial primary key,
  invoice_id bigint not null references invoices(id) on delete cascade,
  product_id bigint references products(id),
  product_name text not null,
  barcode text not null,
  batch text not null,
  qty integer not null,
  rate numeric(12, 2) not null,
  gst_rate numeric(5, 2) not null,
  discount numeric(12, 2) not null default 0,
  line_total numeric(12, 2) not null
);

create index if not exists idx_products_barcode on products(barcode);
create index if not exists idx_invoice_lines_invoice_id on invoice_lines(invoice_id);

create table if not exists purchase_entries (
  id bigserial primary key,
  supplier text not null,
  amount numeric(12, 2) not null,
  gst numeric(12, 2) not null,
  confidence numeric(5, 2) not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists purchase_entry_lines (
  id bigserial primary key,
  purchase_entry_id bigint not null references purchase_entries(id) on delete cascade,
  barcode text not null,
  product_name text not null,
  batch text not null,
  qty integer not null,
  cost numeric(12, 2) not null,
  mrp numeric(12, 2) not null,
  gst_rate numeric(5, 2) not null,
  expiry date not null
);

create table if not exists ai_events (
  id bigserial primary key,
  event_type text not null,
  source text not null,
  confidence numeric(5, 2),
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists idx_purchase_entry_lines_purchase_id on purchase_entry_lines(purchase_entry_id);
create index if not exists idx_ai_events_type on ai_events(event_type);
