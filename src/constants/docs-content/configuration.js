export const configurationContent = {
  connectors: {
    title: "Connectors & APIs",
    blocks: [
      {
        type: "text",
        content:
          "Keep in mind that all the integrations are free to use (up to an extent). Its abuse will result in 404 or 503 by the providers.",
      },
      {
        type: "text",
        content: "Available Integrations:",
      },
      {
        type: "list",
        items: [
          "Google Search Console",
          "Google Cloud Platform",
          "GA4",
          "Google Gemini",
          "Ollama",
          "PageSpeed Insights",
          "Microsoft Clarity",
        ],
      },
      {
        type: "note",
        title: "AI Models",
        content:
          "We recommend using Google Gemini if you want the best AI features. As of today, smaller local LLMs are not working properly and are not recommended.",
      },
    ],
  },
  "gsc-setup": {
    title: "Setting up Google Search Console",
    blocks: [
      {
        type: "text",
        content:
          "To setup Google Search Console, you first need to set up Google Cloud Console with Search Console API enabled and a Service Account active. Make sure you have full ownership of your GSC property.",
      },
      {
        type: "list",
        items: [
          "1. Launch RustySEO",
          "2. Go to the menu Connectors 👉 Search Console",
          "3. Add your Google Search Console credentials",
          "4. Submit and Restart RustySEO",
        ],
      },
      {
        type: "note",
        title: "Windows Setup",
        content:
          "Since Windows does not allow outputting logs into the terminal by default, force it to grab the generated auth link. Launch RustySEO from PowerShell with:",
      },
      {
        type: "code",
        content:
          'C:\\Users\\[your user]\\AppData\\Local\\rustyseo\\rustyseo.exe | Tee-Object -Filepath "C:\\Users\\[your user]\\Downloads\\rusty.log"',
      },
      {
        type: "text",
        content:
          "This will output logs. Find the Google Auth link, open it in your browser, and accept. Then restart RustySEO.",
      },
      {
        type: "note",
        title: "Mac OS Setup",
        content:
          "Open your terminal and execute the following to see the auth link:",
      },
      {
        type: "code",
        content: "/Applications/rustyseo.app/Contents/MacOS/rustyseo",
      },
      {
        type: "text",
        content:
          "Find the link in the terminal output, open it in your browser, accept prompts, and restart RustySEO.",
      },
    ],
  },
  keymaps: {
    title: "Keymaps",
    blocks: [
      {
        type: "text",
        content: "Boost your productivity with these shortcuts:",
      },
      {
        type: "subtitle",
        content: "GUI Version",
      },
      {
        type: "code",
        content:
          "Keys                Result\n\nCTRL + D            Deep Crawl\nCTRL + S            Shallow Crawl\nCTRL + H            Toggle Sidebar\nCTRL + L            Toggle Side Task Manager\nCTRL + T            Create TODO/Task\nCTRL + Shift + C    Delete Logs From DB\nCTRL + /            Clear cache\nCTRL + Shift + /    Full app reset",
      },
      {
        type: "subtitle",
        content: "TUI Version",
      },
      {
        type: "subtitle",
        content: "Global",
      },
      {
        type: "code",
        content: `  q          Quit
  ?          Toggle Help
  Esc        Reset / Cancel
  Ctrl+i     Enter input mode
  A          Toggle AI Chat`,
      },
      {
        type: "subtitle",
        content: "Navigation",
      },
      {
        type: "code",
        content: `  Tab        Next Tab/Section
  Shift+Tab  Previous Tab/Section
  k / ↑      Up
  j / ↓      Down
  [          Previous Page
  ]          Next Page
  G          Jump to Bottom
  Enter      Select / Confirm
  Ctrl+f     Search`,
      },
      {
        type: "subtitle",
        content: "Sidebar",
      },
      {
        type: "code",
        content: `  h / ←      Hide Sidebar
  k / ↑      Previous Tab
  j / ↓      Next Tab
  g          Go to Settings
  s          Go to Filters
  f          Go to Stats
  a          Go to Actions
  b / +      Go to Bookmarks
  t          Go to Tree View`,
      },
      {
        type: "subtitle",
        content: "Quick Jumps (Main sections)",
      },
      {
        type: "code",
        content: `  1          Dashboard
  2          Crawl
  3          Internal Links
  4          Redirects
  5          Images
  6          CSS
  7          Javascript
  8          Keywords
  9          Core Web Vitals
  0          Custom Extractor`,
      },
    ],
  },
};