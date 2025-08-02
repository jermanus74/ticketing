"use client";

import { Navbar } from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <>
      <Navbar />
      <main
        className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 relative overflow-hidden"
        style={{
          backgroundImage: "url('./404.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.9) translateZ(0)", // Ensures the background image is slightly dimmed
        }}
      >
        {/* Overlay to darken image for readability */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative text-9xl font-extrabold text-white select-none z-10"
        >
          404
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="relative mt-4 text-2xl text-white z-10"
        >
          Page Not Found
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.4 }}
          className="relative mt-8 z-10"
        >
          <Link
            href="/"
            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition inline-block"
          >
            Go Home
          </Link>
        </motion.div>
      </main>
    </>
  );
}
