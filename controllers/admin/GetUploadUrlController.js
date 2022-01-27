const GetS3UploadUrl = require("../../utils/awsS3");

const GetUploadUrlController = async (req, res) => {
  const { section, name } = req.body;
  try {
    const imageName = `${section}/${name}`;
    const uploadUrl = await GetS3UploadUrl(imageName);
    res.send({
      uploadUrl,
      type: "success",
      msg: "File upload still in progess....be patient",
    });
  } catch (e) {
    res.status(500).send({ msg: e.message, type: "error" });
  }
};

module.exports = GetUploadUrlController;
