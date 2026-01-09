export const featuresContent = {
  features: {
    title: "Features Overview",
    blocks: [
      {
        type: "text",
        content:
          "RustySEO comes packed with features to help you rank better. Explore specific features using the navigation menu.",
      },
      {
        type: "list",
        items: [
          "Shallow & deep crawl capabilities",
          "Technical Diagnostics (core web vitals, Page Speed Insights)",
          "On-Page SEO Analysis (content analysis, Keyword density)",
          "Improvements / Suggestions on page crawl",
          "Task Manager / Tracker",
          "Reporting (CSV, Excel, Google Sheets, PDF)",
          "Topic & Keyword generator",
          "Local LLM (ollama) & Free API LLM (Google Gemini)",
          "Built-in AI chatbot with crawl context",
          "Crawl history",
          "Image conversion and optimization",
        ],
      },
    ],
  },
  "shallow-crawl": {
    title: "Shallow Crawler",
    blocks: [
      {
        type: "text",
        content:
          "The Shallow Crawler is designed for single-page analysis. It provides quick insights into specific URLs without crawling the entire domain.",
      },
      {
        type: "note",
        title: "Use Case",
        content:
          "Perfect for spot-checking individual pages after updates or for competitor analysis on specific landing pages.",
      },
    ],
  },
  "deep-crawl": {
    title: "Deep Crawler",
    blocks: [
      {
        type: "text",
        content:
          "The Deep Crawler performs a comprehensive scan of your entire website. It follows internal links to discover and analyze all accessible pages.",
      },
      {
        type: "text",
        content: "Key capabilities:",
      },
      {
        type: "list",
        items: [
          "Multi-threaded crawling for speed",
          "Configurable depth and stop words",
          "Integration with Google Search Console queries and metrics",
          "Robots.txt parsing",
        ],
      },
    ],
  },
  "log-analyser": {
    title: "Log Analyser",
    blocks: [
      {
        type: "text",
        content:
          "Analyze your server logs (Apache / Nginx) to gain actionable insights into bot traffic and user behavior.",
      },
      {
        type: "list",
        items: [
          "Ingest GSC API data",
          "Bot validation (Google, Bing, OpenAI)",
          "WP Rocket detection",
          "User agent segmentation",
          "IP masking",
        ],
      },
    ],
  },
  "http-checker": {
    title: "HTTP Checker",
    blocks: [
      {
        type: "text",
        content:
          "A tool to verify HTTP status codes and analyze response headers for security and performance.",
      },
      {
        type: "note",
        title: "Security",
        content: "Includes checks for common security headers.",
      },
    ],
  },
  "google-ads-sim": {
    title: "Google Ads Simulator",
    blocks: [
      {
        type: "text",
        content:
          "Simulate how your pages might appear in Google Ads placements. Useful for optimizing titles and descriptions for PPC campaigns.",
      },
      {
        type: "text",
        content: "Includes better CSV export options.",
      },
    ],
  },
  "page-speed-insights": {
    title: "Page Speed Insights",
    blocks: [
      {
        type: "text",
        content:
          "Integrated Google PageSpeed Insights analysis to check your core web vitals and performance scores directly within RustySEO.",
      },
      {
        type: "note",
        title: "Rate Limiting",
        content:
          "Includes improved rate limiting handling and URL encoding support.",
      },
    ],
  },

};
