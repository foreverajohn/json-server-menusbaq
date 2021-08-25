const mongoose = require("mongoose");

//COONECT TO MONGODB

const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_DB, {
      useCreateIndex: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then(() => {
      console.log("MenuBAQ  mongoDB connected!".cyan.bold);
    })
    .catch((err) => {
      console.log(`Error Connecting MongoDb: ${err}`.cyan.bold);
    });
};

module.exports = connectDB;
