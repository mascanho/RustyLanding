export const faqApiContent = {
  "faq-api": {
    title: "API Integrations",
    blocks: [
      {
        type: "text",
        content: "Questions about API connections and third-party integrations.",
      },
      {
        type: "subtitle",
        content: "Supported APIs"
      },
      {
        type: "text",
        content: "**Which APIs does RustySEO support?**",
      },
      {
        type: "text",
        content: "RustySEO integrates with:\n- Google Search Console (GSC)\n- Google Analytics 4 (GA4)\n- PageSpeed Insights\n- Microsoft Clarity\n- SEMrush\n- AI models: Google Gemini and local Ollama"
      },
      {
        type: "text",
        content: "**Do I need to pay for API access?**",
      },
      {
        type: "text",
        content: "Cost varies by service:\n- Google APIs (GSC, GA4, PSI): Free with generous quotas\n- Microsoft Clarity: Free\n- SEMrush: Requires paid subscription\n- Google Gemini: Free tier available\n- Ollama: Free (runs locally)"
      },
      {
        type: "subtitle",
        content: "Setup & Configuration"
      },
      {
        type: "text",
        content: "**How do I set up API keys?**",
      },
      {
        type: "text",
        content: "API keys can be configured in the Connectors section of the configuration menu. Each service has specific setup instructions and authentication requirements."
      },
      {
        type: "text",
        content: "**What are the API rate limits?**",
      },
      {
        type: "text",
        content: "Each service has different rate limits:\n- GSC: 25,000 queries per day\n- GA4: 50,000 requests per project per day\n- PageSpeed Insights: 25,000 queries per day\n- SEMrush: Varies by subscription level\nRustySEO includes rate limiting to prevent exceeding these limits."
      },
    ],
  },
};