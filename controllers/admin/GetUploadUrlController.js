const GetS3UploadUrl = require("../../utils/awsS3");

const GetUploadUrlController = async (req, res) => {
  try {
    const uploadUrl = await GetS3UploadUrl();
    res.send({ uploadUrl, type: "success", msg: "Fetched S3 Url" });
  } catch (e) {
    res.status(500).send({ msg: e.message, type: "error" });
  }
};

module.exports = GetUploadUrlController;
