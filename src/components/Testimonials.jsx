import Section from "./Section";
import Heading from "./Heading";

const testimonials = [
    {
        id: "0",
        name: "Alex Chen",
        role: "Senior DevOps Engineer",
        comment: "Finally, an SEO tool that integrates directly into our CI/CD pipeline. The CLI is a game changer for automated testing.",
        metric: "Saved 15h/week",
        color: "from-purple-500 to-indigo-500"
    },
    {
        id: "1",
        name: "Sarah Jenkins",
        role: "Head of Marketing",
        comment: "The visual reports are stunning. I can send them directly to clients without any editing. RustySEO makes us look professional.",
        metric: "+40% Client Retention",
        color: "from-blue-500 to-cyan-500"
    },
    {
        id: "2",
        name: "Marcus Rodriguez",
        role: "Full Stack Developer",
        comment: "I love that I can run a deep crawl from my terminal while coding. It catches simple SEO mistakes before they ever hit production.",
        metric: "Zero Regressions",
        color: "from-emerald-500 to-teal-500"
    },
    {
        id: "3",
        name: "Emily Watson",
        role: "SEO Specialist",
        comment: "The keyword clustering AI is frighteningly accurate. It did in minutes what used to take me days of spreadsheet work.",
        metric: "3x Faster Rankings",
        color: "from-orange-500 to-amber-500"
    },
    {
        id: "4",
        name: "David Kim",
        role: "Growth Hacker",
        comment: "RustySEO gave us the competitive edge we needed. The competitor analysis tools are incredibly detailed.",
        metric: "+200% Organic Traffic",
        color: "from-pink-500 to-rose-500"
    },
    {
        id: "5",
        name: "Jessica Lee",
        role: "Product Manager",
        comment: "The best part is the speed. Written in Rust, and you can feel it. It crawls thousands of pages in seconds.",
        metric: "Lightning Fast",
        color: "from-violet-500 to-fuchsia-500"
    },
    {
        id: "6",
        name: "Tom Baker",
        role: "Tech Lead",
        comment: "Documentation is top notch. We integrated the API into our internal dashboard in less than an afternoon.",
        metric: "Easy Integration",
        color: "from-cyan-500 to-blue-500"
    },
    {
        id: "7",
        name: "Sofia G.",
        role: "Content Strategist",
        comment: "It's not just for devs. The UI is beautiful and makes complex data easy to understand for the whole team.",
        metric: "Team Favorite",
        color: "from-yellow-500 to-orange-500"
    }
];

const Testimonials = () => {
    return (
        <Section className="overflow-hidden" id="reviews">
            <div className="container relative z-2">
                <Heading
                    className="md:max-w-md lg:max-w-2xl"
                    title="Loved by Technical Teams"
                    text="Join thousands of developers and marketers building better search experiences."
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
                        {[...testimonials, ...testimonials].map((item, index) => (
                            <div
                                key={`${item.id}-top-${index}`}
                                className="relative w-[350px] p-0.5 rounded-2xl bg-gradient-to-br from-n-6 via-n-6 to-n-7 hover:scale-[1.02] transition-transform duration-300"
                            >
                                <div className="bg-n-8/90 backdrop-blur-xl rounded-[15px] p-6 h-full flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center gap-3">
                                                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-n-1 font-bold text-lg`}>
                                                    {item.name.charAt(0)}
                                                </div>
                                                <div>
                                                    <div className="font-bold text-n-1 text-sm">{item.name}</div>
                                                    <div className="text-xs text-n-4">{item.role}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="body-2 text-n-3 mb-6">"{item.comment}"</p>
                                    </div>

                                    <div className="pt-4 border-t border-n-6 flex items-center gap-2">
                                        <span className={`text-transparent bg-clip-text bg-gradient-to-r ${item.color} font-code text-xs font-bold uppercase tracking-wider`}>
                                            {item.metric}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Marquee Row (Reverse) */}
                    <div className="flex gap-6 mt-6 animate-scroll-right w-max hover:pause">
                        {[...testimonials.reverse(), ...testimonials].map((item, index) => (
                            <div
                                key={`${item.id}-bottom-${index}`}
                                className="relative w-[350px] p-0.5 rounded-2xl bg-gradient-to-br from-n-6 via-n-6 to-n-7 hover:scale-[1.02] transition-transform duration-300"
                            >
                                <div className="bg-n-8/90 backdrop-blur-xl rounded-[15px] p-6 h-full flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center gap-3">
                                                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-n-1 font-bold text-lg`}>
                                                    {item.name.charAt(0)}
                                                </div>
                                                <div>
                                                    <div className="font-bold text-n-1 text-sm">{item.name}</div>
                                                    <div className="text-xs text-n-4">{item.role}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="body-2 text-n-3 mb-6">"{item.comment}"</p>
                                    </div>

                                    <div className="pt-4 border-t border-n-6 flex items-center gap-2">
                                        <span className={`text-transparent bg-clip-text bg-gradient-to-r ${item.color} font-code text-xs font-bold uppercase tracking-wider`}>
                                            {item.metric}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Testimonials;
