interface Props {
  options?: RequestInit;
}

const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;
const ENDPOINT = '/api/client-logos';
const URL = `${BASE_URL}${ENDPOINT}?populate=*`;
const DEFAULT_OPTIONS: RequestInit = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};

export async function getClientLogos({ options = {} }: Props = {}) {
  const fetchOptions: RequestInit = {
    ...DEFAULT_OPTIONS,
    ...options,
  };

  const response = await fetch(URL, fetchOptions);

  if (!response.ok) {
    throw new Error(`Failed to fetch client logos: ${response.statusText}`);
  }

  const data = await response.json();
  console.log('🚀 ~ getClientLogos ~ data:', data);
  return data.data;
}
