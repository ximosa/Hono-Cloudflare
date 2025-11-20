import { createClient } from '@supabase/supabase-js'

export type Bindings = {
    SUPABASE_URL: string
    SUPABASE_KEY: string
}

export const createSupabaseClient = (env: Bindings) => {
    return createClient(env.SUPABASE_URL, env.SUPABASE_KEY)
}
