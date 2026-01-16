import { roadmap1 } from "../../assets";

export const gettingStartedContent = {
  introduction: {
    title: "Introduction",
    blocks: [
      {
        type: "text",
        content:
          "RustySEO started with frustration. That moment every marketer knows too well when the tools you rely on become more of a headache than a help. We were tired of overpriced, bloated SEO software that slowed us down and limited our control. So we decided to build something different.",
      },

      {
        type: "text",
        content:
          "As an open source, cross platform toolkit, RustySEO brings together the technical depth developers love with the clarity and insights marketers need. It lets you crawl sites, analyse server logs, and uncover the story behind the data without the cost or complexity of traditional SEO tools.",
      },
      {
        type: "text",
        content:
          "Built in Rust for speed and efficiency, RustySEO is lightweight, transparent, and always evolving. It is not just a tool; it is a community driven project that grows with the people who use it.",
      },
      {
        type: "text",
        content:
          "RustySEO is our way of putting control back into the hands of the people who make digital growth happen. Marketers, developers, and DevOps teams who believe good data should be open, accessible, and empowering.",
      },

      {
        type: "note",
        title: "Disclaimer",
        content:
          "Use at your own risk, this software is new and under heavy development and new features are often introduced with the associated risk of bugs and issues as collateral. Expect breaking changes. Initial versions may have bugs and issues. If you would like to contribute to the project, or like the software, please visit our GitHub repository on the link below and give us a star 🌟  ",
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
          "[Windows  ](https://github.com/mascanho/RustySEO/releases)",
          "[Mac OSX ](https://github.com/mascanho/RustySEO/releases)",
          "[Linux](https://github.com/mascanho/RustySEO/releases)",
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
