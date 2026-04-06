import portfolioImg from "../assets/projects-images/personal-portfolio-preview.png"
import webtoonImg from "../assets/projects-images/webtoon-redesign.png"
import napquestImg from "../assets/projects-images/nap-quest.png"
import finalprojImg from "../assets/projects-images/biological.png"
import hackcwruImg from "../assets/projects-images/hackcwru.png"
import melodyImg from "../assets/projects-images/melody.png"
import luxImg from "../assets/projects-images/lux.png"
import webtoonScroll from "../assets/webtoon-images/webtoon-problem.mp4"
import webtoonLofi from "../assets/webtoon-images/lowfi-mockup.png"
import webtoonHifi from "../assets/webtoon-images/hifi-mockup.png"
import webtoonDiscover from "../assets/webtoon-images/webtoon-discover.png"
import luxTemplate from "../assets/lux-images/template-img.png"
import luxFlyers from "../assets/lux-images/flyers-img.png"
import kalmanPaper from "../assets/documents/kalman-paper.pdf"

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
        "A visually driven portfolio designed to feel like a curated experience rather than a static website.",
      meta: {
        timeline: "Winter 2026",
        role: ["UI/UX Designer", "Frontend Developer"],
        collaborators: ["Solo project"],
        tools: ["React", "Vite", "Tailwind", "Framer Motion"],
      },
      sections: [
        {
          id: "concept",
          type: "text",
          title: "Concept",
          content:
            "I designed this portfolio as a storytelling experience rather than a plain archive of work. The goal was to create something that felt personal, polished, and reflective of both my visual taste and technical ability.",
        },
        {
          id: "design-goals",
          type: "list",
          title: "Design Goals",
          items: [
            "Build a portfolio that feels memorable instead of generic",
            "Blend frontend engineering with strong visual design choices",
            "Create a structure that can grow as more projects are added",
            "Make the experience responsive across desktop and mobile",
          ],
        },
        {
          id: "key-features",
          type: "list",
          title: "Key Features",
          items: [
            "Reusable component system",
            "Theme switching",
            "Responsive layout",
            "Animated project presentation",
            "CI/CD deployment workflow",
          ],
        },
        {
          id: "reflection",
          type: "text",
          title: "Reflection",
          content:
            "This project became the foundation for how I want to present my work going forward: creative, clear, and modular. It also pushed me to think more intentionally about personal branding and interaction design.",
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
        "A casual game project focused on nostalgic UI design, playful visuals, and a lighthearted player experience.",
      meta: {
        timeline: "Spring 2025",
        role: ["Game UI Designer", "Developer"],
        collaborators: ["Jakob Danninger, Jessie VanHorn, Harrison Zhao"],
        tools: ["Unity", "C#", "Procreate"],
      },
      sections: [
        {
          id: "project-overview",
          type: "text",
          title: "Project Overview",
          content:
            "Nap Quest was built as a playful game concept inspired by older casual games with simple mechanics and strong visual charm. I wanted the project to feel approachable while still showing thoughtfulness in design and implementation.",
        },
        {
          id: "contributions",
          type: "list",
          title: "Contributions",
          items: [
            "Designed interface and visual assets",
            "Implemented gameplay logic in Unity",
            "Shaped the overall player experience",
            "Designed the playtesting survey and distribution",
            "Refined the game through iteration and testing",
          ],
        },
        {
          id: "design-focus",
          type: "text",
          title: "Design Focus",
          content:
            "A major priority was making the game feel visually cohesive. I approached the UI and asset design with the same care as the mechanics so the experience would feel complete rather than purely technical.",
        },
      ],
    },
  },

  // =========================
  // DESIGN PROJECTS
  // =========================

  /*
  {
    slug: "pawmodoro-timer",
    categories: ["design"],
    tags: ["UI/UX", "Figma", "Interaction Design", "Frontend Development"],
    title: "Pawmodoro Timer",
    cardDescription:
      "A gamified Pomodoro app featuring a pixel cat that reflects time progression.",
    thumbnail: "/images/pawmodoro-card.png",

    page: {
      overview:
        "A productivity app prototype that explores emotional engagement through animation, character feedback, and playful interaction design.",
      meta: {
        timeline: "Spring 2024",
        role: ["UI/UX Designer", "Frontend Developer", "Database Administrator"],
        collaborators: ["Asya Akkus, Noah Henriques"],
        tools: ["React", "Amazon RDS", "Figma"],
      },
      sections: [
        {
          id: "concept",
          type: "text",
          title: "Concept",
          content:
            "The core idea behind Pawmodoro was to make productivity feel less sterile. Instead of a plain timer, the app uses a pixel cat and environmental feedback to make time passage feel visible and rewarding.",
        },
        {
          id: "design-decisions",
          type: "list",
          title: "Design Decisions",
          items: [
            "Used character-based feedback to create emotional engagement",
            "Focused on simple, readable timer interactions",
            "Designed around a playful pixel-inspired visual direction",
            "Prioritized delight without making the UI confusing",
          ],
        },
        {
          id: "database",
          type: "list",
          title: "Database",
          items: [
              "Designed relational database schema to store users, sessions, and task history",
              "Deployed and managed database using Amazon RDS for scalability and reliability",
              "Structured tables to support time tracking, session logging, and user progress",
              "Optimized queries for efficient retrieval of session history and statistics",
              "Ensured data persistence for user progress across sessions",
              "Integrated frontend with backend APIs to sync timer state and stored data",
            ],
        },
        {
          id: "outcome",
          type: "text",
          title: "Outcome",
          content:
            "The project helped me explore how animation and visual personality can support motivation in productivity tools rather than just decorate them.",
        },
      ],
    },
  }, */

  {
  slug: "webtoon-redesign",
  featured: true,
  categories: ["design"],
  tags: ["UX Case Study", "UI/UX", "Figma", "User Research"],
  title: "Webtoon Homepage Redesign",
  cardDescription:
    "A user-centered redesign improving navigation, reducing clutter, and clarifying content discovery.",
  thumbnail: webtoonImg,

  page: {
    overview:
      "A targeted redesign of the Webtoon home page focused on improving usability without disrupting the platform’s existing structure.",

    meta: {
      timeline: "Winter 2026",
      role: ["UX Designer", "UI Designer"],
      collaborators: ["Solo project"],
      tools: ["Figma", "User Research"],
    },

    sections: [
      {
        id: "overview",
        type: "text",
        title: "Overview",
        content:
          "This project focuses on a targeted redesign of the Webtoon home page to improve usability without disrupting the platform’s existing structure. Instead of a full overhaul, this redesign works within real product constraints while preserving business priorities such as promotions, featured content, and partnerships. At the same time, it addresses key user pain points around navigation, overwhelm, and content discovery.",
      },

      {
        id: "hero-mockup",
        type: "image",
        title: "Final Mockup",
        image: webtoonHifi,
        alt: "Final redesigned Webtoon homepage mockup",
        caption:
          "Final homepage concept showing a clearer hierarchy, a more prominent Current Reads section, and a consolidated Discover More area.",
      },

      {
        id: "demo-video",
        type: "video",
        title: "Interaction Demo",
        video: webtoonScroll,
        autoplay: true,
        muted: true,
        loop: true,
        caption: "Demonstrating the Current Reads carousel and Discover More interaction."
      },

      {
        id: "problem",
        type: "list",
        title: "The Problem",
        items: [
          "- Endlessly long scroll causes decision paralysis",
          "- Returning users struggle to quickly find Current Reads",
          "- New users face decision fatigue due to too many content sections",
          "- Endless scrolling creates cognitive overload and reduces engagement",
          "- The platform surfaces a large amount of content, but it does not feel manageable or intentional",
        ],
      },

      {
        id: "constraints",
        type: "list",
        title: "Constraints",
        items: [
          "- Keep featured and promotional content highly visible",
          "- Support short-form and animated content along with major IPs such as Disney and Marvel",
          "- Maintain existing discovery categories",
          "- Align with common industry patterns",
        ],
      },

      {
        id: "design-approach",
        type: "text",
        title: "Design Approach",
        content:
          "The guiding principle was simple: improve clarity and usability without disrupting business goals. Instead of adding new features, the focus was on restructuring hierarchy, reducing noise, and making interactions more intentional.",
      },

      {
        id: "featured-section",
        type: "text",
        title: "1. Featured Section",
        content:
          "The featured section remains at the top to support promotions, partnerships, and new releases. This respects existing business priorities while acting as the entry point for new users.",
      },

      {
        id: "current-reads",
        type: "text",
        title: "2. Current Reads",
        content:
          "I moved Current Reads directly below Featured to better match user expectations around continue-watching style patterns. The section uses a large centered carousel with side cards partially visible for depth and smoother horizontal interaction. Logged-out users see a locked state with a login prompt, while logged-in users can immediately continue reading.",
      },

      {
        id: "wireframes",
        type: "image",
        title: "Early Exploration (Lo-fi)",
        image: webtoonLofi,
        caption: "Initial attempt at restructuring hierarchy",
  
      },

      {
        id: "discover-more",
        type: "text",
        title: "3. Discover More",
        content:
          "Multiple stacked sections created an overwhelming and repetitive experience, so I consolidated discovery into a single Discover More section. It uses horizontal pill tabs with one content view at a time. Tabs include For You, Trending, Popular, New Releases, and Completed. This reduces endless scrolling, encourages intentional exploration, and makes discovery feel controlled instead of chaotic.",
      },

      {
        id: "discover-image",
        type: "image",
        title: "Discover More Interaction",
        image: webtoonDiscover,
        alt: "Discover More section with tabbed navigation",
        caption:
          "Tabbed discovery reduces visual overload by showing one category at a time instead of stacking multiple full sections.",
      },

      {
        id: "key-decisions",
        type: "list",
        title: "Key Design Decisions",
        items: [
          "- Reduce decision fatigue by replacing multiple sections with a single entry point",
          "- Show fewer choices at once",
          "- Allow users to choose how they want to explore",
          "- Prioritize returning users without ignoring new users",
          "- Keep featured content dominant to maintain business visibility",
          "- Use login prompts to support user growth",
        ],
      },

      {
        id: "what-sets-this-apart",
        type: "list",
        title: "What Sets This Apart",
        items: [
          "- Not a full redesign",
          "- Works within product and business constraints",
          "- Improves systems instead of replacing them",
          "- Focuses on content hierarchy, user behavior, and platform goals",
          "- Addresses real user friction such as scroll fatigue, decision paralysis, and difficulty resuming content",
        ],
      },

      {
        id: "outcome",
        type: "list",
        title: "Outcome",
        items: [
          "- Faster access to ongoing reads",
          "- Reduced cognitive load",
          "- More intentional content discovery",
          "- Increased likelihood of login or signup",
          "- Maintained visibility for promotions and partnerships",
        ],
      },

      {
        id: "reflection",
        type: "text",
        title: "Reflection",
        content:
          "This project highlights a core principle: strong UX is not about removing complexity. It is about organizing it. By restructuring instead of fully redesigning, this solution improves usability while staying aligned with how the platform actually operates.",
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
    thumbnail: melodyImg,

    page: {
      overview:
        "A data-driven project that analyzes lyrics and translates textual patterns into visual insights.",
      meta: {
        timeline: "Fall 2024",
        role: ["Developer"],
        collaborators: ["Neha Panduri, Joy Fan, Nikki D'Costa, Shanmuga Ganesh"],
        tools: ["Python", "NLP", "Spotify API", "Data Visualization"],
      },
      sections: [
        {
          id: "project-overview",
          type: "text",
          title: "Project Overview",
          content:
            "Melody Mapper explores how lyrical content can be transformed into structured visual output. The project combines text analysis with visual storytelling to make patterns in music easier to interpret.",
        },
        {
          id: "features",
          type: "list",
          title: "Features",
          items: [
            "Lyric analysis",
            "Theme classification",
            "Visualization outputs",
            "Integration with music-related data sources",
          ],
        },
        {
          id: "technical-focus",
          type: "text",
          title: "Technical Focus",
          content:
            "The main challenge was building a pipeline that balanced analysis and presentation. I wanted the output to be technically meaningful without losing readability for users.",
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
        "A biometric modeling project focused on circadian rhythm prediction using probabilistic filtering techniques.",
      meta: {
        timeline: "Fall 2024",
        role: ["Developer"],
        collaborators: ["Asya Akkus, Noah Henriques, Ashley Sah, Ritika Devarakonda, Siddharth Khadkikar"],
        tools: ["Python", "Data Science", "Kalman Filter"],
      },
      sections: [
        {
          id: "project-context",
          type: "text",
          title: "Project Context",
          content:
            "This project focused on modeling biological rhythms using computational methods. The work required balancing theory, implementation, and interpretation of results.",
          link: {
            url: kalmanPaper,
            label: "Read full paper here!"
          }
        },
        {
          id: "implementation",
          type: "text",
          title: "Implementation",
          content:
            "I built data processing workflows and applied Kalman filtering methods to model circadian rhythm behavior from biometric data.",
        },
        {
          id: "technical-takeaway",
          type: "text",
          title: "Technical Takeaway",
          content:
            "The project strengthened my experience working on data-heavy technical problems where the biggest challenge is often turning theory into an implementation that is actually usable.",
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
    thumbnail: luxImg,

    page: {
      overview:
        "A branding and communications role focused on building a more cohesive visual identity across CWRU's yearbook promotions and outreach.",
      meta: {
        timeline: "August 2024 – May 2025",
        role: ["Director of PR", "Designer"],
        collaborators: ["LUX executive board", "Yearbook team"],
        tools: ["Canva", "Branding", "Layout Design"],
      },
      sections: [
        {
          id: "role",
          type: "text",
          title: "Role",
          content:
            "In this role, I helped shape the public-facing identity of LUX CWRU’s Yearbook through promotional materials, outreach, and consistent visual communication.",
        },
        {
          id: "impact",
          type: "text",
          title: "Impact",
          content:
            "The work contributed to a stronger visual presence across both print and digital channels and helped make the organization’s messaging more cohesive and recognizable.",
        },
        {
          id: "key-work",
          type: "list",
          title: "Key Work",
          items: [
            "- Designed promotional materials",
            "- Maintained consistent visual branding",
            "- Supported club communications and outreach",
            "- Helped present the organization more cohesively to students",
          ],
        },
        {
  id: "final-prod-images",
  type: "image-group",
  title: "Some examples of the work I have done",
  images: [
    {
      image: luxTemplate,
      alt: "Yearbook spreads",
      caption:
        "Some spreads I've done for LUX CWRU's Yearbook 2024-2025 volume. The templates were done on the Jostens website."
    },
    {
      image: luxFlyers,
      alt: "Flyers",
      caption:
        "Some flyers I've designed for LUX's 2024-2025 yearbook campaign. The flyers were designed on LUX's Canva Pro account."
    }
  ]
}
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
        "A campaign-driven design and marketing project centered on increasing visibility and participation for HackCWRU.",
      meta: {
        timeline: "January 2023 - March 2024",
        role: ["Director of PR", "Campaign Designer"],
        collaborators: ["HackCWRU team"],
        tools: ["Canva", "Social Media", "Campaign Design"],
      },
      sections: [
        {
          id: "campaign-goal",
          type: "text",
          title: "Campaign Goal",
          content:
            "The goal was to create marketing materials that felt more engaging and clear, helping the event stand out while communicating information accessibly to students.",
        },
        {
          id: "work-completed",
          type: "list",
          title: "Work Completed",
          items: [
            "Designed promotional graphics",
            "Supported outreach across social platforms",
            "Helped shape the visual direction of campaigns",
            "Created materials aimed at increasing awareness and participation",
          ],
        },
        {
          id: "outcome",
          type: "text",
          title: "Outcome",
          content:
            "The campaign work helped strengthen event visibility and contributed to higher student participation and engagement.",
        },
      ],
    },
  },
]