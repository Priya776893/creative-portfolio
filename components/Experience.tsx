"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        role: "Artificial Intelligence Intern",
        company: "EDXcellence LLP",
        location: "Bangalore, India",
        duration: "January 2026 - April 2026",
        description: "Developed a Competitor Pricing Optimizer, demonstrating the full ML lifecycle: automated competitive data collection, feature engineering, model training, and a polished Streamlit UI with Plotly visualizations — all shipped to production without a dedicated DevOps team."
    },
    {
        role: "Prompt Engineering Intern",
        company: "Future Interns",
        location: "Remote",
        duration: "Dec 2025 - January 2026",
        description: "Designed a specialized chatbot Travel Guide persona (Mia) using Landbot, Notion, and Perplexity. Developed a repeatable persona formula (Role + Tone + Flow + Fallbacks) applicable to any chatbot project, significantly reducing future persona design time."
    }
];

export default function Experience() {
    return (
        <section className="py-24 px-6 relative z-10 bg-[#121212] overflow-hidden">
            {/* Top border fade */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent"></div>

            <div className="max-w-7xl mx-auto">

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-4xl md:text-5xl font-bold mb-16 tracking-tight text-center"
                >
                    Experience
                </motion.h2>

                <div className="relative border-l border-neutral-800 ml-4 md:ml-0 md:absolute md:left-1/2 md:-translate-x-1/2 h-full"></div>

                <div className="space-y-16">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className={`relative flex flex-col md:flex-row items-center justify-between w-full ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Center Timeline Dot */}
                            <div className="absolute left-[-21px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.6)] z-10"></div>

                            {/* Empty space for symmetric layout on desktop */}
                            <div className="hidden md:block w-5/12"></div>

                            {/* Content Box */}
                            <div className="w-full md:w-5/12 pl-8 md:pl-0">
                                <div className={`p-6 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-colors ${index % 2 === 0 ? "md:text-left" : "md:text-right"
                                    }`}>
                                    <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                                    <h4 className="text-xl text-blue-400 font-medium mb-3">{exp.company}</h4>

                                    <div className={`flex flex-wrap gap-4 text-sm text-neutral-500 mb-4 ${index % 2 === 0 ? "justify-start" : "md:justify-end"
                                        }`}>
                                        <span className="flex items-center gap-1">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                            {exp.duration}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                            {exp.location}
                                        </span>
                                    </div>

                                    <p className="text-neutral-400 leading-relaxed">
                                        {exp.description}
                                    </p>
                                </div>
                            </div>

                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
