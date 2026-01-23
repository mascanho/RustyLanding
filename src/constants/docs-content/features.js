import {
  deep,
  headerChecker,
  httpChecker,
  logs,
  roadmap1,
  shallow,
  tui,
} from "../../assets";

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
          "Google PPC simulator",
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
        type: "note",
        title: "Important",
        content:
          "This module of RustySEO has seen less development due to time constraints. Some functionalities could potentially have bugs. Depending on demand it might be refined further down the line",
      },

      {
        type: "image",
        src: shallow,
        alt: "Shallow Crawler demonstration",
      },
      {
        type: "subtitle",
        content: "Some features include:",
      },
      {
        type: "list",
        items: [
          "Technical SEO checklist",
          "Page score and checklist",
          "Content analysis with AI",
          "Page summary",
          "Topic suggestions",
          "Queries from GSC integration",
          "Page Speed Insights metrics",
          "Other",
        ],
      },
      {
        type: "text",
        content:
          "Explore the Shallow Crawler to get a quick overview of your pages and identify potential SEO issues and content gaps. Get all the insights that you need to optimize your on-page SEO effectively. This module should give you a perfect picture of your on-page details from end-to-end. ",
      },
    ],
  },
  "deep-crawl": {
    title: "Deep Crawler",
    blocks: [
      {
        type: "text",
        content:
          "The Deep Crawler performs a comprehensive scan of your entire website. It follows internal links to discover and analyze all accessible pages. It is ideal for large websites where you need to identify issues at scale. It provides the same insights as the Shallow Crawler but at scale, allowing you to crawl thousands of pages without limits.",
      },
      {
        type: "image",
        src: deep,
        alt: "deep crawler demonstration",
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
          "JavaScript rendering support",
          "Dashboard views for data visualization",
          "Google Search Console & Google Analytics 4 integration",
          "Keyword analysis",
          "Website tree view",
          "Data extraction",
          "Redirect chain analysis",
          "Export data",
        ],
      },
      {
        type: "note",
        title: "Important",
        content:
          "This module is under heavy development and new features are being added on a regular basis. If you have any suggestions or feedback, please reach out to us.",
      },
      {
        type: "text",
        content:
          "The Deep Crawler is perfect for technical SEO audits, large-scale site analysis, and ongoing website monitoring. It helps you uncover hidden issues, optimize crawl budget, and improve overall site performance.",
      },
    ],
  },
  "log-analyser": {
    title: "Log Analyser",
    blocks: [
      {
        type: "text",
        content:
          "Analyze your server logs (Apache / Nginx) to gain actionable insights into bot traffic and user behavior. The Log Analyser helps you identify crawl budget waste, validate bot traffic, and segment user agents for better SEO performance. Discover content relevance and machine/human engagement. It integrates with Google Search Console to correlate log data with search performance and rankings.",
      },
      {
        type: "image",
        src: logs,
        alt: "Log Analyser demonstration",
      },

      {
        type: "subtitle",
        content: "Features include:",
      },

      {
        type: "list",
        items: [
          "Ingest GSC API data (API sync or Manual upload)",
          "Bot validation (Google, Bing, OpenAI)",
          "Content relevance analysis",
          "Content segmentation",
          "User agent segmentation",
          "IP masking",
        ],
      },
      {
        type: "note",
        title: "Important",
        content:
          "All log data is processed locally on your machine. No data is sent to external servers, ensuring your privacy and data security.",
      },
    ],
  },
  "http-checker": {
    title: "HTTP Checker",
    blocks: [
      {
        type: "text",
        content:
          "A tool to verify HTTP status codes and analyze response headers for security and performance. Check multiple websites for HTTP and Header related issues.",
      },
      {
        type: "image",
        src: headerChecker,
        alt: "HTTP Checker demonstration",
      },
      {
        type: "subtitle",
        content: "Features include:",
      },
      {
        type: "list",
        items: [
          "Bulk URL status code checking",
          "Redirect chain analysis",
          "Response time measurement",
          "Header analysis for security and performance",
        ],
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
  "tui-cli": {
    title: "Page Speed Insights",
    blocks: [
      {
        type: "text",
        content:
          "Integrated Google PageSpeed Insights analysis to check your core web vitals and performance scores directly within RustySEO.",
      },
      {
        type: "image",
        src: tui,
        alt: "TUI / CLI demonstration",
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
