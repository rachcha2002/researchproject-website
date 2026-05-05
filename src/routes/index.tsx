import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import {
  Brain,
  Salad,
  Siren,
  Mic2,
  GraduationCap,
  Users,
  ChevronRight,
  BookOpen,
  FileText,
  PresentationIcon,
  Mail,
} from "lucide-react";
import fullLogo from "../assets/peditrack_logo/PediTrackLogo-removebg.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "PediTrack - IPITPH | Home | SLIIT Research Project" },
      {
        name: "description",
        content:
          "IPITPH is an AI-powered mobile-based decision support system for proactive, personalized, and inclusive pediatric care. Group 25-26J-442, IT4010, SLIIT.",
      },
    ],
  }),
});

const components = [
  {
    id: "IT22107114",
    name: "Rachith Tharana",
    title: "AI-Driven Predictive Health Analytics",
    desc: "Hybrid LSTM-DNN model with cross-domain feature fusion for real-time growth prediction, WHO standard benchmarking, and early health risk detection.",
    Icon: Brain,
    color: "from-violet-500 to-purple-700",
    badge: "Component 1",
  },
  {
    id: "IT22218612",
    name: "Tharindu Nawarathne",
    title: "ML-Driven Nutrition Optimization",
    desc: "Collaborative filtering, NLP (BERT), and CNN-based food image scanning to deliver personalized, behavior-aware meal plans aligned with child growth trajectories.",
    Icon: Salad,
    color: "from-emerald-500 to-teal-700",
    badge: "Component 2",
  },
  {
    id: "IT22087010",
    name: "Githadi Wijayarathna",
    title: "Real-Time Emergency Response",
    desc: "Supervised ML models (Random Forest, LSTM) trained on PECARN and MIMIC-IV datasets for proactive risk scoring, WebRTC teleconsultation, and Google Maps emergency routing.",
    Icon: Siren,
    color: "from-rose-500 to-red-700",
    badge: "Component 3",
  },
  {
    id: "IT22121738",
    name: "Kavinda Kurukulasooriya",
    title: "Multilingual Voice-Activated Assistant",
    desc: "Speech-to-text (Whisper), multilingual NLP, and Retrieval-Augmented Generation (RAG) enabling voice-driven caregiver interaction in Sinhala, Tamil, and English.",
    Icon: Mic2,
    color: "from-amber-500 to-orange-600",
    badge: "Component 4",
  },
];

const quickLinks = [
  { to: "/domain", label: "Research Domain", sub: "Literature, gap, methodology", Icon: BookOpen },
  { to: "/milestones", label: "Milestones", sub: "Assessments & timelines", Icon: GraduationCap },
  { to: "/documents", label: "Documents", sub: "Reports & checklists", Icon: FileText },
  {
    to: "/slides",
    label: "Presentations",
    sub: "Slides from past sessions",
    Icon: PresentationIcon,
  },
  { to: "/about", label: "About Us", sub: "Team & supervisors", Icon: Users },
  { to: "/contact", label: "Contact Us", sub: "Get in touch", Icon: Mail },
];

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay },
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
          {/* gradient blobs */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-purple-200/30 blur-3xl" />
          </div>

          <div className="max-w-5xl mx-auto px-5 lg:px-8 text-center">
            <motion.div {...fade(0)}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 text-primary text-xs font-bold tracking-wide uppercase">
                Research Project &nbsp;·&nbsp; SLIIT 2025/2026 &nbsp;·&nbsp; Group 25-26J-442
              </span>
            </motion.div>

            <motion.div {...fade(0.1)} className="mt-6 flex justify-center">
              <img src={fullLogo} alt="PediTrack" className="h-16 w-auto" />
            </motion.div>

            <motion.h1
              {...fade(0.2)}
              className="mt-5 text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-dark leading-[1.08]"
            >
              Integrated Predictive Intelligence{" "}
              <span className="text-gradient-primary">Tool for Pediatric Healthcare</span>
            </motion.h1>

            <motion.p
              {...fade(0.3)}
              className="mt-3 text-sm font-semibold text-primary uppercase tracking-widest"
            >
              IPITPH
            </motion.p>

            <motion.p
              {...fade(0.35)}
              className="mt-5 text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              An AI-powered mobile application for proactive, personalized, and inclusive pediatric
              care integrating predictive growth and health analytics, nutrition optimization,
              emergency response, and multilingual voice-activated caregiver support for children
              aged 1–6 years.
            </motion.p>

            <motion.div {...fade(0.45)} className="mt-8 flex flex-wrap gap-3 justify-center">
              <Link
                to="/domain"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary-light transition-colors shadow-[0_8px_24px_-8px_rgb(124_58_237_/_0.5)]"
              >
                Explore Research <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-primary text-primary text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Meet the Team
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── Abstract ── */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-5 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-s font-bold tracking-widest text-primary uppercase mb-3">
                Abstract
              </p>
              <h2 className="text-2xl lg:text-3xl font-bold text-dark mb-5">Project Overview</h2>
              <p className="text-gray-default leading-relaxed text-base lg:text-lg">
                IPITPH is an AI-powered mobile-based decision support and health tracking system
                designed to transform pediatric healthcare for children aged 1–6 years. The system
                integrates four intelligent components: AI-driven predictive growth and
                healthanalytics using a Hybrid LSTM-DNN architecture, ML-based personalized
                nutrition optimization with behavioral analysis, real-time emergency response with
                predictive risk assessment, and a voice-activated multilingual caregiver support
                system. By fusing multi-domain health data including growth metrics, nutrition,
                sleep behavior, and environmental factors, the Tool empowers caregivers and
                healthcare providers with timely, personalized, and proactive decision-making
                support addressing fragmented pediatric data systems and delayed interventions in
                underserved and guest communities.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Component Cards ── */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-5 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-s font-bold tracking-widest text-primary uppercase mb-2">
                Components
              </p>
              <h2 className="text-2xl lg:text-3xl font-bold text-dark">Four Research Components</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {components.map((c, i) => (
                <motion.div
                  key={c.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow group border border-border"
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center mb-4`}
                  >
                    <c.Icon className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
                    {c.badge}
                  </span>
                  <h3 className="mt-1 text-base font-bold text-dark">{c.title}</h3>
                  <p className="mt-1 text-xs text-primary font-semibold">{c.name}</p>
                  <p className="mt-3 text-sm text-gray-default leading-relaxed">{c.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Supervisors ── */}
        <section className="bg-white py-14">
          <div className="max-w-4xl mx-auto px-5 lg:px-8 text-center">
            <p className="text-s font-bold tracking-widest text-primary uppercase mb-4">
              Supervision
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { role: "Supervisor", name: "Prof. Samantha Thelijjagoda", inst: "SLIIT" },
                { role: "Co-Supervisor", name: "Ms. Hansi De Silva", inst: "SLIIT" },
                { role: "External Supervisor", name: "Dr. Bandara Subasinghe", inst: "" },
              ].map((s) => (
                <div
                  key={s.name}
                  className="flex-1 min-w-[200px] max-w-[240px] bg-background rounded-xl p-5 border border-border"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-3">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-[10px] font-bold tracking-widest text-primary uppercase">
                    {s.role}
                  </p>
                  <p className="mt-1 text-sm font-bold text-dark">{s.name}</p>
                  {s.inst && <p className="text-xs text-muted-foreground">{s.inst}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Quick Nav ── */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-5 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-s font-bold tracking-widest text-primary uppercase mb-2">
                Navigate
              </p>
              <h2 className="text-2xl font-bold text-dark">Explore the Site</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {quickLinks.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                >
                  <Link
                    to={l.to}
                    className="flex flex-col items-center text-center p-4 bg-white rounded-xl border border-border hover:border-primary hover:shadow-card-hover transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center mb-3 group-hover:bg-primary transition-colors">
                      <l.Icon className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <p className="text-sm font-bold text-dark">{l.label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{l.sub}</p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
