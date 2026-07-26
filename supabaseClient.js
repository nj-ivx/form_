// supabaseClient.js

const SUPABASE_URL = 'https://aidsklvpzodubkxiwcjs.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_1z4thc4qJUhsv3z9lVOrPw_iZu0kXBL';

window.supabaseApp = window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);