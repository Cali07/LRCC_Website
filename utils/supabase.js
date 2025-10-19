import { createClient } from '@supabase/supabase-js'

const config = useRuntimeConfig()

// ✅ Create the client once
export const supabase = createClient(
    config.public.SUPABASE_URL,
    config.public.SUPABASE_KEY
)
