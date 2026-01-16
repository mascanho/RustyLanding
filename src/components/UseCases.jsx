import { useState } from "react";
import Section from "./Section";
import Heading from "./Heading";
import { gradient } from "../assets";
import { check } from "../assets";

const useCases = [
    {
        id: "0",
        title: "Marketers",
        description:
            "Visualize detailed SEO reports, track keyword rankings in real-time, and generate content strategies using our AI assistant. Say goodbye to manual spreadsheets.",
        features: [
            "Real-time keyword tracking",
            "Competitor analysis dashboards",
            "AI-powered content suggestions",
            "Automated PDF reporting",
        ],
    },
    {
        id: "1",
        title: "Developers",
        description:
            "Integrate SEO checks into your CI/CD pipeline, debug crawl issues with detailed log analysis, and access raw data via our powerful CLI.",
        features: [
            "CLI for automated crawls",
            "CI/CD integration support",
            "Raw JSON/CSV data export",
            "Headless browser testing",
        ],
    },
    {
        id: "2",
        title: "DevOps",
        description:
            "Monitor server performance, analyze log files for bot traffic, and ensure site reliability with automated health checks and alerts.",
        features: [
            "Server log analysis",
            "Bot traffic monitoring",
            "Uptime & Performance alerts",
            "Infrastructure stress testing",
        ],
    },
    {
        id: "3",
        title: "CEOs",
        description:
            "Get a high-level overview of digital presence, ROI on SEO efforts, and competitor analysis to drive strategic business decisions.",
        features: [
            "Executive summary dashboards",
            "ROI tracking & attribution",
            "Market share visualization",
            "Trend forecasting",
        ],
    },
];

const UseCases = () => {
    const [activeTab, setActiveTab] = useState("0");

    const currentCase = useCases.find((item) => item.id === activeTab);

    return (
        <Section className="overflow-hidden">
            <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
            <div className="container relative z-2">
                <Heading
                    className="md:max-w-md lg:max-w-2xl"
                    title="Built for every stakeholder"
                    text="Hover over the roles to see how RustySEO adapts to your specific needs."
                />

                <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 mt-10 lg:mt-20">
                    {/* Tabs - Hoverable List */}
                    <div className="flex flex-col gap-4 lg:w-1/3">
                        {useCases.map((item) => (
                            <div
                                key={item.id}
                                onMouseEnter={() => setActiveTab(item.id)}
                                className={`group flex items-center p-5 rounded-2xl cursor-pointer transition-all duration-300 border backdrop-blur-sm ${activeTab === item.id
                                        ? "bg-n-8 border-n-6 shadow-[0_0_20px_rgba(139,92,246,0.15)] scale-100"
                                        : "bg-transparent border-transparent hover:bg-n-8/30 hover:border-n-7 focus:scale-[1.02]"
                                    }`}
                            >
                                <div className={`p-3 rounded-xl mr-5 transition-all duration-300 ${activeTab === item.id
                                        ? "bg-gradient-to-br from-purple-500 to-blue-500 shadow-lg"
                                        : "bg-n-7 group-hover:bg-n-6"
                                    }`}>
                                    <img
                                        src={check}
                                        width={20}
                                        height={20}
                                        alt="icon"
                                        className={`transition-all duration-300 ${activeTab === item.id ? "brightness-200 contrast-100" : "opacity-50"}`}
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <span className={`text-xl font-bold transition-colors ${activeTab === item.id ? "text-n-1" : "text-n-4 group-hover:text-n-2"}`}>
                                        {item.title}
                                    </span>
                                    {activeTab === item.id && (
                                        <span className="text-xs font-code text-color-1 animate-fade-in mt-1">
                            Explore features ->
                                        </span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Content Display */}
                    <div className="relative lg:w-2/3">
                        <div className="relative p-0.5 bg-gradient-to-br from-n-6 via-n-6 to-n-7 rounded-3xl h-full">

                            {/* Dynamic decorative background for the container */}
                            <div className={`absolute inset-0 bg-gradient-to-r ${activeTab === '0' ? 'from-purple-500/20 to-pink-500/20' :
                                    activeTab === '1' ? 'from-blue-500/20 to-cyan-500/20' :
                                        activeTab === '2' ? 'from-green-500/20 to-emerald-500/20' :
                                            'from-orange-500/20 to-red-500/20'
                                } rounded-3xl blur-xl transition-colors duration-500 opacity-50`} />

                            <div className="bg-n-8/90 backdrop-blur-xl rounded-[23px] p-8 lg:p-12 h-full flex flex-col justify-center relative overflow-hidden transition-all duration-500">

                                {/* Content Animation Container */}
                                <div key={activeTab} className="animate-fade-in relative z-10">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-n-7 border border-n-6 mb-6">
                                        <div className={`w-2 h-2 rounded-full ${activeTab === '0' ? 'bg-purple-500' :
                                                activeTab === '1' ? 'bg-blue-500' :
                                                    activeTab === '2' ? 'bg-green-500' :
                                                        'bg-orange-500'
                                            } shadow-[0_0_10px_currentColor]`} />
                                        <span className="text-xs font-code uppercase tracking-wider text-n-3">
                                            {currentCase.title} Use Case
                                        </span>
                                    </div>

                                    <h3 className="h3 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-n-4">
                                        {currentCase.title}
                                    </h3>

                                    <p className="body-1 text-n-3 mb-10 leading-relaxed min-h-[5rem]">
                                        {currentCase.description}
                                    </p>

                                    <div className="grid md:grid-cols-2 gap-5">
                                        {currentCase.features.map((feature, index) => (
                                            <div
                                                key={index}
                                                className="group/feature flex items-center gap-4 bg-n-7/30 p-4 rounded-xl border border-n-1/5 hover:border-n-1/20 transition-all duration-300 hover:bg-n-7/50"
                                                style={{ animationDelay: `${index * 50}ms` }}
                                            >
                                                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${activeTab === '0' ? 'bg-purple-500/20 text-purple-400 group-hover/feature:bg-purple-500 group-hover/feature:text-white' :
                                                        activeTab === '1' ? 'bg-blue-500/20 text-blue-400 group-hover/feature:bg-blue-500 group-hover/feature:text-white' :
                                                            activeTab === '2' ? 'bg-green-500/20 text-green-400 group-hover/feature:bg-green-500 group-hover/feature:text-white' :
                                                                'bg-orange-500/20 text-orange-400 group-hover/feature:bg-orange-500 group-hover/feature:text-white'
                                                    }`}>
                                                    <img src={check} width={18} height={18} alt="check" className="opacity-100" style={{ filter: 'brightness(0) invert(1)' }} />
                                                </div>
                                                <span className="font-semibold text-n-1 text-sm">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Animated Background Blob */}
                                <div className={`absolute -bottom-10 -right-10 w-80 h-80 bg-gradient-to-tl ${activeTab === '0' ? 'from-purple-600/20' :
                                        activeTab === '1' ? 'from-blue-600/20' :
                                            activeTab === '2' ? 'from-green-600/20' :
                                                'from-orange-600/20'
                                    } to-transparent rounded-full blur-[60px] transition-colors duration-500 pointer-events-none`} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Section>
    );
};

export default UseCases;
