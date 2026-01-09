import { roadmap1, benefitIcon1, benefitIcon2, benefitIcon3 } from "../assets";

export const docsNavigation = [
    {
        title: "Getting Started",
        links: [
            { title: "Introduction", slug: "introduction" },
            { title: "Installation", slug: "installation" },
            { title: "Quick Start", slug: "quick-start" },
        ],
    },
    {
        title: "Core Concepts",
        links: [
            { title: "Architecture", slug: "architecture" },
            { title: "Configuration", slug: "configuration" },
            { title: "Authentication", slug: "authentication" },
        ],
    },
    {
        title: "API Reference",
        links: [
            { title: "Endpoints", slug: "endpoints" },
            { title: "Models", slug: "models" },
            { title: "Errors", slug: "errors" },
        ],
    },
];

export const docsContent = {
    introduction: {
        title: "Introduction",
        blocks: [
            {
                type: "text",
                content: "Welcome to the RustySEO documentation. RustySEO is a high-performance SEO tool built with Rust and React designed to give you the fastest insights into your website performance."
            },
            {
                type: "note",
                title: "Why Rust?",
                content: "Rust provides memory safety without garbage collection, making it ideal for the high-throughput crawling tasks RustySEO performs."
            },
            {
                type: "link",
                text: "Check out the Source Code",
                url: "https://github.com/mascanho/RustySEO"
            }
        ]
    },
    installation: {
        title: "Installation",
        blocks: [
            {
                type: "text",
                content: "To install RustySEO, you can download the latest release from our GitHub repository. We support MacOS, Linux, and Windows."
            },
            {
                type: "list",
                items: [
                    "macOS: Universal Binary (Apple Silicon & Intel)",
                    "Windows: .msi installer",
                    "Linux: .deb and .AppImage"
                ]
            },
            {
                type: "code",
                language: "bash",
                content: "curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\ncargo install rusty-seo"
            }
        ]
    },
    "quick-start": {
        title: "Quick Start",
        blocks: [
            {
                type: "text",
                content: "After installing, simply run the application and enter your domain URL. RustySEO will automatically start identifying key SEO metrics. For a detailed walkthrough, check out our [video tutorial](https://www.youtube.com/watch?v=dQw4w9WgXcQ)."
            },
            {
                type: "video",
                url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                title: "Getting Started with RustySEO"
            },
            {
                type: "text",
                content: "Once the crawl is complete, you can view the report by navigating to the 'Reports' tab."
            }
        ]
    },
    architecture: {
        title: "Architecture",
        blocks: [
            {
                type: "text",
                content: "RustySEO uses a Tauri-based architecture with a Rust backend for heavy processing and a React frontend for a smooth user experience."
            },
            {
                type: "text",
                content: "Key components include:"
            },
            {
                type: "list",
                items: [
                    "Crawler Engine (Rust)",
                    "Data Store (SQLite)",
                    "Frontend (React + Vite)"
                ]
            }
        ]
    },
    configuration: {
        title: "Configuration",
        blocks: [
            {
                type: "text",
                content: "You can configure RustySEO by editing the config.toml file in your user directory. Settings include crawl depth, user agent, and concurrent request limits."
            },
            {
                type: "code",
                language: "toml",
                content: "[crawler]\ndepth = 5\nuser_agent = \"RustySEO/1.0\""
            }
        ]
    },
    authentication: {
        title: "Authentication",
        blocks: [
            {
                type: "text",
                content: "RustySEO supports standard API key authentication for integrating with third-party tools like Google Search Console and Google Analytics 4."
            }
        ]
    },
    endpoints: {
        title: "Endpoints",
        blocks: [
            {
                type: "text",
                content: "When running in server mode, RustySEO exposes several REST endpoints for programmatic access to crawl data."
            },
            {
                type: "code",
                language: "bash",
                content: "GET /api/v1/crawl/{id}/results"
            }
        ]
    },
    models: {
        title: "Models",
        blocks: [
            {
                type: "text",
                content: "Data models in RustySEO are designed to be efficient. We use SQLite for local storage and handle millions of rows with ease."
            }
        ]
    },
    errors: {
        title: "Errors",
        blocks: [
            {
                type: "text",
                content: "Common errors usually relate to network timeouts or rate limiting from target websites. RustySEO has built-in backoff strategies to handle these."
            },
            {
                type: "note",
                title: "Pro Tip",
                content: "Always check your robots.txt settings before crawling large sites."
            }
        ]
    },
};
