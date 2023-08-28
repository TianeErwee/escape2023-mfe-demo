const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const { CloudFrontClient, CreateInvalidationCommand } = require("@aws-sdk/client-cloudfront");
const fs = require('fs');

// Set the AWS Region.
const REGION = "eu-west-1"; //e.g. "us-east-1"
// Create an Amazon S3 service client object.
const s3Client = new S3Client({ region: REGION });
const cloudfrontClient = new CloudFrontClient({ region: REGION });

// Import required AWS SDK clients and commands for Node.js.
const fileContent = fs.readFileSync('tools/configs/app-config.0.json');
// Set the parameters
const params = {
    Bucket: "tiane-escape-dashboard-app", // The name of the bucket. For example, 'sample-bucket-101'.
    Key: "assets/app-config.json", // The name of the object. For example, 'sample_upload.txt'.
    Body: fileContent, // The content of the object. For example, 'Hello world!".
};

const run = async () => {
    try {
        await s3Client.send(new PutObjectCommand(params));
        const input = { // CreateInvalidationRequest
            DistributionId: "E3TEBIOEDAL01E", // required
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
        const command = new CreateInvalidationCommand(input);
        await cloudfrontClient.send(command);
    } catch (err) {
        console.log("Error", err);
    }
};
run();