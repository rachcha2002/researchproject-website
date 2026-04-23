import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FileText, Download, Clock, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/documents")({
  component: DocumentsPage,
  head: () => ({
    meta: [
      { title: "Documents - PediTrack IPITPH | SLIIT Research" },
      { name: "description", content: "All research documents for IPITPH - project charter, proposal, progress reports, checklists, and final documents." },
    ],
  }),
});

type DocStatus = "available" | "pending";

interface Doc {
  label: string;
  desc?: string;
  status: DocStatus;
  href?: string;
}

interface DocGroup {
  category: string;
  docs: Doc[];
}

const docGroups: DocGroup[] = [
  {
    category: "Project Charter",
    docs: [
      { label: "Group Project Charter - 25-26J-442", status: import.meta.env.VITE_DOCS_CHARTER ? "available" : "pending", href: import.meta.env.VITE_DOCS_CHARTER },
    ],
  },
  {
    category: "Proposal Documents",
    docs: [
      { label: "IT22107114 - Individual Component Proposal (AI Predictive Analytics)", status: import.meta.env.VITE_DOCS_PROP_THARANA ? "available" : "pending", href: import.meta.env.VITE_DOCS_PROP_THARANA },
      { label: "IT22218612 - Individual Component Proposal (Nutrition Optimization)", status: import.meta.env.VITE_DOCS_PROP_THARINDU ? "available" : "pending", href: import.meta.env.VITE_DOCS_PROP_THARINDU },
      { label: "IT22087010 - Individual Component Proposal (Emergency Response)", status: import.meta.env.VITE_DOCS_PROP_GITHADI ? "available" : "pending", href: import.meta.env.VITE_DOCS_PROP_GITHADI },
      { label: "IT22121738 - Individual Component Proposal (Voice Assistant)", status: import.meta.env.VITE_DOCS_PROP_KAVINDA ? "available" : "pending", href: import.meta.env.VITE_DOCS_PROP_KAVINDA },
    ],
  },
  {
    category: "Checklists",
    docs: [
      { label: "Check List 1", status: import.meta.env.VITE_DOCS_CHECKLIST1 ? "available" : "pending", href: import.meta.env.VITE_DOCS_CHECKLIST1 },
      { label: "Check List 2", status: import.meta.env.VITE_DOCS_CHECKLIST2 ? "available" : "pending", href: import.meta.env.VITE_DOCS_CHECKLIST2 },
    ],
  },
  {
    category: "Progress Reports",
    docs: [
      { label: "Progress Report 1", status: import.meta.env.VITE_DOCS_PR1 ? "available" : "pending", href: import.meta.env.VITE_DOCS_PR1 },
      { label: "Progress Report 2", status: import.meta.env.VITE_DOCS_PR2 ? "available" : "pending", href: import.meta.env.VITE_DOCS_PR2 },
    ],
  },
  {
    category: "Final Documents",
    docs: [
      { label: "Final Report - IT22107114 (AI Predictive Analytics)", status: import.meta.env.VITE_DOCS_FINAL_THARANA ? "available" : "pending", href: import.meta.env.VITE_DOCS_FINAL_THARANA },
      { label: "Final Report - IT22218612 (Nutrition Optimization)", status: import.meta.env.VITE_DOCS_FINAL_THARINDU ? "available" : "pending", href: import.meta.env.VITE_DOCS_FINAL_THARINDU },
      { label: "Final Report - IT22087010 (Emergency Response)", status: import.meta.env.VITE_DOCS_FINAL_GITHADI ? "available" : "pending", href: import.meta.env.VITE_DOCS_FINAL_GITHADI },
      { label: "Final Report - IT22121738 (Voice Assistant)", status: import.meta.env.VITE_DOCS_FINAL_KAVINDA ? "available" : "pending", href: import.meta.env.VITE_DOCS_FINAL_KAVINDA },
      { label: "Final Group Report - IPITPH", status: import.meta.env.VITE_DOCS_FINAL_GROUP ? "available" : "pending", href: import.meta.env.VITE_DOCS_FINAL_GROUP },
    ],
  },
  {
    category: "Research Paper",
    docs: [
      { label: "IEEE Conference Paper - IPITPH", status: import.meta.env.VITE_DOCS_PAPER ? "available" : "pending", href: import.meta.env.VITE_DOCS_PAPER },
    ],
  },
];

function DocRow({ doc, index }: { doc: Doc; index: number }) {
  const isAvailable = doc.status === "available";
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className="flex items-center justify-between py-3.5 px-4 rounded-xl hover:bg-purple-100/30 transition-colors group"
    >
      <div className="flex items-center gap-3 min-w-0">
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${isAvailable ? "bg-primary/10" : "bg-gray-100"}`}>
          <FileText className={`h-4 w-4 ${isAvailable ? "text-primary" : "text-gray-400"}`} />
        </div>
        <p className={`text-sm font-medium truncate ${isAvailable ? "text-dark" : "text-muted-foreground"}`}>
          {doc.label}
        </p>
      </div>
      <div className="ml-4 shrink-0">
        {isAvailable ? (
          <a
            href={doc.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary text-white text-xs font-semibold hover:bg-primary-light transition-colors"
          >
            <Download className="h-3 w-3" /> View
          </a>
        ) : (
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-100 text-gray-400 text-xs font-semibold">
            <Clock className="h-3 w-3" /> Pending
          </span>
        )}
      </div>
    </motion.div>
  );
}

function DocumentsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        {/* Header */}
        <div className="bg-gradient-dark-purple py-14 px-5">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs font-bold tracking-widest text-purple-200 uppercase mb-3">Resources</p>
            <h1 className="text-3xl lg:text-5xl font-bold text-white">Project Documents</h1>
            <p className="mt-3 text-white/70 max-w-2xl mx-auto">
              All documents produced throughout the IPITPH research project. Links will be activated as documents are finalized.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-5 lg:px-8 mt-10 space-y-6">
          {docGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: gi * 0.07 }}
              className="bg-white rounded-2xl border border-border shadow-card overflow-hidden"
            >
              <div className="px-5 py-4 bg-purple-100/40 border-b border-border flex items-center justify-between">
                <h2 className="font-bold text-dark flex items-center gap-2">
                  <ExternalLink className="h-4 w-4 text-primary" />
                  {group.category}
                </h2>
                <span className="text-xs text-muted-foreground">
                  {group.docs.filter((d) => d.status === "available").length}/{group.docs.length} available
                </span>
              </div>
              <div className="px-2 py-2 divide-y divide-border/40">
                {group.docs.map((doc, di) => (
                  <DocRow key={doc.label} doc={doc} index={di} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
