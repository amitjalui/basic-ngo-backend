import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";

dotenv.config({
  path: '.env'
});

// Start the server
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log("Server listening", port);
})

// 
connectDB();
