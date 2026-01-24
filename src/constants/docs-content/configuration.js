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
        type: "code",
        content:
          "┌─────────────────────────────────────┬─────────────────────────────────────┐\n│ GLOBAL NAVIGATION                      │ SEARCH & NAVIGATION                  │\n├─────────────────────────────────────┼─────────────────────────────────────┤\n│ q          - Quit application         │ Tab        - Next main state/tab      │\n│ ?          - Toggle help modal        │ Backspace  - Previous main state/tab  │\n│ Esc        - Reset/cancel operation   │ k/↑        - Previous row              │\n│ Ctrl+i     - Enter input mode         │ j/↓        - Next row                  │\n│                                     │ G          - Jump to bottom            │\n│ QUICK STATE JUMPS                    │ Enter      - Select/confirm            │\n├─────────────────────────────────────┼─────────────────────────────────────┤\n│ 1-9,0      - Jump to sections        │ Ctrl+f     - Context-aware search      │\n│ 1 Dashboard  2 Crawl                 │ ]          - Next page                 │\n│ 3 Internal   4 Redirects             │ [          - Previous page             │\n│ 5 Images     6 CSS                   │                                     │\n│ 7 Javascript 8 Keywords              │ SIDEBAR QUICK ACCESS                 │\n│ 9 Core Web Vitals 0 Custom Extractor  ├─────────────────────────────────────┤\n│                                     │ g          - Settings (tab 0)          │\n│ SIDEBAR CONTROLS                     │ s          - Settings/Filters (tab 1)   │\n├─────────────────────────────────────┤ f          - Stats (tab 2)             │\n│ Esc/h/Left - Hide sidebar            │ a          - Actions (tab 3)           │\n│ k/↑        - Previous sidebar tab     │ b/+        - Bookmarks (tab 4)         │\n│ j/↓        - Next sidebar tab         │ t          - Tree View (tab 5)         │\n│ Tab        - Next sidebar tab        │ A          - Toggle AI Chat            │\n│ BackTab    - Previous sidebar tab    │ L          - Toggle logs console       │\n│                                     │ m          - Dashboard menu            │\n│ ACTIONS                              │ e/E        - Open settings file        │\n├─────────────────────────────────────┼─────────────────────────────────────┤\n│                                     │ MODALS                              │\n│ SEARCH MODES                         ├─────────────────────────────────────┤\n├─────────────────────────────────────┤ Help: q/Esc/? - Close                 │\n│ Enter/Esc  - Apply & exit search     │ AI Chat: q/Esc - Close, Enter - Send │\n│ Any char   - Add to search query     │ Details: q/Esc - Close, Tab/h/l - nav│\n│ Backspace  - Remove last character   │ Logs: Ctrl+s - search, q/Esc/L - close│\n│                                     │                                     │\n│ INPUT MODE                           │ MOUSE CONTROLS                      │\n├─────────────────────────────────────┼─────────────────────────────────────┤\n│ Enter      - Submit URL & crawl     │ Click tabs - Select/switch           │\n│ Esc        - Cancel input mode       │ Click outside modal - Close          │\n│ Any char   - Add to input            │ Scroll in tables - Navigate rows     │\n│ Backspace  - Delete last character   │                                     │\n│ Left/Right - Move cursor             │ CONTEXT-SPECIFIC NAVIGATION          │\n│                                     ├─────────────────────────────────────┤\n│                                     │ Dashboard: k/↑ j/↓ ] [ G Enter       │\n│                                     │ Content: k/↑ j/↓ ] [                 │\n│                                     │ Internal: k/↑ j/↓ ] [                │\n│                                     │ Images: k/↑ j/↓ ] [                  │\n│                                     │ JS/CSS URLs: k/↑ j/↓ ] [ Enter      │\n└─────────────────────────────────────┴─────────────────────────────────────┘",
      },
    ],
  },
};