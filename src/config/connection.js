const mongoose = require("mongoose");
const URI = "mongodb+srv://manuelalejandro10355:maneC1035@adso2903013.zozvq.mongodb.net/Carmelo1";

mongoose.connect(URI);

module.exports = mongoose;