const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect('mongodb+srv://ifaahsyarifah04:ifah1004@cluster0.izcrp9k.mongodb.net/?retryWrites=true&w=majority', 
      {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      });
    console.log("Connected");
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  connect};
