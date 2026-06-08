-- Tower Rush — wallet schema. Run this in Supabase → SQL Editor.
-- Tables are written/read only by the server (service-role key), so RLS is
-- enabled with NO public policies (service role bypasses RLS).

create extension if not exists "pgcrypto";

-- ── users ────────────────────────────────────────────────────────────────────
create table if not exists public.users (
  id              uuid primary key default gen_random_uuid(),
  name            text not null,
  phone           text not null unique,
  password_hash   text not null,
  currency        text not null default 'GHS',
  balance         numeric(14,2) not null default 0,
  total_deposited numeric(14,2) not null default 0,
  total_withdrawn numeric(14,2) not null default 0,
  first_deposit_at timestamptz,
  created_at      timestamptz not null default now()
);

create index if not exists users_phone_idx on public.users (phone);

-- ── transactions ledger ──────────────────────────────────────────────────────
create table if not exists public.transactions (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null references public.users(id) on delete cascade,
  reference   text not null unique,
  amount      numeric(14,2) not null,
  type        text not null check (type in ('deposit','withdrawal','bet','win')),
  status      text not null default 'pending' check (status in ('pending','success','failed')),
  provider    text not null default 'paystack',
  currency    text not null default 'GHS',
  metadata    jsonb not null default '{}'::jsonb,
  created_at  timestamptz not null default now()
);

create index if not exists transactions_user_idx on public.transactions (user_id, created_at desc);

-- Lock down: service-role bypasses RLS; no anon/public access.
alter table public.users        enable row level security;
alter table public.transactions enable row level security;
