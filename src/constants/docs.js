
export const docsNavigation = [
  {
    title: "Getting Started",
    links: [
      { title: "Introduction", slug: "introduction" },
      { title: "Installation", slug: "installation" },
      { title: "Quick Start", slug: "quick-start" },
    ],
  },
  {
    title: "Core Concepts",
    links: [
      { title: "Architecture", slug: "architecture" },
      { title: "Configuration", slug: "configuration" },
      { title: "Authentication", slug: "authentication" },
    ],
  },
  {
    title: "API Reference",
    links: [
      { title: "Endpoints", slug: "endpoints" },
      { title: "Models", slug: "models" },
      { title: "Errors", slug: "errors" },
    ],
  },
];

export const docsContent = {
  introduction: {
    title: "Introduction",
    content: "Welcome to the RustySEO documentation. RustySEO is a high-performance SEO tool built with Rust and React designed to give you the fastest insights into your website performance.",
  },
  installation: {
    title: "Installation",
    content: "To install RustySEO, you can download the latest release from our GitHub repository. We support MacOS, Linux, and Windows.",
  },
  "quick-start": {
    title: "Quick Start",
    content: "After installing, simply run the application and enter your domain URL. RustySEO will automatically start identifying key SEO metrics.",
  },
  architecture: {
    title: "Architecture",
    content: "RustySEO uses a Tauri-based architecture with a Rust backend for heavy processing and a React frontend for a smooth user experience.",
  },
  configuration: {
    title: "Configuration",
    content: "You can configure RustySEO by editing the config.toml file in your user directory. Settings include crawl depth, user agent, and concurrent request limits.",
  },
  authentication: {
    title: "Authentication",
    content: "RustySEO supports standard API key authentication for integrating with third-party tools like Google Search Console and Google Analytics 4.",
  },
  endpoints: {
    title: "Endpoints",
    content: "When running in server mode, RustySEO exposes several REST endpoints for programmatic access to crawl data.",
  },
  models: {
    title: "Models",
    content: "Data models in RustySEO are designed to be efficient. We use SQLite for local storage and handle millions of rows with ease.",
  },
  errors: {
    title: "Errors",
    content: "Common errors usually relate to network timeouts or rate limiting from target websites. RustySEO has built-in backoff strategies to handle these.",
  },
};
