export const projects = [
  {
    slug: "picogrid-energy-monitoring",
    number: "01",
    title: "PicoGrid Energy Monitoring System",
    category: "Hybrid energy · IoT · Software",
    year: "Final-year project",
    image: "/images/picogrid.jpeg",
    gallery: [
      {
        src: "/images/picogrid.jpeg",
        alt: "PicoGrid hybrid energy monitoring prototype and dashboard.",
        caption: "Hybrid energy monitoring prototype"
      },
      {
        src: "/images/evmonitor.jpeg",
        alt: "PicoGrid prototype wiring, sensors and display hardware.",
        caption: "Sensor and display hardware"
      }
    ],
    imageFit: "contain",
    summary: "A hybrid energy monitoring project bringing together solar PV, battery storage and grid supply through embedded sensing, simulation and a software monitoring platform.",
    overview: "The project explored how a small-scale hybrid energy system could monitor and manage energy flow between solar PV, battery storage and grid supply. It combined a physical monitoring prototype with a separate software-based simulation platform.",
    motivation: "I wanted to understand how multiple energy sources could be monitored and coordinated, and how data from electrical systems could become useful information for operation and analysis.",
    contribution: [
      "Programmed the ESP32 and integrated voltage and current sensors in the physical prototype.",
      "Implemented battery state-of-charge estimation using coulomb counting.",
      "Worked on power and energy calculations.",
      "Developed MATLAB/Simulink models and simulations of the hybrid energy system.",
      "Developed the software monitoring platform from the project GitHub repository, including its data and dashboard components."
    ],
    stack: ["ESP32", "C/C++", "Sensors", "Coulomb counting", "MATLAB/Simulink", "Python", "FastAPI", "React", "TypeScript", "PostgreSQL"],
    results: [
      "Built and tested a small-scale physical monitoring prototype using an ESP32, sensors and display components.",
      "Modelled the hybrid energy system and its switching logic in MATLAB/Simulink.",
      "Created a separate software platform for simulated solar and battery telemetry, storage and energy analytics."
    ],
    note: "The physical prototype and software platform are distinct parts of the project. The software platform uses simulated telemetry rather than live measurements from the ESP32 prototype.",
    github: "https://github.com/Sarthakneu2/Picogrid-Energy-Monitoring",
    imageAlt: "PicoGrid energy monitoring prototype with its sensor and display hardware."
  },
  {
    slug: "agrivoltaics",
    number: "02",
    title: "Controlled Environment Farming & Agrivoltaics",
    category: "Renewable energy · Agriculture · Research",
    year: "Research collaboration",
    image: "/images/agrivoltaicsiot.jpeg",
    gallery: [
      {
        src: "/images/agrivoltaicsiot.jpeg",
        alt: "Researchers tending crops in a controlled-environment growing area.",
        caption: "Controlled-environment agriculture fieldwork"
      },
      {
        src: "/images/agrivoltaics.png",
        alt: "ESP32-based crop-monitoring controller board with labeled sensor connections.",
        caption: "IoT monitoring prototype hardware",
        fit: "contain"
      }
    ],
    imageAlt: "Researchers tending crops in a controlled-environment growing area.",
    summary: "Research and pilot-system development exploring crop production beneath solar PV and the technical and financial feasibility of agrivoltaics.",
    overview: "With support from the Nepal Technology Innovation Center (NTIC), this research collaboration explored a pilot approach to combining solar PV generation with controlled-environment crop production. The work considered electrical design, agricultural resource use and feasibility.",
    motivation: "The objective was to assess how solar generation and controlled-environment farming could be planned together, including implications for energy yield, land and water use, and pilot-system feasibility.",
    contribution: [
      "Contributed to technical and financial feasibility research.",
      "Explored land equivalent ratio (LER), water consumption and IoT integration.",
      "Worked on electrical design and configuration of a pilot system growing crops beneath solar PV.",
      "Contributed to system sizing, structural layout planning and energy-yield estimation.",
      "Participated in field monitoring of generation performance."
    ],
    stack: ["Solar PV", "Electrical system design", "System sizing", "Energy-yield estimation", "IoT", "Feasibility analysis", "LER"],
    results: [
      "Contributed to the electrical design and configuration of an agrivoltaics pilot system.",
      "Examined technical, resource-use and financial considerations for the concept."
    ],
    note: "The research was conducted in collaboration with NTIC, with academic supervision from Prof. Dr. Sujith Ravi of Temple University."
  },
  {
    slug: "ev-charging-monitoring",
    number: "03",
    title: "EV Charging Monitoring System",
    category: "Electrical engineering · Embedded systems · IoT",
    year: "Third-year project",
    image: "/images/ev-monitor.jpeg",
    imageAlt: "Electrical measurements and monitoring hardware for an EV charging prototype.",
    summary: "A small-scale charging and monitoring prototype combining electrical measurements, Arduino programming and a web dashboard.",
    overview: "As electric vehicles began gaining attention in Nepal, I became interested in the electrical engineering behind charging infrastructure. The original idea of building a complete EV charger was narrowed with our supervisor into a more achievable monitoring-focused project.",
    motivation: "The project was an opportunity to connect electrical hardware, embedded programming and software into one working prototype.",
    contribution: [
      "Focused primarily on Arduino programming, sensor calibration and the website dashboard.",
      "Contributed to the charger circuit and battery balancer hardware.",
      "Worked on displaying terminal voltage, charging current, power, energy, state of charge and estimated time to charge."
    ],
    stack: ["Arduino", "ZMPT101B", "ACS712", "LCD", "Voltage and current sensing", "Web dashboard", "Battery charging circuit"],
    results: [
      "Developed a small-scale monitoring and charging prototype.",
      "Displayed key electrical and charging parameters through a dashboard."
    ],
    note: "This was a small-scale academic prototype, not a commercial EV charging station. State-of-charge and time-to-charge values were estimates rather than direct measurements."
  },
  {
    slug: "smart-assistive-stick",
    number: "04",
    title: "Smart Assistive Stick",
    category: "Electronics · Embedded systems · Accessibility",
    year: "First-year project",
    image: "/images/smartstick.webp",
    imageAlt: "Smart assistive stick prototype with obstacle sensors and alert hardware.",
    summary: "An assistive prototype combining obstacle alerts, vibration and buzzer feedback, emergency notification and location sharing.",
    overview: "The project began with a simple question: how could technology help people with visual impairments navigate their surroundings with greater independence?",
    motivation: "We wanted to explore how low-cost sensors and connected electronics could provide useful feedback and a way to notify family members in an emergency.",
    contribution: [
      "Worked on a prototype using an IR sensor to detect nearby obstacles.",
      "Used a vibration motor and buzzer to provide alerts.",
      "Integrated an emergency switch that sends an internet notification to family members.",
      "Used GPS to share location coordinates for demonstration and tracking."
    ],
    stack: ["ESP32", "IR sensor", "Vibration motor", "Buzzer", "Wi-Fi", "GSM", "GPS"],
    results: [
      "Demonstrated obstacle alerts through vibration and sound.",
      "Demonstrated emergency notification and location sharing."
    ],
    note: "This was a university prototype and demonstration, not a deployed assistive product."
  },
  {
    slug: "digital-tachometer",
    number: "05",
    title: "Digital Tachometer",
    category: "Digital electronics · Circuit design",
    year: "Second-year project",
    image: "/images/Tachometer.png",
    imageFit: "contain",
    imageAlt: "Digital tachometer circuit schematic with sensor and seven-segment displays.",
    summary: "A conventional-electronics tachometer designed to measure the rotational speed of a shaft and display RPM on a three-digit seven-segment display.",
    overview: "Our course required us to build the project without Arduino, ESP32 or programmable microcontrollers. We designed a digital tachometer using conventional electronic components.",
    motivation: "The constraint encouraged us to understand timing circuits, counters, logic gates and display drivers at component level.",
    contribution: [
      "Designed the circuit and calculated component values.",
      "Designed the rotating shaft and mechanical supporting structure.",
      "Simulated the circuit and developed a PCB layout in Proteus.",
      "Contributed to circuit integration and debugging."
    ],
    stack: ["NE555", "CD4026", "IR transmitter/receiver", "7408 AND gate", "7404 NOT gate", "Seven-segment display", "Proteus"],
    results: [
      "Designed a three-digit display system for rotational speed measurement.",
      "Developed circuit simulation and PCB layout as part of the project."
    ],
    note: "The project report describes a design range up to 999 RPM; this is not presented as a verified tested operating range."
  },
  {
    slug: "quantitative-research",
    number: "06",
    title: "Quantitative Research & Strategy Development",
    category: "Python · Statistics · Quantitative finance",
    year: "Quanta Investment",
    image: "/images/quanta-research.png",
    imageAlt: "Quanta Investment quantitative analysis presentation.",
    summary: "Python-based market research, statistical analysis, strategy implementation and backtesting developed through Quanta Investment.",
    overview: "I co-founded Quanta Investment with a university colleague who brought a computer science and programming background. We shared a long-standing interest in investing and financial markets and combined our skills to explore quantitative research.",
    motivation: "We wanted to apply programming, statistics and analytical methods to understand relationships across markets and investigate systematic investment approaches.",
    contribution: [
      "Analysed and processed data across capital markets, insurance and commodities.",
      "Used time-series analysis, regression and correlation to investigate relationships between market variables.",
      "Researched potential mean-reversion opportunities.",
      "Implemented and backtested quantitative trading strategies in Python.",
      "Contributed to portfolio allocation and risk modelling.",
      "Worked with the initiative as it progressed from research and backtesting to deploying capital and making live investment decisions."
    ],
    stack: ["Python", "Pandas", "NumPy", "SciPy", "Statsmodels", "Matplotlib", "Time-series analysis", "Backtesting"],
    results: [
      "Built practical experience in statistical market research and Python-based strategy development.",
      "Worked across research, historical backtesting and later live investment decisions."
    ],
    note: "No investment-return or strategy-performance figures are reported. The work described here covers research, backtesting and subsequent investment decisions."
  }
];
