import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  google,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  ga4,
  gsc,
  plusSquare,
  protopie,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmapCLI,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  sunshine,
  silmadeiras,
  slimstock,
  al,
  fe,
  bc,
  httpChecker,
} from "../assets";

const today = new Date();

export const navigation = [
  {
    id: "0",
    title: "Why RustySEO",
    url: "#features",
  },
  {
    id: "1",
    title: "Benefits",
    url: "#follow",
  },
  {
    id: "2",
    title: "SEO Features",
    url: "#seo-features",
  },
  {
    id: "3",
    title: "Documentation",
    url: "/docs",
  },
  {
    id: "4",
    title: "Blog",
    url: "/blog",
  },
  {
    id: "5",
    title: "Download",
    url: "#download",
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [silmadeiras, bc, sunshine];

export const brainwaveServices = [
  "SEO Audit & Monitoring",
  "Technical Performance",
  "Keyword Tracking",
  "Built-In Image Converter",
  "SEO Task Management",
  "Page & Domain Crawler",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Large Deep Crawling",
    text: "Crawl large websites with more than 30.000 pages, including the ones that are not visible to the user, filter and search options for DOM elements, CSS and Javascript code.",
    date: new Date("2025-05-01"),
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Command Line Interface",
    text: "Perform advanced SEO operations directly from your terminal. Automate crawls, run diagnostics, and integrate RustySEO into your CI/CD pipelines for continuous monitoring.",
    date: new Date(),
    status: "progress",
    imageUrl: roadmapCLI,
  },
  {
    id: "2",
    title: "Image Conversion",
    text: "Convert images to the desired format, such as JPEG, WEbP or PNG, to optimize the website's performance.",
    date: new Date("2025-05-01"),
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "RustySEO API",
    text: "Access RustySEO's powerful API to retrieve crawled data, perform SEO analysis, and integrate our capabilities directly into your applications. Build custom workflows and automate your SEO operations.",
    date: new Date(),
    status: "progress",
    imageUrl: httpChecker,
  },
];

export const collabText =
  "Smart Marketing data integrations to help you centralize your SEO efforts and focus on your optimisation.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart & Easy Automation",
  },
  {
    id: "2",
    title: "Fast & Reliable Data Streams",
  },
  {
    id: "3",
    title: "Secure Data Handling",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "GA4",
    icon: ga4,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "GSC",
    icon: gsc,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Google",
    icon: google,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Mac OSX",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
    url: "https://github.com/mascanho/RustySEO/releases",
  },
  {
    id: "1",
    title: "Linux",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "Debian based Linux distribution",
      "Fedora based Linux distribution",
      "Compile from source",
    ],
    url: "https://github.com/mascanho/RustySEO/releases",
  },
  {
    id: "2",
    title: "Windows",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
    url: "https://github.com/mascanho/RustySEO/releases",
  },
];

export const benefits = [
  {
    id: "0",
    title: "Performance",
    text: "Built with Rust, a fast and secure programming language, RustySEO is the fastest and most secure SEO tool available. No more crashes or slowdowns.",

    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "AI Integrated",
    text: "Integrated AI, with the latest free state-of-the-art AI models, providing you with accurate and reliable insights. No more guesswork.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Connectors",
    text: "Easily integrate with popular marketing and SEO tools to boost and centralize your Marketing efforts. Get the insights you need in one place.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Powerfull Insigths",
    text: "Get a holistic overview of your website's performance, insights and growth.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Historic Data",
    text: "Evaluate your SEO performance over time, identify trends and make informed decisions. Keep track of your progress and stay ahead of the competition.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Task Manager",
    text: "Keep your tasks, improvements and metrics all in one place. Effortlessly track and monitor all the changes in your SEO.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
