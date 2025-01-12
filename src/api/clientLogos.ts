const DEFAULT_LOCALE = process.env.NEXT_PUBLIC_DEFAULT_LOCALE || 'en';
const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_CLIENT_URL;
const ENDPOINT = '/api/client-logos';

export async function getClientLogos(lang: string = DEFAULT_LOCALE) {
  try {
    const response = await fetch(`${BASE_URL}${ENDPOINT}?locale=${lang}&populate=*`);
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
