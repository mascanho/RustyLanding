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
            <div className="container relative z-2">
                <Heading
                    className="md:max-w-md lg:max-w-2xl"
                    title="Built for every stakeholder"
                    text="See how RustySEO adapts to your specific needs."
                />

                <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 mt-10 lg:mt-20">
                    {/* Tabs */}
                    <div className="flex flex-col gap-4 lg:w-1/3">
                        {useCases.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setActiveTab(item.id)}
                                className={`flex items-center p-4 rounded-xl transition-all duration-300 border ${activeTab === item.id
                                        ? "bg-n-8 border-n-6 shadow-lg scale-105"
                                        : "bg-transparent border-transparent text-n-4 hover:text-n-1"
                                    }`}
                            >
                                <span className={`text-xl font-bold ${activeTab === item.id ? "text-color-1" : ""}`}>
                                    {item.title}
                                </span>
                                {activeTab === item.id && (
                                    <div className="ml-auto w-2 h-2 rounded-full bg-color-1 shadow-[0_0_10px_rgba(172,106,255,0.7)]" />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Content */}
                    <div className="relative lg:w-2/3">
                        <div className="relative p-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl">
                            <div className="bg-n-8 rounded-[15px] p-8 lg:p-12 min-h-[400px] flex flex-col justify-center relative overflow-hidden">

                                {/* Background Decor */}
                                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-b from-[#1C1C2E] to-transparent opacity-50 rounded-bl-full -z-1" />

                                <h3 className="h3 mb-6">{currentCase.title}</h3>
                                <p className="body-1 text-n-3 mb-8">{currentCase.description}</p>

                                <div className="grid md:grid-cols-2 gap-6">
                                    {currentCase.features.map((feature, index) => (
                                        <div key={index} className="flex items-center gap-4 bg-n-7/50 p-4 rounded-xl border border-n-6/50">
                                            <div className="w-10 h-10 rounded-full bg-n-6 flex items-center justify-center shrink-0">
                                                <img src={check} width={20} height={20} alt="check" />
                                            </div>
                                            <span className="font-semibold text-n-1">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-gradient-to-tl from-purple-500/10 to-transparent rounded-full blur-2xl" />
                            </div>
                        </div>

                        {/* Glow effect behind */}
                        <div className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-[100px] -z-1 rounded-full" />

                    </div>
                </div>
            </div>
        </Section>
    );
};

export default UseCases;
