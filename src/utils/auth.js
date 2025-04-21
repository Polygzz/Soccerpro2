// utils/auth.js
import { supabaseClient } from './supabaseClient';

// Store session data in cookies
export const saveAuthCookies = (cookies, session) => {
  if (!session) return;
  
  const { access_token, refresh_token } = session;
  
  // Set secure cookies with expiration time
  cookies.set('sb-access-token', access_token, {
    path: '/',
    httpOnly: true,
    secure: true, // Always secure for production
    sameSite: 'lax', // Added for better compatibility
    maxAge: 60 * 60 * 24 // 1 day for access token
  });
  
  cookies.set('sb-refresh-token', refresh_token, {
    path: '/',
    httpOnly: true,
    secure: true, // Always secure for production
    sameSite: 'lax', // Added for better compatibility
    maxAge: 60 * 60 * 24 * 7 // 7 days for refresh token
  });
  
  // Also set a session indicator cookie that's client-accessible
  cookies.set('is-authenticated', 'true', {
    path: '/',
    httpOnly: false, // Accessible from client-side
    secure: true,
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 // 1 day
  });
};

// Clear auth cookies on logout
export const clearAuthCookies = (cookies) => {
  cookies.delete('sb-access-token', { path: '/' });
  cookies.delete('sb-refresh-token', { path: '/' });
  cookies.delete('is-authenticated', { path: '/' });
};

// Check if user is authenticated using cookies
export const isAuthenticated = async (cookies) => {
  const accessToken = cookies.get('sb-access-token')?.value;
  const refreshToken = cookies.get('sb-refresh-token')?.value;
  
  console.log("Checking auth - Access token exists:", !!accessToken);
  console.log("Checking auth - Refresh token exists:", !!refreshToken);
  
  if (!accessToken || !refreshToken) {
    console.log("Missing tokens - not authenticated");
    return false;
  }
  
  try {
    // Set the session in the Supabase client
    const { data, error } = await supabaseClient.auth.setSession({
      access_token: accessToken,
      refresh_token: refreshToken
    });
    
    if (error) {
      console.error("Session error:", error.message);
      return false;
    }
    
    console.log("Authentication successful:", !!data.session);
    return !!data.session;
  } catch (err) {
    console.error("Authentication error:", err);
    return false;
  }
};