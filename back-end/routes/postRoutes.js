import express from "express";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

import Post from "../mongodb/models/post.js";

// making sure variables are getting populated
dotenv.config();

const router = express.Router();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// GET ALL POSTS
router.route("/").get(async (req, res) => {
  try {
    const posts = await Post.find({});

    res.status(200).json({ success: true, data: posts });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
});

// CREATE A POST
router.route("/").post(async (req, res) => {
  try {
    const { name, prompt, picture } = req.body;
    const pictureUrl = await cloudinary.uploader.upload(picture);

    const newPost = await Post.create({
      name,
      prompt,
      picture: pictureUrl.url,
    });

    res.status(201).json({ success: true, data: newPost });
  } catch (error) {
    console.log("aqui", error);
    res.status(500).json({ success: false, message: error });
  }
});

export default router;
