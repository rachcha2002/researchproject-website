import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ChevronDown, BookOpen, Lightbulb, AlertTriangle, Target, Cog, Cpu } from "lucide-react";

export const Route = createFileRoute("/domain")({
  component: DomainPage,
  head: () => ({
    meta: [
      { title: "Domain — PediTrack IPITPH | SLIIT Research" },
      { name: "description", content: "Research domain, literature survey, research gap, problem, objectives, methodology and technologies for the IPITPH project." },
    ],
  }),
});

const sections = [
  {
    id: "literature",
    label: "Literature Survey",
    Icon: BookOpen,
    content: (
      <div className="space-y-3 text-gray-default leading-relaxed text-sm lg:text-base">
        <p>
          The domain of AI-driven pediatric health monitoring has seen growing attention in recent years.
          Existing tools such as <strong>WHO Anthro</strong> and standard electronic health records focus
          primarily on <em>recording</em> growth measurements rather than predicting future deviations.
        </p>
        <p>
          Studies have explored LSTM-based time-series models for pediatric growth prediction, and
          collaborative filtering has been applied in dietary recommendation systems with limited success in
          culturally specific populations.
        </p>
        <p>
          Emergency response systems in pediatric care have primarily relied on static triage protocols,
          while multilingual NLP for low-resource languages in healthcare contexts remains critically
          underdeveloped. Existing solutions are <strong>fragmented</strong> — each addressing one domain
          in isolation without cross-domain integration.
        </p>
      </div>
    ),
  },
  {
    id: "gap",
    label: "Research Gap",
    Icon: Lightbulb,
    content: (
      <div className="space-y-2 text-sm lg:text-base text-gray-default">
        <p className="mb-3">Despite advances in individual domains, no existing system:</p>
        <ul className="space-y-2.5">
          {[
            "Integrates growth analytics, nutrition optimization, emergency response, and multilingual voice support into one unified mobile platform",
            "Is trained on culturally specific South Asian or Sri Lankan pediatric data",
            "Provides proactive risk prediction (before clinical symptoms appear) rather than reactive post-symptom guidance",
            "Supports low-resource languages such as Sinhala and Tamil for voice-based caregiver interaction",
            "Uses cross-domain feature fusion across growth, nutrition, behavioral, and environmental data simultaneously",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    id: "problem",
    label: "Research Problem",
    Icon: AlertTriangle,
    content: (
      <p className="text-gray-default leading-relaxed text-sm lg:text-base">
        Current pediatric health tools are <strong>reactive, fragmented, and inaccessible</strong> to
        caregivers in multilingual, low-literacy, and resource-constrained environments. Parents and
        healthcare workers lack an integrated AI platform that can proactively detect health risks,
        personalize nutrition advice, respond to emergencies intelligently, and communicate in local
        languages — resulting in delayed interventions and poor child health outcomes, particularly in Sri
        Lanka and similar South Asian contexts.
      </p>
    ),
  },
  {
    id: "objectives",
    label: "Research Objectives",
    Icon: Target,
    content: (
      <div className="space-y-4 text-sm lg:text-base">
        <div className="bg-purple-100/60 rounded-xl p-4 border border-purple-200/60">
          <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Main Objective</p>
          <p className="text-gray-default leading-relaxed">
            To develop an AI-powered mobile-based decision support system that proactively optimizes
            pediatric health outcomes by integrating predictive growth analytics, personalized nutrition
            optimization, real-time emergency response, and multilingual voice-activated caregiver support.
          </p>
        </div>
        {[
          {
            id: "IT22107114", label: "Component 1", items: [
              "Build a Hybrid LSTM-DNN model for multi-domain pediatric health prediction",
              "Integrate WHO/CDC standards for real-time z-score and risk calculations",
              "Achieve growth prediction MAPE below 5% and risk AUC above 0.9",
              "Deploy via FastAPI microservice with React Native and web dashboard interfaces",
            ]
          },
          {
            id: "IT22218612", label: "Component 2", items: [
              "Develop a pediatric nutrition prediction model using ML/DL",
              "Implement a smart meal recommendation system using collaborative filtering",
              "Build a food image-based nutrient estimation tool using CNN",
              "Design a mobile UI with a community nutrition-sharing feed",
            ]
          },
          {
            id: "IT22087010", label: "Component 3", items: [
              "Collect and preprocess pediatric emergency datasets (PECARN, MIMIC‑IV Pediatric)",
              "Train ML models (LSTM, Random Forest, XGBoost) for real-time emergency risk scoring",
              "Integrate WebRTC for live teleconsultation with pediatricians",
              "Implement Google Maps API for dynamic routing to nearest emergency facility",
            ]
          },
          {
            id: "IT22121738", label: "Component 4", items: [
              "Develop a multilingual voice interface using Whisper speech-to-text",
              "Build NLP pipeline with intent and entity extraction from caregiver queries",
              "Implement Retrieval-Augmented Generation (RAG) for clinically grounded responses",
              "Support Sinhala, Tamil, and English with context-aware, empathetic response generation",
            ]
          },
        ].map((c) => (
          <div key={c.id} className="border border-border rounded-xl p-4">
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">{c.label} — {c.id}</p>
            <ul className="space-y-1.5 text-gray-default">
              {c.items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <ChevronDown className="h-4 w-4 text-primary mt-0.5 rotate-[-90deg] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "methodology",
    label: "Methodology",
    Icon: Cog,
    content: (
      <div className="space-y-4 text-sm lg:text-base text-gray-default">
        {[
          {
            title: "Component 1 — Hybrid LSTM-DNN",
            body: "Data collected from 69 Sri Lankan families (265 longitudinal time-points, Colombo, February 2026) and the PIC secondary dataset (64 ICU patients). LSTM layers capture temporal growth trajectories; DNN layers process cross-domain features simultaneously. Four transfer learning strategies were evaluated — all demonstrated domain mismatch, confirming the need for primary Sri Lankan training data. SHAP analysis identified culturally specific dietary features (rice, dhal, local proteins) contributing ~37% of predictive importance.",
          },
          {
            title: "Component 2 — Nutrition Optimization",
            body: "BERT extracts structured nutritional information from caregiver text descriptions. CNN-based image scanner classifies food items and estimates nutrient content. Collaborative filtering personalizes recommendations based on historical child and caregiver behavior patterns. Output includes adaptive meal plans, nutrient gap alerts, and a community nutrition-sharing feed. Datasets: USDA FoodData Central, Food-101, WHO Child Growth Standards.",
          },
          {
            title: "Component 3 — Emergency Response",
            body: "Supervised ML models trained on PECARN and MIMIC-IV Pediatric datasets generate real-time risk scores from vital signs, prior health events, and caregiver-reported symptoms. Risk thresholds trigger alerts, first-response guidance, WebRTC teleconsultation initiation, and Google Maps routing. A post-incident feedback loop retrains the model on outcome data.",
          },
          {
            title: "Component 4 — Multilingual Voice Assistant",
            body: "Whisper API handles multilingual speech-to-text, fine-tuned on pediatric corpora. GPT/Gemini-based NLP extracts intent and entities from queries. RAG pipeline retrieves verified clinical knowledge from vectorized databases (MedIQAD, MedlinePlus) using FAISS/Elasticsearch. Responses are generated to be age-appropriate, linguistically accurate, and emotionally sensitive to caregiver urgency.",
          },
        ].map((m) => (
          <div key={m.title} className="border-l-4 border-primary pl-4 py-1">
            <p className="font-bold text-dark mb-1">{m.title}</p>
            <p className="leading-relaxed">{m.body}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "technologies",
    label: "Technologies Used",
    Icon: Cpu,
    content: (
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-purple-100/60">
              <th className="text-left px-4 py-3 font-bold text-dark rounded-tl-lg">Layer</th>
              <th className="text-left px-4 py-3 font-bold text-dark rounded-tr-lg">Technologies</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["ML/DL Models", "TensorFlow, Keras, LSTM, DNN, Random Forest, XGBoost, BERT, CNN"],
              ["NLP & Voice", "Whisper API, GPT/Gemini, mBART, FAISS, Elasticsearch"],
              ["Mobile App", "React Native"],
              ["Backend", "Node.js, Express, Python FastAPI"],
              ["Database", "MongoDB Atlas"],
              ["Real-time Comm", "WebRTC"],
              ["Navigation", "Google Maps API"],
              ["Explainability", "SHAP"],
              ["Datasets", "PIC, PECARN, MIMIC-IV Pediatric, USDA FoodData Central, Food-101, WHO Growth Standards, Common Voice"],
              ["Deployment", "Docker, CUDA 12.5, RTX 4060"],
            ].map(([layer, tech], i) => (
              <tr key={layer} className={i % 2 === 0 ? "bg-white" : "bg-background"}>
                <td className="px-4 py-3 font-semibold text-dark border-b border-border whitespace-nowrap">{layer}</td>
                <td className="px-4 py-3 text-gray-default border-b border-border">{tech}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
  },
];

function DomainPage() {
  const [active, setActive] = useState<string | null>("literature");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        {/* Page header */}
        <div className="bg-gradient-dark-purple py-14 px-5">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs font-bold tracking-widest text-purple-200 uppercase mb-3">Research</p>
            <h1 className="text-3xl lg:text-5xl font-bold text-white">Research Domain</h1>
            <p className="mt-3 text-white/70 max-w-2xl mx-auto">
              Explore the literature, gap, problem, objectives, methodology, and technologies underpinning the IPITPH project.
            </p>
          </div>
        </div>

        {/* Sections accordion */}
        <div className="max-w-4xl mx-auto px-5 lg:px-8 mt-10 space-y-3">
          {sections.map((s) => {
            const isOpen = active === s.id;
            return (
              <div key={s.id} className="bg-white rounded-2xl border border-border overflow-hidden shadow-card">
                <button
                  onClick={() => setActive(isOpen ? null : s.id)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-purple-100/30 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${isOpen ? "bg-primary" : "bg-purple-100"}`}>
                      <s.Icon className={`h-5 w-5 ${isOpen ? "text-white" : "text-primary"}`} />
                    </div>
                    <span className="font-bold text-dark">{s.label}</span>
                  </div>
                  <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-border">{s.content}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
}
