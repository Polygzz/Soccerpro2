import { sequence } from 'astro/middleware';
import { supabaseClient } from './utils/supabaseClient';

const auth = async ({ context, next }) => {
  const response = await next();

  const authCookie = context.cookies.get('sb-access-token');
  const refreshCookie = context.cookies.get('sb-refresh-token');

  if (authCookie && refreshCookie) {
    supabaseClient.auth.setSession({
      access_token: authCookie.value,
      refresh_token: refreshCookie.value,
    });
  }

  return response;
};

export const onRequest = sequence(auth);
