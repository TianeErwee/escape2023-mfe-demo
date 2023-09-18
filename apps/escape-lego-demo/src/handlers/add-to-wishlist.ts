import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { UpdateCommand, DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';

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
  const requestBody = JSON.parse(event.body);
  console.log(requestBody);
  const set = requestBody.set;

  const input = {
    TableName: 'lego-set-wishlist',
    Key: {
      wishlist_id: requestBody.wishlist_id,
      user_id: requestBody.user_id,
    },
    UpdateExpression: 'SET #sets = list_append(#sets, :set)',
    ExpressionAttributeNames: {
      '#sets': 'sets',
    },
    ExpressionAttributeValues: {
      ':set': [set],
    },
  };

  try {
    const result = await docClient.send(new UpdateCommand(input));
    console.log(result);

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({ message: 'Item added to wishlist' }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error adding item to wishlist' }),
    };
  }
};
