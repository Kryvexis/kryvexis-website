'use client'

import { motion } from "framer-motion"
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  FileText,
  Monitor,
  Phone,
  ShieldCheck,
  Wifi,
  Wrench,
} from "lucide-react"

const techServices = [
  "Performance issues",
  "Virus removal",
  "Software installation",
  "Wi-Fi / internet help",
  "Printer setup",
  "Windows issues",
  "Reset / formatting",
  "New laptop setup",
  "Data backup / transfer",
]

const careerServices = [
  "CV services",
  "LinkedIn setup",
  "Job application help",
]

const businessServices = [
  "Business tech support",
  "Office setup help",
  "Printer and network support",
]

const reasons = [
  "Fast WhatsApp booking",
  "Clear quotes before work starts",
  "Support for home and business",
  "Based around real services",
]

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[#d4af37]/10 blur-[120px]" />
        <div className="absolute right-0 top-24 h-[24rem] w-[24rem] rounded-full bg-[#1e5eff]/10 blur-[120px]" />
        <div className="absolute left-0 top-[50rem] h-[20rem] w-[20rem] rounded-full bg-white/5 blur-[120px]" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Kryvexis Solutions" className="h-10 w-auto rounded-md" />
            <div>
              <p className="font-semibold">Kryvexis Solutions</p>
              <p className="text-xs uppercase tracking-[0.2em] text-[#d4af37]">
                Solutions That Keep You Moving
              </p>
            </div>
          </div>

          <nav className="hidden gap-8 text-sm text-zinc-300 md:flex">
            <a href="#services" className="hover:text-[#d4af37] transition">Services</a>
            <a href="#why" className="hover:text-[#d4af37] transition">Why Us</a>
            <a href="#contact" className="hover:text-[#d4af37] transition">Contact</a>
          </nav>

          <a
            href="https://wa.me/27686282874"
            className="hidden rounded-full bg-[#d4af37] px-5 py-2 text-sm font-semibold text-black transition hover:bg-[#e5c45a] md:inline-flex"
          >
            WhatsApp
          </a>
        </div>
      </header>

      <section className="mx-auto grid min-h-[92vh] max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/20 bg-[#d4af37]/10 px-4 py-2 text-sm text-[#f5df92]"
          >
            <ShieldCheck className="h-4 w-4" />
            Tech support, CV services, and business support
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08 }}
            className="text-5xl font-semibold leading-tight tracking-tight sm:text-6xl"
          >
            Reliable support for devices, careers, and small businesses.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16 }}
            className="mt-6 max-w-xl text-lg leading-8 text-zinc-300"
          >
            Kryvexis Solutions helps customers in Boksburg with laptops, Wi-Fi,
            printers, Windows issues, CV upgrades, LinkedIn setup, and business support.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.24 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="https://wa.me/27686282874"
              className="inline-flex items-center justify-center rounded-full bg-[#d4af37] px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.02] hover:bg-[#e5c45a]"
            >
              Book on WhatsApp
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View Services
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.18 }}
          className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
            Quick overview
          </p>
          <h2 className="mt-3 text-2xl font-semibold">What we help with</h2>

          <div className="mt-6 grid gap-4">
            {[
              "Slow laptops and PCs",
              "Wi-Fi and printer issues",
              "Windows troubleshooting",
              "New laptop setup",
              "CV and LinkedIn improvements",
              "Small business support",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-black/30 p-4 text-zinc-200">
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d4af37]">Services</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight">What Kryvexis Solutions offers</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <ServiceCard
            icon={<Monitor className="h-6 w-6" />}
            title="Tech Support"
            description="Support for laptops, desktops, Windows issues, Wi-Fi, printers, backups, and setup."
            items={techServices}
          />
          <ServiceCard
            icon={<FileText className="h-6 w-6" />}
            title="CV & LinkedIn"
            description="Professional CV writing, rewrites, LinkedIn setup, and job application help."
            items={careerServices}
          />
          <ServiceCard
            icon={<Briefcase className="h-6 w-6" />}
            title="Business Support"
            description="Practical support for small businesses that need help with devices, printers, email, and Wi-Fi."
            items={businessServices}
          />
        </div>
      </section>

      <section id="why" className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d4af37]">Why Us</p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight">Clean, simple, and easy to trust.</h3>
            <p className="mt-4 leading-8 text-zinc-300">
              This version keeps the site professional, clear, and focused on getting people to contact you fast.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((item, index) => (
              <motion.div
                key={item}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 18 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                viewport={{ once: true }}
                className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#d4af37]/10 text-[#d4af37]">
                  {index % 4 === 0 ? <Phone className="h-5 w-5" /> : index % 4 === 1 ? <CheckCircle2 className="h-5 w-5" /> : index % 4 === 2 ? <Wifi className="h-5 w-5" /> : <Wrench className="h-5 w-5" />}
                </div>
                <p className="text-zinc-200">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d4af37]">Boksburg</p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight">Local support for Boksburg customers.</h3>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-300">
            Kryvexis Solutions supports customers in Boksburg with device problems, Wi-Fi issues,
            CV services, LinkedIn setup, and business tech support.
          </p>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 text-center sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d4af37]">Contact</p>
          <h3 className="mt-3 text-4xl font-semibold tracking-tight">Get help quickly.</h3>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-zinc-300">
            Message on WhatsApp for bookings and support, or email for general enquiries.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/27686282874"
              className="inline-flex items-center rounded-full bg-[#d4af37] px-6 py-3 font-semibold text-black transition hover:bg-[#e5c45a]"
            >
              <Phone className="mr-2 h-4 w-4" />
              WhatsApp 068 628 2874
            </a>
            <a
              href="mailto:kryvexissolutions@gmail.com"
              className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              kryvexissolutions@gmail.com
            </a>
          </div>
        </div>
      </section>

      <a
        href="https://wa.me/27686282874"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center rounded-full bg-[#d4af37] px-5 py-3 font-semibold text-black shadow-2xl shadow-[#d4af37]/20 transition hover:scale-[1.03] hover:bg-[#e5c45a]"
      >
        <Phone className="mr-2 h-4 w-4" />
        WhatsApp
      </a>
    </main>
  )
}

function ServiceCard({
  icon,
  title,
  description,
  items,
}: {
  icon: ReactNode
  title: string
  description: string
  items: string[]
}) {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 24 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7"
    >
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d4af37]/10 text-[#d4af37]">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
      <p className="mt-3 leading-7 text-zinc-300">{description}</p>
      <div className="mt-6 space-y-3">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-3 text-zinc-200">
            <CheckCircle2 className="h-4 w-4 text-[#d4af37]" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
