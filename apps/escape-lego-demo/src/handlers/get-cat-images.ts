import axios from 'axios';
import { environment } from '../environments/environment';

export const handler = async (event: any, context: any) => {
  try {
    const queryString = Object.keys(event.queryStringParameters).reduce(
      (acc, key) => {
        acc += `${key}=${event.queryStringParameters[key]}&`;
        return acc;
      },
      ''
    );
    const response = await axios.get(
      environment.catApiEndpoint + '/images/search?' + queryString,
      {
        headers: {
          'x-api-key': environment.apiKey,
        },
      }
    );
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(response.data),
    };
  } catch (error: any) {
    console.error(error);
    return {
      statusCode: error.response.status,
      body: JSON.stringify(error.response.data),
    };
  }
};
