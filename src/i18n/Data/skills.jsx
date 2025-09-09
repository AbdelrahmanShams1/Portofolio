import { Database, Globe, Server, Code } from "lucide-react";

export const skillsData = {
  ar: [
    {
      category: "Frontend",
      items: [
        "React.js",
        "Angular",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Bootstrap",
        "Material UI",
        "TypeScript",
      ],
      icon: <Globe className="w-6 h-6" />,
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", ".NET MVC", "Python", "C#"],
      icon: <Server className="w-6 h-6" />,
    },
    {
      category: "قواعد البيانات",
      items: ["MongoDB", "SQL Server", "Firebase Firestore"],
      icon: <Database className="w-6 h-6" />,
    },
    {
      category: "الأدوات",
      items: ["Git", "GitHub", "VS Code", "Postman", "npm", "Visual Studio"],
      icon: <Code className="w-6 h-6" />,
    },
  ],
  en: [
    {
      category: "Frontend",
      items: [
        "React.js",
        "Angular",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Bootstrap",
      ],
      icon: <Globe className="w-6 h-6" />,
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", ".NET MVC", "Python", "C#"],
      icon: <Server className="w-6 h-6" />,
    },
    {
      category: "Database",
      items: ["MongoDB", "SQL Server", "Firebase Firestore", "SQL"],
      icon: <Database className="w-6 h-6" />,
    },
    {
      category: "Tools",
      items: ["Git", "GitHub", "VS Code", "Postman", "npm", "Visual Studio"],
      icon: <Code className="w-6 h-6" />,
    },
  ],
};
