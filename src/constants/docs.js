import { gettingStartedContent } from "./docs-content/getting-started";
import { configurationContent } from "./docs-content/configuration";
import { projectContent } from "./docs-content/project";
import { issuesContent } from "./docs-content/current-issues";

export const docsNavigation = [
    {
        title: "Getting Started",
        links: [
            { title: "Introduction", slug: "introduction" },
            { title: "Installation", slug: "installation" },
            { title: "Features", slug: "features" },
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
    ...configurationContent,
    ...projectContent,
    ...issuesContent,
};
