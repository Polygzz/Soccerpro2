import { createClient } from '@supabase/supabase-js';

// Keep your original environment variable naming but add PUBLIC_ prefix for Astro
const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL || import.meta.env.VITE_SUPABASE_URL || "";
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY || import.meta.env.VITE_SUPABASE_ANON_KEY || "";

// Check if environment variables are defined
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase environment variables are not defined');
}

export const supabaseClient = createClient(supabaseUrl, supabaseAnonKey);