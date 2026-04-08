'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  Bug,
  Cpu,
  FileText,
  Linkedin,
  Mail,
  Monitor,
  Phone,
  Printer,
  ShieldCheck,
  Sparkles,
  Wifi,
  Wrench,
} from 'lucide-react';
import { useRef } from 'react';

const phoneNumber = '068 628 2874';
const whatsappLink = 'https://wa.me/27686282874';
const email = 'kryvexissolutions@gmail.com';

const services = [
  {
    title: 'Performance & Repairs',
    icon: Monitor,
    text: 'Speed optimisation, Windows troubleshooting, resets, software setup and practical advice that gets your machine working properly again.',
  },
  {
    title: 'Protection & Recovery',
    icon: ShieldCheck,
    text: 'Virus removal, data backup, file transfer and clean recovery services when your device needs a reset or rescue.',
  },
  {
    title: 'Wi-Fi, Printers & Setup',
    icon: Wifi,
    text: 'Reliable help with internet issues, printer setup, new laptop setup and device configuration at home or for business.',
  },
  {
    title: 'CV & LinkedIn Services',
    icon: FileText,
    text: 'Professional CV writing, upgrades, cover letters and LinkedIn setup that helps you present yourself clearly and confidently.',
  },
  {
    title: 'Business Tech Support',
    icon: Briefcase,
    text: 'Small business support for staff devices, networks, printers, email and day-to-day troubleshooting without the overhead of a full IT team.',
  },
  {
    title: 'Clear Quotes, Fast Action',
    icon: BadgeCheck,
    text: 'No public pricing page. Customers tell you what they need, you respond with a clear quote, and work starts only after approval.',
  },
];

const problems = [
  'Slow laptops and freezing PCs',
  'Virus and malware issues',
  'Wi-Fi and internet problems',
  'Printer connection issues',
  'Windows errors and updates',
  'New laptop setup and transfers',
];

function FloatingOrb({ className }: { className: string }) {
  return <div className={`absolute rounded-full bg-cyan-400/20 blur-3xl ${className}`} />;
}

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.25]);

  return (
    <main className="bg-[#020817] text-white selection:bg-cyan-300 selection:text-slate-950">
      <section ref={heroRef} className="relative min-h-screen overflow-hidden border-b border-white/10">
        <FloatingOrb className="left-[-8rem] top-24 h-72 w-72" />
        <FloatingOrb className="right-[-6rem] top-40 h-80 w-80 bg-blue-500/20" />
        <FloatingOrb className="bottom-[-8rem] left-1/3 h-80 w-80 bg-indigo-500/20" />

        <motion.div style={{ y, opacity }} className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_32%),radial-gradient(circle_at_70%_20%,rgba(34,211,238,0.16),transparent_24%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(2,8,23,0.35),#020817)]" />
        </motion.div>

        <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 shadow-[0_0_40px_rgba(34,211,238,0.12)] backdrop-blur-xl">
              <p className="text-lg font-semibold tracking-tight">Kryvexis Solutions</p>
              <p className="text-xs uppercase tracking-[0.32em] text-cyan-300">Boksburg • Tech & Career Support</p>
            </div>
          </div>

          <nav className="hidden gap-8 text-sm text-slate-300 md:flex">
            <a href="#services" className="transition hover:text-white">Services</a>
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-cyan-300/30 bg-cyan-300/15 px-5 py-2 text-sm font-medium text-cyan-100 transition hover:bg-cyan-300/25"
          >
            WhatsApp Now
          </a>
        </header>

        <div className="relative z-20 mx-auto grid min-h-[calc(100vh-88px)] max-w-7xl items-center gap-12 px-6 pb-16 pt-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pb-24 lg:pt-0">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 backdrop-blur-xl"
            >
              <Sparkles className="h-4 w-4 text-cyan-300" />
              Apple-like motion. Premium feel. Built to convert.
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05 }}
              className="max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl"
            >
              Tech support that looks as sharp as the service feels.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl"
            >
              Kryvexis Solutions helps homes, job seekers and small businesses in Boksburg with modern tech support, CV services, laptop setup, troubleshooting and business IT help.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
              >
                Book on WhatsApp
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-white/10"
              >
                Explore Services
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.12 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_0_80px_rgba(34,211,238,0.12)] backdrop-blur-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_30%)]" />
              <div className="relative">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-cyan-300">Live support flow</p>
                    <h2 className="text-2xl font-semibold tracking-tight">What customers can ask for</h2>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">Quote first</div>
                </div>

                <div className="space-y-3">
                  {[
                    ['Performance issues', 'Optimise and speed up'],
                    ['Virus removal', 'Clean and secure'],
                    ['Wi-Fi / printer help', 'Fix and connect'],
                    ['CV / LinkedIn setup', 'Career-ready updates'],
                    ['Business tech support', 'Quoted per job'],
                  ].map(([title, sub], index) => (
                    <motion.div
                      key={title}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.08, duration: 0.55 }}
                      className="rounded-2xl border border-white/10 bg-[#081224]/90 p-4"
                    >
                      <p className="font-medium">{title}</p>
                      <p className="mt-1 text-sm text-slate-400">{sub}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-cyan-300/25 bg-cyan-300/10 p-4 text-sm leading-7 text-cyan-100">
                  No public pricing page. Visitors message you directly on WhatsApp for a quote based on the issue, job size and location.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-300">Services</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">A living, premium section layout that feels modern as you scroll.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            This starter is designed to feel cinematic from the first load. The next phases can add more parallax, sticky scroll storytelling and section-by-section product style reveals.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.05 }}
                className="group rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/10"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300 ring-1 ring-cyan-300/20 transition group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold tracking-tight">{service.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{service.text}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/5">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-300">Common problems</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Built around the real reasons people reach out.</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
              The site needs to feel premium, but it still has to be grounded in what customers actually need. This section keeps the messaging clear and useful.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {problems.map((problem, index) => (
              <motion.div
                key={problem}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="rounded-[1.75rem] border border-white/10 bg-[#081224] p-5"
              >
                <p className="text-lg font-medium text-slate-100">{problem}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 p-8"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-300">Why it works</p>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight">Minimal enough to feel premium. Alive enough to feel unforgettable.</h3>
            <p className="mt-5 leading-8 text-slate-300">
              The dark glass look, soft motion, layered glow and controlled spacing give the brand an upscale feel without becoming busy. It is the right direction for an Apple-inspired service brand.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: Cpu, label: 'Modern motion system' },
                { icon: Wrench, label: 'Service-led conversion' },
                { icon: Bug, label: 'Tech-first brand tone' },
                { icon: Linkedin, label: 'Career services included' },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-[#081224] p-5">
                    <Icon className="h-5 w-5 text-cyan-300" />
                    <p className="mt-3 text-sm text-slate-200">{item.label}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_0_80px_rgba(34,211,238,0.08)] backdrop-blur-xl lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-300">Contact</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Let’s turn this into the full production site next.</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                This is the starter foundation. Phase two is where we add the real logo, custom assets, more cinematic scroll effects, extra pages and the final GitHub + Vercel production setup.
              </p>
            </div>

            <div className="grid gap-4 sm:min-w-[22rem]">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="rounded-[1.75rem] border border-cyan-300/30 bg-cyan-300/10 p-5 transition hover:bg-cyan-300/15"
              >
                <div className="flex items-center gap-3 text-cyan-200">
                  <Phone className="h-5 w-5" />
                  <span className="font-medium">WhatsApp / Call</span>
                </div>
                <p className="mt-2 text-xl font-semibold">{phoneNumber}</p>
              </a>
              <a href={`mailto:${email}`} className="rounded-[1.75rem] border border-white/10 bg-[#081224] p-5 transition hover:bg-[#0d1a33]">
                <div className="flex items-center gap-3 text-slate-300">
                  <Mail className="h-5 w-5" />
                  <span className="font-medium">Email</span>
                </div>
                <p className="mt-2 text-lg font-semibold">{email}</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-4 text-sm font-semibold text-white shadow-[0_10px_40px_rgba(37,211,102,0.35)] transition hover:scale-105"
      >
        <Phone className="h-4 w-4" />
        Chat on WhatsApp
      </a>
    </main>
  );
}
