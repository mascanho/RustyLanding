import { roadmap1 } from "../../assets";
import { changelogData } from "../changelogData";

export const projectContent = {
    roadmap: {
        title: "Roadmap",
        blocks: [
            {
                type: "text",
                content: "Our journey to revolutionize SEO analysis. Here's what we've accomplished and where we're heading next."
            },
            {
                type: "bold-title",
                content: "🚀 Completed Features"
            },
            {
                type: "text",
                content: "These features are live and ready to use:"
            },
            {
                type: "list",
                items: [
                    "✅ **Deep Crawl** - Multi-page crawling with advanced analysis",
                    "✅ **Enhanced Integrations** - GA4, GSC, Clarity, and more",
                    "✅ **Advanced Reporting** - Comprehensive insights and export options",
                    "✅ **Content Calendar View** - Plan and track your content strategy",
                    "✅ **Chatbot Crawl Context** - AI-powered content analysis",
                    "✅ **Schema Generator & Validator** - Automated schema markup",
                    "✅ **Machine Learning Models** - Predictive analytics and insights"
                ]
            },
            {
                type: "bold-title",
                content: "🔧 In Development"
            },
            {
                type: "text",
                content: "Currently being refined and tested:"
            },
            {
                type: "list",
                items: [
                    "⚠️ **Password Protection & Encryption** - Enterprise-grade security",
                    "⚠️ **OAuth2 Authentication** - Seamless third-party integrations",
                    "⚠️ **SEMrush Integration** - Competitive analysis tools",
                    "⚠️ **GA4 Regression Analysis** - Historical trend analysis",
                    "⚠️ **Topic Modeling** - Content clustering and categorization"
                ]
            },
            {
                type: "bold-title",
                content: "🎯 Coming Soon"
            },
            {
                type: "text",
                content: "Next on our development roadmap:"
            },
            {
                type: "list",
                items: [
                    "⏳ **Keyword Clustering** - Automated keyword grouping",
                    "⏳ **Collaboration Tools** - Team-based project management",
                    "⏳ **Advanced Local LLM Support** - On-premise AI processing"
                ]
            },
            {
                type: "bold-title",
                content: "⚠️ Experimental Features"
            },
            {
                type: "text",
                content: "Cutting-edge features in early testing:"
            },
            {
                type: "list",
                items: [
                    "☠️ **HTML/JS/CSS Fragment Extraction** - Advanced code analysis",
                    "☠️ **Real-time Collaboration** - Live editing and sharing"
                ]
            },
            {
                type: "roadmap-progress"
            }
        ]
    },
    changelog: {
        title: "Changelog",
        blocks: [
            {
                type: "text",
                content: "Track our evolution. Every update brings us closer to the perfect SEO analysis platform."
            },
            ...changelogData.map((release) => {
                // Categorize changes automatically
                const categorizedChanges = {};
                release.changes.forEach(change => {
                    const category = change.split(':')[0];
                    if (!categorizedChanges[category]) {
                        categorizedChanges[category] = [];
                    }
                    categorizedChanges[category].push(change);
                });

                return {
                    type: "changelog-release",
                    version: release.version,
                    date: release.date,
                    releaseType: release.type === 'feature' ? 'minor' : release.type === 'update' ? 'minor' : release.type === 'fix' ? 'patch' : 'minor',
                    items: Object.keys(categorizedChanges).map(category => ({
                        category: category === 'Global' ? '🌍 Global' :
                                 category === 'Log' ? '📊 Logs' :
                                 category === 'Deep' ? '🔍 Deep Crawler' :
                                 category === 'Page' ? '⚡ Page Speed' :
                                 category === 'PPC' ? '📈 PPC Ads' :
                                 category === 'Tools' ? '🛠️ Tools' :
                                 category === 'Microsoft' ? '📊 Integrations' :
                                 category === 'Support' ? '⚙️ System' :
                                 category === 'Table' ? '🐛 Bug Fixes' :
                                 category === 'Performance' ? '🚀 Performance' :
                                 category === 'Inlinks' ? '🔗 Links' :
                                 category === 'Shallow' ? '🔍 Shallow Crawl' :
                                 category === 'Onboarding' ? '👋 Onboarding' :
                                 `📦 ${category}`,
                        changes: categorizedChanges[category]
                    }))
                };
            })
        ]
    },
    examples: {
        title: "Content Examples",
        blocks: [
            {
                type: "text",
                content: "This section serves as a template for various content types you can use in your documentation. You can include [links to external sites](https://google.com) directly within the text."
            },
            {
                type: "note",
                title: "Video Embed",
                content: "Below is an example of a video embed. You can replace the URL with any compatible iframe source."
            },
            {
                type: "video",
                url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                title: "Placeholder Video"
            },
            {
                type: "text",
                content: "You can also include lists where items can contain links:"
            },
            {
                type: "list",
                items: [
                    "Standard list item",
                    "Item with a [link to the roadmap](/docs/roadmap)",
                    "Another item with [external link](https://github.com/mascanho/RustySEO)"
                ]
            },
            {
                type: "note",
                title: "GIF / Image Support",
                content: "Images and GIFs are rendered identically. Just provide the source URL."
            },
            {
                type: "image",
                src: roadmap1,
                alt: "Placeholder for a GIF demonstrating a feature"
            },
            {
                type: "text",
                content: "Refer to the source code in `src/constants/docs.js` to copy and adapt these blocks."
            }
        ]
    }
};
