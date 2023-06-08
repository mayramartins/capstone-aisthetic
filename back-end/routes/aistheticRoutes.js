import express from "express";
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

// making sure variables are getting populated
dotenv.config();

const router = express.Router();
