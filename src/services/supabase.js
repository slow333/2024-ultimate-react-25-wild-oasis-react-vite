import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://dfmbiacecpehxhgsveaj.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRmbWJpYWNlY3BlaHhoZ3N2ZWFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE5MzQ3NTksImV4cCI6MjAyNzUxMDc1OX0.hHtWvxWe7_ypQdyYW2Hmo6zws-cBymSOlCzoHfJC3N4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;