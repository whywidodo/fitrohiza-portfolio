export const profile = {
  name: "Fitroh Izatul Malkiyah",
  shortName: "Fitroh",
  role: "Mobile Developer",
  location: "Indonesia",
  email: "hi.fitroh@gmail.com",
  phone: "089657585859",
  linkedin: "https://www.linkedin.com/in/fitrohiza/",
  github: "https://github.com/fitrohiza",
  headline: "Building thoughtful mobile experiences with Flutter & Kotlin.",
  intro:
    "Mobile developer focused on turning product ideas and designs into reliable, production-ready applications. Experienced across healthcare, e-commerce, community, and service platforms.",
  about:
    "I build mobile products with a strong focus on clarity, stability, and the details that make an application feel effortless to use. My work spans UI implementation, API integration, state management, real-time features, and collaboration with backend and design teams.",
};

export const skills = [
  { label: "Flutter", group: "Mobile" },
  { label: "Dart", group: "Mobile" },
  { label: "Kotlin", group: "Mobile" },
  { label: "Android", group: "Mobile" },
  { label: "GetX", group: "Architecture" },
  { label: "MVC", group: "Architecture" },
  { label: "MVVM", group: "Architecture" },
  { label: "REST API", group: "Integration" },
  { label: "Dio", group: "Integration" },
  { label: "Retrofit", group: "Integration" },
  { label: "WebSocket", group: "Integration" },
  { label: "Firebase", group: "Tools" },
  { label: "Git", group: "Tools" },
  { label: "Postman", group: "Tools" },
  { label: "Figma", group: "Tools" },
  { label: "Google Maps API", group: "Tools" },
];

export const projects = [
  {
    slug: "doctor-booking-ecosystem",
    number: "01",
    title: "Doctor Booking Ecosystem",
    category: "Healthcare",
    year: "2024 — 2026",
    role: "Mobile Developer",
    featured: true,
    summary:
      "A multi-app healthcare ecosystem connecting patients, doctors, and clinics through a unified appointment experience.",
    description:
      "Worked across a production mobile ecosystem made up of dedicated patient, doctor, and clinic applications. The work centered on turning product requirements and Figma designs into consistent Flutter experiences while connecting each workflow to REST services.",
    highlights: [
      "Developed three dedicated mobile applications for patients, doctors, and clinics.",
      "Implemented authentication, appointment scheduling, patient data, and booking management.",
      "Integrated multiple REST API endpoints using Dio.",
      "Translated Figma designs into responsive and consistent Flutter interfaces.",
      "Collaborated with backend and design teams through Git-based workflows."
    ],
    stack: ["Flutter", "Dart", "GetX", "Dio", "REST API", "Git"],
    accent: "sage",
  },
  {
    slug: "steach",
    number: "02",
    title: "Steach",
    category: "Community Platform",
    year: "2025",
    role: "Mobile Developer",
    featured: true,
    summary:
      "A teacher community platform combining role-based access, event management, learning materials, reporting, and real-time communication.",
    description:
      "Built a multi-role mobile platform for a teacher community. The application brings operational workflows and community features into one experience, including location-aware events, content management, notifications, and live discussion.",
    highlights: [
      "Built a single platform supporting super admin, admin, leader, and member roles.",
      "Implemented geolocation-based event attendance for on-site participation.",
      "Created performance reporting for task submissions and activity tracking.",
      "Developed teaching-material management for uploading and accessing resources.",
      "Integrated Firebase notifications for announcements and activity updates.",
      "Implemented real-time discussion using WebSocket."
    ],
    stack: ["Flutter", "GetX", "Dio", "REST API", "Firebase", "WebSocket", "Geolocation", "Git"],
    accent: "blue",
  },
  {
    slug: "ecommerce-mobile-app",
    number: "03",
    title: "E-Commerce Mobile App",
    category: "Commerce",
    year: "2020",
    role: "Android / Mobile Developer",
    featured: true,
    summary:
      "A feature-rich shopping application covering discovery, authentication, checkout, payment, loyalty, and order tracking.",
    description:
      "Built and integrated core customer journeys for an e-commerce mobile application, from authentication and product discovery through checkout and post-purchase tracking.",
    highlights: [
      "OTP authentication and account flows.",
      "Flash sale, product search, and filtering.",
      "Customer service chat.",
      "Checkout and payment flows.",
      "Order tracking.",
      "Voucher and points system.",
      "Multiple REST API integrations."
    ],
    stack: ["Flutter", "GetX", "Dio", "REST API", "Git"],
    accent: "gold",
  },
  {
    slug: "laundry-platform",
    number: "04",
    title: "Laundry Platform",
    category: "Services",
    year: "2023 — 2024",
    role: "Android Developer",
    featured: false,
    summary:
      "A dual-app laundry service experience for customers and business owners, supported by location-aware discovery.",
    description:
      "Developed customer and management applications for laundry services, connecting booking and order workflows with location-based recommendations and a RESTful backend.",
    highlights: [
      "Built separate customer and business-owner applications.",
      "Implemented order booking and status tracking.",
      "Added nearby laundry recommendations.",
      "Integrated Google Maps API.",
      "Connected mobile workflows to RESTful backend services."
    ],
    stack: ["Kotlin", "Retrofit", "Coroutines", "Google Maps API", "Git"],
    accent: "slate",
  }
];

export const experience = [
  {
    company: "PT. Gracia Visi Pramata",
    role: "Mobile Developer",
    period: "Sep 2024 — Apr 2026",
    location: "Indonesia",
    current: false,
    summary:
      "Developed a multi-application doctor booking ecosystem serving patients, doctors, and clinics.",
    bullets: [
      "Built core authentication, appointment scheduling, patient data, and booking workflows.",
      "Integrated REST APIs with Dio across multiple mobile applications.",
      "Translated Figma designs into responsive Flutter UI.",
      "Worked with backend and design teams using Git-based workflows."
    ],
    tech: ["Flutter", "GetX", "Dio", "REST API", "Git"]
  },
  {
    company: "BIIS Corp Griya Nadi",
    role: "Android / Mobile Developer",
    period: "Apr 2020 — Jul 2020",
    location: "Indonesia",
    current: false,
    summary:
      "Developed an e-commerce mobile application covering authentication, shopping, transactions, support, and order management.",
    bullets: [
      "Implemented 10+ core customer-facing features.",
      "Integrated product, transaction, and authentication APIs.",
      "Turned UI designs into production-ready mobile features."
    ],
    tech: ["Flutter", "GetX", "Dio", "REST API", "Git"]
  }
];

export const education = {
  degree: "Bachelor of Informatics Engineering",
  institution: "Universitas Amikom Purwokerto",
  period: "2020 — 2024",
  gpa: "3.96 / 4.00"
};

export const training = [
  {
    title: "Bangkit Academy",
    detail: "Mobile Development",
    period: "2023 — 2024",
    partner: "Google · GoTo · Tokopedia · Traveloka"
  },
  {
    title: "Skilvul Tech for Impact",
    detail: "Front-end Web Development",
    period: "2023"
  }
];

export const achievements = [
  { title: "2nd Place", detail: "PTC Mobile App Competition", year: "2023" },
  { title: "Finalist", detail: "IITC Mobile App Competition", year: "2022" },
  { title: "National Student Grant Recipient", detail: "PKM", year: "2021" },
  { title: "Funded Project", detail: "PPK Ormawa", year: "2022" }
];