import type { Project, GameplaySystem, Experience, Achievement } from '../types';

export const HERO_DATA = {
  name: "Mahindra Vishal D",
  title: "Unity Gameplay Programmer",
  subtitle: "I build immersive gameplay systems, and mechanics using Unity and C#.",
  location: "Tamil Nadu, India",
  email: "dmahindravishal@gmail.com",
  github: "https://github.com/MahindraVishal06",
  linkedin: "https://www.linkedin.com/in/mahindravishal/",
  resumeUrl: "/resume/Mahindra_Vishal_Resume.pdf",
  profileImage: "/Profile pic 2.jpeg",

  videoUrl: "/Third person player controller/Gameplay.mp4",
  targetStudios: ["Ubisoft", "Riot Games", "EA", "Naughty Dog", "Insomniac Games", "CD Projekt Red", "Rockstar Games"],
  stats: [
    { label: "Years of Experience", value: "3+" },
    { label: "Projects Completed", value: "12+" },
    { label: "Gameplay Systems", value: "11+" },
    { label: "Unity Certified", value: "Associate" }
  ]
};

export const GAMEPLAY_SYSTEMS_DATA: GameplaySystem[] = [
  {
    id: "fsm-system",
    title: "Finite State Machine (FSM)",
    shortDesc: "Generic, decoupled state machine engine powering complex character locomotion and AI state transitions.",
    architecture: "Abstract State base class with Enter, Update, PhysicsUpdate, and Exit lifecycles. Uses strong typing and zero-garbage state switching.",
    keyFeatures: [
      "Zero GC allocation on state transitions",
      "Hierarchical state machine support for sub-states",
      "Event-driven state change notifications",
      "Visual debugging Gizmos in Unity Editor"
    ],
    codeSnippet: `public class StateMachine {
    public IState CurrentState { get; private set; }

    public void Initialize(IState startingState) {
        CurrentState = startingState;
        CurrentState.Enter();
    }

    public void ChangeState(IState newState) {
        CurrentState.Exit();
        CurrentState = newState;
        CurrentState.Enter();
    }
}`,
    iconName: "Cpu",
    complexity: "Expert",
    tags: ["C#", "Design Patterns", "AI", "Architecture"]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "thirdperson-character-controller",
    slug: "thirdperson-character-controller",
    title: "Third person Player Controller",
    tagline: "Finite State Machine based 3rd person player controller",
    category: "Personal",
    teamSize: 1,
    description: "Developed a modular third-person character movement system in Unity using C# and a Finite State Machine (FSM)",
    previewVideo: "/Third person player controller/Gameplay.mp4",
    heroVideo: "/Third person player controller/Gameplay.mp4",
    videoOrientation: "landscape",
    image: "/Third person player controller/1.png",
    screenshots: [
      "/Third person player controller/1.png",
      "/Third person player controller/2.png",
      "/Third person player controller/3.png"
    ],
    tags: ["Unity", "C#", "AI", "Physics"],
    role: "Lead Gameplay & Network Programmer",
    duration: "4 Months",
    technologies: ["Unity 6", "C#", "Cinemachine"],
    features: ["Physics Raycasting","Blend Trees", "Finite State Machine"],
    aboutParagraphs: [
      "Developed a modular third-person character movement system in Unity using C# and a Finite State Machine (FSM), implementing responsive locomotion, smooth in-place turning, jump and fall state handling, and grounded detection.",
      "Built a raycast-based step-climbing system to detect and smoothly traverse small environmental obstacles, while integrating movement, rotation, and animation states for responsive and consistent character control."
    ],
    contributions: [
      {
        subtopic: "Finite State Machine Architecture",
        bulletPoints: [
          "Designed the player controller using a Finite State Machine (FSM) for clean and modular state management.",
          "Implemented separate states for Idle, Walk, Run, Crouch, Jump, and Fall.",
          "Structured state transitions based on player input and movement conditions."
        ]
      },
      {
        subtopic: "In-Place Turning",
        bulletPoints: [
          "Implemented in-place character turning to smoothly rotate the player toward the movement direction."
        ]
      },
      {
        subtopic: "Raycast-Based Stair Climbing",
        bulletPoints: [
          "Developed a raycast-based stair detection and climbing system.",
          "Used multiple raycasts to detect step height and determine whether the player can climb an obstacle."
        ]
      }
    ],
    githubUrl: "https://github.com/example/multiplayer-horror",
    demoUrl: "https://example.com/demo/horror",
    featured: true
  },
  {
    id: "crash-and-chaos",
    slug: "crash-and-chaos",
    title: "Crash and Chaos",
    tagline: "Fast phased fun Co-op endless runner",
    category: "GameJam",
    teamSize: 3,
    description: "Crash & Chaos is a 3D cooperative endless runner created during the Indie Connect Game Jam. One player takes the role of a thief driving a car through an endless road, while the second player controls a police helicopter and drops bombs to stop the getaway.",
    previewVideo: "/Crash and chaos/Gameplay.mp4",
    heroVideo: "/Crash and chaos/Gameplay.mp4",
    videoOrientation: "landscape",
    image: "/Crash and chaos/2.jpeg",
    screenshots: [
      "/Crash and chaos/1.jpeg",
      "/Crash and chaos/2.jpeg",
      "/Crash and chaos/3.jpeg"
    ],
    tags: ["Unity", "C#", "Physics", "Multiplayer", "Mobile"],
    role: "Lead Systems & Physics Programmer",
    duration: "3 Months",
    technologies: ["Unity", "C#", "Photon PUN 2", "Unity Physics", "Blender"],
    features: ["Ball Trajectory Physics", "Stone Stack Rigidbodies", "Room Lobby Matchmaking", "Mobile Touch Gestures", "Snapshot Interpolation"],
    aboutParagraphs: [
      "Crash & Chaos is a 3D cooperative endless runner developed for the Indie Connect Game Jam. The game features two unique player roles: a thief who navigates an endless road in a car and a police player who rides a helicopter and strategically drops bombs to stop the escape.",
      "The game was developed as part of the Indie Connect Game Jam, where the focus was on creating an engaging multiplayer experience within a limited development timeframe.",
      "The contrasting roles create a chaotic gameplay loop where the driver must constantly react to the helicopter's attacks, while the police player has to predict the driver's movement and strategically place bombs."
    ],
    contributions: [
      {
        subtopic: "Gameplay Programming",
        bulletPoints: [
          "Developed an endless platform spawning system to continuously generate the level as players progress.",
          "Implemented input handling for both players with their distinct control schemes.",
          "Configured controls for the thief driving the car and the police player controlling the helicopter."
        ]
      },
      {
        subtopic: "Level Design",
        bulletPoints: [
          "Implemented Photon PUN 2 room matchmaking, player tagging synchronization, and state snapshot interpolation.",
          "Designed the gameplay environment for the 3D endless runner experience.",
          "Designed touch swipe gesture controls and dynamic camera lock-on for intuitive mobile gameplay."
        ]
      },
      {
        subtopic: "Audio Integration",
        bulletPoints: [
          "Integrated sound effects and audio feedback throughout the game."
        ]
      },
      {
        subtopic: "Game Jam Development",
        bulletPoints: [
          "Contributed to the rapid development and iteration of the game within the constraints of the Indie Connect Game Jam."
        ]
      }
    ],
    githubUrl: "https://github.com/example/seven-stones",
    demoUrl: "https://example.com/demo/seven-stones",
    featured: true
  },
  {
    id: "save-the-balloon",
    slug: "save-the-balloon",
    title: "Save the Balloon",
    tagline: "Fast-Paced Endless Arcade Runner Published on Google Play Store",
    category: "Personal",
    teamSize: 1,
    description: "Published mobile endless runner where players shield a rising balloon from falling physics obstacles by tilting the phone.",
    previewVideo: "/Save The Balloon/Gameplay.mp4",
    heroVideo: "/Save The Balloon/Gameplay.mp4",
    videoOrientation: "portrait",
    image: "/Save The Balloon/1.jpeg",
    screenshots: [
      "/Save The Balloon/1.jpeg",
      "/Save The Balloon/2.jpeg",
      "/Save The Balloon/3.jpeg",
      "/Save The Balloon/4.jpeg",
      "/Save The Balloon/5.jpeg"
    ],
    tags: ["Unity", "C#", "Mobile", "Object Pooling", "Google Play"],
    role: "Solo Developer & Programmer",
    duration: "2 Months",
    technologies: ["Unity URP", "C#", "Object Pooling Engine", "Google Play Services"],
    features: ["Object Pooling", "Touch Swipe Controls", "Leaderboard Sync", "URP Shader Graph", "60 FPS Mobile Optimization"],
    aboutParagraphs: [
      "Save the Balloon is an intuitive, highly addictive mobile arcade game built and published on the Google Play Store.",
      "Players control a protective shield with swift finger gestures to deflect falling obstacles and keep a rising balloon safe as altitude increases.",
      "The game was engineered with object pooling and zero runtime GC allocations, allowing it to maintain a rock-solid 60 FPS on low-end Android mobile devices."
    ],
    contributions: [
      {
        subtopic: "Gameplay Mechanics & Controls",
        bulletPoints: [
          "Developed an infinite platform generation system using Unity's Object Pooling technique.",
          "Implemented tilt-based controls for mobile devices.",
          "Implemented multiple power-ups to add variety to the gameplay.",
          "Developed a dynamic day-and-night cycle to add visual variation to the endless gameplay."
        ]
      },
      {
        subtopic: "Unity Ads Integration",
        bulletPoints: [
          "Integrated Unity Ads into the mobile game.",
          "Configured advertisements to work with the game's progression and reward systems."
        ]
      }
      ,
      {
        subtopic: "Character Skin System",
        bulletPoints: [
          "Developed a character skin selection system allowing players to customize their character.",
          "Managed unlocked/locked skin states and player selections."
        ]
      },
      {
        subtopic: "2D Art & Visual Assets",
        bulletPoints: [
          "Created and integrated 2D art assets for the game.",
          "Worked on visual elements to maintain a consistent and engaging art style."
        ]
      }
    ],
    githubUrl: "https://github.com/example/save-the-balloon",
    demoUrl: "https://play.google.com",
    featured: false
  },
  {
    id: "Kidoralearn",
    slug: "Kidoralearn",
    title: "Kidoralearn",
    tagline: "A smart Multisensory learning app that connects school syllabus with interactive activities at home.",
    category: "Professional",
    organization: "Kidoralearn",
    organizationUrl: "https://kidoralearn.com/",
    teamSize: 7,
    description: "A smart Multisensory learning app that connects school syllabus with interactive activities at home.",
    previewVideo: "/Kidoralearn/Gameplay.mp4",
    heroVideo: "/Kidoralearn/Gameplay.mp4",
    videoOrientation: "landscape",
    youtubeUrl: "https://www.youtube.com/embed/iztSZru147I",
    image: "/Kidoralearn/Kidoralearn - 1.jpeg",
    screenshots: [
      "/Kidoralearn/Kidoralearn - 1.jpeg",
      "/Kidoralearn/Kidoralearn - 2.jpeg",
      "/Kidoralearn/Kidoralearn - 3.jpeg",
      "/Kidoralearn/Kidoralearn - 4.jpeg",
      "/Kidoralearn/Kidoralearn - 5.jpeg",
    ],
    tags: ["Unity", "C#", "Google TTS API", "Gemini AI", "REST API"],
    role: "Lead Unity API & Systems Developer",
    duration: "48 Hours",
    technologies: ["Unity", "C#", "Google Text-to-Speech API", "Gemini REST API", "UniTask"],
    features: ["AI Voice Generation", "Dynamic Quiz Engine", "Async UniTask Emitters", "Animated Avatar Tutor", "Child Friendly UI"],
    aboutParagraphs: [
      "KidoraLearn is the learning app built for kids ages 3–11 and designed for Pre K to Grade 5, it transforms screen time into interactive learning across Mathematics, English, reading, and more.",
      "It is purpose based multisensory learning app that connects school syllabus with interactive activities at home. It builds strong foundations and helps kids learn concepts with purpose with real-life examples. Parents and schools can track performance and ensure steady academic progress.", 
      "The platform is aligned with curriculum standards and built for both classroom and at-home use, serving as a unified smart learning solution. With a focus on interactive multisensory learning, KidoraLearn fosters curiosity, comprehension and creativity in young learners.",
    ],
    contributions: [
      {
        subtopic: "Gameplay Programming",
        bulletPoints: [
          "Developed 15–20 interactive learning activities across different grade levels.",
          "Programmed the core logic and interactions for multiple educational activities."
        ]
      },
      {
        subtopic: "Animation Implementation",
        bulletPoints: [
          "Integrated and implemented animations across multiple learning activities.",
          "Coordinated animations with gameplay events and user interactions."
        ]
      },
      {
        subtopic: "Sound & Audio Integration",
        bulletPoints: [
          "Integrated sound effects and audio feedback into activities.",
        ]
      },
      {
        subtopic: "Bug Fixing & Debugging",
        bulletPoints: [
          "Identified and fixed 100+ bugs across the application.",
        ]
      }
    ],
    demoUrl: "https://play.google.com/store/apps/details?id=com.technopxl.kidoralearn.learningapp",
    featured: true
  }
];

export const EXPERIENCES_DATA: Experience[] = [
  {
    id: "exp-google-play",
    role: "Google Play x Unity Selected Scholar",
    company: "Google Play & Unity",
    period: "2024",
    location: "India / Remote",
    description: "Selected for the prestigious Google Play x Unity program focused on advanced mobile game development, optimization, and commercialization.",
    achievements: [
      "Built and deployed commercial-grade Unity mobile games adhering to Google Play policies.",
      "Optimized frame rates and memory footprint for low-end mobile devices using Unity Profiler.",
      "Earned official recognition and guidance from senior industry game developers."
    ],
    technologies: ["Unity", "C#", "Mobile Optimization", "URP", "Google Play APIs"],
    type: "Certification"
  }
];

export const ACHIEVEMENTS_DATA: Achievement[] = [
  {
    id: "ach-1",
    title: "Google Play x Unity Program Selected",
    issuer: "Google Play & Unity Technologies",
    date: "2024",
    description: "Selected among top emerging game developers in India for specialized Unity mobile game architecture and optimization training.",
    badge: "Google Play / Unity",
    link: "https://unity.com"
  }
];
