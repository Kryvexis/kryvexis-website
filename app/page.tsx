'use client'

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { Phone, Monitor, FileText, Briefcase } from "lucide-react"

export default function Home() {
  return (
    <main className="bg-[#050505] text-white">

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center text-center px-6">
        <div>
          <motion.h1 
            initial={{opacity:0,y:20}} 
            animate={{opacity:1,y:0}} 
            className="text-5xl font-bold mb-4"
          >
            Kryvexis Solutions
          </motion.h1>

          <motion.p 
            initial={{opacity:0,y:20}} 
            animate={{opacity:1,y:0}} 
            className="text-zinc-400 mb-6"
          >
            Solutions That Keep You Moving
          </motion.p>

          <a
            href="https://wa.me/27686282874"
            className="bg-[#d4af37] text-black px-6 py-3 rounded-xl inline-flex items-center gap-2"
          >
            <Phone size={16}/> WhatsApp
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10 text-center">Services</h2>

        <div className="grid gap-6 md:grid-cols-3">

          <Card icon={<Monitor/>} title="Tech Support">
            Performance issues<br/>
            Virus removal<br/>
            Wi-Fi / Internet help<br/>
            Printer setup<br/>
            Windows issues<br/>
            Data backup / transfer
          </Card>

          <Card icon={<FileText/>} title="CV & LinkedIn">
            CV creation<br/>
            CV upgrades<br/>
            LinkedIn setup<br/>
            Job applications
          </Card>

          <Card icon={<Briefcase/>} title="Business Support">
            Business tech support<br/>
            Office setup<br/>
            Network & printers
          </Card>

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

function Card({icon, title, children}:{icon:ReactNode,title:string,children:ReactNode}){
  return(
    <motion.div 
      whileHover={{scale:1.05}}
      className="border border-white/10 p-6 rounded-xl text-center"
    >
      <div className="mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <div className="text-zinc-400">{children}</div>
    </motion.div>
  )
}