import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { PutCommand, DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export const handler = async (event: any, context: any) => {
  console.log(event.body);
  const requestBody = event.body;
  console.log(requestBody);
  const userId = requestBody.user_id;
  console.log(userId);
  const inputUserTable = {
    TableName: 'inventory-users',
    Item: {
      user_id: userId,
    },
  };

  const inputInventoryTable = {
    TableName: 'lego-set-inventory',
    Item: {
      user_id: userId,
      sets: []
    },
  };

  try {
    console.log('BEFORE COMMANDS');
    const userPut = docClient.send(new PutCommand(inputUserTable));
    const inventoryPut = docClient.send(new PutCommand(inputInventoryTable));
    const result = await Promise.all([userPut, inventoryPut]);
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
