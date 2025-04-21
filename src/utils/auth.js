// utils/auth.js
import { supabaseClient } from './supabaseClient';

// Store session data in cookies
export const saveAuthCookies = (cookies, session) => {
  if (!session) return;
  
  const { access_token, refresh_token, expires_at } = session;
  
  // Set secure cookies with expiration time
  cookies.set('sb-access-token', access_token, {
    path: '/',
    httpOnly: true,
    secure: import.meta.env.PROD,
    maxAge: expires_at // Set the cookie expiration same as the token
  });
  
  cookies.set('sb-refresh-token', refresh_token, {
    path: '/',
    httpOnly: true,
    secure: import.meta.env.PROD,
    maxAge: 60 * 60 * 24 * 7 // 7 days for refresh token
  });
};

// Clear auth cookies on logout
export const clearAuthCookies = (cookies) => {
  cookies.delete('sb-access-token', { path: '/' });
  cookies.delete('sb-refresh-token', { path: '/' });
};

// Check if user is authenticated using cookies
export const isAuthenticated = async (cookies) => {
  const accessToken = cookies.get('sb-access-token')?.value;
  const refreshToken = cookies.get('sb-refresh-token')?.value;
  
  if (!accessToken || !refreshToken) {
    return false;
  }
  
  // Set the session in the Supabase client
  const { data, error } = await supabaseClient.auth.setSession({
    access_token: accessToken,
    refresh_token: refreshToken
  });
  
  if (error || !data.session) {
    return false;
  }
  
  return true;
};