const express = require("express");
const cors = require("cors")
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const authRoute =require("../backend/routes/auth")
const userRoute = require("../backend/routes/user")

dotenv.config();
const app = express();


mongoose.connect(process.env.mongobd_url)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });


app.use(cors()); //không dính lỗi cors
app.use(cookieParser()); //tạo cookie và gắn cookie
app.use(express.json()); //request dưới dạng js hết

//Routes
app.use("/v1/auth", authRoute)
app.use("/v1/user", userRoute)

app.listen(8000, () => {
    console.log("Server is running");
}
);