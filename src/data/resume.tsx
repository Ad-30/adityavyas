import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Aditya Vyas",
  initials: "AV",
  url: "https://www.linkedin.com/in/aditya5vyas/",
  location: "Jaipur, Raj",
  locationLink: "https://www.google.com/maps/place/jaipur",
  description:
    "Software Engineer with a passion for building new projects and exploring the latest technologies. Always eager to create and innovate.",
  summary:
    "I’m a final-year Computer Science student passionate about building innovative projects like [ResuShape, a resume creation website](https://resushape.vercel.app), I’m also diving into the world of machine learning and neural networks.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Django",
    "MySQL",
    "Docker",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "adityavyascs@gmail.com",
    tel: "+917742245155",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Ad-30",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aditya5vyas/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/adityavyas861",
        icon: Icons.x,

        navbar: true,
      },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://youtube.com",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "mailto:adityavyascs@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Grid R&D",
      href: "https://www.gridrnd.in",
      badges: [],
      location: "Remote",
      title: "Django Development Intern",
      logoUrl: "/gridlogo.png",
      start: "July 2023",
      end: "Oct 2023",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },

  ],
  education: [
    {
      school: "Poornima Institute Of Engineering and Technology",
      href: "https://www.poornima.org/",
      degree: "Bachelor's of Technology(CSE)",
      logoUrl: "/pietlogo.png",
      start: "2021",
      end: "2025",
    },

  ],
  projects: [
    {
      title: "ResuShape",
      href: "https://resushape.vercel.app",
      dates: "May 2024 - Present",
      active: true,
      description:
        "Developed a web application that enables users to create resumes eﬀortlessly with multiple templates, leveraging cloud storage and dynamic rendering, and attracting 150 daily users.",
      technologies: [
        "Next.js",
        "Typescript",
        "MongoDB",
        "TailwindCSS",
        "Django",
        "Shadcn UI",
        "Latex",
      ],
      links: [
        {
          type: "Website",
          href: "https://resushape.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Ad-30/resushape",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "https://res.cloudinary.com/dvnv7ruzv/image/upload/v1725008362/b2irzovs9gn36gwo5z35.png",
      video:
        "",
    },
    {
      title: "SyncX",
      href: "https://sync-x.vercel.app/",
      dates: "June 2023 - July 2023",
      active: true,
      description:
        "Created a secure server file-sharing web application, improving user experience by 40% through seamless integration of backend services.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Django"
      ],
      links: [
        {
          type: "Website",
          href: "https://sync-x.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Ad-30/SyncX",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://res.cloudinary.com/dvnv7ruzv/image/upload/v1725008362/e7aj6ybu4oh7vqcxamqr.png",
      video: "",
    },
    {
      title: "SGPA Calculator",
      href: "https://sgpa-eta.vercel.app",
      dates: "Dec 2023",
      active: true,
      description:
        "Developed and deployed a project to calculate SGPA from scorecards using Next.js for the front end and Django for the REST API.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Django"
      ],
      links: [
        {
          type: "Website",
          href: "https://sgpa-eta.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Ad-30/CGPA",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://res.cloudinary.com/dvnv7ruzv/image/upload/v1725008748/cvivjzvfwzvp3dovsojw.png",
      video: "",
    },
    {
      title: "Iris Tracker Model",
      href: "https://shorturl.at/mPT3U",
      dates: "April 2024",
      active: true,
      description:
        "Developed the Iris Tracker to accurately follow eye movements, specifically the iris, using OpenCV for image processing, Albumentations for data augmentation, and TensorFlow for model training. TensorFlow, Machine Learning.",
      technologies: [
        "Machine Learning",
        "TensorFlow",
        "VGG16",
        "OpenCV",
        "LableMe",
        "Albumentations",
        "Google Colab",
      ],
      links: [
        {
          type: "Website",
          href: "https://shorturl.at/mPT3U",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/colab.svg",
      video:
        "",
    },
  ],
  hackathons: [
    {
      title: "Supervised Machine Learning: Regression and Classification",
      dates: "April 2023",
      location: "Coursera",
      description:
        "Build & train supervised machine learning models for prediction & binary classification tasks, including linear regression & logistic regression.",
      image:
        "https://online.stanford.edu/themes/custom/stanfordonline/images/footer-stanford-logo@2x.png",
      mlh: "https://media.licdn.com/dms/image/v2/D560BAQH-5I5gu8cYiQ/company-logo_100_100/company-logo_100_100/0/1698271191415/stanford_online_logo?e=1733356800&v=beta&t=-WqF09XvAVwMkU__9x1arDHp65JyFbhYcFaJXRWOjR4",
      links: [],
    },
    {
      title: "Advanced Learning Algorithms",
      dates: "March 2024",
      location: "Coursera",
      description:
        "Learnt about Neural Networks, TensorFlow, Multiclass Algorithm, Softmax Algorithm, Bias & Variance, Error Analysis, Decision Tree, Random Forest, XGBoost Algorithm.",
      image:
        "https://online.stanford.edu/themes/custom/stanfordonline/images/footer-stanford-logo@2x.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Unsupervised Learning, Recommenders, Reinforcement Learning",
      dates: "March 2024",
      location: "Coursera",
      description:
        "Learnt about Clustering, K-Means, Anomaly Detection, Recommender Systems, Collaborative Filtering, Content-Based Filtering, PCA Algorithm, Reinforcement Learning.",
      icon: "public",
      image:
        "https://online.stanford.edu/themes/custom/stanfordonline/images/footer-stanford-logo@2x.png",
      links: [],
    },
  ],
} as const;
