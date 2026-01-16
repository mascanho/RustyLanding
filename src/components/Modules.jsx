import { useState, useEffect } from "react";
import Section from "./Section";
import Heading from "./Heading";
import Button from "./Button";
import {
    marketerDashboard,
    developerCLI,
    devopsDashboard,
    ceoDashboard,
    check
} from "../assets";

const modules = [
    {
        id: "0",
        title: "Site Crawler & Audit",
        description: "Deep crawl your entire website to uncover broken links, mixed content errors, and metadata duplicates. Visualize site architecture and crawl depth.",
        image: devopsDashboard, // Placeholder
        features: [
            "JavaScript rendering support",
            "Custom user-agent masking",
            "Crawl budget optimization",
            "Internal linking visualization"
        ],
        color: "from-purple-500 to-indigo-500"
    },
    {
        id: "1",
        title: "Rank Tracker",
        description: "Monitor keyword positions across multiple search engines and locations daily. Track your visibility share and cannibalization issues.",
        image: marketerDashboard, // Placeholder
        features: [
            "Local & mobile tracking",
            "SERP feature detection",
            "Competitor rank comparison",
            "Cannibalization alerts"
        ],
        color: "from-blue-500 to-cyan-500"
    },
    {
        id: "2",
        title: "Keyword Research",
        description: "Discover high-value keyword opportunities with low competition. Analyze search intent and cluster keywords automatically with AI.",
        image: ceoDashboard, // Placeholder
        features: [
            "Search volume & difficulty",
            "Keyword clustering (AI)",
            "Long-tail suggestions",
            "Intent classification"
        ],
        color: "from-emerald-500 to-teal-500"
    },
    {
        id: "3",
        title: "Page Speed Insights",
        description: "Analyze Core Web Vitals and performance metrics. Identify render-blocking resources and unoptimized images slowing down your site.",
        image: developerCLI, // Placeholder
        features: [
            "Core Web Vitals assessment",
            "Waterfall request analysis",
            "Image optimization tips",
            "Code coverage checks"
        ],
        color: "from-orange-500 to-amber-500"
    },
    {
        id: "4",
        title: "Backlink Monitor",
        description: "Track new and lost backlinks in real-time. Analyze the toxic score of referring domains and manage your disavow files easily.",
        image: marketerDashboard, // Reuse Placeholder
        features: [
            "New/Lost link alerts",
            "Toxic score analysis",
            "Anchor text distribution",
            "Disavow tool integration"
        ],
        color: "from-pink-500 to-rose-500"
    },
    {
        id: "5",
        title: "Automated Reporting",
        description: "Generate white-label PDF reports for clients or stakeholders. Schedule automatic email delivery with custom summaries.",
        image: ceoDashboard, // Reuse Placeholder
        features: [
            "White-label customization",
            "Scheduled email delivery",
            "Drag-and-drop builder",
            "Executive summaries"
        ],
        color: "from-violet-500 to-fuchsia-500"
    }
];

const Modules = () => {
    const [activeTab, setActiveTab] = useState("0");
    const [isHovering, setIsHovering] = useState(false);

    const currentModule = modules.find((item) => item.id === activeTab);

    useEffect(() => {
        if (isHovering) return;

        const interval = setInterval(() => {
            setActiveTab((prev) => {
                const nextId = (parseInt(prev) + 1) % modules.length;
                return nextId.toString();
            });
        }, 4000);

        return () => clearInterval(interval);
    }, [activeTab, isHovering]);

    return (
        <Section className="overflow-hidden" id="modules">
            <div
                className="container relative z-2"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            >
                <Heading
                    className="md:max-w-md lg:max-w-2xl"
                    title="Comprehensive SEO Toolkit"
                    text="Everything you need to dominate the SERPs, all in one platform."
                />

                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 mt-10 lg:mt-20">

                    {/* Tabs - Vertical List */}
                    <div className="flex flex-col gap-3 lg:w-[25%] w-full">
                        {modules.map((item) => (
                            <div
                                key={item.id}
                                onMouseEnter={() => setActiveTab(item.id)}
                                className={`group flex items-center p-4 rounded-xl cursor-pointer transition-all duration-300 border backdrop-blur-sm ${activeTab === item.id
                                    ? "bg-n-8 border-n-6 shadow-[0_0_20px_rgba(139,92,246,0.15)] scale-[1.02]"
                                    : "bg-transparent border-transparent hover:bg-n-8/30 hover:border-n-7"
                                    }`}
                            >
                                <div className="flex flex-col w-full">
                                    <span
                                        className={`text-lg font-bold transition-colors flex justify-between items-center w-full ${activeTab === item.id ? "text-n-1" : "text-n-4 group-hover:text-n-2"
                                            }`}
                                    >
                                        {item.title}
                                        {activeTab === item.id && (
                                            <span className={`text-xs font-code ml-2 animate-fade-in bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                                                &rarr;
                                            </span>
                                        )}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Content Display */}
                    <div className="relative lg:w-[75%] w-full self-stretch min-h-[600px]">
                        <div className="relative p-0.5 bg-gradient-to-br from-n-6 via-n-6 to-n-7 rounded-3xl h-full">

                            {/* Dynamic decorative background */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-r ${currentModule.color} rounded-3xl blur-xl transition-colors duration-500 opacity-30`}
                            />

                            <div className="bg-n-8/90 backdrop-blur-xl rounded-[23px] p-8 lg:p-12 h-full flex flex-col relative overflow-hidden transition-all duration-500">

                                {/* Content Animation Container */}
                                <div key={activeTab} className="animate-fade-in relative z-10 flex flex-col h-full">

                                    <div className="flex flex-col gap-8 h-full">
                                        {/* Text Content */}
                                        <div>
                                            <div className="inline-flex self-start items-center gap-2 px-3 py-1 rounded-full bg-n-7 border border-n-6 mb-6">
                                                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${currentModule.color}`} />
                                                <span className="text-xs font-code uppercase tracking-wider text-n-3">
                                                    Active Module
                                                </span>
                                            </div>

                                            <h3 className="h3 mb-4">{currentModule.title}</h3>
                                            <p className="body-1 text-n-3 mb-8">{currentModule.description}</p>

                                            <div className="grid md:grid-cols-2 gap-4 mb-8">
                                                {currentModule.features.map((feature, index) => (
                                                    <div key={index} className="flex items-center gap-3">
                                                        <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 bg-gradient-to-r ${currentModule.color} opacity-80`}>
                                                            <img src={check} width={12} height={12} alt="check" />
                                                        </div>
                                                        <span className="text-sm font-semibold text-n-1">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Image Showcase */}
                                        <div className="mt-auto relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-n-6 group">
                                            <div className={`absolute inset-0 bg-gradient-to-t ${currentModule.color} opacity-20 group-hover:opacity-10 transition-opacity duration-500`} />
                                            <img
                                                src={currentModule.image}
                                                alt={currentModule.title}
                                                className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
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
