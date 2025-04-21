// utils/auth.js
export const saveAuthCookies = (cookies, session) => {
  if (!session) return;

  const { access_token, refresh_token } = session;

  cookies.set('sb-access-token', access_token, {
    path: '/',
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    maxAge: 60 * 60 * 24, // 1 day for access token
  });

  cookies.set('sb-refresh-token', refresh_token, {
    path: '/',
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 7 days for refresh token
  });

  cookies.set('is-authenticated', 'true', {
    path: '/',
    httpOnly: false, // Client-side accessible
    secure: true,
    sameSite: 'lax',
    maxAge: 60 * 60 * 24, // 1 day
  });
};

export const clearAuthCookies = (cookies) => {
  cookies.delete('sb-access-token', { path: '/' });
  cookies.delete('sb-refresh-token', { path: '/' });
  cookies.delete('is-authenticated', { path: '/' });
};

export const isAuthenticated = async (cookies) => {
  const accessToken = cookies.get('sb-access-token')?.value;
  const refreshToken = cookies.get('sb-refresh-token')?.value;

  if (!accessToken || !refreshToken) return false;

  try {
    const { data, error } = await supabaseClient.auth.setSession({
      access_token: accessToken,
      refresh_token: refreshToken,
    });

    return !!data.session;
  } catch (err) {
    console.error("Authentication error:", err);
    return false;
  }
};
