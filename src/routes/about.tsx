import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Mail, User, Brain, Salad, Siren, Mic2, GraduationCap, Star } from "lucide-react";
import rachithImg from "@/assets/images/team/rachith1.JPG";
import tharinduImg from "@/assets/images/team/tharindu.jpeg";
import githadiImg from "@/assets/images/team/githadi.jpeg";
import kavindaImg from "@/assets/images/team/kavinda.jpeg";


export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Us - PediTrack IPITPH | SLIIT Research Group 25-26J-442" },
      { name: "description", content: "Meet the research team behind IPITPH - Group 25-26J-442, Research Project, SLIIT 2025/2026." },
    ],
  }),
});

const members = [
  {
    name: "Rachith Tharana Munasing",
    reg: "IT22107114",
    email: "IT22107114@my.sliit.lk",
    component: "AI-Driven Predictive Health Analytics with Multi-Domain Integration",
    role: "Group Leader",
    Icon: Brain,
    color: "from-violet-500 to-purple-700",
    img: rachithImg,
    isLeader: true,
  },
  {
    name: "Tharindu Nawarathne",
    reg: "IT22218612",
    email: "IT22218612@my.sliit.lk",
    component: "ML-Driven Personalized Nutrition Optimization with Behavioral Analysis",
    role: "Research Member",
    Icon: Salad,
    color: "from-emerald-500 to-teal-700",
    img: tharinduImg,
    isLeader: false,
  },
  {
    name: "Githadi Wijayarathna",
    reg: "IT22087010",
    email: "IT22087010@my.sliit.lk",
    component: "Real-Time Emergency Response Integration with Predictive Risk Assessment",
    role: "Research Member",
    Icon: Siren,
    color: "from-rose-500 to-red-700",
    img: githadiImg,
    isLeader: false,
  },
  {
    name: "Kavinda Kurukulasooriya",
    reg: "IT22121738",
    email: "IT22121738@my.sliit.lk",
    component: "Multilingual Voice-Activated Caregiver Support System",
    role: "Research Member",
    Icon: Mic2,
    color: "from-amber-500 to-orange-600",
    img: kavindaImg,
    isLeader: false,
  },
];

const supervisors = [
  { name: "Prof. Samantha Thelijjagoda", role: "Supervisor", inst: "SLIIT" },
  { name: "Ms. Hansi De Silva", role: "Co-Supervisor", inst: "SLIIT" },
  { name: "Dr. Bandara Subasinghe", role: "External Supervisor", inst: "" },
];

function MemberCard({ m, index }: { m: typeof members[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl border border-border shadow-card hover:shadow-card-hover transition-shadow overflow-hidden"
    >
      {/* Avatar area */}
      <div className={`relative h-36 bg-gradient-to-br ${m.color} flex items-center justify-center`}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 30% 30%, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="relative w-24 h-24 rounded-full bg-white/20 border-4 border-white/30 flex items-center justify-center overflow-hidden bg-white">
          {m.img ? (
            <img src={m.img} alt={m.name} className="w-full h-full object-cover" />
          ) : (
            <User className="h-12 w-12 text-white/80" />
          )}
        </div>
        {m.isLeader && (
          <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/20 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/30">
            <Star className="h-3 w-3 text-yellow-300 fill-yellow-300" />
            <span className="text-[10px] font-bold text-white">Leader</span>
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-start gap-3">
          <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${m.color} flex items-center justify-center shrink-0`}>
            <m.Icon className="h-5 w-5 text-white" />
          </div>
          <div className="min-w-0">
            <h3 className="font-bold text-dark text-base">{m.name}</h3>
            <p className="text-xs text-primary font-semibold">{m.reg}</p>
          </div>
        </div>
        <p className="mt-3 text-sm text-gray-default leading-relaxed">{m.component}</p>
        <a
          href={`mailto:${m.email}`}
          className="mt-4 flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
        >
          <Mail className="h-4 w-4 group-hover:text-primary" />
          <span className="truncate">{m.email}</span>
        </a>
      </div>
    </motion.div>
  );
}

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        {/* Header */}
        <div className="bg-gradient-dark-purple py-14 px-5">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs font-bold tracking-widest text-purple-200 uppercase mb-3">The Team</p>
            <h1 className="text-3xl lg:text-5xl font-bold text-white">About Us</h1>
            <p className="mt-3 text-white/70 max-w-2xl mx-auto">
              Group 25-26J-442 - Research Project, Faculty of Computing, SLIIT 2025/2026.
            </p>
          </div>
        </div>

        {/* Project info strip */}
        <div className="bg-white border-b border-border">
          <div className="max-w-5xl mx-auto px-5 lg:px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: "Group", value: "25-26J-442" },
              { label: "Module", value: "IT4010 Research Project" },
              { label: "Year", value: "2025 / 2026" },
              { label: "Institution", value: "SLIIT" },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-xs font-bold tracking-widest text-primary uppercase">{item.label}</p>
                <p className="mt-1 font-bold text-dark text-sm">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Members */}
        <div className="max-w-5xl mx-auto px-5 lg:px-8 mt-12">
          <h2 className="text-xl font-bold text-dark mb-6">Research Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {members.map((m, i) => (
              <MemberCard key={m.reg} m={m} index={i} />
            ))}
          </div>
        </div>

        {/* Supervisors */}
        <div className="max-w-5xl mx-auto px-5 lg:px-8 mt-14">
          <h2 className="text-xl font-bold text-dark mb-6">Supervisors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {supervisors.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-2xl border border-border p-6 shadow-card text-center"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-7 w-7 text-white" />
                </div>
                <p className="text-[10px] font-bold tracking-widest text-primary uppercase">{s.role}</p>
                <p className="mt-1 font-bold text-dark">{s.name}</p>
                {s.inst && <p className="text-sm text-muted-foreground">{s.inst}</p>}
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
