import { fetchDocumentation } from "../services/webScraper.js";

export const askCDP = async (req, res) => {
  const { question, platform } = req.body;

  if (!question || !platform) {
    return res
      .status(400)
      .json({ message: "Question and Platform are required" });
  }

  const answer = await fetchDocumentation(platform, question);
  res.json({ answer });
}; 