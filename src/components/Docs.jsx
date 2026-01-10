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
            <div className="pt-[4.75rem] lg:pt-[5.25rem]">
                <Header />

                <Section className="custom-paddings pt-12 pb-24 lg:pt-16 lg:pb-32" crosses>
                    <div className="container relative flex flex-col lg:flex-row gap-10">
                        {/* Sidebar */}
                        <aside className="lg:w-1/4 flex-shrink-0">
                            <div className="sticky top-28 h-[calc(100vh-7rem)] overflow-y-auto space-y-8 pr-2">
                                {docsNavigation.map((group, index) => (
                                    <div key={index}>
                                        <h5 className="text-n-1 font-code text-lg font-bold uppercase tracking-wider mb-1 pb-2 border-b border-n-6/50">
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
