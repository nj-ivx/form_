// supabaseClient.js

const SUPABASE_URL = 'YOUR_SUPABASE_URL';
const SUPABASE_PUBLISHABLE_KEY = 'YOUR_SUPABASE_ANON_KEY';

// Initialize the Supabase Client and attach it to the window object so all pages can use it
window.supabaseApp = window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);