export const faqTechnicalContent = {
  "faq-technical": {
    title: "Technical Requirements",
    blocks: [
      {
        type: "text",
        content: "System requirements and technical specifications for running RustySEO.",
      },
      {
        type: "subtitle",
        content: "System Requirements"
      },
      {
        type: "text",
        content: "What are the minimum system requirements?",
      },
      {
        type: "text",
        content: "RustySEO requires:\n- Modern operating system (Windows 10+, macOS 10.14+, or Linux)\n- At least 4GB of RAM (8GB recommended)\n- 1GB of available disk space\n- Internet connection for API integrations"
      },
      {
        type: "text",
        content: "Does RustySEO require installation?",
      },
      {
        type: "text",
        content: "Yes, RustySEO needs to be installed on your system. Please refer to the Installation guide for detailed instructions specific to your operating system."
      },
      {
        type: "subtitle",
        content: "Performance & Scaling"
      },
      {
        type: "text",
        content: "Can RustySEO handle large websites?",
      },
      {
        type: "text",
        content: "Yes, RustySEO is designed to handle websites of all sizes. For very large sites, consider using the Deep Crawler with appropriate rate limiting settings to avoid overwhelming the target server."
      },
      {
        type: "text",
        content: "How much memory does RustySEO use?",
      },
      {
        type: "text",
        content: "Memory usage varies based on the size of the website being crawled and the data being processed. Typical usage ranges from 100MB to 1GB+ for large sites."
      },
      {
        type: "text",
        content: "Is RustySEO multithreaded?",
      },
      {
        type: "text",
        content: "Yes, RustySEO uses Rust's concurrent programming capabilities for efficient crawling and data processing, making it significantly faster than many single-threaded alternatives."
      },
    ],
  },
};