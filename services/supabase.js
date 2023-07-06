import { createClient } from '@supabase/supabase-js';

// supabase credentials
export const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_API_KEY);
