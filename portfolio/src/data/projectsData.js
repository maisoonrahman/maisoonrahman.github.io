import portfolioImg from "../assets/projects-images/personal-portfolio-preview.png";
import webtoonImg from "../assets/projects-images/webtoon-redesign.png";
import napquestImg from "../assets/projects-images/nap-quest.png";
import finalprojImg from "../assets/projects-images/biological.png";
import hackcwruImg from "../assets/projects-images/hackcwru.png";

export const projectsData = [
  // =========================
  // DESIGN + CODING
  // =========================

  {
    slug: "personal-portfolio",
    featured: true,
    categories: ["coding", "design"],
    tags: ["React", "UI/UX", "Frontend", "Animation", "Tailwind"],
    title: "Personal Portfolio",
    cardDescription:
      "A storytelling-focused portfolio blending motion, UI design, and frontend engineering.",
    thumbnail: portfolioImg,

    page: {
      overview:
        "A visually-driven portfolio designed to feel like a curated experience rather than a static website.",
      meta: {
        role: "UI/UX Designer + Frontend Developer",
        tools: ["React", "Vite", "Tailwind", "Framer Motion"],
      },
      sections: [
        {
          type: "text",
          title: "Concept",
          content:
            "Designed as a storytelling experience rather than a static portfolio.",
        },
        {
          type: "list",
          title: "Key Features",
          items: [
            "Reusable component system",
            "Theme switching",
            "Responsive layout",
            "CI/CD deployment",
          ],
        },
      ],
    },
  },

  {
    slug: "nap-quest",
    featured: true,
    categories: ["coding", "design"],
    tags: ["Unity", "Game Dev", "UI Design", "C#", "Procreate"],
    title: "Nap Quest",
    cardDescription:
      "A playful Unity game inspired by early 2000s casual games.",
    thumbnail: napquestImg,

    page: {
      overview:
        "A casual Unity game focused on nostalgic UI design and player experience.",
      meta: {
        role: "Game UI Designer + Developer",
        tools: ["Unity", "C#", "Procreate"],
      },
      sections: [
        {
          type: "list",
          title: "Contributions",
          items: [
            "Designed all UI and assets",
            "Built gameplay logic",
            "Refined via playtesting",
          ],
        },
      ],
    },
  },

  // =========================
  // DESIGN PROJECTS
  // =========================

  {
    slug: "pawmodoro-timer",
    categories: ["design"],
    tags: ["UI/UX", "Figma", "Prototyping", "Interaction Design"],
    title: "Pawmodoro Timer",
    cardDescription:
      "A gamified Pomodoro app featuring a pixel cat that reflects time progression.",
    thumbnail: "/images/pawmodoro-card.png",

    page: {
      overview:
        "A productivity app prototype exploring emotional engagement through animation.",
      meta: {
        role: "UI/UX Designer",
        tools: ["Figma"],
      },
      sections: [
        {
          type: "text",
          title: "Concept",
          content:
            "A pixel cat visually represents timer progression to make productivity engaging.",
        },
      ],
    },
  },

  {
    slug: "webtoon-redesign",
    featured: true,
    categories: ["design"],
    tags: ["UX Case Study", "UI/UX", "Figma", "User Research"],
    title: "Webtoon Homepage Redesign",
    cardDescription:
      "A user-centered redesign improving navigation and reducing clutter.",
    thumbnail: webtoonImg,

    page: {
      overview:
        "A UX case study improving homepage hierarchy and usability.",
      meta: {
        role: "UX/UI Designer",
        tools: ["Figma", "User Research"],
      },
      sections: [
        {
          type: "text",
          title: "Problem",
          content:
            "Homepage felt cluttered and difficult to navigate.",
        },
        {
          type: "before-after",
          title: "Before vs After",
          before: ["Cluttered layout", "Poor hierarchy"],
          after: ["Clear structure", "Improved usability"],
        },
      ],
    },
  },

  // =========================
  // CODING PROJECTS
  // =========================

  {
    slug: "melody-mapper",
    categories: ["coding"],
    tags: ["Python", "NLP", "Data Visualization", "Spotify API"],
    title: "Melody Mapper",
    cardDescription:
      "An NLP project analyzing song lyrics and visualizing themes.",
    thumbnail: "/images/melody-card.png",

    page: {
      overview:
        "A data-driven NLP project translating lyrics into visual insights.",
      meta: {
        role: "Developer",
        tools: ["Python", "NLP"],
      },
      sections: [
        {
          type: "list",
          title: "Features",
          items: [
            "Lyric analysis",
            "Theme classification",
            "Visualization outputs",
          ],
        },
      ],
    },
  },

  {
    slug: "biological-clock",
    categories: ["coding"],
    tags: ["Python", "Data Science", "Kalman Filter"],
    title: "Biological Clock Ensemble",
    cardDescription:
      "A biometric modeling project using Kalman Filtering.",
    thumbnail: finalprojImg,

    page: {
      overview:
        "Modeled circadian rhythms using probabilistic filtering techniques.",
      meta: {
        role: "Developer",
        tools: ["Python"],
      },
      sections: [
        {
          type: "text",
          title: "Implementation",
          content:
            "Built data pipelines and applied Kalman Filtering.",
        },
      ],
    },
  },

  // =========================
  // PR / DESIGN WORK
  // =========================

  {
    slug: "lux-yearbook-branding",
    categories: ["pr", "design"],
    tags: ["Branding", "PR", "Layout Design", "Canva"],
    title: "LUX Yearbook Branding & PR",
    cardDescription:
      "Led branding and marketing for a university yearbook.",
    thumbnail: "/images/lux-card.png",

    page: {
      overview:
        "Developed cohesive branding across print and digital platforms.",
      meta: {
        role: "Director of PR",
        tools: ["Canva"],
      },
      sections: [
        {
          type: "text",
          title: "Impact",
          content:
            "Increased engagement and visibility by 200%.",
        },
      ],
    },
  },

  {
    slug: "hackcwru-marketing",
    categories: ["pr", "design"],
    tags: ["Marketing", "Campaign Design", "Social Media"],
    title: "HackCWRU Marketing Campaigns",
    cardDescription:
      "Marketing campaigns that increased hackathon participation.",
    thumbnail: hackcwruImg,

    page: {
      overview:
        "Campaign-driven design project focused on engagement.",
      meta: {
        role: "Director of PR",
        tools: ["Canva"],
      },
      sections: [
        {
          type: "text",
          title: "Outcome",
          content:
            "Increased participation by 300%.",
        },
      ],
    },
  },
]