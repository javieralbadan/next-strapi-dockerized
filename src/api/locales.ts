const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_SERVER_URL;
const ENDPOINT = '/api/i18n/locales';

let cachedLocales: { data: any[]; timestamp: number } | null = null;
const ONE_DAY_IN_MS = 24 * 60 * 60 * 1000;
const CACHE_EXPIRATION_TIME = ONE_DAY_IN_MS;

export async function getLocales() {
  const now = Date.now();

  if (cachedLocales && (now - cachedLocales.timestamp < CACHE_EXPIRATION_TIME)) {
    return cachedLocales.data;
  }

  try {
    const response = await fetch(`${BASE_URL}${ENDPOINT}`, {
      cache: 'force-cache',
    });
    if (!response.ok) {
      throw new Error(`Error fetching ${ENDPOINT}: ${response.statusText}`);
    }

    const data = await response.json();
    cachedLocales = { data, timestamp: now };
    return data;
  } catch (error) {
    console.error(`Error fetching ${ENDPOINT}: ${error}`);
    return [];
  }
}
