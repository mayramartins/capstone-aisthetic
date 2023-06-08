import express from "express";
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

// making sure variables are getting populated
dotenv.config();

const router = express.Router();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

router.route("/").get((req, res) => {
  res.send("Hello from AIsthetic!");
});

export default router;
