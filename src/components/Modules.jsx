import { useState } from "react";
import Section from "./Section";
import Heading from "./Heading";
import {
  deepCrawler,
  logAnalysis,
  shallowCrawler,
  kwTracking,
  httpChecker,
  tui,
  imgConverter,
  ppcScreenshot,
} from "../assets";

const modules = [
  {
    id: "0",
    title: "Deep Crawler",
    description:
      "Deep crawl your entire website to uncover broken links, status code issues, and SEO opportunities at scale and without crawl limits.",
    image: deepCrawler,
    features: [
      "Multi-threaded crawling",
      "JavaScript rendering support",
      "Dashboard views",
      "Integrations with GSC & GA4",
      "Taskmanager",
      "Keyword analysis",
    ],
    badge: "Module",
    color: "from-purple-500 to-indigo-500",
  },
  {
    id: "1",
    title: "Log Analysis",
    description:
      "Ingest and analyze (Apache/Nginx) server logs to identify bot traffic, crawl budget waste, and user behavior patterns. Validate bots and segment user agents.",
    image: logAnalysis,
    features: [
      "Bot traffic analysis",
      "Crawl budget optimization",
      "User behavior insights",
      "Search Console Integration",
      "Ranking correlation",
      "Pattern detection",
    ],
    badge: "Module",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "2",
    title: "Shallow Crawler",
    description:
      "Quickly crawl pages of your website to identify on-page SEO issues, metadata problems, and content gaps. With scoring and validation tests.",
    image: shallowCrawler,
    features: [
      "Checklist scoring",
      "Page overview",
      "AI content analysis",
      "Page summary",
      "Topic suggestions ",
      "Queries from GSC",
    ],

    badge: "Module",
    color: "from-emerald-500 to-teal-500",
  },

  {
    id: "3",
    title: "Keyword Tracking",
    description:
      "Track keyword performance over time, monitor rankings, and analyze trends to optimize your SEO strategy.",
    image: kwTracking,
    features: [
      "Ranking history",
      "Keyword trend analysis",
      "Performance metrics",
      "Competitor comparison",
      "SERP feature tracking",
    ],
    badge: "Analytics",
    color: "from-orange-500 to-amber-500",
  },
  {
    id: "4",
    badge: "Tool",
    title: "HTTP Headers",
    description:
      "Check HTTP status codes, redirects, and response times for URLs to ensure optimal site health and user experience.",
    image: httpChecker,
    features: [
      "Header analysis",
      "Redirect chain detection",
      "Server configuration checks",
      "Security header validation",
      "Server response time monitoring",
      "Uptime checks",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "5",
    badge: "Experimental",
    title: "CLI / TUI Interface",
    description:
      "Need to run SEO audits and crawls directly from your terminal? Our Command Line Interface (CLI) and Text User Interface (TUI) have got you covered.",
    image: tui,
    features: [
      "Crawl huge websites from terminal",
      "Run crawlers in CI/CD pipelines",
      "Run from the cloud",
      "Scriptable commands",
      "Automate with CRON jobs",
      "Headless operation",
    ],
    color: "from-red-500 to-pink-500",
  },
  {
    id: "6",
    badge: "Tool",
    title: "Image Converter",
    description:
      "Convert images to the desired format, such as JPEG, WEbP or PNG, to optimize the website's performance. Single or bulk with your own naming convention.",
    image: imgConverter,
    features: [
      "Single image conversion",
      "Bulk image conversion",
      "Custom naming conventions",
      "Format options (JPEG, WebP, PNG)",
      "Performance optimization",
      "Metadata preservation",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "7",
    badge: "Tool",
    title: "Google Ads Sim.",
    description:
      "Simulate how your pages might appear in Google Ads placements. Useful for optimizing titles and descriptions for PPC campaigns. With better CSV import/export options.",
    image: ppcScreenshot,
    features: [
      "Ad preview simulation",
      "Title and description optimization",
      "Desktop / Mobile accurate preview",
      "Youtube Preview",
      "Display URL customization",
      "Display Preview",
    ],
    color: "from-emerald-500 to-teal-500",
  },
];

const Modules = () => {
  const [activeTab, setActiveTab] = useState("0");

  const currentModule = modules.find((item) => item.id === activeTab);

  return (
    <Section className="overflow-hidden" id="modules">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-xl lg:max-w-3xl sm:mt-20"
          title="Comprehensive SEO Toolkit"
          text="A modularised approach to boost your website's performance."
        />

        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 mt-10 lg:mt-20">
          {/* Tabs - Vertical List */}
          <div className="flex flex-col gap-3 lg:w-[25%] w-full">
            {modules.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`group flex items-center p-4 rounded-xl cursor-pointer transition-all duration-300 border backdrop-blur-sm ${
                  activeTab === item.id
                    ? "bg-n-8 border-n-6 shadow-[0_0_20px_rgba(139,92,246,0.15)] scale-[1.02]"
                    : "bg-transparent border-transparent hover:bg-n-8/30 hover:border-n-7"
                }`}
              >
                <div className="flex flex-col w-full">
                  <span
                    className={`text-lg font-bold transition-colors flex justify-between items-center w-full ${
                      activeTab === item.id
                        ? "text-n-1"
                        : "text-n-4 group-hover:text-n-2"
                    }`}
                  >
                    {item.title}
                    {activeTab === item.id && (
                      <span
                        className={`text-xs font-code ml-2 animate-fade-in bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
                      >
                        &rarr;
                      </span>
                    )}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Content Display */}
          <div className="relative lg:w-full w-full self-stretch min-h-[384px]">
            <div className="relative p-0.5 bg-gradient-to-br from-n-6 via-n-6 to-n-7 rounded-3xl h-full">
              {/* Dynamic decorative background */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${currentModule.color} rounded-3xl blur-xl transition-colors duration-500 opacity-30`}
              />

              <div className="bg-n-8/90 backdrop-blur-xl rounded-3xl p-6 lg:p-8 h-full flex flex-col relative overflow-hidden transition-all duration-500">
                {/* Content Animation Container */}
                <div
                  key={activeTab}
                  className="animate-fade-in relative z-10 flex flex-col h-full"
                >
                  <div className="flex flex-col gap-6 h-full">
                    {/* Text Content */}
                    <div>
                      <div className="inline-flex self-start items-center gap-2 px-3 py-1 rounded-full bg-n-7 border border-n-6 mb-4\">
                        <div
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${currentModule.color}`}
                        />
                        <span className="text-xs font-code uppercase tracking-wider text-n-3">
                          {currentModule?.badge}
                        </span>
                      </div>

                      <h3 className="h3 mb-3">{currentModule.title}</h3>
                      <p className="body-1 text-n-3 mb-8">
                        {currentModule.description}
                      </p>

                      <div className="grid md:grid-cols-3 gap-4 mb-4">
                        {currentModule.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <div
                              className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 bg-gradient-to-r ${currentModule.color} opacity-80`}
                            >
                              {/* <img
                                src={check}
                                width={12}
                                height={12}
                                alt="check"
                              />*/}
                            </div>
                            <span className="text-sm font-semibold text-n-1">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Image Showcase */}
                    <div className="mt-auto relative w-full rounded-xl overflow-hidden shadow-2xl border border-n-6 group">
                      <div
                        className={`absolute inset-0 bg-gradient-to-t ${currentModule.color} opacity-20 group-hover:opacity-10 transition-opacity duration-500`}
                      />
                      <img
                        src={currentModule.image}
                        alt={currentModule.title}
                        className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Modules;
