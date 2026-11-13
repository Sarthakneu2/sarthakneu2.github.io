export const site = {
  name: "Sarthak Neupane",
  shortName: "Sarthak",
  role: "Electrical Engineer · Applied AI/ML · Intelligent Energy Systems",
  location: "Nepal",
  github: "https://github.com/Sarthakneu2",
  email: "sarthakneupane02@gmail.com",
  linkedin: "https://www.linkedin.com/in/sarthak-neupane-563643216/",
  intro: "I am an electrical engineer drawn to the space where physical systems meet data and intelligent software.",
  story: [
    "My journey began with electrical and electronics engineering, where I learned to understand systems from the component level up. Early projects in electronics and sensing gradually led me towards embedded programming, data analysis, and machine learning.",
    "Over time, I became increasingly interested in how software can make physical infrastructure more observable, adaptive, and useful. That interest shaped my work in EV charging monitoring, hybrid energy systems, PicoGrid, and agrivoltaics research.",
    "Alongside engineering, I explored quantitative research through Quanta Investment and developed an interest in using statistical methods and Python to understand complex markets. I have also taken on leadership roles in student organisations and digital inclusion initiatives.",
    "I am now focused on developing as an applied AI/ML engineer, with particular interest in energy, IoT, and intelligent infrastructure."
  ],
  focus: [
    "Applied machine learning and data-driven systems",
    "Energy monitoring, renewable energy and storage",
    "Embedded systems, IoT and sensor integration",
    "Time-series analysis and quantitative research"
  ]
};

export const education = [
  {
    qualification: "Bachelor of Engineering (B.E.) in Electrical and Electronics Engineering",
    institution: "Kathmandu University",
    period: "2026"
  }
];

export const skills = [
  {
    category: "Programming and Software Development",
    items: "Python, SQL, C/C++ (Arduino and embedded programming), FastAPI, React, TypeScript, PostgreSQL, Git and GitHub"
  },
  {
    category: "Machine Learning and Data Analytics",
    items: "Data preprocessing, exploratory data analysis, statistical analysis, regression, correlation, time-series analysis, quantitative modelling, strategy backtesting, portfolio optimisation and risk analysis. Libraries: Pandas, NumPy, SciPy, Statsmodels and Matplotlib"
  },
  {
    category: "Electrical and Embedded Systems",
    items: "ESP32 and Arduino development, sensor integration and calibration, data acquisition, analogue and digital electronics, circuit design, PCB layout, electrical measurement, monitoring systems and battery state-of-charge estimation"
  },
  {
    category: "Energy Systems and Simulation",
    items: "MATLAB/Simulink modelling, solar PV and battery systems, hybrid energy systems, energy management, power and energy calculations and electrical system analysis"
  },
  {
    category: "Engineering and Development Tools",
    items: "Proteus Design Suite, MATLAB/Simulink, Visual Studio Code, PostgreSQL development tools and Git/GitHub"
  }
];

export const cvProjects = [
  {
    title: "PicoGrid Monitoring System",
    subtitle: "Final-year engineering project · Hybrid energy monitoring and management",
    points: [
      "Developed and simulated a hybrid solar PV, battery and grid energy monitoring system using MATLAB/Simulink and ESP32.",
      "Built a monitoring platform using simulated telemetry, PostgreSQL, FastAPI, React and TypeScript."
    ]
  },
  {
    title: "EV Charging Monitoring System",
    subtitle: "Third-year engineering project · Embedded systems and energy monitoring",
    points: [
      "Developed an EV charging monitoring prototype integrating embedded measurements, charger circuit hardware and a battery balancer.",
      "Built a dashboard to monitor voltage, current, power, energy, battery state of charge and estimated charging time using Arduino, ZMPT101B and ACS712."
    ]
  },
  {
    title: "Digital Tachometer",
    subtitle: "Second-year engineering project · Digital electronics",
    points: [
      "Designed a microcontroller-free digital tachometer using NE555 timers, CD4026 counters, logic gates, IR sensors and seven-segment displays.",
      "Simulated the circuit and developed its PCB layout using Proteus."
    ]
  },
  {
    title: "Smart Assistive Stick",
    subtitle: "First-year engineering project · Assistive technology",
    points: [
      "Developed a prototype assistive stick with IR-based obstacle detection and emergency location-sharing features.",
      "Integrated IR, ESP32, GPS, GSM and Wi-Fi for object detection, location tracking and emergency notifications."
    ]
  },
  {
    title: "Portfolio Optimisation Research",
    subtitle: "Independent quantitative research",
    points: [
      "Explored Modern Portfolio Theory by analysing historical stock returns, expected returns, covariance and correlation using Python.",
      "Simulated 50,000 portfolios to identify the Global Minimum Variance and maximum Sharpe ratio portfolios and visualise the efficient frontier."
    ]
  }
];

export const areasOfInterest = [
  "Machine learning and artificial intelligence",
  "Data science and data analytics",
  "Quantitative research and financial analytics",
  "Embedded systems and intelligent hardware",
  "Renewable energy and energy management",
  "Electrical power systems and control",
  "Software development and engineering analytics"
];

export const experience = [
  {
    org: "Quanta Investment",
    role: "Co-founder & Chief Operating Officer",
    type: "Quantitative research",
    period: "05/2024 – Present",
    logo: "/images/quanta-logo.png",
    logoAlt: "Quanta Investment logo.",
    image: "/images/quanta-research.png",
    imageAlt: "Quanta Investment quantitative analysis presentation.",
    description: "Co-founded a quantitative investment initiative with a university colleague, combining financial market research, programming, statistics and data analysis.",
    points: [
      "Conduct quantitative research across capital markets, insurance and commodities, applying statistical analysis and strategy backtesting to support portfolio and investment decisions.",
      "Streamlined quantitative analysis and research reporting using Python libraries, improving the organisation and reproducibility of investment research.",
      "Developed Python-based analytical tools and research workflows to support market data analysis, quantitative modelling and strategy backtesting.",
      "Technologies: Python, Pandas, NumPy, SciPy, Statsmodels and Matplotlib."
    ]
  },
  {
    org: "Nepal Technology Innovation Center (NTIC)",
    role: "Research and Technical Development",
    type: "Agrivoltaics research",
    period: "11/2025 – 05/2026",
    logo: "/images/NTIC.png",
    logoAlt: "Kathmandu University logo for Nepal Technology Innovation Center.",
    image: "/images/agrivoltaics.png",
    gallery: [
      { src: "/images/agrivoltaics.png", alt: "Researchers tending crops beneath a solar photovoltaic structure." },
      { src: "/images/agrivoltaicsiot.jpeg", alt: "IoT monitoring hardware with an ESP32 and connected sensors.", fit: "contain" }
    ],
    imageAlt: "Fieldwork with crops beneath a solar photovoltaic structure.",
    description: "Conducted technical and financial feasibility research on agrivoltaic systems, integrating solar PV, controlled-environment agriculture and IoT-based monitoring.",
    points: [
      "Contributed to electrical system design, configuration planning, system sizing and structural layout development for a crop-under-solar-PV pilot project.",
      "Supported energy-yield estimation, water-consumption analysis, financial assessment and field monitoring to evaluate technical and economic viability."
    ]
  },
  {
    org: "Nepal Electricity Authority (NEA)",
    role: "Electrical Engineering Intern",
    type: "Power distribution",
    period: "2024",
    logo: "/images/NEA.jpg",
    logoAlt: "Nepal Electricity Authority logo.",
    image: "/images/nea-field.png",
    imageAlt: "Electrical engineering fieldwork beside a transmission tower.",
    description: "Completed an internship to gain practical exposure to electrical power distribution and utility operations.",
    points: [
      "Observed 11 kV and 33 kV substations and their major electrical components.",
      "Gained exposure to transmission lines and distribution-centre operations.",
      "Accompanied field personnel during observations of transformer-line faults and distribution-line installation activities."
    ]
  },
  {
    org: "Nupche Likhu Hydropower Project",
    role: "Electrical Engineering Intern",
    type: "Hydropower",
    period: "2025",
    logo: "/images/nupche.jpg",
    logoAlt: "VEPL logo for the Nupche Likhu Hydropower Project.",
    image: "/images/hydropower.jpg",
    imageAlt: "Hydropower facility and reservoir.",
    description: "Gained field exposure to electrical systems and equipment used in hydropower generation and grid interconnection.",
    points: [
      "Observed turbines, generators and auxiliary equipment on the generation side.",
      "Gained exposure to switchyard equipment, including circuit breakers, isolators, current transformers and potential transformers."
    ]
  }
];

export const leadership = [
  {
    org: "Forum for Digital Equality (FDE)",
    role: "President",
    period: "2026 – Present",
    images: [
      {
        src: "/images/leadership.jpg",
        alt: "Community participants at the APrIGF 2026 event in Kathmandu.",
        caption: "APrIGF 2026 · Kathmandu"
      }
    ],
    points: [
      "Led organisational activities focused on digital inclusion, technology awareness and equitable access to digital opportunities.",
      "Represented the organisation as a Volunteer Partner at APrIGF 2026 in Kathmandu and contributed to initiatives promoting digital literacy, ICT capacity building and responsible technology adoption."
    ]
  },
  {
    org: "Leadership and Professional Development Club (KULPD), Kathmandu University",
    role: "President",
    period: "2025",
    images: [
      {
        src: "/images/leadership1.jpeg",
        alt: "Two students collaborating at a table with laptops.",
        caption: "Student collaboration"
      },
      {
        src: "/images/leadership4.jpeg",
        alt: "Students and facilitators at a Kathmandu University workshop.",
        caption: "Student workshop"
      }
    ],
    points: [
      "Led the student club and coordinated leadership, professional development, entrepreneurship and student engagement programmes, including KUMUN 2025 and KUMUN 2026.",
      "Organised capital-market awareness, debate competitions and other student-focused activities in collaboration with club members."
    ]
  },
  {
    org: "Kathmandu University Rotaract Club (KURAC)",
    role: "Sergeant-at-Arms",
    period: "2022",
    images: [
      {
        src: "/images/leadership2.png",
        alt: "Kathmandu University Model United Nations participants at a group event.",
        caption: "Kathmandu University Model United Nations"
      }
    ],
    points: [
      "Participated in community service initiatives, including blood donation, dental check-up campaigns and dog sterilisation programmes around the university.",
      "Supported Rotary fellowship activities, student engagement programmes and university community events, including Comedy Nights."
    ]
  }
];
