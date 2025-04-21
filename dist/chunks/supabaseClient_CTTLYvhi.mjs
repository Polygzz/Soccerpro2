import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://leordyersspnwtkxncoj.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxlb3JkeWVyc3Nwbnd0a3huY29qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4NDY1NjQsImV4cCI6MjA2MDQyMjU2NH0.3YpsW3Oe3v6PnHWIsS02WMxqrI5wvcrvo0f71XX7WcM";
const supabaseClient = createClient(supabaseUrl, supabaseAnonKey);

export { supabaseClient as s };
