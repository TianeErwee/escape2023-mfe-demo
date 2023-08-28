const { CloudFrontClient, UpdateDistributionCommand, GetDistributionConfigCommand, CreateInvalidationCommand } = require("@aws-sdk/client-cloudfront");

const REGION = "eu-west-1"; //e.g. "us-east-1"
const cloudfrontClient = new CloudFrontClient({ region: REGION });

const input = {
    Id: 'EXN0QPKJMC914'
};

const run = async () => {
    try {
        const command = new GetDistributionConfigCommand(input);
        const data = await cloudfrontClient.send(command);
        console.log(data);
        const config = data.DistributionConfig;
        const updatedConfig = {
            ...config,
            DefaultCacheBehavior: {
                ...config.DefaultCacheBehavior,
                TargetOriginId: 'tiane-escape-wishlist-app-v2.s3.eu-west-1.amazonaws.com'
            }
        };
        updatedConfig.Comment = 'Updated by lucas.js';
        const updateCommand = new UpdateDistributionCommand({
            DistributionConfig: updatedConfig,
            Id: input.Id,
            IfMatch: data.ETag
        });
        await cloudfrontClient.send(updateCommand);

        const invalidationInput = { // CreateInvalidationRequest
            DistributionId: input.Id, // required
            InvalidationBatch: { // InvalidationBatch
                Paths: { // Paths
                    Quantity: 1, // required
                    Items: [ // PathList
                        "/*",
                    ],
                },
                CallerReference: new Date().toISOString(), // required
            },
        };
        const invalidationCommand = new CreateInvalidationCommand(invalidationInput);
        await cloudfrontClient.send(invalidationCommand);
    } catch (err) {
        console.log("Error", err);
    }
}

run();