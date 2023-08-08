import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { GetCommand, DynamoDBDocumentClient,  } from '@aws-sdk/lib-dynamodb';

const marshallOptions = {
  // Whether to automatically convert empty strings, blobs, and sets to `null`.
  convertEmptyValues: false, // false, by default.
  // Whether to remove undefined values while marshalling.
  removeUndefinedValues: true, // false, by default.
  // Whether to convert typeof object to map attribute.
  convertClassInstanceToMap: false, // false, by default.
};

const unmarshallOptions = {
  // Whether to return numbers as a string instead of converting them to native JavaScript numbers.
  wrapNumbers: false, // false, by default.
};

const translateConfig = { marshallOptions, unmarshallOptions };

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client, translateConfig);

export const handler = async (event: any, context: any) => {
  const requestQuery = event.queryStringParameters;
  console.log(requestQuery);

  const input = {
    TableName: 'lego-set-inventory',
    Key: {
      user_id: requestQuery.user_id,
    }
  };

  try {
    const result = await docClient.send(new GetCommand(input));
    console.log(result);

    return {
      statusCode: 200,
      body: JSON.stringify(result.Item),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error adding item to inventory' }),
    };
  }
};
