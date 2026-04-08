'use client'

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  Cpu,
  FileText,
  Mail,
  Monitor,
  Phone,
  Printer,
  ShieldCheck,
  Sparkles,
  Wifi,
  Wrench,
} from "lucide-react"

const techServices = [
  "Performance fixes",
  "Virus removal",
  "Software installation",
  "Wi-Fi and internet help",
  "Printer setup",
  "Windows troubleshooting",
  "Reset and formatting",
  "New laptop setup",
  "Data backup and transfer",
]

const careerServices = [
  "New CV creation",
  "CV rewrite and upgrade",
  "Cover letters",
  "LinkedIn setup",
  "Job application support",
]

const businessServices = [
  "Small business tech support",
  "Office device setup",
  "Email and printer help",
  "Wi-Fi troubleshooting",
  "Reliable support when things break",
]

const problems = [
  "Slow laptops and PCs",
  "Wi-Fi that keeps dropping",
  "Printers not connecting",
  "Windows errors and updates",
  "New device setup",
  "Business tech headaches",
]

export default function Home() {
  return (
    <main className="bg-[#050505] text-white">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-[#d4af37]/18 blur-[140px]" />
        <div className="absolute right-0 top-32 h-[28rem] w-[28rem] rounded-full bg-[#1e5eff]/16 blur-[120px]" />
        <div className="absolute left-0 top-[52rem] h-[24rem] w-[24rem] rounded-full bg-white/8 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04),transparent_20%,transparent_80%,rgba(212,175,55,0.05))]" />
      </div>

      <header className="sticky top-0 z-40 border-b border-[#d4af37]/15 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Kryvexis Solutions"
              className="h-10 w-auto rounded-md"
            />
            <div>
              <p className="text-base font-semibold tracking-tight text-white">Kryvexis Solutions</p>
              <p className="text-xs uppercase tracking-[0.25em] text-[#d4af37]">
                Solutions That Keep You Moving
              </p>
            </div>
          </div>

          <nav className="hidden gap-8 text-sm text-zinc-300 md:flex">
            <a href="#services" className="transition hover:text-[#d4af37]">Services</a>
            <a href="#about" className="transition hover:text-[#d4af37]">About</a>
            <a href="#boksburg" className="transition hover:text-[#d4af37]">Boksburg</a>
            <a href="#contact" className="transition hover:text-[#d4af37]">Contact</a>
          </nav>

          <a
            href="https://wa.me/27686282874"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 px-5 py-2 text-sm font-medium text-[#f4dd8a] transition hover:bg-[#d4af37]/20 md:inline-flex"
          >
            WhatsApp Us
          </a>
        </div>
      </header>

      <section className="relative">
        <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/25 bg-[#d4af37]/10 px-4 py-2 text-sm text-[#f4dd8a]"
            >
              <Sparkles className="h-4 w-4" />
              Premium tech support, CV help, and business support
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl"
            >
              Premium support with a bold black, gold, blue, and white identity.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300"
            >
              Kryvexis Solutions helps people and businesses in Boksburg with device issues,
              Wi-Fi problems, printer setup, Windows fixes, CV services, LinkedIn setup, and
              practical tech support that gets results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="https://wa.me/27686282874"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#d4af37] px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.02] hover:bg-[#e5c45a]"
              >
                Book on WhatsApp
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#d4af37]/40 hover:bg-white/10"
              >
                Explore Services
              </a>
            </motion.div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { label: "WhatsApp bookings", value: "Fast response" },
                { label: "Boksburg support", value: "Local service" },
                { label: "Remote + on-site", value: "Flexible help" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.35 + index * 0.08 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm"
                >
                  <p className="text-sm text-zinc-400">{item.label}</p>
                  <p className="mt-2 text-lg font-semibold text-white">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-[#d4af37]/15 via-[#1e5eff]/10 to-white/8 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-[#d4af37]/15 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm text-[#d4af37]">Kryvexis experience</p>
                  <h2 className="mt-1 text-2xl font-semibold">Luxury. Clarity. Reliability.</h2>
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
                  Live support feel
                </div>
              </div>

              <div className="space-y-4">
                {[
                  "Performance optimisation",
                  "Virus removal and security cleanup",
                  "Wi-Fi and printer setup",
                  "CV and LinkedIn support",
                  "Business device support",
                ].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.55, delay: 0.45 + i * 0.1 }}
                    className="rounded-2xl border border-white/10 bg-[#0d0d0d] px-4 py-4 text-zinc-100"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#d4af37]" />
                      <span>{item}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-[#1e5eff]/20 bg-[#1e5eff]/10 p-4 text-sm leading-7 text-blue-100">
                Need help now? Send your device type or request on WhatsApp and get a quote before work starts.
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]">Services</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight">A luxury color system with strong contrast and energy.</h2>
          <p className="mt-4 text-lg leading-8 text-zinc-300">
            Black gives you authority, gold gives premium feel, blue adds tech energy, and white keeps everything crisp and clean.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <ServiceCard
            icon={<Monitor className="h-6 w-6" />}
            title="Tech Support"
            description="Support for laptops, desktops, Windows issues, performance fixes, Wi-Fi problems, printers, backups, and device setup."
            items={techServices}
          />
          <ServiceCard
            icon={<FileText className="h-6 w-6" />}
            title="CV & LinkedIn"
            description="Professional CV writing, rewrites, cover letters, LinkedIn setup, and practical help with job applications."
            items={careerServices}
          />
          <ServiceCard
            icon={<Briefcase className="h-6 w-6" />}
            title="Business Support"
            description="Dependable support for small businesses that need fast help with office devices, email, Wi-Fi, printers, and daily issues."
            items={businessServices}
          />
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 26 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]">Why Kryvexis</p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight">A premium brand feel that still converts fast.</h3>
            <p className="mt-4 leading-8 text-zinc-300">
              This version pushes the brand into a stronger luxury-tech direction while keeping the clean service structure and WhatsApp-first flow.
            </p>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 26 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="grid gap-4 sm:grid-cols-2"
          >
            <FeatureBox icon={<ShieldCheck className="h-5 w-5" />} title="Trusted feel" text="Clear sections and a premium visual system." />
            <FeatureBox icon={<Cpu className="h-5 w-5" />} title="Modern design" text="Gold glow, blue accents, and sharp contrast." />
            <FeatureBox icon={<Wrench className="h-5 w-5" />} title="Real services" text="Built around the actual work you do every day." />
            <FeatureBox icon={<Phone className="h-5 w-5" />} title="Fast conversion" text="WhatsApp button always ready for action." />
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]">Common problems</p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight">What customers are struggling with right now.</h3>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {problems.map((item, index) => (
              <motion.div
                key={item}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-white/10 bg-[#0d0d0d] p-5"
              >
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#d4af37]/10 text-[#d4af37]">
                  {index % 3 === 0 ? <Wifi className="h-5 w-5" /> : index % 3 === 1 ? <Printer className="h-5 w-5" /> : <Monitor className="h-5 w-5" />}
                </div>
                <p className="text-zinc-200">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="boksburg" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]">Boksburg</p>
            <h3 className="mt-3 text-4xl font-semibold tracking-tight">Local support with a stronger premium look.</h3>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-300">
              Whether it is a slow laptop, a Wi-Fi issue, a printer that refuses to connect, or a CV that needs a professional upgrade,
              Kryvexis Solutions offers a polished, modern support experience for people and businesses in Boksburg.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#d4af37]/15 bg-gradient-to-br from-[#d4af37]/10 via-black to-[#1e5eff]/10 p-8">
            <h4 className="text-2xl font-semibold">How it works</h4>
            <div className="mt-6 space-y-4">
              {[
                "Send a WhatsApp message",
                "Explain the problem or request",
                "Get a quote before work starts",
                "Receive support remotely or on-site",
              ].map((item, index) => (
                <div key={item} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-black/40 p-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#d4af37]/15 text-sm font-semibold text-[#f4dd8a]">
                    {index + 1}
                  </div>
                  <p className="pt-1 text-zinc-200">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 text-center backdrop-blur-sm sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]">Contact</p>
          <h3 className="mt-3 text-4xl font-semibold tracking-tight">Ready for a stronger luxury-tech look?</h3>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-zinc-300">
            Book on WhatsApp, ask for support, or send your CV request. This version is tuned around black, gold, blue, and white.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/27686282874"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-[#d4af37] px-6 py-3 font-semibold text-black transition hover:scale-[1.02] hover:bg-[#e5c45a]"
            >
              <Phone className="mr-2 h-4 w-4" />
              WhatsApp 068 628 2874
            </a>
            <a
              href="mailto:kryvexissolutions@gmail.com"
              className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:border-[#1e5eff]/40 hover:bg-white/10"
            >
              <Mail className="mr-2 h-4 w-4" />
              kryvexissolutions@gmail.com
            </a>
          </div>
        </div>
      </section>

      <a
        href="https://wa.me/27686282874"
        target="_blank"
        rel="noreferrer"
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
      className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm"
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

function FeatureBox({
  icon,
  title,
  text,
}: {
  icon: ReactNode
  title: string
  text: string
}) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#d4af37]/10 text-[#d4af37]">
        {icon}
      </div>
      <h4 className="text-xl font-semibold tracking-tight">{title}</h4>
      <p className="mt-2 leading-7 text-zinc-300">{text}</p>
    </div>
  )
}
