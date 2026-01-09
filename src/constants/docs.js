import { gettingStartedContent } from "./docs-content/getting-started";
import { featuresContent } from "./docs-content/features";
import { apiIntegrationsContent } from "./docs-content/api-integrations";
import { configurationContent } from "./docs-content/configuration";
import { projectContent } from "./docs-content/project";
import { issuesContent } from "./docs-content/current-issues";

export const docsNavigation = [
    {
        title: "Getting Started",
        links: [
            { title: "Introduction", slug: "introduction" },
            { title: "Installation", slug: "installation" },
        ],
    },
    {
        title: "Features",
        links: [
            { title: "Overview", slug: "features" },

            { title: "Tools", header: true },
            { title: "Shallow Crawler", slug: "shallow-crawl" },
            { title: "Deep Crawler", slug: "deep-crawl" },
            { title: "Log Analyser", slug: "log-analyser" },
            { title: "HTTP Checker", slug: "http-checker" },
            { title: "Google Ads Sim", slug: "google-ads-sim" },
            { title: "Page Speed Insights", slug: "page-speed-insights" },
        ],
    },
    {
        title: "API Integrations",
        links: [
            { title: "Overview", slug: "api-integrations" },
            { title: "Google Search Console", slug: "gsc-integration" },
            { title: "Google Analytics 4", slug: "ga4-integration" },
            { title: "Microsoft Clarity", slug: "clarity-integration" },
            { title: "SEMrush", slug: "semrush-integration" },
            { title: "PageSpeed Insights", slug: "pagespeed-integration" },
            { title: "Google Gemini / Ollama", slug: "gemini-integration" },
        ],
    },
    {
        title: "Configuration",
        links: [
            { title: "Connectors & APIs", slug: "connectors" },
            { title: "Google Search Console", slug: "gsc-setup" },
            { title: "Keymaps", slug: "keymaps" },
        ],
    },
    {
        title: "Project",
        links: [
            { title: "Roadmap", slug: "roadmap" },
            { title: "Changelog", slug: "changelog" },
            { title: "Current Issues", slug: "issues" },
            { title: "Content Examples", slug: "examples" },
        ],
    },
];

export const docsContent = {
    ...gettingStartedContent,
    ...featuresContent,
    ...apiIntegrationsContent,
    ...configurationContent,
    ...projectContent,
    ...issuesContent,
};
