// utils/auth.js
import { createServerClient } from '@supabase/ssr';

export const createSupabaseServerClient = (context) => {
  return createServerClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY,
    {
      cookies: {
        get(name) {
          return context.cookies.get(name)?.value;
        },
        set(name, value, options) {
          context.cookies.set(name, value, options);
        },
        remove(name, options) {
          context.cookies.delete(name, options);
        },
      },
    }
  );
};

export const isAuthenticated = async (context) => {
  const supabase = createSupabaseServerClient(context);
  const { data: { session } } = await supabase.auth.getSession();
  return !!session;
};
