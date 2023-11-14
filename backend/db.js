const mongoose = require("mongoose");

const mongoURI =
   "mongodb+srv://robertdoweny761:Garakoti@cluster0.62fxddn.mongodb.net/gofoodmern?retryWrites=true&w=majority";

const mongoDB = async () => {
   try {
      const connect = await mongoose.connect(mongoURI);
      if (connect) {
         console.log("Connected to MongoDB");
         const fetched_data = await mongoose.connection.db.collection("food_items").find({}).toArray();
         console.log();
      }
   } catch (error) {
      console.log("Error connecting to MongoDB:", error);
   }
};

module.exports = mongoDB;


