import { randomPrompts } from "../prompts";

export function getRandomPrompt(prompt) {
  // getting a random index 1-49 inside my random prompts
  const randomIndex = Math.floor(Math.random() * randomPrompts.length);
  const randomPrompt = randomPrompts[randomIndex];

  // implementing logic to not to get the same prompt 2x
  if (randomPrompt === prompt) return getRandomPrompt(prompt);

  return randomPrompt;
}
