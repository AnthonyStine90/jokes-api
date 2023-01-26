const mongoose = require("mongoose");

const connectDB = () => {
  mongoose.set('strictQuery', true);
  mongoose
    .connect("mongodb://127.0.0.1:27017/name_of_your_DB", {
      //move to env if you have personal info and pushing to github  password, login ect
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // version 6+ dont need above ^, already defaulted true
      retryWrites: true,
      // retry a "write" if something happens on the server end
    })
    .then(() => console.log("DB is HERE!"))
    .catch((err) => console.log("Something went wrong...", err));
};

module.exports = connectDB