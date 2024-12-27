const DEFAULT_LOCALE = process.env.NEXT_PUBLIC_DEFAULT_LOCALE || 'en';
const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_SERVER_URL;
const ENDPOINT = '/api/nav-items';

export async function getNavItems(lang: string = DEFAULT_LOCALE) {
  try {
    const response = await fetch(`${BASE_URL}${ENDPOINT}?locale=${lang}&populate=navSubItems`);
    if (!response.ok) {
      throw new Error(`Error fetching ${ENDPOINT}: ${response.statusText}`);
    }

    const responseData = await response.json();
    return responseData.data;
  } catch (error) {
    console.error(`Error fetching ${ENDPOINT}: ${error}`);
    return [];
  }
}
