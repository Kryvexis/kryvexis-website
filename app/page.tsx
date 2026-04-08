'use client'

import { motion } from "framer-motion"
import { Phone } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] text-white overflow-hidden">

      {/* Glow background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/20 blur-[120px]" />
      </div>

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-6">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold"
        >
          Kryvexis Solutions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-lg text-gray-300"
        >
          Solutions That Keep You Moving
        </motion.p>

        <motion.a
          href="https://wa.me/27686282874"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 bg-green-500 hover:bg-green-400 px-6 py-3 rounded-xl flex items-center gap-2"
        >
          <Phone size={18} />
          Chat on WhatsApp
        </motion.a>

      </section>

    </main>
  )
}
