import { scrapeSegment } from "../scraper/segment.js";
import { scrapeMParticle } from "../scraper/mparticle.js";
import { scrapeLytics } from "../scraper/lytics.js";
import { scrapeZeotap } from "../scraper/zeotap.js";

export const fetchDocumentation = async (platform, query) => {
  switch (platform.toLowerCase()) {
    case "segment":
      return await scrapeSegment(query);
    case "mparticle":
      return await scrapeMParticle(query);
    case "lytics":
      return await scrapeLytics(query);
    case "zeotap":
      return await scrapeZeotap(query);
    default:
      return "Platform not supported.";
  }
};

