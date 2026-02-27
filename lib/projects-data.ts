export interface Project {
  slug: string
  title: string
  category: string
  description: string
  longDescription: string
  image: string
  tags: string[]
  rating: number
  downloads: string
  platform: "mobile" | "web"
  year: string
  client: string
  duration: string
  features: string[]
  challenges: string[]
  results: string[]
}

export const projects: Project[] = [
  {
    slug: "fittrack-pro",
    title: "FitTrack Pro",
    category: "Mobile - Health & Fitness",
    description:
      "A comprehensive fitness tracking app with AI-powered workout plans, heart rate monitoring, and social challenges.",
    longDescription:
      "FitTrack Pro is a full-featured fitness companion app that leverages machine learning to create personalized workout plans. It integrates with wearable devices for real-time heart rate monitoring, tracks nutrition intake, and includes a social challenge system where users can compete with friends. The app features beautiful animated charts for progress tracking and a clean, motivating dark-themed interface.",
    image: "/images/project-fitness.jpg",
    tags: ["Flutter", "Firebase", "TensorFlow Lite"],
    rating: 4.8,
    downloads: "100K+",
    platform: "mobile",
    year: "2025",
    client: "HealthTech Startup",
    duration: "4 months",
    features: [
      "AI-powered personalized workout plans",
      "Real-time heart rate and calorie monitoring",
      "Social challenges and leaderboards",
      "Nutrition tracking with barcode scanner",
      "Progress analytics with animated charts",
      "Wearable device integration (Apple Watch, Fitbit)",
    ],
    challenges: [
      "Optimizing TensorFlow Lite model for on-device inference",
      "Achieving real-time data sync across wearable devices",
      "Designing an intuitive UX for complex fitness data",
    ],
    results: [
      "100K+ downloads within 3 months of launch",
      "4.8 star rating on both App Store and Play Store",
      "40% user retention rate after 30 days",
    ],
  },
  {
    slug: "payflow",
    title: "PayFlow",
    category: "Mobile - Fintech",
    description:
      "A digital banking app with instant transfers, budget tracking, cryptocurrency support, and biometric security.",
    longDescription:
      "PayFlow is a next-generation digital banking application designed to simplify personal finance management. Built with security as the top priority, it features biometric authentication, end-to-end encryption, and real-time fraud detection. Users can manage multiple accounts, send instant transfers, track budgets with smart categorization, and even trade cryptocurrency -- all from a single, beautifully designed interface.",
    image: "/images/project-fintech.jpg",
    tags: ["React Native", "Node.js", "Stripe"],
    rating: 4.9,
    downloads: "250K+",
    platform: "mobile",
    year: "2024",
    client: "FinServe Inc.",
    duration: "6 months",
    features: [
      "Instant P2P transfers with zero fees",
      "Smart budget tracking with AI categorization",
      "Cryptocurrency trading and portfolio management",
      "Biometric security (Face ID / Fingerprint)",
      "Multi-currency account support",
      "Real-time transaction notifications",
    ],
    challenges: [
      "Implementing PCI-DSS compliant payment processing",
      "Building a real-time fraud detection system",
      "Handling multi-currency conversions with live rates",
    ],
    results: [
      "250K+ active users within 6 months",
      "Processed $12M+ in transactions",
      "99.99% uptime with zero security incidents",
    ],
  },
  {
    slug: "shopverse",
    title: "ShopVerse",
    category: "Web - E-Commerce",
    description:
      "A full-featured e-commerce platform with product catalog, cart system, payment gateway, and admin dashboard.",
    longDescription:
      "ShopVerse is a modern e-commerce platform built from scratch with Next.js and Tailwind CSS. It features a lightning-fast product catalog with advanced filtering, a seamless checkout experience powered by Stripe, and a comprehensive admin dashboard for inventory management. The responsive design ensures a perfect shopping experience across all devices, with server-side rendering for optimal SEO performance.",
    image: "/images/project-web-ecommerce.jpg",
    tags: ["Next.js", "Tailwind CSS", "Stripe"],
    rating: 4.9,
    downloads: "Live",
    platform: "web",
    year: "2025",
    client: "RetailMax Group",
    duration: "5 months",
    features: [
      "Advanced product filtering and search",
      "Stripe-powered checkout with multiple payment methods",
      "Admin dashboard with inventory management",
      "Order tracking with real-time status updates",
      "Customer reviews and ratings system",
      "SEO-optimized with server-side rendering",
    ],
    challenges: [
      "Building a performant catalog with 10K+ products",
      "Implementing real-time inventory sync across channels",
      "Designing a mobile-first checkout flow with minimal friction",
    ],
    results: [
      "35% increase in conversion rate vs. old platform",
      "Sub-2s page load times across all pages",
      "98% customer satisfaction rating",
    ],
  },
  {
    slug: "connecthub",
    title: "ConnectHub",
    category: "Mobile - Social Media",
    description:
      "A modern social platform with stories, real-time messaging, AR filters, and intelligent content curation.",
    longDescription:
      "ConnectHub is a feature-rich social media application that combines the best elements of modern social platforms. It includes a stories feature with custom AR filters, a real-time messaging system with end-to-end encryption, and an intelligent content feed powered by machine learning. The app was built natively for both iOS (Swift) and Android (Kotlin) to maximize performance and platform-specific user experience.",
    image: "/images/project-social.jpg",
    tags: ["Swift", "Kotlin", "WebSocket"],
    rating: 4.7,
    downloads: "500K+",
    platform: "mobile",
    year: "2024",
    client: "SocialTech Labs",
    duration: "8 months",
    features: [
      "Stories with custom AR filters and effects",
      "Real-time messaging with E2E encryption",
      "AI-powered content feed curation",
      "Live streaming with real-time comments",
      "Group channels and communities",
      "Content moderation with ML-based detection",
    ],
    challenges: [
      "Scaling WebSocket connections to support 500K+ concurrent users",
      "Building a low-latency AR filter engine",
      "Implementing effective content moderation at scale",
    ],
    results: [
      "500K+ downloads within the first year",
      "Average session duration of 25 minutes",
      "Featured in App Store 'Apps We Love'",
    ],
  },
  {
    slug: "cloudmetrics",
    title: "CloudMetrics",
    category: "Web - SaaS Dashboard",
    description:
      "A real-time analytics dashboard for SaaS companies with interactive charts, team management, and API integrations.",
    longDescription:
      "CloudMetrics is a comprehensive analytics dashboard built for SaaS companies to monitor key metrics in real-time. Featuring interactive D3.js charts, customizable widgets, and automated reporting, it gives teams complete visibility into their business performance. The platform integrates with 30+ popular tools and APIs, supporting team collaboration with role-based access control and shared dashboards.",
    image: "/images/project-web-saas.jpg",
    tags: ["React", "TypeScript", "D3.js"],
    rating: 4.8,
    downloads: "Live",
    platform: "web",
    year: "2025",
    client: "DataViz Corp",
    duration: "4 months",
    features: [
      "Real-time data visualization with D3.js charts",
      "Customizable dashboard widgets",
      "Automated report generation and scheduling",
      "30+ API integrations (Stripe, HubSpot, etc.)",
      "Team collaboration with role-based access",
      "White-label support for enterprise clients",
    ],
    challenges: [
      "Rendering 100K+ data points without performance degradation",
      "Building a flexible widget system for custom dashboards",
      "Ensuring data consistency with real-time WebSocket updates",
    ],
    results: [
      "Adopted by 200+ SaaS companies",
      "Reduced reporting time by 70% for clients",
      "99.9% uptime with auto-scaling infrastructure",
    ],
  },
  {
    slug: "fooddash",
    title: "FoodDash",
    category: "Mobile - Food Delivery",
    description:
      "On-demand food delivery app with real-time tracking, restaurant reviews, and smart recommendations.",
    longDescription:
      "FoodDash is a full-featured food delivery platform that connects users with local restaurants. The app features real-time order tracking with live map updates, a smart recommendation engine based on user preferences and ordering history, and a restaurant review system. Built with Flutter for cross-platform consistency, it handles the complete delivery lifecycle from browsing to doorstep delivery.",
    image: "/images/project-food.jpg",
    tags: ["Flutter", "Google Maps", "Razorpay"],
    rating: 4.8,
    downloads: "180K+",
    platform: "mobile",
    year: "2024",
    client: "FoodTech Ventures",
    duration: "5 months",
    features: [
      "Real-time order tracking with live map",
      "Smart restaurant recommendations",
      "In-app payment with multiple options",
      "Restaurant review and rating system",
      "Scheduled ordering and favorites",
      "Push notifications for order status",
    ],
    challenges: [
      "Optimizing Google Maps for smooth real-time tracking",
      "Building a recommendation engine with cold-start handling",
      "Designing a seamless multi-step ordering flow",
    ],
    results: [
      "180K+ downloads across both platforms",
      "Average delivery time reduced by 15%",
      "4.8 star average rating from 50K+ reviews",
    ],
  },
  {
    slug: "medisync",
    title: "MediSync",
    category: "Mobile - Healthcare",
    description:
      "A telemedicine app connecting patients with doctors for video consultations, prescription management, and health records.",
    longDescription:
      "MediSync is a HIPAA-compliant telemedicine application that bridges the gap between patients and healthcare providers. It features HD video consultations, digital prescription management, secure health record storage, and appointment scheduling. The app integrates with pharmacy networks for direct prescription fulfillment and includes a symptom checker powered by medical AI.",
    image: "/images/project-fitness.jpg",
    tags: ["React Native", "WebRTC", "AWS"],
    rating: 4.6,
    downloads: "75K+",
    platform: "mobile",
    year: "2023",
    client: "HealthBridge Solutions",
    duration: "7 months",
    features: [
      "HD video consultations with screen sharing",
      "Digital prescription management",
      "Secure health record storage (HIPAA-compliant)",
      "Appointment scheduling with reminders",
      "AI-powered symptom checker",
      "Pharmacy network integration",
    ],
    challenges: [
      "Achieving HIPAA compliance across all data flows",
      "Building a reliable WebRTC video system for low-bandwidth areas",
      "Integrating with multiple pharmacy network APIs",
    ],
    results: [
      "75K+ registered patients",
      "30K+ video consultations completed",
      "92% patient satisfaction score",
    ],
  },
  {
    slug: "travelmate",
    title: "TravelMate",
    category: "Web - Travel Platform",
    description:
      "A travel booking platform with AI trip planning, hotel comparison, flight search, and interactive itineraries.",
    longDescription:
      "TravelMate is a comprehensive travel platform that uses AI to help users plan perfect trips. It aggregates flights, hotels, and experiences from multiple providers, offering real-time price comparison. The interactive itinerary builder lets users drag and drop activities, view them on a map, and share plans with travel companions. Built with Next.js for blazing-fast performance and SEO optimization.",
    image: "/images/project-web-saas.jpg",
    tags: ["Next.js", "Python", "PostgreSQL"],
    rating: 4.7,
    downloads: "Live",
    platform: "web",
    year: "2024",
    client: "WanderTech Inc.",
    duration: "6 months",
    features: [
      "AI-powered trip planning and suggestions",
      "Real-time flight and hotel price comparison",
      "Interactive drag-and-drop itinerary builder",
      "Map-based activity exploration",
      "Collaborative trip planning with friends",
      "Offline access for saved itineraries",
    ],
    challenges: [
      "Aggregating real-time pricing from 20+ travel APIs",
      "Building an intuitive drag-and-drop itinerary system",
      "Optimizing search performance with complex filters",
    ],
    results: [
      "50K+ trips planned through the platform",
      "25% cost savings on average for users",
      "Featured in TechCrunch and Product Hunt",
    ],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.slice(0, 4)
}
