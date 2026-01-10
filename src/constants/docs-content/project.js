import { roadmap1 } from "../../assets";

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
            {
                type: "changelog-release",
                version: "v0.3.6",
                date: "2025-01-31",
                type: "minor",
                items: [
                    { category: "🌍 Global", changes: ["Bug fixes and improvements", "Better stdout logging"] },
                    { category: "📊 Integrations", changes: ["Better integration for GA4 and GSC"] },
                    { category: "📈 Log Analyser", changes: ["Ingests GSC API data", "Table now shows GSC data", "Dedicated GSC Table"] }
                ]
            },
            {
                type: "changelog-release",
                version: "v0.3.5",
                date: "2025-01-15",
                type: "minor",
                items: [
                    { category: "📈 Log Analyser", changes: ["GSC upload manager", "Data Integration"] },
                    { category: "🔍 Deep Crawler", changes: ["Fixed titles < 30 chars"] },
                    { category: "🌍 Global", changes: ["Bug fixes and improvements"] },
                    { category: "🛠️ Tools", changes: ["HTTP and Header Security Checker"] }
                ]
            },
            {
                type: "changelog-release",
                version: "v0.3.4",
                date: "2025-12-25",
                type: "patch",
                items: [
                    { category: "📈 Log Analyser", changes: ["Table segments"] }
                ]
            },
            {
                type: "changelog-release",
                version: "v0.3.3",
                date: "2025-12-01",
                type: "minor",
                items: [
                    { category: "📈 Log Analyser", changes: ["More content segments", "OpenAI bot validation", "Bing bot validation", "WP Rocket detection"] }
                ]
            },
            {
                type: "changelog-release",
                version: "v0.3.2",
                date: "2025-11-01",
                type: "minor",
                items: [
                    { category: "⚡ Page Speed Insights", changes: ["Better Rate Limiting & URL encoding", "Improved UI", "Status log"] },
                    { category: "📊 Logs", changes: ["User agent segments added"] }
                ]
            },
            {
                type: "changelog-release",
                version: "v0.3.1",
                date: "2025-10-01",
                type: "patch",
                items: [
                    { category: "🌍 Global", changes: ["Bug fixes and improvements"] }
                ]
            },
            {
                type: "changelog-release",
                version: "v0.3.0",
                date: "2025-09-01",
                type: "minor",
                items: [
                    { category: "🔍 Deep Crawl", changes: ["Configurable stop words", "GSC queries and metrics", "Added robots parsing"] }
                ]
            },
            {
                type: "changelog-release",
                version: "v0.2.9",
                date: "2025-08-17",
                type: "minor",
                items: [
                    { category: "📊 PPC Ads", changes: ["simulator with better export CSV", "Improved UI & UX"] },
                    { category: "🔍 Deep Crawler", changes: ["Better finish notification", "Improved URL tracking", "Google Search Console matching"] },
                    { category: "🛠️ Tools", changes: ["Bulk Image resizing Tool"] }
                ]
            },
            {
                type: "changelog-release",
                version: "v0.2.8",
                date: "2025-07-01",
                type: "major",
                items: [
                    { category: "🌍 Global", changes: ["Bug fixes", "Deep crawl tables MacOSX bug fix", "Improved error handling of APIs"] },
                    { category: "🔍 Deep Crawler", changes: ["Improved concurrent processing of links", "Better link check concurrency", "Performance improvements"] },
                    { category: "⚡ Page Speed", changes: ["Improved Bulk Analysis"] },
                    { category: "📊 Logs", changes: ["Added project segmentation", "Improved search", "User agent filter", "IP masking", "Improved processing speed", "Better batch upload and reload", "Improved table UI"] },
                    { category: "📈 Analytics", changes: ["Better date selection for GA4"] }
                ]
            },
            {
                type: "changelog-release",
                version: "v0.2.7",
                date: "2025-06-17",
                type: "minor",
                items: [
                    { category: "⚙️ System", changes: ["Support for partial and full App reset", "Better handling of configuration folders & files"] },
                    { category: "🔍 Deep Crawler", changes: ["Improved tables"] }
                ]
            },
            {
                type: "changelog-release",
                version: "v0.2.6",
                date: "2025-06-15",
                type: "patch",
                items: [
                    { category: "🐛 Bug Fixes", changes: ["Table rows not rendering correctly", "Better status code colouring", "Fixed Google Ads Simulator"] }
                ]
            },
            {
                type: "changelog-release",
                version: "v0.2.5",
                date: "2025-06-01",
                type: "minor",
                items: [
                    { category: "🚀 Performance", changes: ["Performance Improvements"] },
                    { category: "🔗 Links", changes: ["Inlinks & Outlinks improvements"] },
                    { category: "📊 Logs", changes: ["Improved incremental log analysis", "improved search"] },
                    { category: "⚙️ System", changes: ["Global system info"] },
                    { category: "🔍 Deep Crawler", changes: ["context menus added to tables"] }
                ]
            },
            {
                type: "changelog-release",
                version: "v0.2.4",
                date: "2025-05-25",
                type: "major",
                items: [
                    { category: "📊 Integrations", changes: ["Microsoft Power BI integration"] },
                    { category: "📊 Logs", changes: ["Incremental log analysis", "Log storage and retrieval", "Parallel log parsing", "Improved filtering", "Improved filtering", "Improved Google bot Frequency calculation"] },
                    { category: "🛠️ Tools", changes: ["PPC simulator added"] },
                    { category: "🎨 UI", changes: ["Tables UI improvements"] },
                    { category: "⚡ Page Speed", changes: ["Bulk Page Speed Insights on Deep crawler"] },
                    { category: "🔍 Deep Crawler", changes: ["Performance improvements", "Request status codes on in/out links"] }
                ]
            },
            {
                type: "changelog-release",
                version: "v0.2.3",
                date: "2025-01-28",
                type: "minor",
                items: [
                    { category: "🔍 Shallow Crawl", changes: ["page schema validator"] },
                    { category: "👋 Onboarding", changes: ["Introduction"] },
                    { category: "📊 Analytics", changes: ["GSC Keyword Tracking"] },
                    { category: "🔍 Deep Crawler", changes: ["Custom Search"] }
                ]
            }
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
