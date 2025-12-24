import { 
  Code, 
  Brain, 
  Database, 
  Layout, 
  Terminal, 
  Cpu, 
  Award,
  Users
} from 'lucide-react';
import { 
  Education, 
  SkillCategory, 
  Experience, 
  Project, 
  Achievement, 
  Leadership 
} from './types';

export const PERSONAL_DETAILS = {
  name: "Adari Guna Kaushik",
  title: "AI Undergraduate & ML Enthusiast",
  location: "Visakhapatnam, Andhra Pradesh, India",
  email: "kaushikguna50@gmail.com",
  phone: "+91 93903 39847",
  linkedin: "https://linkedin.com/in/guna-kaushik-adari-979559266",
  github: "https://github.com/adarigunakaushik2905",
  about: "I am an enthusiastic Artificial Intelligence undergraduate with hands-on experience in Python, Machine Learning, and Time-Series Forecasting. I enjoy building end-to-end ML solutions including data preprocessing, feature engineering, model training, and evaluation. I am seeking an AI Intern role to work on real-world AI projects and improve my technical expertise."
};

export const EDUCATION_DATA: Education[] = [
  {
    degree: "B.Sc Artificial Intelligence",
    institution: "Aditya Degree College",
    year: "2023 – 2026",
    grade: "SGPA: 7.50"
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Sri Chaitanya Junior College",
    year: "2021 – 2023",
    grade: "71.6%"
  },
  {
    degree: "SSC",
    institution: "Dr. KKR Gowtham High School",
    year: "2020 – 2021",
    grade: "GPA: 9.5"
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: "Programming",
    items: ["Python", "C", "JavaScript (Beginner)"],
    icon: Code
  },
  {
    category: "Machine Learning",
    items: ["Linear Regression", "Logistic Regression", "Decision Trees", "Random Forest", "ARIMA", "Time-Series Forecasting"],
    icon: Brain
  },
  {
    category: "Deep Learning",
    items: ["TensorFlow (Beginner)", "PyTorch (Beginner)"],
    icon: Cpu
  },
  {
    category: "Data Tools",
    items: ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
    icon: Layout
  },
  {
    category: "Databases",
    items: ["SQL (MySQL, Oracle)"],
    icon: Database
  },
  {
    category: "Tools & OS",
    items: ["Git", "GitHub", "Jupyter Notebook", "Google Colab", "VS Code", "Linux / Ubuntu"],
    icon: Terminal
  }
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    role: "AI & Data Analytics Intern",
    company: "Edunet Foundation (AICTE & Shell)",
    duration: "April 2025",
    description: [
      "Built end-to-end ML pipelines",
      "Developed regression and ARIMA models with 15% accuracy improvement",
      "Performed EDA and visualizations",
      "Used Git for reproducible workflows"
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    title: "Wind Power Generation Forecasting",
    description: [
      "Analyzed 3+ years of wind power data",
      "Built ARIMA forecasting model",
      "Performed seasonal decomposition and trend analysis"
    ],
    metrics: "Achieved RMSE of 12.3 MW",
    techStack: ["Python", "ARIMA", "Pandas", "Matplotlib"]
  },
  {
    title: "QR Code Generator",
    description: [
      "Developed a Python-based utility to generate customized QR codes",
      "Integrated image processing libraries to handle various data inputs",
      "Designed for efficiency and ease of use in generating static codes"
    ],
    techStack: ["Python", "QRCode", "Pillow"]
  },
  {
    title: "Basic Calculator",
    description: [
      "Created a responsive web-based calculator application",
      "Implemented arithmetic operations and error handling logic",
      "Designed a modern, user-friendly interface using pure CSS"
    ],
    techStack: ["HTML", "CSS", "JavaScript"]
  }
];

export const ACHIEVEMENTS_DATA: Achievement[] = [
  {
    title: "First Prize – RPA Workshop",
    year: "2025",
    icon: Award
  },
  {
    title: "Participant – Vismayah Data Science Competition",
    year: "2025",
    icon: Award
  },
  {
    title: "Participated in DevOps & Web Technology Hackathons",
    year: "2025",
    icon: Award
  }
];

export const LEADERSHIP_DATA: Leadership[] = [
  {
    role: "Event Organizer",
    organization: "AI & Data Science Club, Aditya Degree College",
    description: [
      "Organized “AI UNPLUGGED” with 80+ participants",
      "Led “VISMAYAH” data science event",
      "Delivered sessions on Python, EDA, and ML basics"
    ]
  }
];