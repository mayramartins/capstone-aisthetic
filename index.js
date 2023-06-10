import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

// Routes
import connectDB from "./back-end/mongodb/connect.js";
import postRoutes from "./back-end/routes/postRoutes.js";
import aistheticRoutes from "./back-end/routes/aistheticRoutes.js";

dotenv.config(); // allows to pull environment variables to pull dotenv file

const app = express();

//Middlewares
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/post", postRoutes);
app.use("/api/v1/aisthetic", aistheticRoutes);

app.get("/", async (req, res) => {
  res.send("Hello from AIsthetic!");
});

const startServer = async () => {
  // while running the server that helps not to fail
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(8080, () =>
      console.log("Server has started on port http://localhost:8080")
    );
  } catch (error) {
    console.log(error);
  }
};

startServer();
