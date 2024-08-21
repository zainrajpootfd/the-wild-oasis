import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://avqqvgboatjsqxrnsbps.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF2cXF2Z2JvYXRqc3F4cm5zYnBzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQyMjY5MTMsImV4cCI6MjAzOTgwMjkxM30.YdCuAgPOluCkQsoXrE3-RLObOw4EKj8mOos5RaibCKA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
