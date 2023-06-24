import AWS from "aws-sdk";

AWS.config.update({
  region: "us-east-1",
});

export const DynamoDB = new AWS.DynamoDB.DocumentClient({
  endpoint: "http://dynamodb.us-east-1.amazonaws.com",
  credentials: {
    accessKeyId: "",
    secretAccessKey: "",
  },
});
