// supabase.js
const SUPABASE_URL = "https://rjfkjdjnqqtotvvrmcey.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_xMQrZWmWH2EfnaxcCcbBNA_OpHO66Bp";

// لازم يكون supabase-js اتعمله تحميل قبل الملف ده
window.sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
