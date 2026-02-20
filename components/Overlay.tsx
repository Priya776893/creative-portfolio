"use client";

import { useTransform, motion, MotionValue } from "framer-motion";

export default function Overlay({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
    // Opacity for each section based on scroll progress
    // Section 1: Fade in 0-5%, stay until 15%, fade out 20%
    const opacity1 = useTransform(scrollYProgress, [0.05, 0.1, 0.25, 0.3], [0, 1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.3], [0, -50]);

    // Section 2: Fade in 30%, start fading out 45%
    const opacity2 = useTransform(scrollYProgress, [0.35, 0.4, 0.55, 0.6], [0, 1, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.3, 0.6], [50, -50]);

    // Section 3: Fade in 60%, fade out 80%
    const opacity3 = useTransform(scrollYProgress, [0.65, 0.7, 0.85, 0.9], [0, 1, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.6, 0.9], [50, -50]);

    return (
        <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-center items-center text-white">
            {/* Section 1 */}
            <motion.div
                style={{ opacity: opacity1, y: y1 }}
                className="absolute text-center px-4"
            >
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">Priya Prasad</h1>
                <p className="text-2xl mt-4 font-light text-gray-300">Creative Developer.</p>
            </motion.div>

            {/* Section 2 */}
            <motion.div
                style={{ opacity: opacity2, y: y2 }}
                className="absolute left-4 md:left-[10%] max-w-lg px-4"
            >
                <h2 className="text-4xl md:text-6xl font-bold leading-tight">I build digital experiences.</h2>
                <p className="mt-4 text-xl text-gray-400">Crafting immersive web applications with cutting-edge technology.</p>
            </motion.div>

            {/* Section 3 */}
            <motion.div
                style={{ opacity: opacity3, y: y3 }}
                className="absolute right-4 md:right-[10%] text-right max-w-lg px-4"
            >
                <h2 className="text-4xl md:text-6xl font-bold leading-tight">Bridging design & engineering.</h2>
                <p className="mt-4 text-xl text-gray-400">Where aesthetics meet performance.</p>
            </motion.div>
        </div>
    );
}
