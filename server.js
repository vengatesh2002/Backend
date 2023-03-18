const dotenv = require("dotenv").config(); 
const express = require("express");
const cors = require("cors");
const router = require("./routes/routes");

const app = express();
const connectDB = require("./config/connectDB")


app.use(express.json());
app.use(cors({origin: ["http://localhost:3000", "https://mern-task-app-tg7r.onrender.com"],}
));
 
app.use("/api/tasks", router);

const startServer = async () => {
  try {
    await connectDB();
    app.listen("8000", (err) => {
      if (err) console.log(err);
      console.log("server is started on port");
    });
  } catch (err) {
    console.log(err);
  }
};

startServer();