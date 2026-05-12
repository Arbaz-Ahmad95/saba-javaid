import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  Instagram,
  MessageCircle,
  Facebook,
  Check,
  Dumbbell,
  HeartPulse,
  Salad,
  Scale,
  Flame,
  Shield,
  MapPin,
  Phone,
  Menu,
  X,
} from "lucide-react";
import heroImg from "@/assets/hero.jpeg";
import img3 from "@/assets/img3.jpeg";
import img2 from "@/assets/img2.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Saba Javaid — Personal Trainer at FitX Gym, Lahore" },
      {
        name: "description",
        content:
          "Train with Saba Javaid, National Player and certified personal trainer at FitX Gym, Defence Road, Lahore. Strength, conditioning, weight loss, and sports performance.",
      },
      { property: "og:title", content: "Saba Javaid — FitX Gym Lahore" },
      {
        property: "og:description",
        content:
          "Personalized training programs by Saba Javaid — National Player, M.Phil Sports Sciences.",
      },
    ],
  }),
  component: Index,
});

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#222] bg-[#0A0A0A]/95 backdrop-blur">
      <div className="mx-auto flex h-32 max-w-7xl items-center justify-between px-4 md:px-8">
        <a href="#home" className="flex items-center">
          <img src="/fitx.png" alt="FitX Gym" className="h-24 w-auto" />
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="font-label text-[15px] uppercase tracking-[0.15em] text-white transition-colors hover:text-accent-yellow"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden rounded-[4px] bg-accent-yellow px-5 py-2.5 font-label text-sm font-bold uppercase tracking-wider text-black transition-transform hover:scale-105 md:inline-block"
        >
          Book a Session
        </a>
        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="md:hidden text-white"
        >
          <Menu size={28} />
        </button>
      </div>
      {open && (
        <div className="fixed inset-0 z-50 bg-black/95 md:hidden">
          <div className="flex items-center justify-between px-4 py-4 border-b border-[#222]">
            <img src="/fitx.png" alt="FitX" className="h-20" />
            <button onClick={() => setOpen(false)} aria-label="Close">
              <X size={28} className="text-white" />
            </button>
          </div>
          <nav className="flex flex-col gap-6 p-8">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="font-label text-2xl uppercase tracking-widest text-white"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-block rounded bg-accent-yellow px-6 py-3 text-center font-label font-bold uppercase tracking-wider text-black"
            >
              Book a Session
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-8rem)] w-full items-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.88) 35%, rgba(139,0,0,0.45) 100%), url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center right",
      }}
    >
      {/* hazard stripe */}
      <div className="hazard-stripe absolute left-0 top-0 h-2 w-full md:h-2.5" />
      <div className="hazard-stripe absolute left-0 top-0 h-full w-2 md:w-2.5" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 md:px-12">
        <p className="animate-fade-up font-label text-[13px] font-medium uppercase tracking-[0.3em] text-accent-yellow">
          Professional Sports Trainer
        </p>
        <h1
          className="animate-fade-up mt-4 font-display text-6xl leading-[0.9] text-white md:text-8xl lg:text-9xl"
          style={{ animationDelay: "0.1s" }}
        >
          SABA JAVAID
        </h1>
        <p
          className="animate-fade-up mt-2 font-display text-3xl leading-none text-accent-yellow md:text-5xl"
          style={{ animationDelay: "0.2s" }}
        >
          National Player
        </p>
        <p
          className="animate-fade-up mt-6 max-w-md font-body text-base text-[#AAAAAA] md:text-lg"
          style={{ animationDelay: "0.3s" }}
        >
          A professional trainer to guide and support you throughout your fitness journey.
        </p>
        <div
          className="animate-fade-up mt-8 flex flex-wrap gap-4"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href="#contact"
            className="rounded-[4px] bg-accent-yellow px-7 py-3.5 font-label text-base font-bold uppercase tracking-wider text-black transition-transform hover:scale-105"
          >
            Start Your Journey
          </a>
          <a
            href="#about"
            className="rounded-[4px] border border-white/80 bg-transparent px-7 py-3.5 font-label text-base font-bold uppercase tracking-wider text-white transition-colors hover:border-accent-yellow hover:text-accent-yellow"
          >
            Learn More
          </a>
        </div>
        <div
          className="animate-fade-up mt-8 flex gap-4"
          style={{ animationDelay: "0.5s" }}
        >
          {[
            { Icon: Instagram, label: "Instagram" },
            { Icon: MessageCircle, label: "WhatsApp" },
            { Icon: Facebook, label: "Facebook" },
          ].map(({ Icon, label }) => (
            <a
              key={label}
              href="#contact"
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:border-accent-yellow hover:text-accent-yellow"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function useCountUp(target: number, start: boolean, duration = 1200) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    const t0 = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      setVal(Math.floor(p * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);
  return val;
}

function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const certs = useCountUp(50, visible);
  const stats = [
    { value: visible ? `${certs}+` : "0+", label: "Certificates" },
    { value: "M.Phil", label: "Qualified" },
    { value: "National", label: "Player" },
    { value: "Defence Rd", label: "Lahore" },
  ];
  return (
    <div
      ref={ref}
      className="grid w-full grid-cols-2 bg-accent-yellow md:grid-cols-4"
    >
      {stats.map((s, i) => (
        <div
          key={s.label}
          className={`flex flex-col items-center justify-center px-4 py-8 text-center ${
            i < stats.length - 1 ? "md:border-r border-black/30" : ""
          } ${i % 2 === 0 ? "border-r border-black/30 md:border-r" : ""} ${
            i < 2 ? "border-b border-black/30 md:border-b-0" : ""
          }`}
        >
          <div className="font-display text-4xl text-black md:text-5xl">
            {s.value}
          </div>
          <div className="mt-1 font-label text-xs uppercase tracking-[0.2em] text-black md:text-sm">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}

function About() {
  return (
    <section
      id="about"
      className="relative border-l-4 border-accent-yellow bg-background py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:px-12 md:items-center">
        <div className="relative">
          <img
            src={img3}
            alt="Saba Javaid at FitX Gym"
            loading="lazy"
            className="aspect-[3/4] w-full rounded object-cover"
            style={{ filter: "saturate(0.85) contrast(1.05)" }}
          />
          <div className="absolute -bottom-2 left-0 h-1 w-16 bg-accent-yellow" />
          <div className="absolute -bottom-2 left-0 h-16 w-1 bg-accent-yellow" />
        </div>
        <div>
          <p className="font-label text-[13px] uppercase tracking-[0.3em] text-accent-yellow">
            About Me
          </p>
          <h2 className="mt-3 font-display text-4xl leading-tight text-white md:text-5xl">
            Workouts With Support And A <span className="text-accent-yellow">Smile</span>
          </h2>
          <p className="mt-6 font-body text-base text-[#AAAAAA]">
            Hi, I'm Saba Javaid — a National Player and certified fitness professional
            with a Masters and M.Phil in Sports Sciences and Physical Education. Based at
            FitX Gym on Defence Road, Lahore, I offer personalized training programs
            designed specifically for women who want real, lasting results.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              "Masters in Sports Sciences",
              "M.Phil in Sports Sciences and Physical Education",
            ].map((c) => (
              <li key={c} className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent-yellow text-black">
                  <Check size={14} strokeWidth={3} />
                </span>
                <span className="font-body text-[15px] text-white">{c}</span>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="mt-8 inline-block font-label text-base font-bold uppercase tracking-wider text-accent-yellow hover:underline"
          >
            Train With Me →
          </a>
        </div>
      </div>
    </section>
  );
}

const SERVICES = [
  { Icon: Dumbbell, title: "Fitness Program", desc: "Customized workout plans for all fitness levels." },
  { Icon: HeartPulse, title: "Cardio Exercises", desc: "High-energy cardio sessions for endurance & fat burn." },
  { Icon: Salad, title: "Diet Plan", desc: "Nutrition guidance tailored to your goals." },
  { Icon: Scale, title: "Weight Loss & Toning", desc: "Targeted programs to slim, tone, and sculpt." },
  { Icon: Flame, title: "Gain Muscle", desc: "Strength-focused training to build lean muscle." },
  { Icon: Shield, title: "Sports Conditioning", desc: "Performance training & injury prevention." },
];

function Services() {
  return (
    <section id="services" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="text-center">
          <h2 className="font-display text-5xl text-white md:text-6xl">
            OUR <span className="text-accent-yellow">SERVICES</span>
          </h2>
          <p className="mt-3 font-body text-base text-[#AAAAAA]">
            Tailored Programs For Every Goal
          </p>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded border border-[#222] bg-[#111] p-7 transition-all hover:-translate-y-1 hover:border-accent-yellow"
            >
              <Icon size={36} className="text-accent-yellow" strokeWidth={1.5} />
              <h3 className="mt-5 font-display text-2xl text-white">{title}</h3>
              <p className="mt-2 font-body text-sm text-[#AAAAAA]">{desc}</p>
              <div className="mt-6 font-label text-[13px] uppercase tracking-wider text-accent-yellow">
                Enquire →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  const certs = [
    "E-Certificate: Level 1 Strength & Conditioning",
    "E-Certificate: Immunity Booster Program",
    "E-Certificate: Kids Support and Health",
    "Certificate: Sports-related Concussion Workshop (Pakistan Society of Sports Biomechanics)",
    "Personal Training & Nutrition Coaching",
  ];
  return (
    <section
      id="certifications"
      className="relative overflow-hidden py-24"
      style={{
        background:
          "radial-gradient(circle at 30% 50%, #2a0505 0%, #1A0000 50%, #0A0000 100%)",
      }}
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:items-center md:px-12">
        <div className="relative">
          <img
            src={img2}
            alt="Saba Javaid illustrated portrait"
            loading="lazy"
            className="w-full rounded object-cover"
          />
        </div>
        <div>
          <p className="font-label text-[13px] uppercase tracking-[0.3em] text-accent-yellow">
            Credentials
          </p>
          <h2 className="mt-3 font-display text-4xl leading-tight text-white md:text-5xl">
            50+ Certifications & <span className="text-accent-yellow">Counting</span>
          </h2>
          <p className="mt-6 font-body text-base text-[#AAAAAA]">
            Internationally recognized certifications covering strength, conditioning,
            nutrition, and youth athletics.
          </p>
          <ul className="mt-8 space-y-3">
            {certs.map((c) => (
              <li
                key={c}
                className="border-l-2 border-accent-yellow bg-black/30 px-4 py-3 font-body text-[15px] text-white"
              >
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function PromoBanner() {
  return (
    <section className="bg-accent-yellow py-20">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="font-label text-[13px] font-semibold uppercase tracking-[0.3em] text-black">
          Limited Spots Available
        </p>
        <h2 className="mt-4 font-display text-5xl leading-[1] text-black md:text-7xl">
          START YOUR FITNESS JOURNEY TODAY
        </h2>
        <p className="mt-5 font-body text-base text-black/70">
          Personal Training at FitX Gym — Defence Road, Lahore
        </p>
        <a
          href="#contact"
          className="mt-9 inline-block rounded-md bg-black px-9 py-4 font-display text-2xl tracking-wider text-accent-yellow transition-transform hover:scale-105"
        >
          BOOK A SESSION NOW
        </a>
      </div>
    </section>
  );
}

function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <section id="contact" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <h2 className="text-center font-display text-5xl text-white md:text-6xl">
          BOOKING & <span className="text-accent-yellow">CONTACT</span>
        </h2>
        <div className="mt-14 grid gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <h3 className="font-display text-3xl text-white">Get In Touch</h3>
            <p className="font-body text-[#AAAAAA]">
              Ready to take the next step? Reach out and let's plan your training.
            </p>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <MapPin className="mt-1 text-accent-yellow" size={20} />
                <div>
                  <div className="font-label text-xs uppercase tracking-widest text-[#AAAAAA]">Address</div>
                  <div className="font-body text-[15px] text-white">FitX Gym, Defence Road, Lahore</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="mt-1 text-accent-yellow" size={20} />
                <div>
                  <div className="font-label text-xs uppercase tracking-widest text-[#AAAAAA]">Phone</div>
                  <div className="font-body text-[15px] text-white">+92-XXX-XXXXXXX</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Instagram className="mt-1 text-accent-yellow" size={20} />
                <div>
                  <div className="font-label text-xs uppercase tracking-widest text-[#AAAAAA]">Instagram</div>
                  <div className="font-body text-[15px] text-white">@fitxgym · @sabajavaids</div>
                </div>
              </li>
            </ul>
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded border border-[#222] bg-[#111] p-6 md:p-8"
          >
            {submitted ? (
              <div className="flex h-full min-h-[300px] flex-col items-center justify-center text-center">
                <div className="font-display text-3xl text-accent-yellow">
                  We'll contact you soon! 💪
                </div>
                <p className="mt-3 font-body text-[#AAAAAA]">
                  Your enquiry has been received.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <Field label="Full Name" id="name">
                  <input id="name" required type="text" className={inputCls} />
                </Field>
                <Field label="Phone Number" id="phone">
                  <input id="phone" required type="tel" className={inputCls} />
                </Field>
                <Field label="Goal" id="goal">
                  <select id="goal" required className={inputCls} defaultValue="">
                    <option value="" disabled>Select goal</option>
                    <option>Weight Loss</option>
                    <option>Muscle Gain</option>
                    <option>Fitness</option>
                    <option>Cardio</option>
                    <option>Sports Conditioning</option>
                  </select>
                </Field>
                <Field label="Preferred Time" id="time">
                  <select id="time" required className={inputCls} defaultValue="">
                    <option value="" disabled>Select time</option>
                    <option>Morning</option>
                    <option>Afternoon</option>
                    <option>Evening</option>
                  </select>
                </Field>
                <Field label="Message" id="message">
                  <textarea id="message" required rows={3} className={inputCls} />
                </Field>
                <button
                  type="submit"
                  className="w-full rounded bg-accent-yellow py-3.5 font-display text-xl tracking-wider text-black transition-transform hover:scale-[1.02]"
                >
                  SEND ENQUIRY
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

const inputCls =
  "w-full rounded border border-[#222] bg-[#0A0A0A] px-4 py-3 font-body text-sm text-white outline-none transition-colors focus:border-accent-yellow";

function Field({
  label,
  id,
  children,
}: {
  label: string;
  id: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block font-label text-xs uppercase tracking-widest text-[#AAAAAA]"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t-2 border-accent-yellow bg-[#050505]">
      <div className="mx-auto max-w-7xl px-6 py-10 md:px-12">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-4">
            <img src="/fitx.png" alt="FitX" className="h-32" />
            <span className="font-label text-[13px] uppercase tracking-[0.2em] text-accent-yellow">
              Train • Strength / Fitness
            </span>
          </div>
          <nav className="flex flex-wrap justify-center gap-6">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="font-label text-sm uppercase tracking-widest text-white hover:text-accent-yellow"
              >
                {n.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-8 border-t border-[#222] pt-6 text-center font-body text-xs text-[#555]">
          © 2025 FitX Gym. All rights reserved. | Defence Road, Lahore
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-white">
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <Services />
        <Certifications />
        <PromoBanner />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
