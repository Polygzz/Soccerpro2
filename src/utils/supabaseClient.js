import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || (typeof process !== 'undefined' && process.env.VITE_SUPABASE_URL ? process.env.VITE_SUPABASE_URL : "");
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || (typeof process !== 'undefined' && process.env.VITE_SUPABASE_ANON_KEY ? process.env.VITE_SUPABASE_ANON_KEY : "");

export const supabaseClient = createClient(supabaseUrl, supabaseAnonKey);
