import Heading from "./Heading";
import Section from "./Section";
import FloatingOrb from "./FloatingOrb";

const SEOFeatures = () => {
  const features = [
    {
      id: "0",
      title: "Find Broken Links",
      text: "Crawl a website instantly and find broken links (404s) and server errors. Bulk export the errors and source URLs to fix, or send to a developer.",
      color: "from-purple-500 via-pink-500 to-red-500",
    },
    {
      id: "1",
      title: "Audit Redirects",
      text: "Find temporary and permanent redirects, identify redirect chains and loops, or upload a list of URLs to audit in a site migration.",
      color: "from-blue-500 via-cyan-500 to-teal-500",
    },
    {
      id: "2",
      title: "Analyse Page Titles & Meta Data",
      text: "Analyse page titles and meta descriptions during a crawl and identify those that are too long, short, missing, or duplicated across your site.",
      color: "from-green-500 via-emerald-500 to-cyan-500",
    },
    {
      id: "3",
      title: "Discover Duplicate Content",
      text: "Discover exact duplicate URLs with an md5 algorithmic check, partially duplicated elements such as page titles, descriptions or headings and find low content pages.",
      color: "from-yellow-500 via-orange-500 to-red-500",
    },
    {
      id: "4",
      title: "AI Enabled",
      text: "AI enabled features that can help you identify potential issues with your website's content, such as duplicate content, low-quality content, and content that is not optimized for search engines.",
      color: "from-indigo-500 via-purple-500 to-pink-500",
    },
    {
      id: "5",
      title: "Review Robots & Directives",
      text: "View URLs blocked by robots.txt, meta robots or X-Robots-Tag directives such as 'noindex' or 'nofollow', as well as canonicals and rel='next' and rel='prev'.",
      color: "from-rose-500 via-fuchsia-500 to-purple-500",
    },
    {
      id: "6",
      title: "Analyse Server Logs",
      text: "Analyze server logs to identify patterns, errors, and performance issues. Identify bottlenecks, slow queries, and resource usage. Discover LLM patterns and trends.",
      color: "from-cyan-500 via-blue-500 to-indigo-500",
    },
    {
      id: "7",
      title: "Integrate with GA, GSC, PSI, Clarity & BI",
      text: "Connect to the Google Analytics, Search Console, PageSpeed Insights and Microsoft Clarity APIs and fetch user and performance data for all URLs in a crawl for greater insight.",
      color: "from-amber-500 via-orange-500 to-pink-500",
    },
    {
      id: "8",
      title: "Crawl JavaScript Websites",
      text: "Render web pages using the integrated Chromium WRS to crawl dynamic, JavaScript rich websites and frameworks, such as Angular, React and Vue.js.",
      color: "from-emerald-500 via-teal-500 to-cyan-500",
    },
    {
      id: "9",
      title: "Visualise Site Architecture",
      text: "Evaluate internal linking and URL structure using interactive crawl and directory force-directed diagrams and tree graph site visualisations.",
      color: "from-violet-500 via-purple-500 to-indigo-500",
    },
    {
      id: "10",
      title: "Schedule Audits",
      text: "Schedule crawls to run at chosen intervals and auto export crawl data to any location, including Google Sheets. Or automate entirely via command line.",
      color: "from-lime-500 via-green-500 to-emerald-500",
    },
    {
      id: "11",
      title: "Compare Crawls & Staging",
      text: "Track progress of SEO issues and opportunities and see what's changed between crawls. Compare staging against production environments using advanced URL Mapping.",
      color: "from-sky-500 via-blue-500 to-indigo-500",
    },
    {
      id: "12",
      title: "Keyword Tracking",
      text: "Track keyword rankings straight from Google Search Console and monitor keyword performance over time.",
      color: "from-yellow-500 via-orange-500 to-red-500",
    },
    {
      id: "13",
      title: "Analytics Integrations",
      text: "Integrate with Google Analytics, Google Search Console, and other analytics platforms to gain a comprehensive view of your website's performance and achirve a holistic view of your marketing efforts.",
      color: "from-purple-500 via-pink-500 to-red-500",
    },
  ];

  return (
    <Section id="seo-features" crosses>
      {/* Decorative floating orbs */}
      <FloatingOrb
        className="top-10 left-10"
        size={120}
        color1="#8b5cf6"
        color2="#ec4899"
        duration={15}
        delay={0}
      />
      <FloatingOrb
        className="top-1/2 right-20"
        size={80}
        color1="#06b6d4"
        color2="#3b82f6"
        duration={20}
        delay={2}
      />
      <FloatingOrb
        className="bottom-20 left-1/3"
        size={150}
        color1="#10b981"
        color2="#84cc16"
        duration={25}
        delay={1}
      />
      <FloatingOrb
        className="top-1/3 right-1/4"
        size={100}
        color1="#f59e0b"
        color2="#ef4444"
        duration={18}
        delay={3}
      />

      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-3xl"
          title="Covering SEO, Analytics, and More"
          tag="POWERFUL FEATURES"
        />

        <div
          className="relative mt-10 lg:mt-20 overflow-hidden py-4"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          {/* Top Marquee Row */}
          <div className="flex gap-6 animate-scroll-left w-max hover:pause">
            {[...features, ...features].map((feature, index) => (
              <div
                key={`${feature.id}-top-${index}`}
                className={`relative w-[380px] p-1 rounded-3xl bg-gradient-to-br ${feature.color} hover:scale-[1.03] transition-all duration-500 shadow-2xl hover:shadow-3xl`}
                style={{
                  boxShadow: `0 10px 30px -10px ${feature.color.includes("purple") ? "rgba(139, 92, 246, 0.3)" : feature.color.includes("blue") ? "rgba(59, 130, 246, 0.3)" : feature.color.includes("green") ? "rgba(16, 185, 129, 0.3)" : "rgba(251, 146, 60, 0.3)"}`,
                }}
              >
                <div className="bg-n-8/95 backdrop-blur-2xl rounded-[22px] p-6 h-full flex flex-col relative overflow-hidden">
                  {/* Decorative gradient overlays */}
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-20 rounded-tr-[22px] blur-2xl`}
                  />
                  <div
                    className={`absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr ${feature.color} opacity-15 rounded-bl-[22px] blur-xl`}
                  />

                  {/* Animated corner accents */}
                  <div
                    className={`absolute top-2 right-2 w-4 h-4 rounded-full bg-gradient-to-r ${feature.color} animate-pulse shadow-lg`}
                  />
                  <div
                    className={`absolute bottom-2 left-2 w-3 h-3 rounded-full bg-gradient-to-r ${feature.color} animate-pulse shadow-lg`}
                    style={{ animationDelay: "1s" }}
                  />

                  {/* Feature number badge */}
                  {/* <div
                    className={`absolute top-4 left-4 w-8 h-8 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center text-n-1 font-bold text-xs shadow-lg animate-bounce`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {parseInt(feature.id) + 1}
                  </div>*/}

                  <div className="flex items-start mb-4 relative z-1 pt-8">
                    {/* <div
                      className={`w-4 h-4 rounded-full bg-gradient-to-r ${feature.color} mr-3 mt-2 shadow-lg animate-pulse`}
                    />*/}
                    <h5 className="h5 mb-0 flex-1 bg-gradient-to-r from-n-1 to-n-2 bg-clip-text text-transparent">
                      {feature.title}
                    </h5>
                  </div>
                  <p className="body-2 text-n-3 relative z-1 leading-relaxed">
                    {feature.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Marquee Row (Reverse) */}
          <div className="flex gap-6 mt-8 animate-scroll-right w-max hover:pause">
            {[...features.reverse(), ...features].map((feature, index) => (
              <div
                key={`${feature.id}-bottom-${index}`}
                className={`relative w-[380px] p-1 rounded-3xl bg-gradient-to-tr ${feature.color} hover:scale-[1.03] transition-all duration-500 shadow-2xl hover:shadow-3xl`}
                style={{
                  boxShadow: `0 10px 30px -10px ${feature.color.includes("purple") ? "rgba(139, 92, 246, 0.3)" : feature.color.includes("blue") ? "rgba(59, 130, 246, 0.3)" : feature.color.includes("green") ? "rgba(16, 185, 129, 0.3)" : "rgba(251, 146, 60, 0.3)"}`,
                }}
              >
                <div className="bg-n-8/95 backdrop-blur-2xl rounded-[22px] p-6 h-full flex flex-col relative overflow-hidden">
                  {/* Decorative gradient overlays */}
                  <div
                    className={`absolute top-0 left-0 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-20 rounded-tl-[22px] blur-2xl`}
                  />
                  <div
                    className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tr ${feature.color} opacity-15 rounded-br-[22px] blur-xl`}
                  />

                  {/* Animated corner accents */}
                  <div
                    className={`absolute top-2 left-2 w-4 h-4 rounded-full bg-gradient-to-r ${feature.color} animate-pulse shadow-lg`}
                  />
                  <div
                    className={`absolute bottom-2 right-2 w-3 h-3 rounded-full bg-gradient-to-r ${feature.color} animate-pulse shadow-lg`}
                    style={{ animationDelay: "1s" }}
                  />

                  {/* Feature number badge */}
                  {/* <div
                    className={`absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center text-n-1 font-bold text-xs shadow-lg animate-bounce`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {parseInt(feature.id) + 1}
                  </div>*/}

                  <div className="flex items-start mb-4 relative z-1 pt-8">
                    {/* <div
                      className={`w-4 h-4 rounded-full bg-gradient-to-r ${feature.color} mr-3 mt-2 shadow-lg animate-pulse`}
                    />*/}
                    <h5 className="h5 mb-0 flex-1 bg-gradient-to-r from-n-1 to-n-2 bg-clip-text text-transparent">
                      {feature.title}
                    </h5>
                  </div>
                  <p className="body-2 text-n-3 relative z-1 leading-relaxed">
                    {feature.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default SEOFeatures;
