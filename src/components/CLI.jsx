import Section from "./Section";
import Heading from "./Heading";
import Button from "./Button";
import { roadmapCLI } from "../assets";
import { check } from "../assets";

const cliFeatures = [
  {
    id: "0",
    title: "Terminal-First Design",
    text: "Run complex SEO audits directly from your command line with intuitive flags and options.",
  },
  {
    id: "1",
    title: "CI/CD Integration",
    text: "Automate your SEO checks in pipelines. Prevent regressions before they reach production.",
  },
  {
    id: "2",
    title: "Scripting Power",
    text: "Chain commands, pipe outputs, and integrate with your existing dev workflows.",
  },
  {
    id: "3",
    title: "Lightning Performance",
    text: "Built in Rust for speed that matches your development pace.",
  },
];

const CLI = () => {
  return (
    <Section className="overflow-hidden" id="cli">
      <div className="container relative z-2">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-n-7 border border-n-6 mb-6">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500" />
                <span className="text-xs font-code uppercase tracking-wider text-n-3">
                  Experimental
                </span>
              </div>

              <Heading
                className="md:max-w-md lg:max-w-2xl text-left"
                title="Command Line Power"
                text="Experience SEO automation like never before. Our CLI brings the full power of RustySEO to your terminal."
              />
            </div>

            <div className="mt-10 lg:mt-20">
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                {cliFeatures.map((feature) => (
                  <div key={feature.id} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center shrink-0 mt-1">
                      <img src={check} width={16} height={16} alt="check" />
                    </div>
                    <div>
                      <h6 className="font-bold text-n-1 mb-2">{feature.title}</h6>
                      <p className="body-2 text-n-4">{feature.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button href="#download">Get CLI Access</Button>
            </div>
          </div>

          {/* Media Showcase */}
          <div className="flex-1 relative">
            <div className="relative p-0.5 bg-gradient-to-br from-n-6 via-n-6 to-n-7 rounded-3xl">
              <div className="bg-n-8/90 backdrop-blur-xl rounded-[23px] p-8 overflow-hidden">
                {/* Video Placeholder */}
                <div className="relative aspect-video rounded-xl overflow-hidden mb-6 bg-gradient-to-br from-purple-500 to-indigo-500 group">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-n-1/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-n-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-n-1/10 backdrop-blur-sm rounded-lg px-3 py-2">
                      <div className="text-xs text-n-3 font-mono">rustyseo crawl --deep --output json</div>
                    </div>
                  </div>
                </div>

                {/* GIF/Image Row */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-blue-500 to-cyan-500 relative group">
                    <img
                      src={roadmapCLI}
                      alt="CLI Interface"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>

                  <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-emerald-500 to-teal-500 relative group">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-n-1/20 flex items-center justify-center">
                          <svg className="w-6 h-6 text-n-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <div className="text-xs text-n-3 font-mono">Real-time</div>
                        <div className="text-xs text-n-3 font-mono">Performance</div>
                      </div>
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

export default CLI;