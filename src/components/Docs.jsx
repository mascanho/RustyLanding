import { useParams, Link } from "react-router-dom";
import Section from "./Section";
import Header from "./Header";
import Footer from "./Footer";
import ButtonGradient from "../assets/svg/ButtonGradient";
import { docsNavigation, docsContent } from "../constants/docs";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

const Docs = () => {
    const { slug } = useParams();
    const activeSlug = slug || "introduction";
    const content = docsContent[activeSlug];

    const renderTextSafe = (text) => {
        if (!text) return null;
        const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
        return parts.map((part, i) => {
            const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
            if (match) {
                return (
                    <a
                        key={i}
                        href={match[2]}
                        className="text-color-1 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {match[1]}
                    </a>
                );
            }
            return part;
        });
    };

    return (
        <>
            <style jsx>{`
                @keyframes gradient {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                .animate-gradient {
                    background-size: 200% 200%;
                    animation: gradient 3s ease infinite;
                }
                .text-gradient-1 {
                    background: linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
            `}</style>
            <div className="pt-[4.75rem] lg:pt-[5.25rem]">
                <Header />

                <Section className="custom-paddings pt-12 pb-24 lg:pt-16 lg:pb-32" crosses>
                    <div className="container relative flex flex-col lg:flex-row gap-10">
                        {/* Sidebar */}
                        <aside className="lg:w-1/4 flex-shrink-0">
                            <div className="sticky top-28 h-[calc(100vh-7rem)] pr-2">
                                <div className="bg-n-8/50 border border-n-6 rounded-[2rem] h-full overflow-y-auto">
                                    <div className="p-6 space-y-8">
                                {docsNavigation.map((group, index) => (
                                    <div key={index}>
                                        <h5 
                                            className="font-code text-lg font-bold uppercase tracking-wider mb-1 pb-2 border-b border-n-6/50"
                                            style={{
                                                background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)',
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent',
                                                backgroundClip: 'text'
                                            }}
                                        >
                                            {group.title}
                                        </h5>
                                        <ul className="space-y-3">
                                            {group.links.map((link, i) =>
                                                link.header ? (
                                                    <li
                                                        key={`header-${i}`}
                                                        className="text-n-1 font-code text-[11px] font-bold uppercase tracking-wider mt-4 mb-2 opacity-70"
                                                    >
                                                        {link.title}
                                                    </li>
                                                ) : (
                                                    <li key={link.slug}>
                                                        <Link
                                                            to={`/docs/${link.slug}`}
                                                            className={`inline-block text-sm font-code transition-all hover:text-color-1 relative ${activeSlug === link.slug
                                                                ? "text-n-1 pl-3 -ml-[2px]"
                                                                : "text-n-3"
                                                                }`}
                                                        style={activeSlug === link.slug ? {
                                                            background: 'linear-gradient(90deg, rgba(139, 92, 246, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)',
                                                            borderLeft: '3px solid',
                                                            borderImage: 'linear-gradient(to bottom, #8b5cf6, #3b82f6) 1',
                                                            boxShadow: '0 0 20px rgba(139, 92, 246, 0.3), 0 0 40px rgba(59, 130, 246, 0.1)',
                                                            borderRadius: '0 8px 8px 0',
                                                            padding: '2px 8px 2px 12px'
                                                        } : {}}
                                                        >
                                                            {link.title}
                                                        </Link>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                ))}
                                    </div>
                                </div>
                            </div>
                        </aside>

                        {/* Main Content */}
                        <main className="lg:w-3/4 min-h-[50vh]">
                            {content ? (
                                <div className="bg-n-8/50 border border-n-6 rounded-[2rem] p-8 lg:p-12">
                                    <h1 className="h2 mb-6">{content.title}</h1>
                                    <div className="space-y-6">
                                        {content.blocks ? (
                                            content.blocks.map((block, index) => {
                                                switch (block.type) {
                                                    case "text":
                                                        return (
                                                            <p key={index} className="body-1 text-n-3">
                                                                {renderTextSafe(block.content)}
                                                            </p>
                                                        );
                                                    case "subtitle":
                                                        return (
                                                            <h5 key={index} className="h4 text-n-1 mt-8 mb-4">
                                                                {block.content}
                                                            </h5>
                                                        );
                                                    case "bold-title":
                                                        return (
                                                            <h4 key={index} className="body-1 text-n-1 font-bold mt-8 mb-4">
                                                                {block.content}
                                                            </h4>
                                                        );
                                                    case "image":
                                                        return (
                                                            <div
                                                                key={index}
                                                                className="my-8 overflow-hidden rounded-[1rem] border border-n-6 shadow-xl"
                                                            >
                                                                <img
                                                                    src={block.src}
                                                                    alt={block.alt}
                                                                    className="w-full h-auto object-cover"
                                                                />
                                                            </div>
                                                        );
                                                    case "video":
                                                        return (
                                                            <div
                                                                key={index}
                                                                className="my-8 rounded-[1rem] overflow-hidden border border-n-6 shadow-xl aspect-video relative bg-n-8"
                                                            >
                                                                <iframe
                                                                    src={block.url}
                                                                    title={block.title || "Video player"}
                                                                    className="absolute top-0 left-0 w-full h-full"
                                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                                    allowFullScreen
                                                                ></iframe>
                                                            </div>
                                                        );
                                                    case "code":
                                                        return (
                                                            <div
                                                                key={index}
                                                                className="p-4 bg-n-7 rounded-xl border border-n-6 overflow-x-auto"
                                                            >
                                                                <code className="font-code text-xs text-n-2 whitespace-pre">
                                                                    {block.content}
                                                                </code>
                                                            </div>
                                                        );
                                                    case "list":
                                                        return (
                                                            <ul
                                                                key={index}
                                                                className="list-disc pl-6 space-y-2 body-1 text-n-3"
                                                            >
                                                                {block.items.map((item, i) => (
                                                                    <li key={i}>{renderTextSafe(item)}</li>
                                                                ))}
                                                            </ul>
                                                        );
                                                    case "link":
                                                        return (
                                                            <a
                                                                key={index}
                                                                href={block.url}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="inline-flex items-center text-color-1 hover:text-color-2 font-code text-sm transition-colors"
                                                            >
                                                                {block.text}
                                                                <span className="ml-2">→</span>
                                                            </a>
                                                        );
                                                    case "roadmap-progress":
                                                        return (
                                                            <div key={index} className="my-8">
                                                                <div className="relative">
                                                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl"></div>
                                                                    <div className="relative bg-n-8/50 border border-n-6 rounded-2xl p-6">
                                                                        <div className="flex items-center justify-between mb-4">
                                                                            <span className="text-n-1 font-bold">Overall Progress</span>
                                                                            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">65%</span>
                                                                        </div>
                                                                        <div className="w-full bg-n-7 rounded-full h-4 overflow-hidden">
                                                                            <div 
                                                                                className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                                                                                style={{ width: '65%' }}
                                                                            ></div>
                                                                        </div>
                                                                        <div className="grid grid-cols-3 gap-4 mt-6">
                                                                            <div className="text-center">
                                                                                <div className="text-2xl font-bold text-green-400">✅ 12</div>
                                                                                <div className="text-xs text-n-3">Completed</div>
                                                                            </div>
                                                                            <div className="text-center">
                                                                                <div className="text-2xl font-bold text-yellow-400">⚠️ 5</div>
                                                                                <div className="text-xs text-n-3">In Progress</div>
                                                                            </div>
                                                                            <div className="text-center">
                                                                                <div className="text-2xl font-bold text-blue-400">⏳ 3</div>
                                                                                <div className="text-xs text-n-3">Planned</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        );
                                                    case "changelog-release":
                                                        return (
                                                            <div key={index} className="my-8">
                                                                <div className="relative group">
                                                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/15 via-blue-500/10 to-purple-500/15 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                                                                    <div className="relative bg-n-8/40 backdrop-blur-sm border border-n-6/50 rounded-2xl p-6 hover:border-n-6/70 transition-all duration-300">
                                                                        <div className="flex items-center justify-between mb-6">
                                                                            <div className="flex items-center gap-4">
                                                                                <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                                                                                    v{block.version}
                                                                                </span>
                                                                                <span className={`px-4 py-2 rounded-full text-xs font-bold backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${
                                                                                    block.releaseType === 'major' ? 'bg-red-500/30 text-red-300 border-red-500/50 shadow-red-500/25' :
                                                                                    block.releaseType === 'minor' ? 'bg-blue-500/30 text-blue-300 border-blue-500/50 shadow-blue-500/25' :
                                                                                    'bg-green-500/30 text-green-300 border-green-500/50 shadow-green-500/25'
                                                                                } shadow-lg`}>
                                                                                    {block.releaseType === 'minor' ? 'FEATURES' : block.releaseType === 'patch' ? 'FIXES' : block.releaseType.toUpperCase()}
                                                                                </span>
                                                                            </div>
                                                                            <div className="flex items-center gap-2">
                                                                                <span className="text-n-4 text-sm">{block.date}</span>
                                                                                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="grid gap-3">
                                                                            {block.items.map((category, catIndex) => (
                                                                                <div key={catIndex} className="bg-n-8/60 rounded-xl p-4 border border-n-6/30 hover:bg-n-8/80 hover:border-n-6/50 transition-all duration-200 hover:shadow-lg">
                                                                                    <h6 className="text-sm font-bold text-n-1 mb-3 flex items-center gap-2">
                                                                                        <span className="text-base">{category.category.split(' ')[0]}</span>
                                                                                        <span className="text-n-2">{category.category.split(' ').slice(1).join(' ')}</span>
                                                                                    </h6>
                                                                                    <ul className="space-y-2">
                                                                                        {category.changes.map((change, changeIndex) => (
                                                                                            <li key={changeIndex} className="flex items-start gap-3 text-sm text-n-3 hover:text-n-2 transition-colors duration-200">
                                                                                                <span className="text-gradient-1 mt-1 text-xs">▸</span>
                                                                                                <span>{change.replace(/^[^:]+:\s*/, '')}</span>
                                                                                            </li>
                                                                                        ))}
                                                                                    </ul>
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        );
                                                    case "note":
                                                        return (
                                                            <div
                                                                key={index}
                                                                className="p-6 bg-n-8 border-l-4 rounded-r-xl"
                                                                style={{
                                                                    borderImage: 'linear-gradient(to bottom, #8b5cf6, #3b82f6) 1'
                                                                }}
                                                            >
                                                                {block.title && (
                                                                    <h6 className="h6 mb-2 text-n-1">
                                                                        {block.title}
                                                                    </h6>
                                                                )}
                                                                <p className="body-2 text-n-3">
                                                                    {renderTextSafe(block.content)}
                                                                </p>
                                                            </div>
                                                        );
                                                    default:
                                                        return null;
                                                }
                                            })
                                        ) : (
                                            // Fallback for legacy simple string content
                                            <div className="body-1 text-n-3 space-y-4">
                                                <p>{content.content}</p>
                                                {content.image && (
                                                    <div className="my-8 overflow-hidden rounded-[1rem] border border-n-6 shadow-xl">
                                                        <img
                                                            src={content.image}
                                                            alt={content.title}
                                                            className="w-full h-auto object-cover"
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ) : (
                                <div className="text-center py-20">
                                    <h2 className="h2 mb-4">404 - Doc Not Found</h2>
                                    <p className="body-1 text-n-3">The requested documentation page does not exist.</p>
                                    <Link to="/docs" className="text-color-1 hover:underline mt-4 inline-block">
                                        Return to Introduction
                                    </Link>
                                </div>
                            )}
                        </main>
                    </div>
                </Section>

                <Footer />
            </div>
            <ButtonGradient />
        </>
    );
};

export default Docs;
