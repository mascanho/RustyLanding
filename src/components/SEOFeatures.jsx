import Heading from "./Heading";
import Section from "./Section";
import { benefits } from "../constants";

const SEOFeatures = () => {
  const features = [
    {
      id: "0",
      title: "Find Broken Links",
      text: "Crawl a website instantly and find broken links (404s) and server errors. Bulk export the errors and source URLs to fix, or send to a developer.",
      icon: "🔗",
    },
    {
      id: "1",
      title: "Audit Redirects",
      text: "Find temporary and permanent redirects, identify redirect chains and loops, or upload a list of URLs to audit in a site migration.",
      icon: "🔄",
    },
    {
      id: "2",
      title: "Analyse Page Titles & Meta Data",
      text: "Analyse page titles and meta descriptions during a crawl and identify those that are too long, short, missing, or duplicated across your site.",
      icon: "📝",
    },
    {
      id: "3",
      title: "Discover Duplicate Content",
      text: "Discover exact duplicate URLs with an md5 algorithmic check, partially duplicated elements such as page titles, descriptions or headings and find low content pages.",
      icon: "📋",
    },
    {
      id: "4",
      title: "AI Enabled",
      text: "AI enabled features that can help you identify potential issues with your website's content, such as duplicate content, low-quality content, and content that is not optimized for search engines.",
      icon: "🔍",
    },
    {
      id: "5",
      title: "Review Robots & Directives",
      text: "View URLs blocked by robots.txt, meta robots or X-Robots-Tag directives such as 'noindex' or 'nofollow', as well as canonicals and rel='next' and rel='prev'.",
      icon: "🤖",
    },
    {
      id: "6",
      title: "Analyse Server Logs",
      text: "Analyze server logs to identify patterns, errors, and performance issues. Identify bottlenecks, slow queries, and resource usage. Discover LLM patterns and trends.",
      icon: "🗺️",
    },
    {
      id: "7",
      title: "Integrate with GA, GSC, PSI & MS Clarity",
      text: "Connect to the Google Analytics, Search Console, PageSpeed Insights and Microsoft Clarity APIs and fetch user and performance data for all URLs in a crawl for greater insight.",
      icon: "📊",
    },
    {
      id: "8",
      title: "Crawl JavaScript Websites",
      text: "Render web pages using the integrated Chromium WRS to crawl dynamic, JavaScript rich websites and frameworks, such as Angular, React and Vue.js.",
      icon: "⚡",
    },
    {
      id: "9",
      title: "Visualise Site Architecture",
      text: "Evaluate internal linking and URL structure using interactive crawl and directory force-directed diagrams and tree graph site visualisations.",
      icon: "🌐",
    },
    {
      id: "10",
      title: "Schedule Audits",
      text: "Schedule crawls to run at chosen intervals and auto export crawl data to any location, including Google Sheets. Or automate entirely via command line.",
      icon: "⏰",
    },
    {
      id: "11",
      title: "Compare Crawls & Staging",
      text: "Track progress of SEO issues and opportunities and see what's changed between crawls. Compare staging against production environments using advanced URL Mapping.",
      icon: "🔬",
    },
  ];

  return (
    <Section id="seo-features" crosses>
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-3xl"
          title="Covering SEO, Analytics, and More"
          tag="POWERFUL FEATURES"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              className="block relative p-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-md"
              key={feature.id}
            >
              <div className="relative z-2 flex flex-col min-h-[15rem] p-[2rem] bg-n-8 rounded-md">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-12 h-12 text-2xl bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mr-4">
                    {feature.icon}
                  </div>
                  <h5 className="h5 mb-0">{feature.title}</h5>
                </div>
                <p className="body-2 text-n-3">{feature.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default SEOFeatures;
