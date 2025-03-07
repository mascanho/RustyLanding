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
  github,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Why RustySEO",
    url: "#features",
  },
  {
    id: "2",
    title: "Features",
    url: "#how-to-use",
  },
  {
    id: "1",
    title: "Integrations",
    url: "#follow",
  },

  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "Download",
    url: "#download",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Instalation",
    url: "https://github.com/mascanho/RustySEO",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [silmadeiras, slimstock, sunshine];

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
    title: "Deep Crawling",
    text: "Crawl all the pages of your website, including the ones that are not visible to the user, filter and search options for DOM elements, CSS and Javascript code  .",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Custom Reports",
    text: "Generate custom reports based on your preferences, such as keyword rankings, page speed & performance, SEO metrics and more.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Image Conversion",
    text: "Convert images to the desired format, such as JPEG, WEbP or PNG, to optimize the website's performance.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "API integrations",
    text: "Connect with your favorite marketing tools and get the insights you need in one place.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
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
    description:
      "Download the latest version of RustySEO for Mac OSX (Apple Silicon / Intel )",
    price: "0",
    features: [
      "Fast and secure, no more crashes or slowdowns",
      "Built with Rust, a fast and secure programming language",
      "One stop shop for all your SEO needs",
    ],
    url: "https://github.com/mascanho/RustySEO/releases/",
  },
  {
    id: "1",
    title: "Linux",
    description:
      "Available for Linux, download the latest version of RustySEO for Linux",
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
    description: "Also available for Windows, download the latest version",
    price: null,
    features: [
      "Small footprint, no bloatware",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],

    url: "https://github.com/mascanho/RustySEO/releases/download/0.1.0/rustyseo_0.1.0_x64-setup.exe",
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
    title: "Githbg",
    iconUrl: github,
    url: "https://github.com/mascanho/RustySEO/",
  },
];
