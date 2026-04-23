 # PediTrack — IPITPH Research Project Website

> **Integrated Predictive Intelligence Platform for Pediatric Healthcare**  
> Group 25-26J-442 | IT4010 Research Project | SLIIT 2025/2026

[![SLIIT](https://img.shields.io/badge/Institution-SLIIT-blue)](https://www.sliit.lk)
[![Module](https://img.shields.io/badge/Module-IT4010-purple)](https://www.sliit.lk)
[![Group](https://img.shields.io/badge/Group-25--26J--442-orange)](.)

---

## 📌 About the Project

IPITPH is an AI-powered mobile-based decision support system designed to transform pediatric healthcare for children aged 2–6 years. The system integrates four intelligent components:

| Component | Student | Focus |
|-----------|---------|-------|
| AI-Driven Predictive Health Analytics | IT22107114 — M A R Tharana | Hybrid LSTM-DNN growth prediction |
| ML-Driven Nutrition Optimization | IT22218612 — T E Nawarathne | Collaborative filtering & CNN food scanning |
| Real-Time Emergency Response | IT22087010 — G S Wijayarathna | Risk scoring, WebRTC teleconsultation |
| Multilingual Voice-Activated Assistant | IT22121738 — K D Kurukulasooriya | Whisper STT + RAG in Sinhala/Tamil/English |

### Supervisors
- **Supervisor:** Prof. Samantha Thelijjagoda — SLIIT
- **Co-Supervisor:** Ms. Hansi De Silva — SLIIT
- **External Supervisor:** Dr. Bandara Subasinghe

---

## 🌐 Website Structure

This repository contains the CDAP research project website with the following pages:

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Project overview, abstract, component cards |
| Domain | `/domain` | Literature survey, research gap, objectives, methodology, technologies |
| Milestones | `/milestones` | All assessments with dates and marks allocated |
| Documents | `/documents` | Project documents with download links |
| Presentations | `/slides` | Slide decks from all presentations |
| About Us | `/about` | Team members and supervisors |
| Contact Us | `/contact` | Contact form and member emails |

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [TanStack Start](https://tanstack.com/start) + React 19 |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Icons | Lucide React |
| UI Components | Radix UI (via shadcn/ui) |
| Build Tool | Vite 7 |
| Runtime | Cloudflare Workers |
| Form Handling | Formspree |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Install & Run

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/peditrack-website.git
cd peditrack-website

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:8080`

> **Note for low-memory machines:** If you see a heap out of memory error, run:
> ```bash
> $env:NODE_OPTIONS="--max-old-space-size=4096"; npm run dev
> ```

### Build for Production

```bash
npm run build
```

---

## ⚙️ Configuration

### Contact Form (Formspree)

The contact form uses [Formspree](https://formspree.io) to send messages directly to the team inbox.

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form, set email to `IT22107114@my.sliit.lk`
3. Copy your endpoint URL (`https://formspree.io/f/xxxxxxxx`)
4. Open `src/routes/contact.tsx` and replace:
   ```ts
   const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
   ```

---

## 📁 Project Structure

```
peditrack-website/
├── src/
│   ├── assets/
│   │   ├── images/          # App screenshots
│   │   └── peditrack_logo/  # Logo assets
│   ├── components/
│   │   ├── site/
│   │   │   ├── Navbar.tsx   # Navigation bar
│   │   │   └── Footer.tsx   # Footer
│   │   └── ui/              # Radix/shadcn UI components
│   ├── routes/
│   │   ├── __root.tsx       # Root layout
│   │   ├── index.tsx        # Home page
│   │   ├── domain.tsx       # Research domain page
│   │   ├── milestones.tsx   # Milestones page
│   │   ├── documents.tsx    # Documents page
│   │   ├── slides.tsx       # Presentations page
│   │   ├── about.tsx        # About Us page
│   │   └── contact.tsx      # Contact Us page
│   ├── styles.css           # Global styles & design tokens
│   └── router.tsx           # Router configuration
├── vite.config.ts
├── wrangler.jsonc           # Cloudflare Workers config
└── package.json
```

---

## 🌍 Deployment

This project is configured for **Cloudflare Pages** deployment.

### Deploy via Cloudflare Pages (GitHub)

1. Push this repo to GitHub
2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com) → Workers & Pages → Create → Pages
3. Connect your GitHub account and select this repo
4. Set build settings:
   - **Build command:** `npm run build`
   - **Output directory:** `.output/public`
5. Click **Save & Deploy**

---

## 👥 Team

| Name | Reg No | Email | Role |
|------|--------|-------|------|
| M A R Tharana | IT22107114 | IT22107114@my.sliit.lk | Group Leader |
| T E Nawarathne | IT22218612 | IT22218612@my.sliit.lk | Research Member |
| G S Wijayarathna | IT22087010 | IT22087010@my.sliit.lk | Research Member |
| K D Kurukulasooriya | IT22121738 | IT22121738@my.sliit.lk | Research Member |

---

## 📄 License

This project is developed for academic purposes as part of the IT4010 Research Project module at SLIIT. All rights reserved by the research group and SLIIT.

---

*Sri Lanka Institute of Information Technology (SLIIT) | Faculty of Computing | 2025/2026*
