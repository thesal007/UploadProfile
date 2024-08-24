// appConfig.js
const config = {
  region: process.env.AWS_S3_REGION|| '',  // Default region if not set
  accessKey: process.env.AWS_S3_ACCESS_KEY_ID  || '',
  secretKey: process.env.AWS_S3_SECRET_KEY_ID || '',
  bucketName: process.env.AWS_S3_BUCKET_NAME || '',
};

export default config;
