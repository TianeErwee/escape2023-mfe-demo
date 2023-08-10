const IS_PRODUCTION = process.env['IS_PRODUCTION'] === 'true';
const IS_OFFLINE = process.env['IS_OFFLINE'] === 'true';
const BASE_URL = process.env['BASE_URL'];
const API_KEY = process.env['API_KEY'];
const REBRICKABLE_API_ENDPOINT = process.env['REBRICKABLE_API_ENDPOINT'];

export const environment = {
  production: IS_PRODUCTION,
  offline: IS_OFFLINE,
  baseUrl: BASE_URL,
  apiKey: API_KEY,
  rebrickableApiEndpoint: REBRICKABLE_API_ENDPOINT,
};
