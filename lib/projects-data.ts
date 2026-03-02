export interface Project {
  slug: string
  title: string
  category: string
  description: string
  longDescription: string
  image: string
  tags: string[]
  rating: any
  downloads: string
  platform: "mobile" | "web"
  year: string
  client: string
  duration: string
  features: string[]
  challenges: string[]
  results: string[]
  live:Boolean,
  android?:any,
  ios?:any,
  website?:any,
  github?:any
}

export const projects: Project[] = [
  {
    slug: "dofE",
    title: "DofE",
    category: "Mobile - Youth Development",
    description:
      "We help young people build lifelong belief in themselves, follow their passions and discover talents they never knew they had.",
    longDescription:
      "Contributed to the development of the official DofE mobile application, a nationwide platform supporting young people across the UK. Built core modules for Volunteering, Physical, Skills, Expedition, and Residential (Gold). Implemented Redux Form validation for accurate activity submission and progress tracking. Developed reusable UI components and managed global state using Redux to ensure scalable architecture, smooth data flow, and consistent user experience across the application.",
    image: "/images/dofe.png",
    tags: ["React Native", "Redux", "Redux-Form","Reanimated"],
    rating: 3,
    downloads: "1L+",
    platform: "mobile",
    year: "2024",
    client: "HealthTech Startup",
    duration: "8 months",
    features: [
    "Activity planning and progress tracking",
    "Bronze, Silver, and Gold programme modules",
    "Leader communication and feedback system",
    "Redux Form validation for accurate submissions",
    "Reusable component architecture",
    "Global state management using Redux"
    ],
    challenges: [
      "Managing large-scale user workflows across programme levels",
    "Ensuring accurate form validation and progress tracking",
    "Maintaining performance and stability for nationwide usage"
    ],
    results: [
      "Enabled digital tracking for 100K+ active users",
    "Improved consistency through Redux-based architecture",
    "Enhanced reliability of activity submissions and leader feedback"
    ],
    android:"https://play.google.com/store/apps/details?id=org.production.edofe&hl=en_IN",
    ios:"https://apps.apple.com/in/app/dofe/id1476364195",
    live:true,
  },
  {
    slug: "lts",
    title: "Long Tall Sally",
    category: "Mobile - E-commerce",
    description:
      "Official mobile shopping application for Long Tall Sally, a global fashion brand exclusively designed for tall women.",
    longDescription:
      "Worked on the development and maintenance of the Long Tall Sally mobile application, a global e-commerce platform serving tall women worldwide. Focused on enhancing the shopping experience, performance optimization, secure checkout flows, and seamless product browsing. Ensured smooth navigation, responsive UI, and reliable API integration for real-time product data and order management.",
    image: "/images/lts.png",
   tags: ["React Native", "Redux", "REST APIs", "E-commerce", "Firebase"],
    rating: 4.5,
    downloads: "10K+",
    platform: "mobile",
    year: "2024",
    client: "FinServe Inc.",
    duration: "6 months",
     features: [
    "Product browsing with category filtering",
    "Secure user authentication and account management",
    "Shopping cart and checkout flow",
    "Real-time product data integration",
    "Order tracking and purchase history",
    "In-app purchase functionality"
  ],
   challenges: [
    "Optimizing performance for large product catalogs",
    "Ensuring smooth checkout and payment processing",
    "Maintaining consistent UI across Android devices"
  ],
  results: [
    "Improved app stability and user experience",
    "Enhanced API performance for faster product loading",
    "Maintained compatibility across Android 8.0+ devices"
  ],  
  android:"https://play.google.com/store/apps/details?id=com.poqstudio.app.longtallsally&pcampaignid=web_share",
  ios:"https://apps.apple.com/in/app/long-tall-sally/id6738125845",
    live:true,
  },
   {
    slug: "youcab-tranvia",
    title: "YouCab Tranvia",
    category: "Mobile - Ride Booking",
    description:
      "Ride booking platform with real-time driver tracking, chat communication, Razorpay payments, and live ride updates.",
    longDescription:
      "YouCab Tranvia, a ride-booking application serving Delhi NCR and PAN India outstation travel. Built both user and driver applications using React Native. Implemented real-time ride tracking with live map integration, driver markers, route directions, and instant ride status updates using WebSockets. Developed in-app chat between user and driver, call functionality, Razorpay payment integration, wallet system, and referral-based earning features. Integrated push notifications for ride updates such as driver arrival, ride start, and trip completion.",
    image: "/images/youcab.png",
     tags: [
    "React Native",
    "Google Maps",
    "Razorpay",
    "Redux",
    "TypeScript",
    "Reanimated",
    "WebSockets",
    "Maps Integration",
    "REST APIs",
    "Push Notifications"
  ],
    rating: 4.6,
    downloads: "5K+",
    platform: "mobile",
    year: "2025",
    client: "DataViz Corp",
    duration: "8 months",
    features: [
      "User & Driver applications",
    "Live ride tracking with map & route directions",
    "Real-time driver location markers",
    "User-to-driver chat & call functionality",
    "WebSocket-based ride status updates",
    "Razorpay payment gateway integration",
    "In-app wallet & referral earnings system",
    "Push notifications for instant ride updates",
    "Local & outstation ride booking"
    ],
     challenges: [
    "Managing real-time location updates with low latency",
    "Synchronizing ride status across user and driver apps",
    "Ensuring secure and smooth payment processing",
    "Optimizing performance for map-heavy screens"
  ],
  results: [
    "Delivered scalable ride-booking platform",
    "Enabled real-time ride tracking and communication",
    "Improved ride management with automated notifications",
    "Built reliable user-driver interaction system"
  ],
  android:"https://play.google.com/store/apps/details?id=com.youcabtranvia&pcampaignid=web_share",
  ios:"https://apps.apple.com/in/app/youcab-tranvia/id6473275172",
  live:true,
  },
  {
    slug: "greenex",
    title: "Greenex India",
    category: "Mobile - Fintech",
    description:
      "High-performance cryptocurrency Futures & Options trading exchange with real-time order execution, risk management systems, and advanced trading.",
    longDescription:
      "Worked on the development of a high-performance crypto derivatives trading platform supporting Futures, Options, Copy Trading, and Algo Trading for retail and institutional users. Designed and optimized real-time trading interfaces including live order book, open positions tracking, advanced PnL analytics, and TradingView-powered interactive charts. Implemented margin modes (Isolated, Cross, Portfolio) with dynamic leverage up to 100x. Built demo trading environments, automated risk management systems, and integrated INR-based fiat on/off ramps with UPI and bank transfers. Enabled algorithmic trading via TradingView webhooks and real-time updates using WebSockets.",
    image: "/images/greenex.png",
    tags:["React Native", "TypeScript","Redux / RTK Query", "WebSockets","TradingView", "REST APIs"],
    rating: null,
    downloads: "Close Testing",
    platform: "mobile",
    year: "2026",
    client: "RetailMax Group",
    duration: "5 months",
    features: [
      "Futures & Options trading with up to 100x leverage",
    "Live order book and real-time trade execution",
    "Advanced PnL analytics and portfolio insights",
    "Strategy Builder with payoff diagrams & Greeks analysis",
    "Algo Trading via TradingView Webhooks",
    "Demo trading environment",
    "Risk management systems (stop-loss, liquidation, daily limits)",
    "INR fiat on/off ramps (UPI & bank transfers)",
    "KYC verification and real-time support updates"
    ],
    challenges: [
        "Handling real-time trading data with low latency",
    "Implementing complex margin and leverage systems",
    "Designing scalable architecture for high-frequency trading",
    "Ensuring secure and compliant payment integration"
    ],
    results: [
      "Delivered institutional-grade trading infrastructure",
    "Enhanced automation and professional trading analytics",
    "Built scalable exchange framework for Indian crypto market"
    ],
    live:true,
  },
  {
    slug: "krinos",
    title: "Krinos Wallet",
    category: "Mobile - Finance",
    description:
      "Secure decentralized Web3 cryptocurrency wallet with multi-chain support, and enterprise-grade security architecture.",
    longDescription:
      "Worked on the design and development of a secure decentralized Web3 cryptocurrency wallet focused on usability, performance, and strong security architecture. Implemented wallet creation and recovery using encrypted seed phrases with multi-layer authentication including 6-digit passcode, 2FA, and IP-based access control. Integrated multi-chain asset support (BTC, ETH, USDT, USDC, BNB) with real-time balance tracking and QR-based transfers. Developed beginner and expert UI modes, NFT and custom token support, crypto swaps via Changelly/ChangeNOW APIs, and DApp wallet connectivity. Contributed to admin dashboard modules for transaction monitoring, fee management, analytics, and support systems.",
    image: "/images/krions.png",
    tags: ["React Native",
    "JavaScript",
    "Redux",
    "Web3",
    "REST APIs",
    "Changelly API",
    "QR Scanner",
    "Firebase",
    "Secure Storage"
  ],
    rating: 3,
    downloads: "100+",
    platform: "mobile",
    year: "2025",
    client: "SocialTech Labs",
    duration: "5 months",
    features: [
    "Secure wallet creation & recovery (seed phrase encryption)",
    "Multi-layer authentication (Passcode, 2FA, IP control)",
    "Multi-chain crypto asset support",
    "Real-time balance tracking",
    "QR-based crypto transfers",
    "NFT & custom token support (KLS, KLSU)",
    "Crypto swaps via Changelly/ChangeNOW",
    "DApp wallet connectivity",
    "Beginner & Expert UI modes",
    "Multilingual support (5 languages)",
    "Admin dashboard for monitoring & analytics"
  ],
  challenges: [
    "Ensuring secure seed phrase storage and encryption",
    "Handling cross-chain asset compatibility",
    "Maintraining real-time balance synchronization",
    "Designing dual-mode UI for different user levels"
  ],
  results: [
    "Delivered production-grade decentralized wallet",
    "Enabled seamless cross-chain asset management",
    "Improved global accessibility through multilingual UI",
    "Enhanced security through layered authentication system"
  ],
      android:"https://play.google.com/store/apps/details?id=com.krinos&pcampaignid=web_share",
  ios:"https://apps.apple.com/in/app/krinos-non-custodial-wallet/id6744415209",
  live:true,
  },
  {
    slug: "organic-food",
    title: "Organic Food",
    category: "Web - E-commerce",
    description:
      "Responsive organic food e-commerce website built with Frontend, Firebase, Bootstrap5, and reusable component architecture.",
    longDescription:
      "Developed a fully responsive organic food e-commerce website with a modern UI and reusable component structure. Implemented Firebase for Hosting, real-time database management, and hosting. Designed the interface using Bootstrap 5 with a clean layout and carousel banners for product promotions. Focused on responsive design, optimized performance, and smooth user experience across devices.",
    image: "/images/organic.png",
     tags: [
    "React",
    "HTML5",
    "CSS",
    "Bootstrap5",
    "Responsive Design",
    "Reusable Components",
  ],
    rating: null,
    downloads: "180K+",
    platform: "web",
    year: "2024",
    client: "FoodTech Ventures",
    duration: "5 months",
    features: [
     "Responsive layout using Bootstrap 5",
    "Firebase Hosting & database integration",
    "Product listing and category filtering",
    "Reusable component-based architecture",
    "Carousel banner for promotions",
    "Mobile-friendly design"
    ],
    challenges: [],
    results:[],
    website:"https://organicfood-40d1a.web.app",
    github:"https://github.com/spraveensundar/Organic_Food_Website",
    live:false,
  },
  {
    slug: "weather-app",
    title: "Weather Forecast",
    category: "Web - Utility Application",
    description:
      "Interactive weather forecast application built using React.js with real-time weather data and dynamic UI updates.",
    longDescription:
      "Developed a responsive weather forecast application using React.js that displays real-time weather data including temperature, humidity, wind speed, and weather conditions. Integrated third-party weather APIs to fetch live data based on user search input. Implemented dynamic UI updates, animated weather visuals, and responsive design to ensure smooth experience across devices.",
    image: "/images/weater.png",
     tags: [
    "React.js",
    "JavaScript",
    "REST API",
    "Responsive Design",
    "HTML5",
    "CSS3"
  ],
    rating: null,
    downloads: "75K+",
    platform: "web",
    year: "2023",
    client: "HealthBridge Solutions",
    duration: "7 months",
    features: [
     "Search weather by city name",
    "Real-time temperature, humidity, and wind speed",
    "Dynamic weather icons and background effects",
    "API integration for live weather updates",
    "Responsive design for mobile and desktop",
    "Clean and modern UI",
    ],
    challenges: [],
    results: [],
    github:"https://github.com/spraveensundar/Weather_App_Reactjs",
    live:false,
  },
  {
    slug: "disney-plus-clone",
    title: "Disney+ UI Clone",
    category: "Web - Streaming",
    description:
      "Responsive Disney+ inspired streaming platform UI with Firebase Google Authentication and dynamic content rendering.",
    longDescription:
      "Developed a fully responsive Disney+ inspired streaming platform using React.js with Firebase Google Authentication. Implemented secure login using Google Sign-In and managed user sessions with Firebase Auth. Designed a realistic streaming UI using modern CSS techniques with smooth transitions, hover animations, and responsive layouts. Focused on reusable components, dynamic movie sections, and pixel-perfect UI to replicate a production-level streaming experience.",
    image: "/images/disny.png",
    tags: [
    "React.js",
    "Firebase",
    "CSS3",
    "Google Authentication",
    "Responsive Design",
    "Reusable Components"
  ],
    rating: null,
    downloads: "Live",
    platform: "web",
    year: "2024",
    client: "WanderTech Inc.",
    duration: "6 months",
    features: [
      "Firebase Google Authentication",
    "Protected routes for logged-in users",
    "Responsive streaming layout",
    "Reusable movie card components",
    "Hover animations and transitions",
    "Carousel banner section",
    "Dynamic content sections (Movies, Series, Originals)"
    ],
    challenges: [],
    results: [],
    github:"https://github.com/spraveensundar/Disney_Clone_Reactjs",
    live:false,
  },
   {
    slug: "travel-booking",
    title: "Travel Booking",
    category: "Mobile - Travel & Tourism",
    description:
      "Responsive travel booking application with modern UI, destination browsing, detailed views, and smooth navigation experience.",
    longDescription:
      "Designed and developed a fully responsive travel booking mobile application with a clean and modern user interface. The app allows users to explore destinations, view detailed travel information, check pricing, and book trips seamlessly. Implemented reusable components, smooth navigation, and optimized layout for different screen sizes. Focused on responsive design, user-friendly interactions, and visually appealing destination cards with detailed view screens.",
    image: "/images/travel.png",
     tags: [
    "React Native",
    "Responsive Design",
    "Reusable Components",
    "Navigation",
    "UI/UX Design",
  ],
    rating: null,
    downloads: "Close Testing",
    platform: "mobile",
    year: "2026",
    client: "RetailMax Group",
    duration: "5 months",
      features: [
    "Destination search and category filtering",
    "Responsive card-based layout",
    "Detailed destination view screen",
    "Price display and booking option",
    "Distance and weather information",
    "Smooth navigation transitions",
    "Reusable component architecture"
  ],
    challenges: [],
    results: [
    "Delivered modern travel booking UI",
    "Improved responsive design implementation skills",
    "Enhanced reusable component structure"
  ],
  github:"https://github.com/spraveensundar/Travel_App_React_Native",
  live:false,
  },
  
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.slice(0, 4)
}
