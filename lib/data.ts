export const profile = {
  name: "Sachi Prasad",
  role: "Computer Science Engineer · Cyber Security",
  tagline:
    "I build secure, data-driven applications — from automation scripts that save hours of manual work to dashboards that turn raw numbers into decisions.",
  location: "Delhi NCR, India",
  email: "sachiprasad9099@gmail.com",
  phone: "+91-9693368892",
  linkedin: "https://linkedin.com/in/sachiprasad",
  github: "https://github.com/SachiPrasad",
  summary:
    "Computer Science undergraduate specializing in Cyber Security, with hands-on experience across Python development, data analytics, and machine learning. I've automated manufacturing workflows at scale, trained models that predict employee attrition, and shipped a full-stack AI exam-proctoring system. I care about clean pipelines, readable code, and dashboards people actually use.",
};

export const skills = [
  {
    category: "Languages",
    items: ["Python", "SQL", "JavaScript", "C#", "HTML", "CSS"],
  },
  {
    category: "Data & ML",
    items: [
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Feature Engineering",
      "Exploratory Data Analysis",
      "Machine Learning",
      "NLP",
    ],
  },
  {
    category: "Visualization",
    items: ["Tableau", "Power BI", "Streamlit"],
  },
  {
    category: "Databases",
    items: ["MySQL", "SQLite"],
  },
  {
    category: "Tooling",
    items: ["Git", "GitHub", "VS Code", "REST APIs", "ETL Pipelines"],
  },
];

export const experience = [
  {
    company: "Tata Steel Pvt Ltd",
    role: "Python Developer & Data Analysis Intern",
    location: "Jamshedpur, Jharkhand",
    period: "May 2024 — Jul 2024",
    points: [
      "Engineered Python automation scripts to process manufacturing datasets of 100K+ records, cutting manual processing time by 60%.",
      "Conducted exploratory data analysis on production metrics to identify operational bottlenecks, driving a 15% improvement in resource allocation efficiency.",
      "Built interactive Tableau dashboards to visualize real-time production KPIs, quality-control metrics, and inventory levels for senior leadership review.",
      "Implemented Pandas-based data validation and cleaning pipelines, achieving 99% data accuracy across manufacturing operations.",
    ],
  },
];

export const projects = [
  {
    title: "Employee Attrition Prediction & HR Analytics Dashboard",
    description:
      "An end-to-end HR analytics solution combining Python and SQL to analyze workforce trends and support data-driven retention strategy.",
    points: [
      "Performed exploratory data analysis on 1,470 employee records, uncovering key attrition drivers including overtime, monthly income, job satisfaction, age, and tenure.",
      "Trained and optimized a Random Forest model achieving 85% accuracy, improving attrition-risk identification via feature importance analysis.",
      "Built an interactive Streamlit dashboard with workforce KPIs, attrition risk prediction, SQL-based analytics, and a what-if simulation tool.",
    ],
    stack: ["Python", "SQL", "Scikit-learn", "Streamlit", "Tableau"],
    github: "https://github.com/SachiPrasad",
    demo: "#",
    metric: "85% accuracy",
  },
  {
    title: "ExamGuard AI Pro — Online Exam Integrity System",
    description:
      "A real-time AI proctoring system that monitors candidates via webcam and flags integrity violations during live exams.",
    points: [
      "Built real-time face monitoring with face-api.js, flagging out-of-frame and multi-person violations.",
      "Implemented tab-switching and window-focus detection alongside a dynamic exam engine for MCQ delivery and timed sessions.",
      "Engineered a full-stack Node.js/Express/SQLite backend generating a candidate integrity score and digital certificate.",
    ],
    stack: ["JavaScript", "Node.js", "Express", "face-api.js", "SQLite"],
    github: "https://github.com/SachiPrasad",
    demo: null,
    metric: "Real-time proctoring",
  },
  {
    title: "Grammar Engine — NLP Grammar Correction Tool",
    description:
      "A Python-based NLP engine that detects grammatical errors and generates contextual corrections with explanations.",
    points: [
      "Detects grammatical errors and generates contextual corrections with explanations.",
      "Paired with a real-time scoring system for language-proficiency tracking.",
    ],
    stack: ["Python", "NLP"],
    github: "https://github.com/SachiPrasad",
    demo: null,
    metric: "Real-time scoring",
  },
  {
    title: "Travel Planner Web Application",
    description:
      "A route-optimization web app implementing Dijkstra's Shortest Path Algorithm for fast, large-scale graph rendering.",
    points: [
      "Reduced computed travel time by 30% through optimized pathfinding.",
      "Renders 1000+ node graphs with sub-second response time.",
    ],
    stack: ["HTML", "CSS", "JavaScript", "DSA"],
    github: "https://github.com/SachiPrasad",
    demo: null,
    metric: "Sub-second on 1000+ nodes",
  },
];

export const education = [
  {
    school: "SRM Institute of Science and Technology, Delhi NCR Campus",
    degree: "B.Tech, Computer Science Engineering (Cyber Security)",
    period: "2023 — 2027",
    detail: "CGPA: 9.20 / 10.0",
  },
  {
    school: "D.B.M.S, Jamshedpur, Jharkhand",
    degree: "Senior Secondary (XII) & Secondary (X), CBSE",
    period: "2021 — 2023",
    detail: "XII: 82% · X: 89%",
  },
];

export const coursework = [
  "Data Structures & Algorithms",
  "DBMS",
  "Operating Systems",
  "Computer Networks",
  "Machine Learning",
  "Artificial Intelligence",
];

export const achievements = [
  {
    title: "Discipline Head, Rubaroo SRM IST",
    period: "Jan 2025",
    detail:
      "Led 15+ volunteers coordinating discipline and logistics for 2,000+ participants at the flagship cultural fest.",
  },
  {
    title: "Vice President, Jyoti Club, D.B.M.S, Jamshedpur",
    period: "2021 — 2023",
    detail:
      "Spearheaded rural development initiatives; raised ₹50,000+ for community healthcare.",
  },
  {
    title: "Sports Captain, D.B.M.S, Jamshedpur",
    period: "2021 — 2023",
    detail:
      "Organized the district-level Inter-School Volleyball Tournament; led the team to district finals.",
  },
];
