const mongoose = require("mongoose");

async function initialize() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    console.error("Mongodb Connection Failed: ", error.message);
    process.exit(1);
  }
}

module.exports = initialize;
