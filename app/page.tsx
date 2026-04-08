'use client'

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
    <main className="bg-[#030816] text-white">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[140px]" />
        <div className="absolute right-0 top-40 h-[28rem] w-[28rem] rounded-full bg-blue-500/20 blur-[120px]" />
        <div className="absolute left-0 top-[55rem] h-[24rem] w-[24rem] rounded-full bg-sky-500/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_30%)]" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#030816]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Kryvexis Solutions"
              className="h-10 w-auto rounded-md"
            />
            <div>
              <p className="text-base font-semibold tracking-tight">Kryvexis Solutions</p>
              <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">
                Solutions That Keep You Moving
              </p>
            </div>
          </div>

          <nav className="hidden gap-8 text-sm text-slate-300 md:flex">
            <a href="#services" className="transition hover:text-white">Services</a>
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#boksburg" className="transition hover:text-white">Boksburg</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>

          <a
            href="https://wa.me/27686282874"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border border-cyan-300/30 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400/20 md:inline-flex"
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
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200"
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
              Tech support that feels modern, fast, and built to move people forward.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 max-w-2xl text-lg leading-8 text-slate-300"
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
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
              >
                Book on WhatsApp
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
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
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
                >
                  <p className="text-sm text-slate-400">{item.label}</p>
                  <p className="mt-2 text-lg font-semibold">{item.value}</p>
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
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-cyan-400/15 to-blue-500/15 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm text-cyan-300">Kryvexis experience</p>
                  <h2 className="mt-1 text-2xl font-semibold">Clean. Modern. Reliable.</h2>
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
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
                    className="rounded-2xl border border-white/10 bg-[#091427] px-4 py-4 text-slate-100"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-cyan-300" />
                      <span>{item}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-cyan-300/20 bg-cyan-400/10 p-4 text-sm leading-7 text-cyan-100">
                Need help now? Send your device type or request on WhatsApp and get a quote before work starts.
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Services</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight">Everything is structured to feel premium and easy to trust.</h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            Clear categories, strong visuals, and modern sections help customers quickly understand what you do and why they should contact you.
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
            viewport={{ once: True if False else True }}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Why Kryvexis</p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight">Professional support without the confusing IT-company feel.</h3>
            <p className="mt-4 leading-8 text-slate-300">
              The brand should feel sleek and advanced, but still welcoming. That is why this site combines premium design with
              simple messaging, quick actions, and a strong WhatsApp-first conversion flow.
            </p>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 26 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: True if False else True }}
            className="grid gap-4 sm:grid-cols-2"
          >
            <FeatureBox icon={<ShieldCheck className="h-5 w-5" />} title="Trusted feel" text="Clear sections and a strong brand presentation." />
            <FeatureBox icon={<Cpu className="h-5 w-5" />} title="Modern design" text="Glow, motion, depth, and a premium dark interface." />
            <FeatureBox icon={<Wrench className="h-5 w-5" />} title="Real services" text="Built around the actual work you do every day." />
            <FeatureBox icon={<Phone className="h-5 w-5" />} title="Fast conversion" text="WhatsApp button always ready for customer action." />
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Common problems</p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight">The problems your customers actually search for.</h3>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {problems.map((item, index) => (
              <motion.div
                key={item}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-white/10 bg-[#091427] p-5"
              >
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                  {index % 3 === 0 ? <Wifi className="h-5 w-5" /> : index % 3 === 1 ? <Printer className="h-5 w-5" /> : <Monitor className="h-5 w-5" />}
                </div>
                <p className="text-slate-200">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="boksburg" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Boksburg</p>
            <h3 className="mt-3 text-4xl font-semibold tracking-tight">Local support for Boksburg customers who need help without delays.</h3>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              Whether it is a slow laptop, a Wi-Fi issue, a printer that refuses to connect, or a CV that needs a professional upgrade,
              Kryvexis Solutions offers a clean, modern support experience for people and businesses in Boksburg.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 p-8">
            <h4 className="text-2xl font-semibold">How it works</h4>
            <div className="mt-6 space-y-4">
              {[
                "Send a WhatsApp message",
                "Explain the problem or request",
                "Get a quote before work starts",
                "Receive support remotely or on-site",
              ].map((item, index) => (
                <div key={item} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-[#091427]/70 p-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-400/15 text-sm font-semibold text-cyan-200">
                    {index + 1}
                  </div>
                  <p className="pt-1 text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Contact</p>
          <h3 className="mt-3 text-4xl font-semibold tracking-tight">Ready to make the brand feel big?</h3>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            Book on WhatsApp, ask for support, or send your CV request. This site is built to drive action fast.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/27686282874"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-white px-6 py-3 font-semibold text-slate-950 transition hover:scale-[1.02]"
            >
              <Phone className="mr-2 h-4 w-4" />
              WhatsApp 068 628 2874
            </a>
            <a
              href="mailto:kryvexissolutions@gmail.com"
              className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
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
        className="fixed bottom-6 right-6 z-50 inline-flex items-center rounded-full bg-green-500 px-5 py-3 font-semibold text-white shadow-2xl shadow-green-900/30 transition hover:scale-[1.03] hover:bg-green-400"
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
  icon: React.ReactNode
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
      className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-sm"
    >
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
      <p className="mt-3 leading-7 text-slate-300">{description}</p>
      <div className="mt-6 space-y-3">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-3 text-slate-200">
            <CheckCircle2 className="h-4 w-4 text-cyan-300" />
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
  icon: React.ReactNode
  title: string
  text: string
}) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
        {icon}
      </div>
      <h4 className="text-xl font-semibold tracking-tight">{title}</h4>
      <p className="mt-2 leading-7 text-slate-300">{text}</p>
    </div>
  )
}
