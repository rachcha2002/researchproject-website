import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2, AlertCircle, Linkedin } from "lucide-react";

// ─── STEP: Paste your Formspree endpoint here once you sign up at https://formspree.io ───
// Example: "https://formspree.io/f/xyzabcde"
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mgorpplz";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Us - PediTrack IPITPH | SLIIT Research" },
      { name: "description", content: "Contact Group 25-26J-442 - IPITPH research project, IT4010, SLIIT 2025/2026." },
    ],
  }),
});

type Status = "idle" | "sending" | "success" | "error";

function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        const data = await res.json();
        setErrorMsg(data?.errors?.[0]?.message ?? "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  const inputCls =
    "w-full px-4 py-3 rounded-xl border border-border bg-background text-dark text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors disabled:opacity-50";

  const isSending = status === "sending";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        {/* Header */}
        <div className="bg-gradient-dark-purple py-14 px-5">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs font-bold tracking-widest text-purple-200 uppercase mb-3">Get in Touch</p>
            <h1 className="text-3xl lg:text-5xl font-bold text-white">Contact Us</h1>
            <p className="mt-3 text-white/70 max-w-2xl mx-auto">
              Have a question about the IPITPH research project? We'd love to hear from you.
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-5 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact info sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-5"
          >
            <div>
              <h2 className="text-xl font-bold text-dark mb-4">Research Group Contact</h2>
              <p className="text-sm text-gray-default leading-relaxed">
                We are a research group at SLIIT working on the IPITPH project for IT4010 Research Project
                module, 2025/2026. Fill the form and we'll receive it directly in our inbox.
              </p>
            </div>

            {[
              {
                Icon: Mail,
                label: "Group Leader Email",
                value: "rachiththarana@gmail.com",
                href: "https://mail.google.com/mail/?view=cm&fs=1&to=rachiththarana@gmail.com",
              },
              {
                Icon: MapPin,
                label: "Institution",
                value: "Sri Lanka Institute of Information Technology (SLIIT)\nNew Kandy Road, Malabe, Sri Lanka",
                href: null,
              },
              {
                Icon: Phone,
                label: "Contact",
                value: "+94 711521161",
                href: null,
              },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-border shadow-card">
                <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center shrink-0">
                  <item.Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold text-primary uppercase tracking-wide">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-sm text-dark hover:text-primary transition-colors font-medium mt-0.5 block">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-dark font-medium mt-0.5 whitespace-pre-line">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Group members */}
            <div className="p-4 bg-purple-100/50 rounded-xl border border-purple-200/60">
              <p className="text-xs font-bold text-primary uppercase tracking-wide mb-2">Group Members</p>
              <ul className="space-y-1.5 text-sm text-gray-default">
                {[
                  { reg: "Rachith", email: "IT22107114@my.sliit.lk", linkedin: import.meta.env.VITE_LINKEDIN_RACHITH || "" },
                  { reg: "Tharindu", email: "IT22218612@my.sliit.lk", linkedin: import.meta.env.VITE_LINKEDIN_THARINDU || "" },
                  { reg: "Githadi", email: "IT22087010@my.sliit.lk", linkedin: import.meta.env.VITE_LINKEDIN_GITHADI || "" },
                  { reg: "Kavinda", email: "IT22121738@my.sliit.lk", linkedin: import.meta.env.VITE_LINKEDIN_KAVINDA || "" },
                ].map((m) => (
                  <li key={m.reg} className="flex items-center justify-between gap-2 flex-wrap py-0.5">
                    <span className="font-mono text-xs font-bold text-dark">{m.reg}</span>
                    <div className="flex items-center gap-3 ml-auto">
                      <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${m.email}`} target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline truncate">
                        {m.email}
                      </a>
                      {m.linkedin && (
                        <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-light transition-colors" title="LinkedIn Profile">
                          <Linkedin className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-2xl border border-border shadow-card p-7 mt-8">
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                    <CheckCircle className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-dark">Message Received!</h3>
                  <p className="mt-2 text-sm text-muted-foreground max-w-xs">
                    Thank you for reaching out. We'll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary-light transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" id="contact-form">
                  <h2 className="text-lg font-bold text-dark mb-8">Send a Message</h2>

                  {/* Error banner */}
                  {status === "error" && (
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-red-50 border border-red-200">
                      <AlertCircle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                      <p className="text-xs text-red-700">{errorMsg}</p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-bold text-dark mb-4">Your Name *</label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        required
                        disabled={isSending}
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Full name"
                        className={inputCls}
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-bold text-dark mb-4">Email Address *</label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        required
                        disabled={isSending}
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className={inputCls}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-bold text-dark mb-4">Subject *</label>
                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      required
                      disabled={isSending}
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="e.g. Research Collaboration / Document Access"
                      className={inputCls}
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-bold text-dark mb-4">Message *</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      disabled={isSending}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Your message here..."
                      className={`${inputCls} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full flex items-center justify-center mt-8gap-2 px-5 py-3.5 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary-light transition-colors shadow-[0_8px_20px_-8px_rgb(124_58_237_/_0.5)] disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSending ? (
                      <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</>
                    ) : (
                      <><Send className="h-4 w-4" /> Send Message</>
                    )}
                  </button>

                  <p className="text-xs text-muted-foreground text-center">
                    Messages are delivered directly to the group leader's inbox via Formspree.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
