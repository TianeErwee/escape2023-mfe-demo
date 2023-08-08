import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { PutCommand, DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import { v4 as uuidv4 } from 'uuid';

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export const handler = async (event: any, context: any) => {
  const requestBody = JSON.parse(event.body);
  const userId = requestBody.user_id;
  const inputUserTable = {
    TableName: 'lego-set-wishlist',
    Item: {
      user_id: userId,
      wishlist_id: uuidv4(),
      sets: []
    },
  };


  try {
    const userPut = docClient.send(new PutCommand(inputUserTable));
    const result = await Promise.all([userPut]);
    console.log(result);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'User and inventory added' }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error adding user or inventory' }),
    };
  }
};
