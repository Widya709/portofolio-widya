import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://ygrqvsemkbpgkvyjjwru.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "sb_publishable_8ouj_7x655lUrrmr3ajcZQ_K2kKSiVS";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);



