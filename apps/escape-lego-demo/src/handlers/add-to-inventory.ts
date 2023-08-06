import { PutItemCommand } from '@aws-sdk/client-dynamodb';

export const handler = async (event: any, context: any) => {
  const requestBody = JSON.parse(event.body);
  const set = requestBody.set;

  const input = {
    TableName: 'lego-set-inventory',
    Item: {
      user_id: { S: requestBody.user_id },
      set: {
        M: {
          set_num: { S: set.set_num },
          name: { S: set.name },
          year: { N: set.year.toString() },
          theme_id: { N: set.theme_id.toString() },
          num_parts: { N: set.num_parts.toString() },
          set_img_url: { S: set.set_img_url },
          set_url: { S: set.set_url },
          last_modified_dt: { S: set.last_modified_dt },
        },
      },
    },
  };

  try {
    const result = await new PutItemCommand(input);
    console.log(result);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Item added to inventory' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error adding item to inventory' }),
    };
  }
};
