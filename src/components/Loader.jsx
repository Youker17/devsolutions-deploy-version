import React from "react";
import { motion } from "framer-motion";


export default function Loader() {
    return (
        <div className="w-screen h-screen  fixed top-0 left-0 flex flex-row justify-center items-center">
            <motion.svg width="200" height="200" viewBox="0 0 3040 2504" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", repeatDelay: .5 }} d="M258.5 -0.0078125V2492.01" stroke="black" stroke-width="516" />
                <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", repeatDelay: .5 }} d="M1 258L1714 258" stroke="black" stroke-width="516" />
                <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", repeatDelay: .5 }} d="M1 2245H1714" stroke="black" stroke-width="516" />
                <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", repeatDelay: .5 }} d="M1971 515V1988.03" stroke="black" stroke-width="516" />
            </motion.svg>
        </div>
    )
}