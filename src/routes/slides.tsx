import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Presentation, Download, Clock, Calendar, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/slides")({
  component: SlidesPage,
  head: () => ({
    meta: [
      { title: "Presentations - PediTrack IPITPH | SLIIT Research" },
      { name: "description", content: "Slide decks from all IPITPH research presentations - proposal, progress, and final presentations." },
    ],
  }),
});

type SlideStatus = "available" | "pending";

interface Slide {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  status: SlideStatus;
  href?: string;
  presenters?: string;
  thumb?: string;
}

const slides: Slide[] = [
  {
    id: "proposal",
    title: "Proposal Presentation",
    subtitle: "Research problem, objectives, methodology, and system overview presented to the evaluation panel.",
    date: "September 2025",
    status: import.meta.env.VITE_SLIDES_PROPOSAL_URL ? "available" : "pending",
    href: import.meta.env.VITE_SLIDES_PROPOSAL_URL,
    presenters: "Group 25-26J-442",
  },
  {
    id: "pp1",
    title: "Progress Presentation 1",
    subtitle: "50% completion - literature review, data collection, initial model development, component architecture.",
    date: "January 2026",
    status: import.meta.env.VITE_SLIDES_PP1_URL ? "available" : "pending",
    href: import.meta.env.VITE_SLIDES_PP1_URL,
    presenters: "Group 25-26J-442",
  },
  {
    id: "pp2",
    title: "Progress Presentation 2",
    subtitle: "90% completion - full system integration, validated results, and deployment status.",
    date: "March 2026",
    status: import.meta.env.VITE_SLIDES_PP2_URL ? "available" : "pending",
    href: import.meta.env.VITE_SLIDES_PP2_URL,
    presenters: "Group 25-26J-442",
  },
  {
    id: "final",
    title: "Final Presentation",
    subtitle: "Complete system demonstration to the evaluation panel with full research findings.",
    date: "May 2026",
    status: import.meta.env.VITE_SLIDES_FINAL_URL ? "available" : "pending",
    href: import.meta.env.VITE_SLIDES_FINAL_URL,
    presenters: "Group 25-26J-442",
  },
];

const componentColors = [
  "from-violet-500 to-purple-700",
  "from-emerald-500 to-teal-700",
  "from-rose-500 to-red-700",
  "from-amber-500 to-orange-600",
];

function SlideCard({ slide, index }: { slide: Slide; index: number }) {
  const isAvailable = slide.status === "available";
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl border border-border shadow-card hover:shadow-card-hover transition-shadow overflow-hidden group"
    >
      {/* Slide preview placeholder */}
      {slide.thumb ? (
        <div className="relative h-44 bg-gray-100 overflow-hidden">
          <img src={slide.thumb} alt={slide.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
          {isAvailable && (
            <span className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-full border border-white/30 z-10">
              AVAILABLE
            </span>
          )}
        </div>
      ) : (
        <div className={`relative h-44 bg-gradient-to-br ${componentColors[index % componentColors.length]} flex items-center justify-center`}>
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg, white 0px, white 1px, transparent 1px, transparent 12px)" }} />
          <div className="text-center text-white/90 z-10 px-4">
            <Presentation className="h-10 w-10 mx-auto mb-2 opacity-80" />
            <p className="text-sm font-bold">{slide.title}</p>
            <p className="text-xs opacity-70 mt-0.5">{slide.date}</p>
          </div>
          {isAvailable && (
            <span className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-full border border-white/30 z-10">
              AVAILABLE
            </span>
          )}
        </div>
      )}

      <div className="p-5">
        <h3 className="font-bold text-dark text-base">{slide.title}</h3>
        <div className="flex items-center gap-1.5 mt-1 mb-2">
          <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">{slide.date}</span>
        </div>
        <p className="text-sm text-gray-default leading-relaxed">{slide.subtitle}</p>
        {slide.presenters && (
          <p className="text-xs text-muted-foreground mt-2">{slide.presenters}</p>
        )}

        <div className="mt-4">
          {isAvailable ? (
            <a
              href={slide.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary-light transition-colors w-full justify-center"
            >
              <ExternalLink className="h-4 w-4" /> View Slides
            </a>
          ) : (
            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-100 text-gray-400 text-sm font-semibold w-full justify-center cursor-not-allowed">
              <Clock className="h-4 w-4" /> Pending Upload
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function SlidesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        {/* Header */}
        <div className="bg-gradient-dark-purple py-14 px-5">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs font-bold tracking-widest text-purple-200 uppercase mb-3">Slides</p>
            <h1 className="text-3xl lg:text-5xl font-bold text-white">Presentations</h1>
            <p className="mt-3 text-white/70 max-w-2xl mx-auto">
              Slide decks from all past presentations. Future presentation links will be added as they become available.
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-5 lg:px-8 mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {slides.map((slide, i) => (
              <SlideCard key={slide.id} slide={slide} index={i} />
            ))}
          </div>

          {/* Note */}
          <div className="mt-10 p-5 bg-purple-100/40 rounded-2xl border border-purple-200/60">
            <div className="flex items-start gap-3">
              <Download className="h-5 w-5 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="font-bold text-dark text-sm">Uploading Presentations</p>
                <p className="text-sm text-gray-default mt-1">
                  Presentation slides will be linked here immediately after each assessment. Contact the group
                  leader at{" "}
                  <a href="mailto:IT22107114@my.sliit.lk" className="text-primary hover:underline">
                    IT22107114@my.sliit.lk
                  </a>{" "}
                  for access to any specific slides.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
