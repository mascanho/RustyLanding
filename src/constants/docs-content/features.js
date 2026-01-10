import { roadmap1 } from "../../assets";

export const featuresContent = {
  features: {
    title: "Features Overview",
    blocks: [
      {
        type: "text",
        content:
          "RustySEO comes packed with features to help you rank better. Explore specific features using the navigation menu. Explore the app as much as you can and provide feedback to help us improve. If a new feature is missing or you have suggestions, please let us know.",
      },

      {
        type: "text",
        content:
          "Explore the features in the index bar to better understand RustySEO's full potential.",
      },

      {
        type: "subtitle",
        content: "Main features:",
      },
      {
        type: "list",
        items: [
          "Shallow crawl capabilities",
          "Deep crawl capabilities",
          "SEO Report and Scoring",
          "Technical Diagnostics (core web vitals, Page Speed Insights)",
          "On-Page SEO Analysis (content analysis, Keyword density)",
          "Improvements / Suggestions on crawled pages",
          "Task Manager / Tracker",
          "Reporting & Exporting (CSV, Excel, Google Sheets, PDF)",
          "Topic & Keyword generator",
          "AI-Enabled Features",
          "Built-in AI chatbot with context",
          "Crawl history",
          "Image conversion and optimization (unstable)",
          "Light / Dark mode",
        ],
      },
      {
        type: "note",
        title: "Release cycle",
        content:
          "New releases are available on a monthly basis. On them you can usually find new features or improvements on the existing ones. Bug fixes are handled based on severety and on availability to fix them. This is usually solved within a couple of days. 🤞",
      },
      {
        type: "text",
        content:
          "For more information about the new features please consult our roadmap. Feel free to reach out to us if you have any questions or suggestions.",
      },
    ],
  },
  "shallow-crawl": {
    title: "Shallow Crawler",
    blocks: [
      {
        type: "text",
        content:
          "The Shallow Crawler is designed for single-page analysis. It allows you to have an overview of all your page SEO and content-related details. It is ideal that you have a Page Speed Insights API key. Learn more about Page Speed Insights [here](https://pagespeed.web.dev/). It offers diferent insights for an on-page analysis.",
      },

      {
        type: "image",
      },
      {
        type: "image",
        src: roadmap1,
        alt: "Placeholder for a GIF demonstrating a feature",
      },
      {
        type: "video",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        title: "Getting Started with RustySEO",
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
