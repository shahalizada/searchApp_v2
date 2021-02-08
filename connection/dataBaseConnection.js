const mongoose = require("mongoose");

//uri
const uri = process.env.MONGOOSEURI;

const dataBase = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("Successfully connected to the Database Server.");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = dataBase;
