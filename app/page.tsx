'use client'

import type { ReactNode } from "react"
import { Phone } from "lucide-react"

export default function Home(){
  return(
    <main className="min-h-screen bg-[#050505] text-white flex items-center justify-center text-center px-6">
      <div>
        <h1 className="text-5xl font-bold mb-4">Kryvexis Solutions</h1>
        <p className="text-zinc-400 mb-6">Solutions That Keep You Moving</p>
        <a href="https://wa.me/27686282874" className="bg-[#d4af37] text-black px-6 py-3 rounded-xl inline-flex items-center gap-2">
          <Phone size={16}/> WhatsApp
        </a>
      </div>
    </main>
  )
}
