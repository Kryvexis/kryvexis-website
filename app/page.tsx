'use client'

import { motion } from "framer-motion"
import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  Bug,
  Cpu,
  FileText,
  Link,
  Mail,
  Monitor,
  Phone,
  Printer,
  ShieldCheck,
  Sparkles,
  Wifi,
  Wrench,
} from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl font-bold mb-4">Kryvexis Solutions</h1>
      <p className="text-gray-400 mb-6">
        Solutions That Keep You Moving
      </p>

      <a
        href="https://wa.me/27686282874"
        className="bg-green-500 px-6 py-3 rounded-lg inline-block"
      >
        Chat on WhatsApp
      </a>
    </main>
  )
}
