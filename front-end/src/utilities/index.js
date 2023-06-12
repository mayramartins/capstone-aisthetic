import FileSaver from "file-saver";

import { randomPrompts } from "../prompts";

export function getRandomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * randomPrompts.length);
  const randomPrompt = randomPrompts[randomIndex];

  if (randomPrompt === prompt) return getRandomPrompt(prompt);

  return randomPrompt;
}

export async function downloadImage(_id, picture) {
  FileSaver.saveAs(picture, `download-${_id}.jpg`);
}
