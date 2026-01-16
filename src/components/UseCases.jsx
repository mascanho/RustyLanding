import { useState } from "react";
import Section from "./Section";
import Heading from "./Heading";
import Button from "./Button";
import { check } from "../assets";

const useCases = [
    {
        id: "0",
        title: "Developers & Engineers",
        description:
            "For Backend, DevOps, data engineers, and security engineers who need to automate crawling tasks in CI/CD pipelines, integrate into scripts, and debug faster in terminal mode.",
        features: [
            "API discovery & structure analysis",
            "Dependency & link checking",
            "CI/CD pipeline integration",
            "Headless server execution",
        ],
    },
    {
        id: "1",
        title: "Data Scientists",
        description:
            "For Academics, PhD students, and analysts. Run large-scale crawls on remote servers, export clean datasets (CSV/JSON), and reproduce experiments via CLI commands.",
        features: [
            "Web scraping for trend analysis",
            "Social media/review data collection",
            "Longitudinal studies",
            "Reproducible data experiments",
        ],
    },
    {
        id: "2",
        title: "SEO Specialists",
        description:
            "For SEO consultants and digital marketing teams. Schedule automated crawls to detect broken links, duplicate content, and metadata issues using batch processing.",
        features: [
            "Broken link detection",
            "Duplicate content analysis",
            "Metadata auditing",
            "Batch site crawling",
        ],
    },
    {
        id: "3",
        title: "Cybersecurity Teams",
        description:
            "For Security analysts and auditors. Identify exposed endpoints, detect sensitive files, and run compliance scans on locked-down servers where GUIs are not allowed.",
        features: [
            "Exposed endpoint identification",
            "Sensitive file detection",
            "Compliance automation",
            "Locked-down server scanning",
        ],
    },
    {
        id: "4",
        title: "Product & QA",
        description:
            "Validate content consistency across environments and monitor regressions after deployments. Use CLI for automation and GUI for visual inspection.",
        features: [
            "Content consistency validation",
            "Deployment regression monitoring",
            "Automated environment checks",
            "Hybrid CLI/GUI workflow",
        ],
    },
    {
        id: "5",
        title: "Power Users",
        description:
            "For Linux users, sysadmins, and hobbyists who prefer terminal-first tools. Build scriptable, composable workflows (pipes, redirects) on low-resource machines.",
        features: [
            "Terminal-first workflow",
            "Scriptable & composable (pipes)",
            "Low-resource machine ready",
            "Custom automation scripts",
        ],
    },
    {
        id: "6",
        title: "NGOs & Governments",
        description:
            "Monitor online destination content, track digital representation, and audit council websites for accessibility and freshness on limited infrastructure.",
        features: [
            "Destination content monitoring",
            "Digital representation tracking",
            "Accessibility & freshness audits",
            "Resource-efficient auditing",
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

                <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-20 mt-10 lg:mt-20">
                    {/* Tabs - Hoverable List */}
                    <div className="flex flex-col gap-3 lg:w-1/3 w-full self-stretch">
                        {useCases.map((item) => (
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
                                        className={`text-lg font-bold transition-colors flex justify-between w-full ${activeTab === item.id ? "text-n-1" : "text-n-4 group-hover:text-n-2"
                                            }`}
                                    >
                                        {item.title}
                                        {activeTab === item.id && (
                                            <span className="text-xs font-code text-color-1 animate-fade-in ml-2 self-center">
                                                &rarr;
                                            </span>
                                        )}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Content Display */}
                    <div className="relative lg:w-2/3 w-full self-stretch min-h-[700px]">
                        <div className="relative p-0.5 bg-gradient-to-br from-n-6 via-n-6 to-n-7 rounded-3xl h-full">
                            {/* Dynamic decorative background for the container */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-r ${parseInt(activeTab) % 4 === 0
                                    ? "from-purple-500/20 to-pink-500/20"
                                    : parseInt(activeTab) % 4 === 1
                                        ? "from-blue-500/20 to-cyan-500/20"
                                        : parseInt(activeTab) % 4 === 2
                                            ? "from-green-500/20 to-emerald-500/20"
                                            : "from-orange-500/20 to-red-500/20"
                                    } rounded-3xl blur-xl transition-colors duration-500 opacity-50`}
                            />

                            <div className="bg-n-8/90 backdrop-blur-xl rounded-[23px] p-8 lg:p-12 min-h-[690px] flex flex-col justify-center relative overflow-hidden transition-all duration-500">
                                {/* Content Animation Container */}
                                <div key={activeTab} className="animate-fade-in relative z-10 flex flex-col h-full justify-center">
                                    <div className="inline-flex self-start items-center gap-2 px-3 py-1 rounded-full bg-n-7 border border-n-6 mb-8">
                                        <div
                                            className={`w-2 h-2 rounded-full ${parseInt(activeTab) % 4 === 0
                                                ? "bg-purple-500"
                                                : parseInt(activeTab) % 4 === 1
                                                    ? "bg-blue-500"
                                                    : parseInt(activeTab) % 4 === 2
                                                        ? "bg-green-500"
                                                        : "bg-orange-500"
                                                } shadow-[0_0_10px_currentColor]`}
                                        />
                                        <span className="text-xs font-code uppercase tracking-wider text-n-3">
                                            Use Case Details
                                        </span>
                                    </div>

                                    <h3 className="h3 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-n-4">
                                        {currentCase.title}
                                    </h3>

                                    <p className="body-1 text-n-3 mb-10 leading-relaxed text-lg">
                                        {currentCase.description}
                                    </p>

                                    <div className="grid md:grid-cols-2 gap-5">
                                        {currentCase.features.map((feature, index) => (
                                            <div
                                                key={index}
                                                className="group/feature flex items-center gap-4 bg-n-7/30 p-4 rounded-xl border border-n-1/5 hover:border-n-1/20 transition-all duration-300 hover:bg-n-7/50"
                                                style={{ animationDelay: `${index * 50}ms` }}
                                            >
                                                <div
                                                    className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${parseInt(activeTab) % 4 === 0
                                                        ? "bg-purple-500/20 text-purple-400 group-hover/feature:bg-purple-500 group-hover/feature:text-white"
                                                        : parseInt(activeTab) % 4 === 1
                                                            ? "bg-blue-500/20 text-blue-400 group-hover/feature:bg-blue-500 group-hover/feature:text-white"
                                                            : parseInt(activeTab) % 4 === 2
                                                                ? "bg-green-500/20 text-green-400 group-hover/feature:bg-green-500 group-hover/feature:text-white"
                                                                : "bg-orange-500/20 text-orange-400 group-hover/feature:bg-orange-500 group-hover/feature:text-white"
                                                        }`}
                                                >
                                                    <img
                                                        src={check}
                                                        width={18}
                                                        height={18}
                                                        alt="check"
                                                        className="opacity-100"
                                                        style={{ filter: "brightness(0) invert(1)" }}
                                                    />
                                                </div>
                                                <span className="font-semibold text-n-1 text-base">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-10">
                                        <Button href="#download" white>
                                            Start using RustySEO
                                        </Button>
                                    </div>
                                </div>

                                {/* Animated Background Blob */}
                                <div
                                    className={`absolute -bottom-10 -right-10 w-96 h-96 bg-gradient-to-tl ${parseInt(activeTab) % 4 === 0
                                        ? "from-purple-600/20"
                                        : parseInt(activeTab) % 4 === 1
                                            ? "from-blue-600/20"
                                            : parseInt(activeTab) % 4 === 2
                                                ? "from-green-600/20"
                                                : "from-orange-600/20"
                                        } to-transparent rounded-full blur-[80px] transition-colors duration-500 pointer-events-none`}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default UseCases;
