const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000';

export async function api(path, method = 'GET', body = null, token = null) {
  const headers = { 'Content-Type': 'application/json' };
  if (token) headers['Authorization'] = `Bearer ${token}`;

  const res = await fetch(`${API_BASE}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : null,
  });

  const text = await res.text();
  let data;
  try { data = text ? JSON.parse(text) : {}; } catch (err) { data = { raw: text }; }

  if (!res.ok) {
    const message = data?.message || data?.error || 'Request failed';
    const error = new Error(message);
    error.status = res.status;
    error.data = data;
    throw error;
  }
  return data;
}
