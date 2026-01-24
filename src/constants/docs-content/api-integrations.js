export const apiIntegrationsContent = {
  "api-integrations": {
    title: "API Integrations",
    blocks: [
      {
        type: "text",
        content:
          'RustySEO integrates with various APIs to enhance functionality. We call them "Connectors". These will expand the capabilities of the platform and allow users to make better decisions based on comprehensive data.\n\n The goal is to empower users with seamless integration and synchronized data, enabling a unified experience across multiple services and tools.',
      },
      {
        type: "subtitle",
        content: "Available Connectors",
      },
      {
        type: "list",
        items: [
          "Google Search Console (GSC)",
          "Google Analytics 4 (GA4)",
          "Page Speed Insights",
          "Google Gemini / Ollama",
          "Microsoft Clarity",
          "Microsoft PowerBI",
        ],
      },
      {
        type: "note",
        title: "Upcoming Connectors",
        content:
          "Therer are a few more integrations to be explored. For now, this depends on the time avaialable and the potential demand for them",
      },
    ],
  },
  "gsc-integration": {
    title: "Google Search Console",
    blocks: [
      {
        type: "text",
        content:
          "This integration allows the user to connect the [Google Search Console API](https://developers.google.com/webmaster-tools). It allows user to track in real-time search performance and website metrics, comparing it with the crawled data from RustySEO.",
      },
      {
        type: "bold-title",
        content: "Caveat",
      },
      {
        type: "text",
        content:
          "Google Search Console has limitations. Downloading all data is possible using pagination. Each page is currently assigned with 25,000 max entries. Depending on the date ranges selected and the data available within Search Console itself and the amount of traffic that Google gets for your website, this could mean that not all data is downloaded for longer ranged dates. To mitigate this, it is recommended to use shorter date ranges when pulling data from GSC.",
      },
      {
        type: "text",
        content:
          "Future versions might look into storing data locally to allow for historic comparisons and trend analysis over time. This would require additional storage and database management within the application. For now, the focus is on real-time data retrieval and analysis.",
      },
    ],
  },
  "ga4-integration": {
    title: "Google Analytics 4",
    blocks: [
      {
        type: "text",
        content:
          "Integrate with [Google Analytics 4](https://developers.google.com/analytics) to access website analytics data and user behavior insights.",
      },
      {
        type: "list",
        items: [
          "Traffic analysis and user metrics",
          "Conversion tracking",
          "Audience demographics",
          "Behavior flow analysis",
        ],
      },
    ],
  },
  "clarity-integration": {
    title: "Microsoft Clarity",
    blocks: [
      {
        type: "text",
        content:
          "Connect to [Microsoft Clarity](https://clarity.microsoft.com/) for heatmaps and session recordings to understand user interactions.",
      },
      {
        type: "list",
        items: [
          "Heatmap analysis",
          "Session recordings",
          "User journey tracking",
          "Click patterns analysis",
        ],
      },
    ],
  },

  "pagespeed-integration": {
    title: "PageSpeed Insights",
    blocks: [
      {
        type: "text",
        content:
          "Access [Google PageSpeed Insights](https://developers.google.com/speed/docs/insights/v5/get-started) API to analyze page performance and core web vitals. This integration helps identify performance bottlenecks and optimization opportunities. It is essential for improving user experience and SEO rankings. Its Google's recommended tool for performance analysis.",
      },
      {
        type: "list",
        items: [
          "Core Web Vitals analysis",
          "Performance scoring",
          "Optimization suggestions",
          "Mobile and desktop metrics",
        ],
      },
    ],
  },
  "gemini-integration": {
    title: "Google Gemini / Ollama",
    blocks: [
      {
        type: "text",
        content:
          "Leverage AI capabilities through [Google Gemini](https://ai.google.dev/) or local [Ollama](https://ollama.com/) models for advanced SEO analysis.",
      },
      {
        type: "list",
        items: [
          "Content analysis and optimization",
          "Keyword generation",
          "SEO recommendations",
          "Natural language processing",
        ],
      },
      {
        type: "note",
        title: "Important",
        content:
          "We recommend using Gemini for now. Ollama integration is experimental and may have limitations based on the local model used. Ensure compatibility and performance when using local AI models. Future releases will focus on better LLM integrations including API-based models from various providers.",
      },

      {
        type: "bold-title",
        content: "Future LLM integrations",
      },

      {
        type: "list",
        items: ["OpenAI", "Mistral", "Anthropic"],
      },
    ],
  },
};
