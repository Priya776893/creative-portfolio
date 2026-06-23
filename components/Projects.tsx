"use client";

import { motion } from "framer-motion";

const projects = [
    {
        id: 1,
        title: "Competitor Pricing Optimizer",
        category: "AI/ML",
        description: "An AI tool that optimizes pricing by scraping rival data, clustering products, and predicting ideal price points using ML clustering and regression models.",
        image: "/pricing_optimizer.png",
        link: "https://github.com/Priya776893/competitor-pricing-optimizer"
    },
    {
        id: 2,
        title: "AI Chatbot Persona",
        category: "AI",
        description: "A specialized Travel Guide persona developed using advanced prompt engineering and Landbot integration.",
        image: "/chatbot_persona.png",
        link: "https://github.com/Priya776893"
    },
    {
        id: 3,
        title: "Handwritten Digit Recognition",
        category: "Machine Learning",
        description: "A CNN model achieving 99.3% accuracy on digit recognition, featuring a robust preprocessing pipeline to handle noisy real-world images.",
        image: "/digit_recognition.png",
        link: "https://github.com/Priya776893"
    },
    {
        id: 4,
        title: "Creative Website",
        category: "Web Design",
        description: "Built a premium, highly interactive product landing page that goes beyond the standard web experience. I chose to redesign the digital experience for \"Smoodh\" flavored milk, focusing on high-performance animations and deep user engagement.",
        image: "/smoodh_website.png",
        link: "https://github.com/Priya776893/smoodh-website"
    },
];

export default function Projects() {
    return (
        <section className="min-h-screen py-24 px-6 relative z-10 bg-[#121212]">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl font-bold mb-16 tracking-tight"
                >
                    Selected Works
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <motion.a
                            key={project.id}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: project.id * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card p-8 rounded-2xl group cursor-pointer hover:bg-white/10 transition-colors duration-300 relative overflow-hidden block"
                        >
                            {/* Glow Effect */}
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <div className="h-64 bg-neutral-800/50 rounded-xl mb-6 overflow-hidden relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            <div className="flex justify-between items-end">
                                <div>
                                    <span className="text-sm font-medium text-blue-400 uppercase tracking-wider mb-2 block">{project.category}</span>
                                    <h3 className="text-3xl font-bold">{project.title}</h3>
                                </div>
                                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="7" y1="17" x2="17" y2="7"></line>
                                        <polyline points="7 7 17 7 17 17"></polyline>
                                    </svg>
                                </div>
                            </div>
                            <p className="mt-4 text-gray-400 max-w-md">{project.description}</p>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
