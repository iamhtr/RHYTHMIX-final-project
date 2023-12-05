const express = require("express");
const cors = require("cors")
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const routes = require("../backend/routes/routes")

dotenv.config();
const app = express();


mongoose.connect(process.env.mongobd_url, {
})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });


app.use(cors({
    credentials: true,
    origin: ["httt://localhost:4200"]
})); //không dính lỗi cors
app.use(cookieParser()); //tạo cookie và gắn cookie
app.use(express.json()); //request dưới dạng js hết

app.use("/api/", routes)
app.listen(8800, () => {
    console.log("Server is running");
}
);