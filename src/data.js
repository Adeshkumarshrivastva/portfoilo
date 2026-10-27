export const profile = {
  name: 'Adesh Kumar Shrivastva',
  email: 'adeshkumarshrivastva@gmail.com',
  phone: '+91-6287911867',
  location: 'Delhi (NCR), India',
  roles: ['Full Stack Developer', 'Android & iOS App Developer', 'React & Next.js Engineer', 'Node.js API Architect'],
  intro:
    'I build secure, scalable enterprise products end to end — role-based REST APIs, hybrid SQL/NoSQL databases, polished React websites and cross-platform Android & iOS apps — for banking, FMCG, government and healthcare teams.',
}

export const stats = [
  { to: 2.6, decimals: 1, suffix: '+', label: 'Years of experience' },
  { to: 3, suffix: '', label: 'Companies' },
  { to: 10, suffix: '+', label: 'Production projects' },
  { to: 4, suffix: '', label: 'Industries served' },
]

export const orbit = [
  { label: 'React', color: '#61dafb' },
  { label: 'React Native', color: '#c084fc' },
  { label: 'Node.js', color: '#68d391' },
  { label: 'Next.js', color: '#ffffff' },
  { label: 'MongoDB', color: '#34d399' },
  { label: 'MySQL', color: '#60a5fa' },
  { label: 'TypeScript', color: '#3b82f6' },
]

export const marquee = ['React.js', 'Next.js', 'Node.js', 'Express.js', 'Hono.js', 'ASP.NET', 'MongoDB', 'MySQL', 'PostgreSQL', 'Tailwind CSS', 'Bootstrap', 'Redux Toolkit', 'React Native', 'TypeScript', 'Payload CMS', 'WebSockets', 'JWT', 'Docker']

export const whyHire = [
  { icon: '🛡️', title: 'Security-first APIs', text: 'JWT auth, role-based access control, audit logging and strict validation — built for banking-grade compliance.' },
  { icon: '⚡', title: 'Performance-minded', text: 'Optimised SQL & MongoDB queries, lazy loading and code splitting for large datasets and fast UIs.' },
  { icon: '📱', title: 'Web + Android + iOS', text: 'Schema design to REST APIs to web dashboards to Android & iOS apps — I can take a feature from idea to production.' },
  { icon: '🤝', title: 'Business-aware', text: 'I work directly with stakeholders and turn requirements into reliable, timely releases.' },
]

export const experience = [
  {
    company: 'Positive Mind Care',
    role: 'Full Stack Developer',
    period: 'Apr 2026 – Present',
    place: 'Gurugram, India',
    points: [
      'Developing enterprise applications for the PMC Portal and PMC mobile app, focusing on scalable backend services and responsive frontends with React.js, Next.js and Node.js.',
      'Working with Payload CMS and React Native across web and mobile.',
      'Architecting secure RESTful APIs with Express.js, including role-based access control and data validation.',
      'Designing hybrid database solutions (MySQL and MongoDB) for high-volume reporting and real-time data sync.',
    ],
  },
  {
    company: 'Sys-Con Engineering',
    role: 'Full Stack Developer',
    period: '2025 – 2026',
    place: 'Kolkata, India',
    points: [
      'Built enterprise applications for ITC with scalable Node.js backends and responsive React.js / Next.js frontends.',
      'Shipped feature-rich modules — attendance tracking, beat management and competition analysis — using Redux and Material UI.',
      'Optimised hybrid MySQL + MongoDB databases for high-volume reporting and real-time sync for ITC field teams.',
      'Translated ITC stakeholder requirements into technical deliverables, delivering timely, high-performance releases.',
    ],
  },
  {
    company: 'Softrak Infosolution Pvt. Ltd.',
    role: 'Full Stack Developer (Banking Domain)',
    period: 'Feb 2024 – Apr 2025',
    place: 'Delhi (NCR), India',
    points: [
      'Developed secure, scalable banking and financial data platforms with React.js and Node.js under strict compliance standards.',
      'Built Express.js REST APIs for critical banking operations with layered security and comprehensive validation.',
      'Managed and optimised large-scale SQL databases for SLBC data — high availability and complex query handling.',
      'Implemented role-based access control, audit logging and secure workflows to meet banking regulations.',
    ],
  },
]

export const projects = [
  {
    title: 'PMC Portal',
    art: 'dash',
    subtitle: 'Positive Mind Care — web platform',
    category: 'Positive Mind Care',
    description:
      'Enterprise web portal for Positive Mind Care with scalable backend services, role-based access and a responsive Next.js frontend.',
    highlights: ['Next.js + React frontend', 'Secure Express REST APIs with RBAC', 'MySQL + MongoDB hybrid reporting'],
    tags: ['Next.js', 'React.js', 'Node.js', 'Express.js', 'MySQL', 'MongoDB', 'Payload CMS'],
    accent: ['#8f80ff', '#2ee6e0'],
  },
  {
    title: 'PMC Ambassador',
    art: 'people',
    subtitle: 'Positive Mind Care — ambassador program',
    category: 'Positive Mind Care',
    description:
      'Ambassador-facing platform for Positive Mind Care with role-based access, validated data flows and real-time data sync.',
    highlights: ['Role-based access control', 'Validated, secure APIs', 'Real-time data sync'],
    tags: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB'],
    accent: ['#ff6fb7', '#ffb84d'],
  },
  {
    title: 'PMC Global Academy',
    art: 'cards',
    subtitle: 'Positive Mind Care — learning platform',
    category: 'Positive Mind Care',
    description:
      'Learning and academy platform under Positive Mind Care, with content managed through Payload CMS and a fast, responsive Next.js frontend.',
    highlights: ['Payload CMS content management', 'Responsive Next.js UI', 'Scalable Node.js backend'],
    tags: ['Next.js', 'React.js', 'Payload CMS', 'Node.js', 'MongoDB'],
    accent: ['#2ee6e0', '#8f80ff'],
  },
  {
    title: 'PMC App',
    art: 'phone',
    subtitle: 'Positive Mind Care — Android & iOS mobile app',
    category: 'Mobile',
    description:
      'Cross-platform mobile app for Positive Mind Care, built with React Native for Android and iOS and connected to the PMC backend APIs.',
    highlights: ['One React Native codebase, Android + iOS', 'Shared secure REST APIs', 'Real-time data sync'],
    tags: ['React Native', 'Android', 'iOS', 'Node.js', 'Express.js', 'MySQL'],
    accent: ['#c084fc', '#ff6fb7'],
  },
  {
    title: 'PMC HRMS',
    art: 'table',
    subtitle: 'Positive Mind Care — multi-module HR system',
    category: 'Positive Mind Care',
    description:
      'Full HRMS for Positive Mind Care with many connected modules: attendance with punch in / punch out, leave application and approval, and salary slip generation.',
    highlights: ['Attendance: punch in / punch out', 'Leave apply & approval workflow', 'Salary slip generation', 'Role-based access across modules'],
    tags: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'MySQL', 'MongoDB'],
    accent: ['#2ee6e0', '#ff6fb7'],
  },
  {
    title: 'Dhanush',
    art: 'dash',
    subtitle: 'ITC — Field Team Management System',
    category: 'Enterprise',
    description:
      'Enterprise platform for field operations: role-based auth, real-time attendance, beat planning and competition tracking, with offline data sync for field agents.',
    highlights: ['JWT + RBAC backend', 'Redux-driven dashboards', 'File uploads & offline sync'],
    tags: ['React.js', 'Redux', 'Material UI', 'Node.js', 'Express.js', 'MongoDB'],
    accent: ['#6366f1', '#22d3ee'],
  },
  {
    title: 'Shiksha Mitra',
    art: 'people',
    subtitle: 'Government Education Initiative',
    category: 'Government',
    description:
      'Government-backed health & education platform managing training sessions, retailer networks and beneficiary data for rural users.',
    highlights: ['Admin / trainer / retailer roles', 'Session scheduling APIs', 'Impact & engagement reports'],
    tags: ['React.js', 'Redux Toolkit', 'Material UI', 'Node.js', 'Express.js', 'MongoDB'],
    accent: ['#10b981', '#a3e635'],
  },
  {
    title: 'SLBC Data Management',
    art: 'table',
    subtitle: 'Banking data portal',
    category: 'Banking',
    description:
      'Portal for the State Level Bankers’ Committee to ingest, validate and report on large-scale banking data from multiple sources.',
    highlights: ['Rule-based validation', 'Indexed high-volume SQL', 'Excel/CSV export & dashboards'],
    tags: ['React.js', 'Redux', 'Node.js', 'Express.js', 'SQL'],
    accent: ['#f59e0b', '#ef4444'],
  },
  {
    title: 'HRMS Portal',
    art: 'cards',
    subtitle: 'Human Resource Management',
    category: 'Enterprise',
    description:
      'Full HR suite for employees, payroll, salary slips and leave workflows, with a role-based admin dashboard and automated slip generation.',
    highlights: ['Normalised SQL schema', 'Leave & payroll workflows', 'Employee / manager / admin access'],
    tags: ['Node.js', 'Express.js', 'MySQL / PostgreSQL', 'React.js'],
    accent: ['#ec4899', '#8b5cf6'],
  },
  {
    title: 'OSIC',
    art: 'flow',
    subtitle: 'NGO — Organisation & Referral Management',
    category: 'NGO',
    description:
      'Web platform for an NGO to manage organisation structure, partner referrals and campaigns, with status updates and notifications.',
    highlights: ['Referral tracking workflow', 'Modular Express backend', 'Mantine UI design system'],
    tags: ['React.js', 'Redux', 'Mantine UI', 'Node.js', 'Express.js', 'MongoDB'],
    accent: ['#06b6d4', '#3b82f6'],
  },
  {
    title: 'H2H',
    art: 'shop',
    subtitle: 'E-commerce Frontend',
    category: 'E-commerce',
    description:
      'Responsive storefront with product discovery, search, filtering and order processing, tuned with lazy loading and code splitting.',
    highlights: ['Redux cart & session state', 'Dynamic filter / sort / search', 'Lazy loading, code splitting'],
    tags: ['React.js', 'Redux', 'Material UI', 'REST APIs'],
    accent: ['#f43f5e', '#fb923c'],
  },
]

export const skillGroups = [
  { name: 'Frontend', items: ['HTML5', 'CSS3', 'React.js', 'Next.js', 'Redux Toolkit', 'React Native', 'Tailwind CSS', 'Bootstrap', 'Material UI', 'Mantine UI'] },
  { name: 'Backend', items: ['Node.js', 'Express.js', 'Hono.js', 'ASP.NET', 'PHP', 'REST API Design', 'JWT Auth', 'WebSockets'] },
  { name: 'Databases', items: ['MongoDB (Mongoose)', 'MySQL', 'PostgreSQL', 'Query Optimisation'] },
  { name: 'Languages', items: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'Java', 'C++', 'SQL'] },
  { name: 'Tools', items: ['Git', 'VS Code', 'Postman', 'Android Studio', 'Docker (basic)'] },
  { name: 'Ways of working', items: ['Problem Solving', 'Cross-functional Collaboration', 'Agile', 'Technical Documentation'] },
]

export const education = {
  school: 'Poornima College of Engineering',
  degree: 'Bachelor of Technology in Computer Science & Engineering',
  period: '2020 – 2024',
  place: 'Jaipur, Rajasthan',
}
