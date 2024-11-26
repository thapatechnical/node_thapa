const crypto = require("crypto");

const randomValue = crypto.randomBytes(8).toString("hex");
console.log(randomValue);

const hashValue = crypto
  .createHash("sha256")
  .update("thapa technical")
  .digest("hex");
console.log(hashValue);

//! d2328fb75fbfca19f37dd7f5e76aa6c459b97971ddb90a44f174232abd88048d
