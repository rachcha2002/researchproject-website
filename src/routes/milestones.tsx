import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ChevronDown, Calendar, Award, CheckCircle, Clock } from "lucide-react";

export const Route = createFileRoute("/milestones")({
  component: MilestonesPage,
  head: () => ({
    meta: [
      { title: "Milestones — PediTrack IPITPH | SLIIT Research" },
      { name: "description", content: "All project assessments, dates, and marks for IPITPH — Group 25-26J-442, IT4010 Research Project, SLIIT." },
    ],
  }),
});

const milestones = [
  {
    id: "proposal-pres",
    label: "Project Proposal Presentation",
    date: "September 8–11, 2025",
    marks: "6%",
    status: "completed",
    desc: "Initial research proposal presented to the evaluation panel. Covers the research problem, objectives, methodology, and a high-level system overview.",
  },
  {
    id: "proposal-report",
    label: "Project Proposal Report",
    date: "July 28, 2025 (draft submitted)",
    marks: "6%",
    status: "completed",
    desc: "Written report of the research proposal submitted to the supervisor. Includes detailed literature review, problem statement, and planned methodology.",
  },
  {
    id: "pp1",
    label: "Progress Presentation 1 (50%)",
    date: "TBD",
    marks: "15%",
    status: "upcoming",
    desc: "Demonstrates 50% system completion. Covers literature review findings, data collection progress, initial model development results, and component architecture diagrams.",
  },
  {
    id: "pp2",
    label: "Progress Presentation 2 (90%)",
    date: "TBD",
    marks: "18%",
    status: "upcoming",
    desc: "Demonstrates 90% system completion. Full system integration, validated results, deployment status, and evaluation metrics for each component.",
  },
  {
    id: "final-report-ind",
    label: "Final Report (Individual)",
    date: "TBD",
    marks: "15%",
    status: "upcoming",
    desc: "Comprehensive individual research report covering the full methodology, implementation details, experimental results, analysis, and discussion for each student's component.",
  },
  {
    id: "final-report-grp",
    label: "Final Report (Group)",
    date: "TBD",
    marks: "4%",
    status: "upcoming",
    desc: "Consolidated group research report integrating all four component contributions into one cohesive document representing the full IPITPH system.",
  },
  {
    id: "final-pres",
    label: "Final Presentation",
    date: "TBD",
    marks: "10%",
    status: "upcoming",
    desc: "Full system demonstration presented to the evaluation panel. Showcases integrated system functionality, performance results, and research contributions.",
  },
  {
    id: "viva",
    label: "Viva",
    date: "TBD",
    marks: "10%",
    status: "upcoming",
    desc: "Individual oral examination defending each student's research contribution, methodology, results, and understanding of the broader research domain.",
  },
  {
    id: "paper",
    label: "Research Paper",
    date: "TBD",
    marks: "10%",
    status: "upcoming",
    desc: "IEEE-format conference paper covering the AI methodology, experimental results, and scientific contribution of the IPITPH system.",
  },
  {
    id: "website",
    label: "Website",
    date: "TBD",
    marks: "2%",
    status: "in-progress",
    desc: "Project website covering all required CDAP sections: Home, Domain, Milestones, Documents, Presentations, About Us, and Contact Us.",
  },
  {
    id: "checklists",
    label: "Check Lists",
    date: "TBD",
    marks: "2%",
    status: "upcoming",
    desc: "Supervisor-verified progress checklists submitted at key project intervals to confirm milestone completion.",
  },
  {
    id: "logbook",
    label: "Logbook",
    date: "TBD",
    marks: "2%",
    status: "upcoming",
    desc: "Individual daily research logbook maintained throughout the project, documenting decisions, progress, challenges, and resolutions.",
  },
];

const statusConfig = {
  completed: { label: "Completed", color: "bg-emerald-100 text-emerald-700", dot: "bg-emerald-500", Icon: CheckCircle },
  "in-progress": { label: "In Progress", color: "bg-amber-100 text-amber-700", dot: "bg-amber-500", Icon: Clock },
  upcoming: { label: "Upcoming", color: "bg-gray-100 text-gray-500", dot: "bg-gray-400", Icon: Calendar },
};

function MilestonesPage() {
  const [openId, setOpenId] = useState<string | null>("proposal-pres");
  const [filter, setFilter] = useState<string>("all");

  const filtered = filter === "all" ? milestones : milestones.filter((m) => m.status === filter);

  const totalMarks = milestones.reduce((sum, m) => sum + parseInt(m.marks), 0);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        {/* Header */}
        <div className="bg-gradient-dark-purple py-14 px-5">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs font-bold tracking-widest text-purple-200 uppercase mb-3">Assessments</p>
            <h1 className="text-3xl lg:text-5xl font-bold text-white">Project Milestones</h1>
            <p className="mt-3 text-white/70 max-w-2xl mx-auto">
              All assessments, dates, and marks allocated for the IPITPH research project — IT4010.
            </p>
            <p className="mt-2 text-white/50 text-sm">Total Assessment Marks: {totalMarks}%</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-5 lg:px-8 mt-8">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {[["all", "All Milestones"], ["completed", "Completed"], ["in-progress", "In Progress"], ["upcoming", "Upcoming"]].map(([val, lbl]) => (
              <button
                key={val}
                onClick={() => setFilter(val)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                  filter === val
                    ? "bg-primary text-white shadow-[0_4px_12px_-4px_rgb(124_58_237_/_0.4)]"
                    : "bg-white border border-border text-gray-dark hover:border-primary hover:text-primary"
                }`}
              >
                {lbl}
              </button>
            ))}
          </div>

          {/* Milestone list */}
          <div className="space-y-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((m) => {
                const isOpen = openId === m.id;
                const sc = statusConfig[m.status as keyof typeof statusConfig];
                const StatusIcon = sc.Icon;
                return (
                  <motion.div
                    key={m.id}
                    layout
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    className="bg-white rounded-2xl border border-border overflow-hidden shadow-card"
                  >
                    <button
                      onClick={() => setOpenId(isOpen ? null : m.id)}
                      className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-purple-100/20 transition-colors"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <StatusIcon className={`h-5 w-5 shrink-0 ${
                          m.status === "completed" ? "text-emerald-500" : m.status === "in-progress" ? "text-amber-500" : "text-gray-400"
                        }`} />
                        <div className="min-w-0">
                          <p className="font-bold text-dark text-sm lg:text-base truncate">{m.label}</p>
                          <div className="flex flex-wrap items-center gap-2 mt-0.5">
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                              <Calendar className="h-3 w-3" /> {m.date}
                            </span>
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${sc.color}`}>{sc.label}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 shrink-0 ml-3">
                        <div className="hidden sm:flex items-center gap-1.5 bg-purple-100 rounded-full px-3 py-1">
                          <Award className="h-3.5 w-3.5 text-primary" />
                          <span className="text-xs font-bold text-primary">{m.marks}</span>
                        </div>
                        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                          <ChevronDown className="h-5 w-5 text-muted-foreground" />
                        </motion.div>
                      </div>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="body"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-5 pt-1 border-t border-border">
                            <div className="flex flex-wrap gap-4 mb-3">
                              <div className="text-xs text-muted-foreground">
                                <span className="font-bold text-dark">Date: </span>{m.date}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                <span className="font-bold text-dark">Marks: </span>
                                <span className="text-primary font-bold">{m.marks}</span>
                              </div>
                            </div>
                            <p className="text-sm text-gray-default leading-relaxed">{m.desc}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
