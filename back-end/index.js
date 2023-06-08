import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

dotenv.config(); // allows to pull environment variables to pull dotenv file

const app = express();

//Middlewares
app.use(cors());
app.use(express.json({ limit: "50mb" }));

// Routes
app.get("/", async (req, res) => {
  res.send("Hello from AIsthetic!");
});

const startServer = async () => {
  app.listen(8080, () =>
    console.log("Server has started on port http://localhost:8080")
  );
};

startServer();
