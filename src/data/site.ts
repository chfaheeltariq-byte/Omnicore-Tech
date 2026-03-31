import {
  BarChart3,
  Bot,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Cpu,
  Globe,
  GraduationCap,
  Rocket,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  TestTube2,
  Wrench,
  Zap,
} from 'lucide-react'

export type Service = {
  slug: string
  title: string
  shortTitle: string
  description: string
  summary: string
  icon: typeof ShoppingBag
  features: string[]
  outcome: string
  audience: string
  timeline: string
  accent: string
  photo: string
  photoAlt: string
  photoPosition?: string
  diagramTitle: string
  diagramSteps: string[]
  deliverables: string[]
  realExamples: {
    name: string
    detail: string
  }[]
  examples?: string[]
}

export const navLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Why Us', href: '/#why-us' },
  { label: 'Contact', href: '/#contact' },
]

export const services: Service[] = [
  {
    slug: 'pos-systems',
    title: 'POS Systems',
    shortTitle: 'POS Systems',
    description: 'Smart point of sale systems built for fast-moving retail and restaurant operations.',
    summary:
      'We design dependable POS experiences that keep billing, inventory, analytics, and cloud reporting in sync across your business.',
    icon: ShoppingBag,
    features: ['Real-time inventory tracking', 'Fast billing workflows', 'Cloud sync and multi-branch access', 'Sales analytics dashboards'],
    outcome: 'Sell faster, reduce manual work, and make clearer stock decisions.',
    audience: 'Retail stores, cafes, restaurants, and growing chains',
    timeline: '2-6 weeks depending on branch count and integrations',
    accent: 'from-sky-100 via-white to-blue-50',
    photo: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80',
    photoAlt: 'Point of sale counter with staff completing a customer purchase',
    photoPosition: 'center center',
    diagramTitle: 'How a modern POS deployment works',
    diagramSteps: ['Checkout terminal', 'Inventory sync', 'Cloud reporting', 'Manager dashboard'],
    deliverables: ['Billing interface', 'Branch-level stock tracking', 'Receipt and tax setup', 'Sales reports and user roles'],
    realExamples: [
      {
        name: 'Multi-branch clothing outlet',
        detail: 'Centralized sales, stock, and cashier reporting across three retail branches with one cloud dashboard.',
      },
      {
        name: 'Restaurant front-desk POS',
        detail: 'Fast billing, kitchen ticket routing, and end-of-day shift summaries for a busy dine-in operation.',
      },
      {
        name: 'Mini-mart inventory visibility',
        detail: 'Barcode-based checkout with low-stock alerts to reduce stockouts and manual reconciliation work.',
      },
    ],
  },
  {
    slug: 'erp-solutions',
    title: 'ERP Solutions',
    shortTitle: 'ERP Solutions',
    description: 'Connected enterprise resource planning tools that unify departments and data.',
    summary:
      'Our ERP platforms connect HR, finance, operations, and reporting into one scalable workflow so leadership can move with clarity.',
    icon: Building2,
    features: ['HR and payroll modules', 'Finance and expense tracking', 'Operations workflows', 'Reporting dashboard for executives'],
    outcome: 'Run teams from one source of truth with better reporting and fewer handoffs.',
    audience: 'SMBs, enterprises, and operational teams',
    timeline: '4-10 weeks based on modules and migration scope',
    accent: 'from-indigo-100 via-white to-cyan-50',
    photo: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80',
    photoAlt: 'Business team reviewing operational dashboards and ERP reports',
    photoPosition: 'center center',
    diagramTitle: 'How ERP connects business functions',
    diagramSteps: ['HR data', 'Finance records', 'Operations workflow', 'Leadership insights'],
    deliverables: ['Module planning', 'Role-based dashboards', 'Approval workflows', 'Cross-department reporting'],
    realExamples: [
      {
        name: 'Operations ERP for a services company',
        detail: 'Connected finance, HR, and approvals into one internal workspace so managers could stop using separate spreadsheets.',
      },
      {
        name: 'Distribution workflow console',
        detail: 'Linked purchases, stock movement, and delivery status in one reporting flow for faster decisions.',
      },
      {
        name: 'Executive reporting layer',
        detail: 'Built dashboard views that turned daily operational data into simple weekly leadership insights.',
      },
    ],
  },
  {
    slug: 'school-management-system',
    title: 'School Management System',
    shortTitle: 'School Management',
    description: 'A digital platform that simplifies school administration, communication, and reporting.',
    summary:
      'From attendance and student records to fee tracking and results, we create clear systems that help schools stay organized and responsive.',
    icon: GraduationCap,
    features: ['Attendance management', 'Student records and guardians', 'Fees and payment visibility', 'Results and academic reporting'],
    outcome: 'Reduce admin friction while improving visibility for staff, students, and parents.',
    audience: 'Schools, campuses, and education groups',
    timeline: '3-8 weeks with onboarding and training',
    accent: 'from-emerald-100 via-white to-teal-50',
    photo: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1400&q=80',
    photoAlt: 'Students and teachers using digital academic management tools',
    photoPosition: 'center center',
    diagramTitle: 'How a school system organizes daily operations',
    diagramSteps: ['Student records', 'Attendance updates', 'Fee tracking', 'Parent communication'],
    deliverables: ['Admissions and records module', 'Attendance workflows', 'Fees and billing panel', 'Results and guardian access'],
    realExamples: [
      {
        name: 'Private school admin portal',
        detail: 'Digitized attendance, student records, and fee follow-up so office teams could work from one system.',
      },
      {
        name: 'Campus guardian communication hub',
        detail: 'Gave parents a clearer way to view attendance, fee status, and academic updates without repeated phone calls.',
      },
      {
        name: 'Results and reporting dashboard',
        detail: 'Helped school leadership monitor class performance and academic summaries from a single dashboard.',
      },
    ],
  },
  {
    slug: 'website-development',
    title: 'Website Development',
    shortTitle: 'Website Development',
    description: 'Modern, responsive websites that feel premium and convert with confidence.',
    summary:
      'We build polished marketing sites, portals, and business websites with careful UX, strong performance, and scalable code.',
    icon: Globe,
    features: ['Responsive layouts', 'High-converting landing pages', 'CMS or API-ready architecture', 'Performance-focused development'],
    outcome: 'Launch a website that looks modern, loads fast, and supports growth.',
    audience: 'Startups, service businesses, schools, and product teams',
    timeline: '2-5 weeks for most company websites',
    accent: 'from-orange-100 via-white to-rose-50',
    photo: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80',
    photoAlt: 'Developer workspace showing modern website design and code',
    photoPosition: 'center center',
    diagramTitle: 'How a website project moves from idea to launch',
    diagramSteps: ['Strategy brief', 'UI direction', 'Responsive build', 'Launch and optimization'],
    deliverables: ['Sitemap and wireframes', 'Premium responsive UI', 'Speed-focused frontend build', 'Lead capture and CTA flows'],
    realExamples: [
      {
        name: 'SaaS product launch site',
        detail: 'A polished marketing website designed to explain a technical product clearly and convert demo requests.',
      },
      {
        name: 'Corporate service website',
        detail: 'Structured a premium digital presence with clear navigation, trust sections, and inquiry capture.',
      },
      {
        name: 'Education admissions landing page',
        detail: 'Improved message clarity and mobile experience so parents could understand the process more easily.',
      },
    ],
    examples: ['SaaS launch website with animated product storytelling', 'Corporate services site with lead capture flows', 'Education portal with modern admissions experience'],
  },
  {
    slug: 'software-testing',
    title: 'Software Testing',
    shortTitle: 'Software Testing',
    description: 'Quality assurance that catches issues early and improves product confidence.',
    summary:
      'We review usability, bugs, regressions, and performance to help your software ship cleaner and stay dependable in production.',
    icon: TestTube2,
    features: ['Manual QA workflows', 'Bug and regression testing', 'Performance bottleneck reviews', 'Release readiness reporting'],
    outcome: 'Ship with fewer surprises and a sharper understanding of product quality.',
    audience: 'Teams releasing web apps, internal systems, and customer platforms',
    timeline: '1-4 weeks based on scope and release cycle',
    accent: 'from-violet-100 via-white to-fuchsia-50',
    photo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80',
    photoAlt: 'Software quality team reviewing test reports and release readiness',
    photoPosition: 'center center',
    diagramTitle: 'How QA reduces release risk',
    diagramSteps: ['Test scenarios', 'Bug discovery', 'Fix verification', 'Release confidence'],
    deliverables: ['Manual QA coverage', 'Regression checklist', 'Bug documentation', 'Pre-release quality reports'],
    realExamples: [
      {
        name: 'Web app release QA',
        detail: 'Validated new flows before launch and caught regressions that would have affected the checkout experience.',
      },
      {
        name: 'Admin dashboard testing sprint',
        detail: 'Reviewed filters, forms, and role permissions to reduce post-release support issues.',
      },
      {
        name: 'Performance-focused bug review',
        detail: 'Identified slow-loading areas and usability blockers before a high-traffic campaign launch.',
      },
    ],
  },
  {
    slug: 'website-enhancement',
    title: 'Website Enhancement & Optimization',
    shortTitle: 'Website Enhancement',
    description: 'Targeted upgrades for websites that need more speed, clarity, and visibility.',
    summary:
      'We improve load times, refine UX, tidy visual systems, and strengthen the technical basics that support SEO and conversion.',
    icon: Wrench,
    features: ['Speed optimization', 'UI and UX refinements', 'On-page SEO basics', 'Content structure improvements'],
    outcome: 'Turn an existing site into a smoother, more polished growth asset.',
    audience: 'Businesses with an existing website that needs a meaningful refresh',
    timeline: '1-3 weeks for most optimization sprints',
    accent: 'from-amber-100 via-white to-lime-50',
    photo: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80',
    photoAlt: 'Analytics and optimization dashboard for improving website performance',
    photoPosition: 'center center',
    diagramTitle: 'How optimization improves an existing website',
    diagramSteps: ['Audit current site', 'Refine UX issues', 'Improve speed and SEO', 'Track better results'],
    deliverables: ['UX audit notes', 'Performance improvements', 'SEO cleanup', 'Conversion-focused page refinements'],
    realExamples: [
      {
        name: 'Business website speed refresh',
        detail: 'Reduced heavy sections, clarified layout, and improved mobile loading to keep users engaged longer.',
      },
      {
        name: 'Lead-generation landing page cleanup',
        detail: 'Reworked content hierarchy and calls to action so more visitors reached the inquiry form.',
      },
      {
        name: 'Technical SEO polish',
        detail: 'Fixed structure and metadata basics to make the website easier to crawl and understand.',
      },
    ],
  },
  {
    slug: 'ai-integration',
    title: 'AI Integration',
    shortTitle: 'AI Integration',
    description: 'AI agents and chatbots that automate service, insight, and engagement.',
    summary:
      'We integrate intelligent assistants into websites and workflows to create faster support, smarter automation, and better operational visibility.',
    icon: Bot,
    features: ['Website chatbots', 'Automation tools for repetitive work', 'Smart customer interaction flows', 'AI-based analytics and insight layers'],
    outcome: 'Create faster support experiences and unlock practical automation.',
    audience: 'Service teams, support operations, schools, and digitally scaling businesses',
    timeline: '2-6 weeks based on channels, logic, and integrations',
    accent: 'from-cyan-100 via-white to-sky-50',
    photo: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=80',
    photoAlt: 'AI assistant interface with workflow and automation overlays',
    photoPosition: 'center center',
    diagramTitle: 'How AI support and automation fit into operations',
    diagramSteps: ['User question', 'AI assistant logic', 'Business rules', 'Action or insight'],
    deliverables: ['Chatbot strategy', 'Automation mapping', 'Knowledge base connection', 'Conversation and reporting flows'],
    realExamples: [
      {
        name: 'Support chatbot for a service business',
        detail: 'Handled common questions instantly and routed higher-value leads to the team with better context.',
      },
      {
        name: 'Internal workflow assistant',
        detail: 'Automated repetitive updates and summaries so staff could spend more time on actual decisions.',
      },
      {
        name: 'Inquiry triage for a growing website',
        detail: 'Classified incoming requests and sent the right type of lead to the right team more quickly.',
      },
    ],
  },
]

export const highlights = [
  {
    title: 'Fast Delivery',
    description: 'Lean execution, clear milestones, and focused product thinking keep momentum high.',
    icon: Rocket,
  },
  {
    title: 'Secure by Design',
    description: 'We build with sensible architecture, careful data handling, and dependable foundations.',
    icon: ShieldCheck,
  },
  {
    title: 'Scalable Systems',
    description: 'Our solutions are built to support growth, new modules, and evolving customer needs.',
    icon: Cpu,
  },
  {
    title: 'AI-Driven Value',
    description: 'We add automation and intelligence where it creates measurable impact, not noise.',
    icon: Sparkles,
  },
]

export const stats = [
  { label: 'Solutions Covered', value: '7+' },
  { label: 'Delivery Approach', value: 'Lean' },
  { label: 'Support Focus', value: 'Long-term' },
  { label: 'Experience Style', value: 'Premium' },
]

export const process = [
  {
    title: 'Discover',
    description: 'We map business needs, workflows, bottlenecks, and the clearest opportunities for digital improvement.',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Design',
    description: 'We shape the user journey, interface direction, and technical structure into a focused rollout plan.',
    icon: CheckCircle2,
  },
  {
    title: 'Build',
    description: 'We implement with modern tooling, efficient iterations, and strong attention to polish and maintainability.',
    icon: Zap,
  },
  {
    title: 'Optimize',
    description: 'We measure, refine, and support the product after launch so performance keeps improving.',
    icon: BarChart3,
  },
]

export const landingServices = [
  {
    slug: 'pos-systems',
    title: 'POS Systems',
    description: 'Retail and restaurant checkout systems built for speed, inventory visibility, and decision-ready analytics.',
    points: ['Billing flows', 'Inventory sync', 'Cloud reporting'],
    accent: 'from-sky-400/30 via-cyan-300/10 to-transparent',
    photo: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80',
    photoPosition: 'center center',
  },
  {
    slug: 'erp-solutions',
    title: 'ERP Solutions',
    description: 'Connected internal systems that unify finance, HR, operations, and reporting across growing organizations.',
    points: ['Finance control', 'HR modules', 'Operations dashboards'],
    accent: 'from-indigo-400/25 via-blue-300/10 to-transparent',
    photo: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    photoPosition: 'center center',
  },
  {
    slug: 'school-management-system',
    title: 'School Management Systems',
    description: 'Modern academic platforms for attendance, fees, records, results, and parent-facing workflows.',
    points: ['Attendance', 'Student records', 'Fee tracking'],
    accent: 'from-emerald-400/25 via-teal-300/10 to-transparent',
    photo: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80',
    photoPosition: 'center center',
  },
  {
    slug: 'website-development',
    title: 'Website Development',
    description: 'High-end websites with strong storytelling, premium interfaces, and conversion-focused user journeys.',
    points: ['Responsive build', 'Modern UI', 'Fast performance'],
    accent: 'from-fuchsia-400/25 via-rose-300/10 to-transparent',
    photo: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    photoPosition: 'center center',
  },
  {
    slug: 'software-testing',
    title: 'Software Testing',
    description: 'QA, regression testing, and release confidence workflows that protect product quality before launch.',
    points: ['QA coverage', 'Bug analysis', 'Performance checks'],
    accent: 'from-violet-400/25 via-purple-300/10 to-transparent',
    photo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    photoPosition: 'center center',
  },
  {
    slug: 'website-enhancement',
    title: 'Website Enhancement',
    description: 'Speed, UX, SEO, and conversion improvements for websites that need stronger business performance.',
    points: ['Core Web Vitals', 'UX improvements', 'SEO cleanup'],
    accent: 'from-amber-400/25 via-orange-300/10 to-transparent',
    photo: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    photoPosition: 'center center',
  },
  {
    slug: 'ai-integration',
    title: 'AI Agents',
    description: 'Task-specific AI agents that automate support, internal workflows, and lead handling for modern teams.',
    points: ['Lead handling', 'Support automation', 'Workflow assistance'],
    accent: 'from-cyan-400/25 via-sky-300/10 to-transparent',
    photo: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',
    photoPosition: 'center center',
  },
  {
    slug: 'ai-integration',
    title: 'AI Chatbot Integration',
    description: 'Website and platform chatbots that deliver fast customer interaction with business-aware responses.',
    points: ['Website chat', 'Customer routing', 'Knowledge answers'],
    accent: 'from-blue-400/25 via-cyan-300/10 to-transparent',
    photo: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=1200&q=80',
    photoPosition: 'center center',
  },
  {
    slug: 'ai-integration',
    title: 'Website Automation',
    description: 'Automated actions, notifications, and smart workflows that reduce repetitive work across your digital stack.',
    points: ['Automations', 'Alerts', 'Connected workflows'],
    accent: 'from-lime-400/25 via-emerald-300/10 to-transparent',
    photo: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80',
    photoPosition: 'center center',
  },
]

export const showcaseProjects = [
  {
    title: 'OmniFlow ERP Console',
    type: 'Operations Platform',
    description: 'A unified reporting and workflow environment designed for finance, HR, and operational teams.',
    photo: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80',
    photoPosition: 'center center',
  },
  {
    title: 'NovaPOS Dashboard',
    type: 'Retail Tech',
    description: 'A live commerce system with billing, branch visibility, and sales insight across a modern store network.',
    photo: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80',
    photoPosition: 'center center',
  },
  {
    title: 'Academia Portal',
    type: 'Education Platform',
    description: 'A clean school management experience with parent access, attendance views, and results workflows.',
    photo: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1400&q=80',
    photoPosition: 'center center',
  },
  {
    title: 'Agentive Support Suite',
    type: 'AI Experience',
    description: 'A chatbot and automation layer that routes users, answers questions, and supports internal teams.',
    photo: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=80',
    photoPosition: 'center center',
  },
]

export const testimonials = [
  {
    quote: 'Omnicore Tech turned a scattered process into one clear operating system for our team.',
    name: 'Areeb Khan',
    role: 'Operations Director',
  },
  {
    quote: 'The website felt premium from the first draft and the performance improvements were immediately visible.',
    name: 'Sarah Ahmed',
    role: 'Marketing Lead',
  },
  {
    quote: 'Their AI workflow design saved our support team hours every week without making the experience feel robotic.',
    name: 'Maham Raza',
    role: 'Customer Experience Manager',
  },
]
