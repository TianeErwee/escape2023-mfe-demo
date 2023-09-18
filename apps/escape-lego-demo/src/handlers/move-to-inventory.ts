import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import {
  UpdateCommand,
  DynamoDBDocumentClient,
  GetCommand,
} from '@aws-sdk/lib-dynamodb';

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
    TableName: 'lego-set-inventory',
    Key: {
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

  const getWishlistInput = {
    TableName: 'lego-set-wishlist',
    Key: {
      wishlist_id: requestBody.wishlist_id,
      user_id: requestBody.user_id
    },
  };

  const wishlist = await docClient.send(new GetCommand(getWishlistInput));

  const item = wishlist.Item;
  if (item) {
    const wishlistSets = item['sets'].filter(
      (s: any) => s.set_num !== set.set_num
    );
    console.log(wishlistSets);
    const removeInput = {
      TableName: 'lego-set-wishlist',
      Key: {
        wishlist_id: requestBody.wishlist_id,
        user_id: requestBody.user_id,
      },
      UpdateExpression: 'SET #sets = :sets',
      ExpressionAttributeNames: {
        '#sets': 'sets',
      },
      ExpressionAttributeValues: { ':sets': wishlistSets },
    };

    try {
      const resultPromise = docClient.send(new UpdateCommand(input));
      const deleteResultPromise = docClient.send(
        new UpdateCommand(removeInput)
      );
      const result = await Promise.all([resultPromise, deleteResultPromise]);
      console.log(result);

      return {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify({ message: 'Item moved to inventory' }),
      };
    } catch (error) {
      console.error(error);
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Error moving item to inventory' }),
      };
    }
  } else {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error moving item to inventory' }),
    };
  }
};
