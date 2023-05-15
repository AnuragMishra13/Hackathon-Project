const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = ()=>{
    mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Database Connected")
  })
  .catch((error) => {
    console.log(error);
  });

}
module.exports = connectDB;
