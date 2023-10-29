
import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://hytdanpcxydemzchirko.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh5dGRhbnBjeHlkZW16Y2hpcmtvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTcyOTc2MTYsImV4cCI6MjAxMjg3MzYxNn0.4b_uixLLGfWtLBJILoBfRuihVibpwy02XwlF2heO2ZY"
const supabase = createClient(supabaseUrl, supabaseKey)


export default supabase;    