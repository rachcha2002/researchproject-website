import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Smartphone, PlayCircle, Download, Shield, Zap, Sparkles } from "lucide-react";

export const Route = createFileRoute("/product")({
  component: ProductPage,
  head: () => ({
    meta: [
      { title: "Product - PediTrack IPITPH | Download APK & Demo" },
      { name: "description", content: "Download the PediTrack IPITPH mobile application APK and watch the demonstration." },
    ],
  }),
});

function ProductPage() {
  const apkUrl = import.meta.env.VITE_PRODUCT_APK_URL || "";
  const demoUrl = import.meta.env.VITE_PRODUCT_DEMO_URL || "";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        {/* Header */}
        <div className="bg-gradient-dark-purple py-14 px-5">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs font-bold tracking-widest text-purple-200 uppercase mb-3">IPITPH Mobile App</p>
            <h1 className="text-3xl lg:text-5xl font-bold text-white">Product & Demo</h1>
            <p className="mt-3 text-white/70 max-w-2xl mx-auto">
              Download the PediTrack mobile application and see how AI-driven predictive intelligence
              is transforming pediatric healthcare.
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-5 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* APK Download Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl border border-border shadow-card p-8 flex flex-col justify-center items-center text-center relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent opacity-50" />
            <div className="relative z-10 w-full flex flex-col items-center">
              <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl transform group-hover:scale-105 transition-transform">
                <Smartphone className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-dark mb-2">Android APK</h2>
              <p className="text-gray-default mb-8 max-w-sm">
                Install the PediTrack app directly on your Android device to test the AI models and interface.
              </p>
              
              {apkUrl ? (
                <a
                  href={apkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-white font-bold tracking-wide hover:bg-primary-light transition-colors shadow-lg shadow-primary/30"
                >
                  <Download className="h-5 w-5" /> Download APK
                </a>
              ) : (
                <div className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gray-100 text-gray-400 font-bold tracking-wide cursor-not-allowed">
                  <Download className="h-5 w-5" /> Release Pending
                </div>
              )}
              <p className="text-xs text-muted-foreground mt-4">Requires Android 8.0 or higher.</p>
            </div>
          </motion.div>

          {/* Demo Video Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl border border-border shadow-card p-8 flex flex-col justify-center items-center text-center relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent opacity-50" />
            <div className="relative z-10 w-full flex flex-col items-center">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl transform group-hover:scale-105 transition-transform">
                <PlayCircle className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-dark mb-2">Watch Demo</h2>
              <p className="text-gray-default mb-8 max-w-sm">
                View the complete system walkthrough, showcasing the four integrated intelligent components.
              </p>

              {demoUrl ? (
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-teal-600 text-white font-bold tracking-wide hover:bg-teal-500 transition-colors shadow-lg shadow-teal-600/30"
                >
                  <PlayCircle className="h-5 w-5 pl-1" /> Play Video
                </a>
              ) : (
                <div className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gray-100 text-gray-400 font-bold tracking-wide cursor-not-allowed">
                  <PlayCircle className="h-5 w-5" /> Video Pending
                </div>
              )}
              <p className="text-xs text-muted-foreground mt-4 whitespace-nowrap">Full 1080p demonstration.</p>
            </div>
          </motion.div>
        
        </div>

        {/* Feature Highlights */}
        <div className="max-w-5xl mx-auto px-5 lg:px-8 mt-16">
          <h3 className="text-xl font-bold text-dark mb-6 text-center">Product Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: Sparkles, title: "AI Integration", desc: "LSTM-DNN and Random Forest models running seamlessly." },
              { icon: Shield, title: "Data Privacy", desc: "Local processing and encrypted data-store for child privacy." },
              { icon: Zap, title: "Real-time Alerts", desc: "Instant teleconsultation and critical risk notifications." },
            ].map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-purple-100/40 border border-purple-200/60 p-6 rounded-2xl flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-border flex items-center justify-center shrink-0 shadow-sm">
                  <f.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-dark text-sm">{f.title}</h4>
                  <p className="text-sm text-gray-default mt-1 leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
