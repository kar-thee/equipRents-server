const aws = require("aws-sdk");

const region = process.env.AWS_REGION;
const bucketName = process.env.AWS_BUCKET_NAME;
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

const s3 = new aws.S3({
  region,
  accessKeyId,
  secretAccessKey,
  signatureVersion: "v4",
});

const GetS3UploadUrl = async (imageName) => {
  const params = {
    Bucket: bucketName,
    Key: imageName,
    Expires: 60 * 10,
  };
  const signedUrl = await s3.getSignedUrlPromise("putObject", params);
  return signedUrl;
};

module.exports = GetS3UploadUrl;
