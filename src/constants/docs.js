import { gettingStartedContent } from "./docs-content/getting-started";
import { featuresContent } from "./docs-content/features";
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
            { title: "Shallow Crawler", slug: "shallow-crawl" },
            { title: "Deep Crawler", slug: "deep-crawl" },
            { title: "Log Analyser", slug: "log-analyser" },
            { title: "HTTP Checker", slug: "http-checker" },
            { title: "Google Ads Sim", slug: "google-ads-sim" },
            { title: "Page Speed Insights", slug: "page-speed-insights" },
            { title: "API Integrations", slug: "api-integrations" },
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
    ...configurationContent,
    ...projectContent,
    ...issuesContent,
};
