// Copy this file to config.js and fill in your Supabase project values.
// Dashboard: https://supabase.com/dashboard → Project Settings → API
window.NF_CONFIG = {
  SUPABASE_URL: 'https://YOUR_PROJECT.supabase.co',
  SUPABASE_ANON_KEY: 'YOUR_ANON_KEY',
  // Production site URL (used for OAuth redirects; match Supabase Auth URL config)
  SITE_URL: 'http://localhost:8080',
  // Admin setup code is NOT stored here — it lives only in supabase/schema.sql
  // and is entered once during signup. Never put secrets in client-side config.
};
