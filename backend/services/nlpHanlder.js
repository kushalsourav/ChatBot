export function validateQuestion(question) {
  const cdKeywords = ["segment", "mparticle", "lytics", "zeotap", "data", "integration", "source"];
  return cdKeywords.some((keyword) => question.toLowerCase().includes(keyword));
}

