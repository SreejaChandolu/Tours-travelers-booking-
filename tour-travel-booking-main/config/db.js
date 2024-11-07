const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);  // Fixed: Used backticks for template literal
  } catch (error) {
    console.error(`Error: ${error.message}`);  // Fixed: Used backticks for template literal
    process.exit(1);
  }
};

module.exports = connectDB;
