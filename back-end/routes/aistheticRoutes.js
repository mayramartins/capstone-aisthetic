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

// Route makes call openAI API
router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body;
    // get the image from API
    const aiResponse = await openai.createImage({
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });
    // send image to forontend
    const image = aiResponse.data.data[0].b64_json;

    res.status(200).json({ picture: image });
  } catch (error) {
    console.log(error);
    res.status(500).send(error?.response.data.error.message);
  }
});

export default router;
