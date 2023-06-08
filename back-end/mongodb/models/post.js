import mongoose from "mongoose";

const Post = new mongoose.Schema({
  name: { type: String, required: true },
  name: { prompt: String, required: true },
  name: { picture: String, required: true },
});

const PostSchema = mongoose.model("Post", post);

export default PostSchema;
