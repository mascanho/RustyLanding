export const faqTroubleshootingContent = {
  "faq-troubleshooting": {
    title: "Troubleshooting",
    blocks: [
      {
        type: "text",
        content: "Common issues and their solutions.",
      },
      {
        type: "subtitle",
        content: "Crawling Issues"
      },
      {
        type: "text",
        content: "**Why is my crawl running slowly?**",
      },
      {
        type: "text",
        content: "Slow crawls can be caused by:\n- Slow internet connection\n- High latency to target website\n- Rate limiting on the target server\n- Too many concurrent requests\nSolutions: Adjust concurrent request settings, increase delays between requests, or crawl during off-peak hours."
      },
      {
        type: "text",
        content: "**Why are some pages not being crawled?**",
      },
      {
        type: "text",
        content: "Common causes:\n- Pages blocked by robots.txt\n- No-follow links\n- Authentication required\n- JavaScript-heavy content\nCheck the crawl log for specific error messages."
      },
      {
        type: "subtitle",
        content: "API Connection Problems"
      },
      {
        type: "text",
        content: "**I'm getting API connection errors. What should I do?**",
      },
      {
        type: "text",
        content: "Try these steps:\n1. Verify your API keys are correct\n2. Check if you've exceeded rate limits\n3. Ensure API credentials have necessary permissions\n4. Test the API directly using their console\n5. Check if the service is experiencing outages"
      },
      {
        type: "text",
        content: "**Why isn't all my data downloading from Google Search Console?**",
      },
      {
        type: "text",
        content: "GSC has pagination limits of 25,000 entries per page. For longer date ranges or high-traffic sites, you may need to:\n- Use shorter date ranges\n- Break analysis into multiple sessions\n- Accept that some historical data may be truncated"
      },
      {
        type: "subtitle",
        content: "Performance Issues"
      },
      {
        type: "text",
        content: "**RustySEO is crashing or freezing. What can I do?**",
      },
      {
        type: "text",
        content: "Try these solutions:\n- Close other applications to free memory\n- Reduce concurrent request settings\n- Use shallow crawling for initial analysis\n- Check for updates to RustySEO\n- Report the issue with system details"
      },
    ],
  },
};