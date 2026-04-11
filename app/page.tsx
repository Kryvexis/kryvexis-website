'use client'

import { motion } from "framer-motion"
import { Phone } from "lucide-react"

export default function Home() {
  return (
    <main className="bg-[#050505] text-white">

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center text-center px-6">
        <div>
          <h1 className="text-5xl font-bold mb-4">Kryvexis Solutions</h1>
          <p className="text-zinc-400 mb-6">Solutions That Keep You Moving</p>

          <a
            href="https://wa.me/27686282874"
            className="bg-[#d4af37] text-black px-6 py-3 rounded-xl inline-flex items-center gap-2"
          >
            <Phone size={16}/> WhatsApp
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center">Services</h2>

        <div className="grid gap-6 md:grid-cols-2">

          <div className="border border-white/10 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">Tech Support</h3>
            <ul className="text-zinc-400 space-y-1">
              <li>Performance issues</li>
              <li>Virus removal</li>
              <li>Wi-Fi / Internet help</li>
              <li>Printer setup</li>
              <li>Windows issues</li>
              <li>Data backup / transfer</li>
            </ul>
          </div>

          <div className="border border-white/10 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">CV & LinkedIn</h3>
            <ul className="text-zinc-400 space-y-1">
              <li>CV creation</li>
              <li>CV upgrades</li>
              <li>LinkedIn setup</li>
              <li>Job applications</li>
            </ul>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section className="text-center py-20">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <p className="text-zinc-400 mb-6">Boksburg</p>

        <a
          href="https://wa.me/27686282874"
          className="bg-[#d4af37] text-black px-6 py-3 rounded-xl inline-flex items-center gap-2"
        >
          <Phone size={16}/> WhatsApp
        </a>
      </section>

    </main>
  )
}
