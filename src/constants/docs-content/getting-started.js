import { roadmap1 } from "../../assets";

export const gettingStartedContent = {
  introduction: {
    title: "Introduction",
    blocks: [
      {
        type: "text",
        content:
          "RustySEO is an all-in-one, cross-platform Marketing toolkit, designed for comprehensive SEO & GEO analysis. It enables users to crawl websites, analise server logs gaining actionable insights into their marketing and SEO strategies.",
      },
      {
        type: "text",
        content:
          "As an open-source project, RustySEO aims to enhance your SEO efforts. Our mission is to offer a robust, free alternative to the costly commercial SEO tools currently on the market.",
      },

      {
        type: "text",
        content:
          "RustySEO was born out of sheer frustration with the overpriced, clunky SEO tools that made us question our life choices. As an open-source project, it's our way of turning that frustration into something useful (and maybe a little fun). Our goal? To help you level up your SEO game without emptying your wallet, all while we learn and grow together. Think of it as therapy, but for nerds. 🤓",
      },

      {
        type: "note",
        title: "Disclaimer",
        content:
          "Use at your own risk, this software is new and under heavy development and new features are often introduced with the associated risk of bugs and issues as collateral. Expect breaking changes. Initial versions may have bugs and issues. If you would like to contribute to the project, please visit our GitHub repository on the link below. 🦀",
      },
      {
        type: "link",
        text: "View on GitHub",
        url: "https://github.com/mascanho/RustySEO",
      },
    ],
  },
  installation: {
    title: "Installation",
    blocks: [
      {
        type: "note",
        title: "‼️ Important Note",
        content:
          "You will get prompted with 'Unknown/Unregistered Developer' on Windows and Mac. This is expected as the app is currently unsigned. This is only due to the app being in development and not yet officially signed by a recognized OS certificate.",
      },
      {
        type: "text",
        content: "Download the latest release for your operating system:",
      },
      {
        type: "list",
        items: [
          "[Windows Installer (.msi)](https://github.com/mascanho/RustySEO/releases)",
          "[Mac OS Universal Binary](https://github.com/mascanho/RustySEO/releases)",
          "[Linux (.deb / .AppImage)](https://github.com/mascanho/RustySEO/releases)",
        ],
      },
      {
        type: "text",
        content:
          "All installation files are built using GitHub actions. If you have any issues with the pre-built releases, you can always clone the project and compile it in your machine.",
      },
    ],
  },
  "quick-start": {
    title: "Quick Start",
    blocks: [
      {
        type: "text",
        content:
          "After installing, simply run the application and enter your domain URL. RustySEO will automatically start identifying key SEO metrics. For a detailed walkthrough, check out our [video tutorial](https://www.youtube.com/watch?v=dQw4w9WgXcQ).",
      },
      {
        type: "video",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        title: "Getting Started with RustySEO",
      },
      {
        type: "text",
        content: "Once the crawl is complete, you can:",
      },
      {
        type: "list",
        items: [
          "View the report by navigating to the 'Reports' tab",
          "Export data to [CSV or PDF format](#export)",
          "Share the results with your team",
        ],
      },
    ],
  },
};
