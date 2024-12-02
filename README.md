# AI Newsletter Subscription

A modern newsletter subscription template built with React, TypeScript, and Supabase.

## Setup Instructions

1. Create a `.env` file in the root directory and add your Supabase credentials:

```env
VITE_SUPABASE_URL=your-project-url
VITE_SUPABASE_ANON_KEY=your-anon-key
```

2. Create the required table in your Supabase database:

```sql
create table newsletter_subscribers (
  id uuid default gen_random_uuid() primary key,
  email text not null unique,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  status text default 'active' check (status in ('active', 'unsubscribed')),
  interests text[] default array[]::text[]
);

-- Create an index on email for faster lookups
create index newsletter_subscribers_email_idx on newsletter_subscribers (email);

-- Enable Row Level Security (RLS)
alter table newsletter_subscribers enable row level security;

-- Create a policy that allows only insert operations from authenticated users or your application
create policy "Allow public to subscribe" on newsletter_subscribers
  for insert with check (true);

-- Create a policy that only allows you (service role) to view subscribers
create policy "Allow service role to view subscribers" on newsletter_subscribers
  for select using (auth.role() = 'service_role');
```

## Development

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

## Features

- Modern, responsive design with Tailwind CSS
- Email validation and error handling
- Secure data storage with Supabase
- TypeScript for type safety
- Lucide React icons for beautiful UI elements
