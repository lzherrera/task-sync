'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SignInButton, SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import Link from "next/link";

export default function AboutPage() {
    const { isSignedIn } = useUser();
    const teamMembers = [
        { name: 'Ryeleigh Avila', role: 'Developer' },
        { name: 'Khoi Le', role: 'Developer' },
        { name: 'Anthony Cecchini', role: 'Developer' },
        { name: 'Logan Herrera', role: 'Developer' }
    ];

    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <div className="min-h-screen bg-[#F9E9EC] py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial="initial"
                    animate="animate"
                    variants={fadeIn}
                >
                    <h1 className="text-4xl font-bold text-[#577590] mb-4">About TaskSync</h1>
                    <div className="h-1 w-24 bg-[#F2A541] mx-auto rounded-full mb-8"></div>
                    <p className="text-lg text-[#577590]/80 max-w-2xl mx-auto">
                        Streamlining task management for teams and individuals with intuitive, powerful tools.
                    </p>
                </motion.div>
                <motion.div
                    className="bg-white rounded-xl shadow-lg p-8 mb-12"
                    initial="initial"
                    animate="animate"
                    variants={fadeIn}
                >
                    <h2 className="text-2xl font-bold text-[#577590] mb-6 flex items-center">
                        <svg className="w-6 h-6 mr-2 text-[#F2A541]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        Our Story
                    </h2>

                    <div className="space-y-6 text-[#577590]/90">
                        <p>
                            TaskSync originated as a senior capstone project, born from our passion to create a tool that genuinely enhances productivity and team collaboration. Initially known as "Agenda Ninja" during our brainstorming sessions, we ultimately opted for TaskSync to better reflect our mission of synchronizing tasks across teams.
                        </p>
                        <p>
                            What began as an academic endeavor has evolved into a robust task management solution designed to meet the real-world needs of individuals and teams seeking to optimize their workflow and boost productivity.
                        </p>
                    </div>
                </motion.div>
                <motion.div
                    className="mb-12"
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                >
                    <h2 className="text-2xl font-bold text-[#577590] mb-8 flex items-center">
                        <svg className="w-6 h-6 mr-2 text-[#F2A541]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        Meet Our Team
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-[#F2A541]"
                                variants={fadeIn}
                            >
                                <h3 className="text-xl font-semibold text-[#577590]">{member.name}</h3>
                                <p className="text-[#577590]/70">{member.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
                <motion.div
                    className="bg-[#577590]/10 rounded-xl p-8 text-center"
                    initial="initial"
                    animate="animate"
                    variants={fadeIn}
                >
                    <svg className="w-10 h-10 mx-auto mb-4 text-[#F2A541]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                    <p className="text-[#577590] italic">
                        Special thanks to our instructor, Asaad Althoubi, for his guidance and support throughout the development of this project.
                    </p>
                </motion.div>
                <motion.div
                    className="text-center mt-16"
                    initial="initial"
                    animate="animate"
                    variants={fadeIn}
                >
                    <h2 className="text-2xl font-bold text-[#577590] mb-4">Ready to Get Started?</h2>
                    <p className="text-[#577590]/80 mb-8">
                        Discover how TaskSync can help you and your team achieve more together.
                    </p>

                    <SignedIn>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link href="/task"
                                  className="inline-block bg-[#F2A541] text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-[#F08A4B] transition-colors">
                                Try TaskSync Today
                            </Link>
                        </motion.div>
                    </SignedIn>

                    <SignedOut>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <SignInButton mode="modal"
                                          className="inline-block bg-[#F2A541] text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-[#F08A4B] transition-colors">
                                Try TaskSync Today
                            </SignInButton>
                        </motion.div>
                    </SignedOut>
                </motion.div>
            </div>
        </div>
    );
}