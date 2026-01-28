import Heading from "./Heading";
import Section from "./Section";
import { benefits } from "../constants";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const FeatureCard = ({ feature, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    
    // Stagger animation on mount
    gsap.fromTo(card, {
      opacity: 0,
      y: 30,
      rotateY: -15,
    }, {
      opacity: 1,
      y: 0,
      rotateY: 0,
      duration: 0.6,
      delay: index * 0.08,
      ease: "power2.out",
    });

    // Hover animation
    const handleMouseEnter = () => {
      gsap.to(card, {
        y: -10,
        scale: 1.03,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [index]);

  const gradients = [
    "from-purple-500 via-pink-500 to-red-500",
    "from-blue-500 via-cyan-500 to-teal-500",
    "from-green-500 via-emerald-500 to-cyan-500",
    "from-yellow-500 via-orange-500 to-red-500",
    "from-indigo-500 via-purple-500 to-pink-500",
    "from-rose-500 via-fuchsia-500 to-purple-500",
    "from-cyan-500 via-blue-500 to-indigo-500",
    "from-amber-500 via-orange-500 to-pink-500",
    "from-emerald-500 via-teal-500 to-cyan-500",
    "from-violet-500 via-purple-500 to-indigo-500",
    "from-lime-500 via-green-500 to-emerald-500",
    "from-sky-500 via-blue-500 to-indigo-500",
  ];

  const iconGradients = [
    "from-purple-500 to-pink-500",
    "from-blue-500 to-cyan-500", 
    "from-green-500 to-emerald-500",
    "from-yellow-500 to-orange-500",
    "from-indigo-500 to-purple-500",
    "from-rose-500 to-fuchsia-500",
    "from-cyan-500 to-blue-500",
    "from-amber-500 to-orange-500",
    "from-emerald-500 to-teal-500",
    "from-violet-500 to-purple-500",
    "from-lime-500 to-green-500",
    "from-sky-500 to-blue-500",
  ];

  return (
    <div
      ref={cardRef}
      className={`block relative p-0.5 bg-gradient-to-r ${gradients[index % gradients.length]} rounded-md cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25 transform-gpu`}
      key={feature.id}
    >
      <div className="relative z-2 flex flex-col min-h-[15rem] p-[2rem] bg-n-8 rounded-md overflow-hidden">
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br opacity-10" 
             style={{background: `linear-gradient(135deg, ${gradients[index % gradients.length].split(' ').map(c => c.replace(/from-|via-|to-/, '')).join(', ')})`}} />
        
        <div className="flex items-center mb-4 relative z-1">
          <div className={`flex items-center justify-center w-12 h-12 text-2xl bg-gradient-to-r ${iconGradients[index % iconGradients.length]} rounded-lg mr-4 transition-transform duration-300 hover:scale-110 hover:rotate-12 shadow-lg`}>
            {feature.icon}
          </div>
          <h5 className="h5 mb-0">{feature.title}</h5>
        </div>
        <p className="body-2 text-n-3 relative z-1">{feature.text}</p>
      </div>
    </div>
  );
};

const SEOFeatures = () => {
  const features = [
    {
      id: "0",
      title: "Find Broken Links",
      text: "Crawl a website instantly and find broken links (404s) and server errors. Bulk export the errors and source URLs to fix, or send to a developer.",
      icon: "🔗",
      color: "from-purple-500 via-pink-500 to-red-500",
    },
    {
      id: "1",
      title: "Audit Redirects",
      text: "Find temporary and permanent redirects, identify redirect chains and loops, or upload a list of URLs to audit in a site migration.",
      icon: "🔄",
      color: "from-blue-500 via-cyan-500 to-teal-500",
    },
    {
      id: "2",
      title: "Analyse Page Titles & Meta Data",
      text: "Analyse page titles and meta descriptions during a crawl and identify those that are too long, short, missing, or duplicated across your site.",
      icon: "📝",
      color: "from-green-500 via-emerald-500 to-cyan-500",
    },
    {
      id: "3",
      title: "Discover Duplicate Content",
      text: "Discover exact duplicate URLs with an md5 algorithmic check, partially duplicated elements such as page titles, descriptions or headings and find low content pages.",
      icon: "📋",
      color: "from-yellow-500 via-orange-500 to-red-500",
    },
    {
      id: "4",
      title: "AI Enabled",
      text: "AI enabled features that can help you identify potential issues with your website's content, such as duplicate content, low-quality content, and content that is not optimized for search engines.",
      icon: "🔍",
      color: "from-indigo-500 via-purple-500 to-pink-500",
    },
    {
      id: "5",
      title: "Review Robots & Directives",
      text: "View URLs blocked by robots.txt, meta robots or X-Robots-Tag directives such as 'noindex' or 'nofollow', as well as canonicals and rel='next' and rel='prev'.",
      icon: "🤖",
      color: "from-rose-500 via-fuchsia-500 to-purple-500",
    },
    {
      id: "6",
      title: "Analyse Server Logs",
      text: "Analyze server logs to identify patterns, errors, and performance issues. Identify bottlenecks, slow queries, and resource usage. Discover LLM patterns and trends.",
      icon: "🗺️",
      color: "from-cyan-500 via-blue-500 to-indigo-500",
    },
    {
      id: "7",
      title: "Integrate with GA, GSC, PSI & MS Clarity",
      text: "Connect to the Google Analytics, Search Console, PageSpeed Insights and Microsoft Clarity APIs and fetch user and performance data for all URLs in a crawl for greater insight.",
      icon: "📊",
      color: "from-amber-500 via-orange-500 to-pink-500",
    },
    {
      id: "8",
      title: "Crawl JavaScript Websites",
      text: "Render web pages using the integrated Chromium WRS to crawl dynamic, JavaScript rich websites and frameworks, such as Angular, React and Vue.js.",
      icon: "⚡",
      color: "from-emerald-500 via-teal-500 to-cyan-500",
    },
    {
      id: "9",
      title: "Visualise Site Architecture",
      text: "Evaluate internal linking and URL structure using interactive crawl and directory force-directed diagrams and tree graph site visualisations.",
      icon: "🌐",
      color: "from-violet-500 via-purple-500 to-indigo-500",
    },
    {
      id: "10",
      title: "Schedule Audits",
      text: "Schedule crawls to run at chosen intervals and auto export crawl data to any location, including Google Sheets. Or automate entirely via command line.",
      icon: "⏰",
      color: "from-lime-500 via-green-500 to-emerald-500",
    },
    {
      id: "11",
      title: "Compare Crawls & Staging",
      text: "Track progress of SEO issues and opportunities and see what's changed between crawls. Compare staging against production environments using advanced URL Mapping.",
      icon: "🔬",
      color: "from-sky-500 via-blue-500 to-indigo-500",
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

        <div
          className="relative mt-10 lg:mt-20 overflow-hidden"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
          }}
        >
          {/* Top Marquee Row */}
          <div className="flex gap-6 animate-scroll-left w-max hover:pause">
            {[...features, ...features].map((feature, index) => (
              <div
                key={`${feature.id}-top-${index}`}
                className="relative w-[350px] p-0.5 rounded-2xl bg-gradient-to-br from-n-6 via-n-6 to-n-7 hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="bg-n-8/90 backdrop-blur-xl rounded-[15px] p-6 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className={`flex items-center justify-center w-12 h-12 text-2xl bg-gradient-to-r ${feature.color} rounded-lg mr-4 transition-transform duration-300 hover:scale-110 hover:rotate-12 shadow-lg`}>
                      {feature.icon}
                    </div>
                    <h5 className="h5 mb-0">{feature.title}</h5>
                  </div>
                  <p className="body-2 text-n-3">{feature.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Marquee Row (Reverse) */}
          <div className="flex gap-6 mt-6 animate-scroll-right w-max hover:pause">
            {[...features.reverse(), ...features].map((feature, index) => (
              <div
                key={`${feature.id}-bottom-${index}`}
                className="relative w-[350px] p-0.5 rounded-2xl bg-gradient-to-br from-n-6 via-n-6 to-n-7 hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="bg-n-8/90 backdrop-blur-xl rounded-[15px] p-6 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className={`flex items-center justify-center w-12 h-12 text-2xl bg-gradient-to-r ${feature.color} rounded-lg mr-4 transition-transform duration-300 hover:scale-110 hover:rotate-12 shadow-lg`}>
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
      </div>
    </Section>
  );
};

export default SEOFeatures;
