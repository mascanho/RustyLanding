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

    return (
        <>
            <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
                <Header />

                <Section className="custom-paddings pt-12 pb-24 lg:pt-16 lg:pb-32" crosses>
                    <div className="container relative flex flex-col lg:flex-row gap-10">
                        {/* Sidebar */}
                        <aside className="lg:w-1/4 flex-shrink-0">
                            <div className="sticky top-28 space-y-8">
                                {docsNavigation.map((group, index) => (
                                    <div key={index}>
                                        <h5 className="text-n-1 font-code text-sm font-bold uppercase tracking-wider mb-4 text-n-4">
                                            {group.title}
                                        </h5>
                                        <ul className="space-y-3">
                                            {group.links.map((link) => (
                                                <li key={link.slug}>
                                                    <Link
                                                        to={`/docs/${link.slug}`}
                                                        className={`block text-sm font-code transition-colors hover:text-color-1 ${activeSlug === link.slug
                                                                ? "text-n-1 bg-n-8 border-l-2 border-color-1 pl-3 -ml-[2px]"
                                                                : "text-n-3"
                                                            }`}
                                                    >
                                                        {link.title}
                                                    </Link>
                                                </li>
                                            ))}
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
                                    <div className="body-1 text-n-3 space-y-4">
                                        <p>{content.content}</p>
                                        {/* Placeholder for more complex content rendering */}
                                        <div className="mt-8 p-4 bg-n-7 rounded-xl border border-n-6 font-code text-xs text-n-2">
                                            {/* Mock code block */}
                                            <p className="mb-2 text-n-4">// Example usage</p>
                                            <p>rusty-seo --url {`https://example.com`}</p>
                                        </div>
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
