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
import webtoonTabs from "../assets/webtoon-images/webtoon-tabbing-feature.png"
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
    "A constraint-driven redesign improving navigation, reducing cognitive load, and making content discovery more intentional.",
  thumbnail: webtoonImg,

  page: {
    overview:
      "A targeted redesign of the Webtoon home page focused on improving usability within existing product constraints, without disrupting core business priorities.",

    meta: {
      timeline: "Winter 2026",
      role: ["UX Designer", "UI Designer"],
      collaborators: ["Solo project"],
      tools: ["Figma", "Heuristic Evaluation", "Competitive Analysis"],
    },

    sections: [
      {
        id: "overview",
        type: "text",
        title: "Overview",
        content:
          "This project explores how to improve the Webtoon homepage without a full redesign. Instead of rebuilding the experience from scratch, the goal was to work within real product constraints while preserving business priorities such as promotions, featured content, and partnerships. The focus was on restructuring content hierarchy, reducing cognitive overload, and making discovery more intentional.",
      },

      {
        id: "hero-mockup",
        type: "image",
        title: "Final Mockup",
        image: webtoonHifi,
        alt: "Final redesigned Webtoon homepage mockup",
        caption:
          "Final homepage concept with improved hierarchy, a prominent Current Reads section, and a consolidated discovery system.",
      },

      {
        id: "demo-video",
        type: "video",
        title: "Current Scroll Length Demo",
        video: webtoonScroll,
        autoplay: true,
        muted: true,
        loop: true,
        caption:
          "Demonstrating the current length and time it takes to scroll through the homepage.",
      },

      {
        id: "problem",
        type: "list",
        title: "The Problem",
        items: [
          "- Endless vertical scrolling creates decision fatigue and cognitive overload",
          "- Returning users struggle to quickly find and resume their current reads",
          "- New users are overwhelmed by the number of competing content sections",
          "- Content is abundant but lacks clear hierarchy, making it feel unstructured",
          "- Discovery feels passive and chaotic rather than intentional",
        ],
      },

      {
        id: "research",
        type: "text",
        title: "Research & Insights",
        content:
          "These problems were identified through heuristic evaluation of the existing homepage, analysis of user complaints about navigation and scroll fatigue, and comparison with content platforms such as Netflix and Spotify. A common pattern emerged: successful platforms prioritize quick resumption of content and reduce visible choices at any given time to minimize cognitive load.",
      },

      {
        id: "constraints",
        type: "list",
        title: "Constraints",
        items: [
          "- Maintain visibility of featured and promotional content",
          "- Support short-form content and major IP partnerships such as Disney and Marvel",
          "- Preserve existing discovery categories",
          "- Align with familiar industry patterns",
          "- Avoid major structural or backend changes",
        ],
      },

      {
        id: "design-approach",
        type: "text",
        title: "Design Approach",
        content:
          "The guiding principle was to improve clarity without increasing complexity. Instead of adding new features, the focus was on reorganizing existing systems to better match user behavior. Multiple approaches were explored, including reducing sections entirely and introducing pagination. The final solution prioritizes visibility, control, and familiarity while minimizing cognitive load.",
      },

      {
        id: "featured-section",
        type: "text",
        title: "1. Featured Section",
        content:
          "The featured section remains at the top to support promotions, partnerships, and new releases. This preserves business priorities while acting as an entry point for new users. Removing or deprioritizing this section would negatively impact visibility for promoted content.",
      },

      {
        id: "current-reads",
        type: "text",
        title: "2. Current Reads",
        content:
          "Current Reads was moved directly below Featured to align with common 'continue watching' patterns seen in content platforms. This prioritizes returning users and reduces friction in resuming content. A centered carousel was introduced to create visual focus and reduce scanning effort. Logged-out users see a locked state with a login prompt, encouraging account creation without disrupting the browsing experience.",
      },

      {
        id: "wireframes",
        type: "image",
        title: "Early Exploration (Lo-fi)",
        image: webtoonLofi,
        caption:
          "Early exploration focused on restructuring hierarchy and reducing vertical stacking. Initial concepts still relied too heavily on multiple sections, which informed the final consolidation approach.",
      },

      {
        id: "tabbed-navigation",
        type: "text",
        title: "Restructuring the Homepage with Tabbed Navigation",
        content:
          "A key issue across the homepage was the reliance on vertically stacked sections, which forced users into continuous scrolling and increased cognitive load. The problem was not the amount of content, but how it was presented.\n\nTo address this, I introduced tabbed navigation as a structural pattern that could be applied across multiple sections. Instead of showing all categories at once, tabs allow users to switch between them within the same space, reducing the number of visible choices at any given time.\n\nThis approach transforms the experience from passive scrolling to active exploration. It was chosen over alternatives such as pagination or collapsing sections because it preserves visibility of all options while maintaining a clean and controlled interface. It also aligns with familiar patterns from other content platforms, making the interaction intuitive without requiring relearning.",
      },

      {
        id: "tabbed-image",
        type: "image",
        title: "From Stacked Sections to Controlled Navigation",
        image: webtoonTabs,
        alt: "Diagram showing how vertically stacked sections are reorganized into tabbed navigation",
        caption:
          "Multiple vertically stacked categories are consolidated into structured, tab-based systems to reduce scroll fatigue and improve clarity.",
      },

      {
        id: "discover-more",
        type: "text",
        title: "3. Discover More",
        content:
          "The tabbed navigation system is applied to discovery through a single Discover More section, replacing multiple stacked content blocks. Users can switch between categories such as For You, Trending, Popular, New Releases, and Completed within the same space.\n\nBy showing only one category at a time, the interface reduces visual noise while still preserving all discovery options. This makes exploration feel more intentional and manageable without removing content."
          },

      {
        id: "discover-image",
        type: "image",
        title: "Discover More Section",
        image: webtoonDiscover,
        alt: "Discover More section with tabbed navigation",
        caption:
          "Tabbed navigation reduces visual clutter by showing one category at a time while preserving access to all discovery options.",
      },

      {
        id: "key-decisions",
        type: "list",
        title: "Key Design Decisions",
        items: [
          "- Replace vertical stacking with controlled, tab-based exploration",
          "- Reduce the number of visible choices at any given time",
          "- Prioritize returning users without excluding new users",
          "- Maintain strong visibility for featured and promotional content",
          "- Introduce interaction patterns familiar from other content platforms",
        ],
      },

      {
        id: "what-sets-this-apart",
        type: "list",
        title: "What Sets This Apart",
        items: [
          "- Focuses on restructuring rather than redesigning from scratch",
          "- Balances user needs with real business constraints",
          "- Improves existing systems instead of replacing them",
          "- Addresses real user friction such as scroll fatigue and decision paralysis",
          "- Considers both UX and implementation feasibility",
        ],
      },

      {
        id: "outcome",
        type: "list",
        title: "Expected Impact",
        items: [
          "- Reduced scroll depth before user interaction",
          "- Faster access to ongoing reads for returning users",
          "- Lower cognitive load through controlled content exposure",
          "- Increased likelihood of login through contextual prompts",
          "- Maintained visibility for promotions and partnerships",
        ],
      },

      {
        id: "engineering",
        type: "text",
        title: "Implementation Considerations",
        content:
          "This redesign works within a component-based system and does not require major backend changes. The tabbed discovery system can reuse existing category data, while the carousel interaction can be implemented with standard frontend patterns. This makes the solution feasible without disrupting the current architecture.",
      },

      {
        id: "reflection",
        type: "text",
        title: "Reflection",
        content:
          "This project reinforced that strong UX is not about removing complexity but organizing it. By working within constraints and focusing on structure, this redesign improves usability while staying aligned with how the platform actually operates.",
      },
    ],
  },
},

  // =========================
  // PR / DESIGN WORK
  // =========================

  {
    slug: "lux-yearbook-branding",
    featured: true,
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