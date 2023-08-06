import axios from 'axios';
import { environment } from '../environments/environment';

export const handler = async (event: any, context: any) => {
  console.log(event);
  console.log(context);
  try {
    const response = await axios.get(
      'https://rebrickable.com/api/v3/lego/sets/',
      { headers: { Authorization: `key ${environment.apiKey}` } }
    );
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error: any) {
    return {
      statusCode: error.response.status,
      body: JSON.stringify(error.response.data),
    };
  }
};
