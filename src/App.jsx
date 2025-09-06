import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { experienceData } from "./i18n/Data/experience";
import { projectsData } from "./i18n/Data/projects";
import { skillsData } from "./i18n/Data/skills";
import {
  ExternalLink,
  Github,
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Code,
  Users,
  ChevronDown,
  Menu,
  X,
  Languages,
  User,
  Briefcase,
  FolderOpen,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

const contactData = {
  email: "abdelrahmanshamseldine@gmail.com",
  phone: "+20 121 1129 151",
  github: "https://github.com/AbdelrahmanShams1",
  linkedin: "https://linkedin.com/in/abdelrahman-shams-eldine",
};

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const { t, i18n: i18nInstance } = useTranslation();
  const currentLang = i18nInstance.language;
  const isArabic = currentLang === "ar";

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      const sections = [
        "home",
        "about",
        "experience",
        "projects",
        "skills",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
    document.documentElement.lang = currentLang;
  }, [isArabic, currentLang]);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const changeLanguage = () => {
    const newLang = currentLang === "ar" ? "en" : "ar";
    i18nInstance.changeLanguage(newLang);
  };

  const navItems = [
    { id: "home", label: t("nav.home"), icon: <User className="w-4 h-4" /> },
    { id: "about", label: t("nav.about"), icon: <User className="w-4 h-4" /> },
    {
      id: "experience",
      label: t("nav.experience"),
      icon: <Briefcase className="w-4 h-4" />,
    },
    {
      id: "projects",
      label: t("nav.projects"),
      icon: <FolderOpen className="w-4 h-4" />,
    },
    {
      id: "skills",
      label: t("nav.skills"),
      icon: <Code className="w-4 h-4" />,
    },
    {
      id: "contact",
      label: t("nav.contact"),
      icon: <MessageCircle className="w-4 h-4" />,
    },
  ];

  // الحصول على البيانات بناءً على اللغة الحالية
  const experiences = experienceData[currentLang] || [];
  const projects = projectsData[currentLang] || [];
  const skills = skillsData[currentLang] || [];

  return (
    <div
      className={`min-h-screen bg-gray-950 text-white ${
        isArabic ? "font-arabic" : "font-english"
      } overflow-x-hidden`}
    >
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrollY > 50
            ? "bg-gray-900/95 backdrop-blur-lg border-b border-gray-800"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <div
              className={`flex items-center ${
                isArabic ? "space-x-reverse space-x-3" : "space-x-3"
              }`}
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl blur opacity-30 animate-pulse"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {isArabic ? "عبدالرحمن شمس الدين" : "Abdelrahman Shams Eldine"}
              </span>
            </div>

            <div
              className={`hidden lg:flex items-center ${
                isArabic ? " space-x-8" : "space-x-8"
              }`}
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center ${
                    isArabic ? " space-x-2" : "space-x-2"
                  } text-sm font-medium transition-all duration-300 hover:text-blue-400 relative group ${
                    activeSection === item.id
                      ? "text-blue-400"
                      : "text-gray-300"
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {activeSection === item.id && (
                    <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                  )}
                </button>
              ))}

              <button
                onClick={changeLanguage}
                className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-300 hover:text-blue-400 border border-gray-700 hover:border-blue-400 rounded-lg transition-all duration-300"
              >
                <Languages className="w-4 h-4" />
                <span>{isArabic ? "EN" : "AR"}</span>
              </button>
            </div>

            <div
              className={`flex items-center lg:hidden ${
                isArabic ? "space-x-reverse space-x-3" : "space-x-3"
              }`}
            >
              <button
                onClick={changeLanguage}
                className={`text-gray-300 hover:text-blue-400 transition-colors duration-300 ${
                  isArabic ? "ml-4" : "mr-4"
                }`}
              >
                <Languages className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="lg:hidden bg-gray-900/95 backdrop-blur-lg rounded-2xl mt-2 p-6 border border-gray-800">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center ${
                    isArabic
                      ? "space-x-reverse space-x-3 justify-end"
                      : "space-x-3"
                  } w-full py-3 text-sm font-medium transition-colors duration-300 hover:text-blue-400 ${
                    activeSection === item.id
                      ? "text-blue-400"
                      : "text-gray-300"
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center px-6 pt-20">
        <div className="max-w-7xl mx-auto w-full">
          <div
            className={`grid lg:grid-cols-2 gap-12 items-center ${
              isArabic ? "lg:grid-cols-2" : ""
            }`}
          >
            <div
              className={`${
                isArabic ? "lg:order-2 text-right" : "lg:order-1 text-left"
              } space-y-8`}
            >
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium">
                  <div
                    className={`w-2 h-2 bg-blue-400 rounded-full ${
                      !isArabic ? "mr-2" : "ml-2"
                    } animate-pulse`}
                  ></div>
                  {isArabic
                    ? "متاح لمشاريع جديدة"
                    : "Available for new projects"}
                </div>

                <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent leading-tight">
                  {t("hero.name").split(" ")[0]}
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    {t("hero.name").split(" ")[1]}{" "}
                    {t("hero.name").split(" ")[2]}
                  </span>
                </h1>

                <p className="text-2xl text-blue-400 font-medium">
                  {t("hero.title")}
                </p>

                <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
                  {t("hero.description")}
                </p>
              </div>

              <div
                className={`flex flex-wrap gap-4 ${
                  isArabic ? "justify-end" : "justify-start"
                }`}
              >
                <a
                  href={`mailto:${contactData.email}`}
                  className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  <Mail className="w-5 h-5" />
                  <span>{t("hero.contactMe")}</span>
                </a>

                <a
                  href="/CV/Abdelrahman_Shams_Eldin_CV.pdf"
                  download="Abdelrahman_Shams_Eldin_CV.pdf"
                  className="flex items-center space-x-2 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 hover:border-blue-500 px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  <FolderOpen className="w-5 h-5" />
                  <span>{t("hero.downloadCV")}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>

              <div
                className={`flex ${
                  isArabic ? " space-x-6 justify-end" : "space-x-6"
                } pt-4`}
              >
                <a
                  href={contactData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href={contactData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div
              className={`${
                isArabic ? "lg:order-1" : "lg:order-2"
              } flex justify-center`}
            >
              <div className="relative">
                <div className="w-80 h-80 relative">
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20 rounded-full animate-spin"
                    style={{ animationDuration: "20s" }}
                  ></div>
                  <div
                    className="absolute inset-4 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full animate-spin"
                    style={{
                      animationDuration: "15s",
                      animationDirection: "reverse",
                    }}
                  ></div>

                  <div className="absolute inset-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center shadow-2xl">
                    <div className="absolute inset-2 bg-gray-900 rounded-full flex items-center justify-center">
                      <img
                        src="/WhatsApp Image 2025-08-24 at 05.29.56_60be6a3c.jpg"
                        alt="Avatar"
                        className="w-full h-full object-cover rounded-full border-4 border-gray-900 shadow-lg"
                      />
                    </div>
                  </div>

                  <div
                    className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-bounce"
                    style={{ animationDelay: "0s" }}
                  ></div>
                  <div
                    className="absolute -bottom-4 -left-4 w-6 h-6 bg-cyan-500 rounded-full animate-bounce"
                    style={{ animationDelay: "1s" }}
                  ></div>
                  <div
                    className="absolute top-1/2 -right-6 w-4 h-4 bg-blue-400 rounded-full animate-bounce"
                    style={{ animationDelay: "2s" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a href="#about" aria-label="Scroll Down">
              <ChevronDown className="w-8 h-8 text-gray-400 hover:text-white transition-colors duration-300" />
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 leading-normal bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {t("about.title")}
            </h2>

            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-blue-500/50 transition-all duration-500 transform hover:scale-[1.02]">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">
                {t("about.whoAmI")}
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                {t("about.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="py-20 px-6 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 leading-normal bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {t("experience.title")}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-blue-500/50 transition-all duration-500 transform hover:scale-[1.02] group"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <div className="flex items-center space-x-2 text-gray-400">
                      <Briefcase className="w-4 h-4" />
                      <span>{exp.company}</span>
                      <span>•</span>
                      <span className="text-blue-400">{exp.type}</span>
                      <span>•</span>
                      <span className="text-gray-400">{exp.period}</span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-3">
                  {exp.description.map((desc, i) => (
                    <li
                      key={i}
                      className="flex items-start space-x-3 text-gray-300"
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 leading-normal bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {t("projects.title")}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all duration-500 transform hover:scale-105 overflow-hidden group"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-blue-400 mb-3">
                      Key Features:
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start space-x-2 text-sm text-gray-300"
                        >
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-medium rounded-full border border-blue-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.demoLink}
                      className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm font-medium">Live Demo</span>
                    </a>
                    <a
                      href={project.githubLink}
                      className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm font-medium">Source</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 px-6 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 leading-normal bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {t("skills.title")}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {skills.map((category, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-blue-500/50 transition-all duration-500 transform hover:scale-105 group"
              >
                <div className="flex items-center mb-6">
                  <div
                    className={`p-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl ${
                      !isArabic ? "mr-4" : "ml-4"
                    } group-hover:scale-110 transition-transform duration-300`}
                  >
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                    {category.category}
                  </h3>
                </div>
                <div className="space-y-3">
                  {category.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors duration-300"
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
            <h3 className="text-2xl font-bold mb-6 text-white flex items-center">
              <Languages
                className={`w-6 h-6 ${
                  isArabic ? "ml-4" : "mr-4"
                } text-blue-400`}
              />
              {t("skills.languages")}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">
                  {t("skills.arabicNative")}
                </span>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-3 h-3 bg-blue-400 rounded-full"
                    ></div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">
                  {t("skills.englishProfessional")}
                </span>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-3 h-3 rounded-full ${
                        i < 4 ? "bg-cyan-400" : "bg-gray-600"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 leading-normal bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {t("contact.title")}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-12 border border-gray-800 text-center">
              <h3 className="text-3xl font-bold mb-6 text-white">
                {t("contact.readyToStart")}
              </h3>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                {t("contact.helpYou")}
              </p>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <a
                  href={`mailto:${contactData.email}`}
                  className="group bg-gray-800/50 hover:bg-blue-600/10 rounded-2xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="p-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl inline-flex mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-8 h-8 text-blue-400" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">
                    {t("contact.email")}
                  </h4>
                  <p className="text-gray-400 text-sm break-all">
                    {contactData.email}
                  </p>
                </a>

                <a
                  href={`tel:${contactData.phone}`}
                  className="group bg-gray-800/50 hover:bg-cyan-600/10 rounded-2xl p-8 border border-gray-700 hover:border-cyan-500 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="p-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl inline-flex mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">
                    {t("contact.phone")}
                  </h4>
                  <p className="text-gray-400 text-sm">{contactData.phone}</p>
                </a>

                <a
                  href={contactData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gray-800/50 hover:bg-blue-600/10 rounded-2xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="p-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl inline-flex mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Linkedin className="w-8 h-8 text-blue-400" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">
                    {t("contact.linkedin")}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {t("contact.professionalConnect")}
                  </p>
                </a>
              </div>

              <a
                href={`mailto:${contactData.email}`}
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-8 py-4 rounded-xl text-white font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >
                <Mail className="w-5 h-5" />
                <span>{t("contact.startConversation")}</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 bg-gray-900/50 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4">
            <div className="flex justify-center space-x-6">
              <a
                href={contactData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href={contactData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href={`mailto:${contactData.email}`}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
            <div className="space-y-2">
              <p className="text-gray-400 text-sm">{t("footer.copyright")}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
