import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL; // Use environment variable for the URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY; // Use environment variable for the key

// Create the Supabase client
export const supabaseClient = createClient(supabaseUrl, supabaseKey);
