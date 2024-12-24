const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_SERVER_URL;
const ENDPOINT = '/api/i18n/locales';

export async function getLocales() {
  try {
    const response = await fetch(`${BASE_URL}${ENDPOINT}`);    
    if (!response.ok) {
      throw new Error(`Error fetching ${ENDPOINT}: ${response.statusText}`);
    }

    const data = await response.json();    
    return data;
  } catch (error) {
    console.error(`Error fetching ${ENDPOINT}: ${error}`);
    return [];
  }
}
