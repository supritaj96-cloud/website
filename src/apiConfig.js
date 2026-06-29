const rawApiUrl = import.meta.env.VITE_API_URL || (import.meta.env.DEV ? 'http://localhost:8000' : '');
const API_BASE = rawApiUrl.replace(/\/$/, '') || window.location.origin;
export const API_PREFIX = `${API_BASE}/api`;
