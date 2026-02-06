export const profile = {
  name: "Md. Nazmul Islam",
  title: "Full-Stack Software Engineer",
  email: "nazmul.islam.lotif@gmail.com",
  phone: "+8801716129832",
  location: "Dhaka, Bangladesh",
  linkedin: "https://linkedin.com/in/-md-nazmul-islam",
  github: "https://github.com/nazmulswe",
  summary: `Full-Stack Software Engineer with 5+ years of experience building scalable,
    secure, and high-performance web applications. Expert in backend development with
    NestJS, Node.js, and Laravel, along with solid frontend experience in React.js,
    Next.js, and TypeScript. Passionate about clean architecture, cloud infrastructure,
    and DevOps practices.`,
  resumeUrl: "/resume.pdf",
};

export const skills = {
  backend: ["Node.js", "NestJS", "Express.js", "PHP", "Laravel"],
  frontend: ["React.js", "Next.js", "TypeScript", "Redux", "Tailwind CSS", "React Native"],
  databases: ["PostgreSQL", "MySQL", "MongoDB", "Oracle", "Redis", "DynamoDB"],
  cloud: ["AWS EC2", "AWS RDS", "AWS S3", "AWS EKS", "AWS Lambda", "AWS SQS"],
  devops: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "CI/CD", "Terraform"],
  integrations: ["Stripe", "Twilio", "Firebase", "SSLCommerz", "bKash", "Algolia"],
};

export const experience = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Cloudly Infotech Ltd.",
    location: "Dhaka, Bangladesh",
    period: "Feb 2022 - Present",
    description: `Design and develop high-performance backend APIs and feature modules
      for SaaS and multi-tenant applications, while managing servers and application
      infrastructure. Focus on database design, bulk data operation handling, and
      optimized file systems ensuring scalability, security, and reliability.`,
    highlights: [
      "Architected multi-tenant SaaS platform using NestJS, TypeScript, and PostgreSQL",
      "Implemented CI/CD pipelines with Docker and Kubernetes, reducing deployment time by 70%",
      "Designed RESTful APIs achieving sub-200ms response times through query optimization",
      "Built cross-platform mobile app using React Native",
    ],
  },
  {
    id: 2,
    title: "Junior Software Engineer",
    company: "Logic Infotech Ltd.",
    location: "Dhaka, Bangladesh",
    period: "Sep 2020 - Feb 2022",
    description: `Full-stack web application developer responsible for developing
      application features, fixing bugs, and collaborating closely with team members
      to deliver production-ready solutions.`,
    highlights: [
      "Developed core modules for Hospital Management System using Laravel and Oracle",
      "Built Document Management System with Laravel backend and Vue.js frontend",
      "Integrated pathology and radiology equipment APIs for automated diagnostics",
      "Managed scalable LAN-based applications across multiple hospital locations",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Instacircle",
    subtitle: "Community Management Platform",
    description: `A comprehensive multi-tenant SaaS platform for community management.
      Features include member registration, event management, fundraising, job posting,
      live streaming, package subscription, billing and payments.`,
    image: "/projects/instacircle.jpg",
    technologies: ["NestJS", "TypeScript", "PostgreSQL", "Redis", "React Native", "Next.js", "AWS"],
    features: [
      "Multi-tenant architecture with cloud-native infrastructure",
      "Real-time features including live streaming and push notifications",
      "Subscription-based feature access with Stripe integration",
      "Cross-platform mobile app with React Native",
    ],
    links: {
      live: "#",
      github: "#",
    },
  },
  {
    id: 2,
    title: "JEXCA",
    subtitle: "Alumni Management System",
    description: `Alumni management system with features for member registration,
      event management, e-voting system, help-seeking posts, and package subscriptions.`,
    image: "/projects/jexca.jpg",
    technologies: ["Laravel", "PHP", "MySQL", "jQuery", "Bootstrap", "AWS"],
    features: [
      "Secure e-voting system for organizational elections",
      "Role-based access control with fine-grained permissions",
      "Multiple payment gateway integrations",
      "99.9% uptime with AWS infrastructure",
    ],
    links: {
      live: "#",
      github: "#",
    },
  },
  {
    id: 3,
    title: "Hospital Management System",
    subtitle: "Healthcare Workflow Automation",
    description: `Comprehensive hospital management system supporting patient registration,
      doctor appointments, prescriptions, pharmacy management, billing, and diagnostics automation.`,
    image: "/projects/hospital.jpg",
    technologies: ["Laravel", "PHP", "Oracle", "jQuery", "Bootstrap"],
    features: [
      "Multi-hospital network deployment",
      "Integrated pathology and radiology equipment APIs",
      "Automated diagnostic report collection",
      "Centralized server with distributed LAN architecture",
    ],
    links: {
      live: "#",
      github: "#",
    },
  },
  {
    id: 4,
    title: "Laneway",
    subtitle: "Education Management System",
    description: `Education management platform for student registration, course management,
      session-wise enrollment, billing and payment system, and document management.`,
    image: "/projects/laneway.jpg",
    technologies: ["Laravel", "PHP", "MySQL", "jQuery", "Bootstrap", "AWS"],
    features: [
      "Student registration and course enrollment",
      "Session-wise course management",
      "Billing and payment automation",
      "Secure document management on AWS S3",
    ],
    links: {
      live: "#",
      github: "#",
    },
  },
  {
    id: 5,
    title: "Document Management System",
    subtitle: "Secure File Storage Solution",
    description: `Enterprise document management application with role-based access control,
      file sharing capabilities, and directory synchronization features.`,
    image: "/projects/dms.jpg",
    technologies: ["Laravel", "Vue.js", "Vuex", "MySQL", "Bootstrap"],
    features: [
      "Role-based feature access control",
      "Secure file and folder sharing",
      "Directory synchronization",
      "On-premises deployment with encryption",
    ],
    links: {
      live: "#",
      github: "#",
    },
  },
];

export const education = {
  degree: "B.Sc. in Computer Science and Engineering",
  institution: "Pabna University of Science and Technology",
  location: "Pabna, Bangladesh",
  session: "2014 - 2015",
  passingYear: "2020",
  cgpa: "3.61 out of 4.00",
};

export const publication = {
  title: "Hybrid Feature Vector Space-Based Ensemble Machine Learning Approach For Sentiment Analysis on Amazon Product Reviews",
  venue: "ICCIT-2021, Bangladesh",
  award: "Dr. Fatema Rashid Best Paper Award, 2021",
  link: "#",
};
