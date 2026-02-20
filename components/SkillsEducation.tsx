"use client";

import { motion } from "framer-motion";

const skillCategories = [
    {
        title: "Programming Languages",
        skills: ["Python", "Java", "JavaScript", "HTML5", "CSS3", "SQL"]
    },
    {
        title: "AI/ML Technologies",
        skills: ["Prompt Engineering", "GPT-4", "Claude", "LangChain", "NLP", "Generative AI", "TensorFlow", "Scikit-learn"]
    },
    {
        title: "Data Analytics",
        skills: ["Pandas", "NumPy", "Data Visualization", "Excel", "Statistical Analysis", "A/B Testing"]
    },
    {
        title: "Quality Assurance",
        skills: ["Test Case Design", "Defect Tracking and Reporting", "Regression Testing", "UAT", "BlackBox Testing", "Root Cause Analysis", "Test Documentation"]
    },
    {
        title: "Tools & Platforms",
        skills: ["JIRA", "Selenium", "Postman (API Testing)", "Git", "VS Code", "Jupyter Notebook", "API Integration", "Wix", "Google Analytics"]
    }
];

const education = [
    {
        degree: "Bachelor of Technology",
        major: "Computer Science and Engineering",
        institution: "Parul University",
        year: "2022 - 2026",
        description: "Relevant coursework: Data Structures, Machine Learning, Artificial Intelligence, Web Development, Android Development, Gen AI."
    },
    {
        degree: "Higher Secondary (12th)",
        major: "CBSE - PCM (Physics, Chemistry, Math)",
        institution: "Manan Vidya School, Ranchi, Jharkhand",
        year: "2020 - 2022",
        description: "Completed secondary education with a focus on science and mathematics fundamentals."
    }
];

export default function SkillsEducation() {
    return (
        <section className="py-24 px-6 relative z-10 bg-[#121212] overflow-hidden">
            {/* Top border fade */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent"></div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

                {/* Skills Section */}
                <div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-4xl md:text-5xl font-bold mb-10 tracking-tight"
                    >
                        Capabilities
                    </motion.h2>

                    <div className="space-y-8">
                        {skillCategories.map((category, catIndex) => (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                                viewport={{ once: true, margin: "-50px" }}
                            >
                                <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
                                <div className="flex flex-wrap gap-3">
                                    {category.skills.map((skill, index) => (
                                        <span
                                            key={skill}
                                            className="px-4 py-2 bg-neutral-900 border border-neutral-800 text-neutral-300 rounded-full text-sm font-medium hover:bg-neutral-800 hover:text-white transition-colors cursor-default"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Education Section */}
                <div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-4xl md:text-5xl font-bold mb-10 tracking-tight"
                    >
                        Education
                    </motion.h2>

                    <div className="space-y-8">
                        {education.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className="relative pl-8 border-l border-neutral-800"
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>

                                <h3 className="text-2xl font-bold text-white mb-1">{item.degree}</h3>
                                <h4 className="text-xl text-neutral-300 mb-2">{item.major}</h4>
                                <div className="flex flex-col sm:flex-row sm:items-center text-sm text-neutral-500 mb-4 gap-2 sm:gap-4">
                                    <span className="flex items-center gap-1">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                                        {item.institution}
                                    </span>
                                    <span className="hidden sm:block text-neutral-700">•</span>
                                    <span className="flex items-center gap-1 text-blue-400">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                        {item.year}
                                    </span>
                                </div>
                                <p className="text-neutral-400 leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
