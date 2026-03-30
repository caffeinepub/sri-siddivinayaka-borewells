import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Building2,
  CheckCircle2,
  Clock,
  Cpu,
  Droplets,
  Factory,
  Home,
  MapPin,
  Menu,
  Phone,
  Search,
  Star,
  Truck,
  Wheat,
  X,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const STATS = [
  { icon: Clock, value: "30+", label: "Years Experience" },
  { icon: Droplets, value: "60,000+", label: "Borewells Drilled" },
  { icon: Truck, value: "10+", label: "Vehicles" },
  { icon: Search, value: "Free", label: "Site Inspection" },
];

const SERVICES = [
  {
    icon: Wheat,
    title: "Agriculture Borewells",
    description:
      "Deep borewells for farms and agricultural land to ensure reliable water supply for irrigation and crop growth throughout the year.",
  },
  {
    icon: Home,
    title: "Residential Borewells",
    description:
      "Clean groundwater solutions for homes, villas, and apartment complexes. Safe, hygienic water access for your family's daily needs.",
  },
  {
    icon: Building2,
    title: "Commercial Borewells",
    description:
      "High-capacity borewells for offices, hotels, hospitals, and commercial establishments. Uninterrupted water supply for your business.",
  },
  {
    icon: Factory,
    title: "Industrial Borewells",
    description:
      "Heavy-duty borewells designed for industrial facilities, manufacturing plants, and large-scale water requirements.",
  },
];

const WHY_US = [
  {
    icon: Cpu,
    title: "Robo Technology",
    desc: "Advanced robotic drilling equipment for precise and efficient borewell construction.",
  },
  {
    icon: CheckCircle2,
    title: "30 Years Experience",
    desc: "Three decades of expertise in borewell drilling across Telangana and surrounding regions.",
  },
  {
    icon: Search,
    title: "Free Site Inspection",
    desc: "No-cost on-site survey and water availability assessment before drilling begins.",
  },
  {
    icon: Star,
    title: "Quality Guaranteed",
    desc: "60,000+ successful borewells drilled \u2014 your satisfaction and water security is our commitment.",
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", phone: "", message: "" });
    }, 4000);
  };

  const navigateTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* ── HEADER ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-card" : "bg-white"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-8">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 shrink-0"
            data-ocid="nav.link"
          >
            <div className="w-10 h-10 rounded bg-navy flex items-center justify-center shrink-0">
              <span className="text-white font-black text-sm tracking-tight">
                SSB
              </span>
            </div>
            <div className="hidden sm:block">
              <div className="text-navy font-black text-sm leading-tight">
                Sri Siddivinayaka
              </div>
              <div className="text-orange font-bold text-xs tracking-widest uppercase">
                Borewells
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm font-semibold text-foreground hover:text-orange transition-colors uppercase tracking-wide"
                data-ocid="nav.link"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:9948955693"
              className="flex items-center gap-1.5 text-sm font-semibold text-navy"
            >
              <Phone className="w-4 h-4 text-orange" />
              9948955693
            </a>
            <Button
              asChild
              className="bg-orange hover:bg-orange-dark text-white rounded-full px-5 font-bold text-sm"
              data-ocid="nav.primary_button"
            >
              <a href="#contact">Get a Quote</a>
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="md:hidden p-2 text-navy"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            data-ocid="nav.toggle"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-border px-4 py-4 flex flex-col gap-3">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm font-semibold text-foreground uppercase tracking-wide py-1"
                onClick={() => setMenuOpen(false)}
                data-ocid="nav.link"
              >
                {l.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => navigateTo("#contact")}
              className="inline-flex items-center justify-center bg-orange hover:bg-orange-dark text-white rounded-full font-bold px-5 py-2 text-sm transition-colors"
              data-ocid="nav.primary_button"
            >
              Get a Quote
            </button>
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section
        id="home"
        className="relative flex items-center min-h-screen pt-16"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-borewell.dim_1400x700.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative container mx-auto px-4 md:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-block bg-orange/90 text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded mb-5">
              Jadcherla, Telangana
            </div>
            <h1
              className="text-4xl md:text-6xl font-black text-white uppercase leading-tight mb-5"
              style={{ letterSpacing: "-0.01em" }}
            >
              TRUSTED
              <br />
              <span className="text-orange">BOREWELL</span>
              <br />
              EXPERTS
            </h1>
            <p className="text-white/85 text-lg mb-8 max-w-xl leading-relaxed">
              Sri Siddivinayaka Borewells \u2014 30 years of excellence, 60,000+
              borewells drilled. Serving agriculture, residential, commercial
              &amp; industrial needs with Robo Technology.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="bg-orange hover:bg-orange-dark text-white font-bold px-7 py-3 rounded text-sm uppercase tracking-wider"
                data-ocid="hero.primary_button"
              >
                <a href="#contact">Get Free Quote</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white text-white bg-white/10 hover:bg-white/20 font-bold px-7 py-3 rounded text-sm uppercase tracking-wider"
                data-ocid="hero.secondary_button"
              >
                <a href="#services">Our Services</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="bg-navy py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center gap-2"
              >
                <s.icon className="w-7 h-7 text-orange" />
                <div className="text-3xl md:text-4xl font-black text-white">
                  {s.value}
                </div>
                <div className="text-xs uppercase tracking-widest text-white/60 font-semibold">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="text-orange text-xs font-bold uppercase tracking-widest mb-2">
              What We Do
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-navy uppercase tracking-wide">
              Our Services
            </h2>
            <div className="w-12 h-1 bg-orange mx-auto mt-4 rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-navy rounded-lg p-7 flex flex-col gap-4 shadow-card group hover:-translate-y-1 transition-transform duration-200"
                data-ocid={`services.item.${i + 1}`}
              >
                <div className="w-12 h-12 rounded bg-orange/15 flex items-center justify-center">
                  <svc.icon className="w-6 h-6 text-orange" />
                </div>
                <h3 className="text-white font-black uppercase text-sm tracking-wide">
                  {svc.title}
                </h3>
                <p className="text-white/65 text-sm leading-relaxed">
                  {svc.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="text-orange text-xs font-bold uppercase tracking-widest mb-2">
              Our Strengths
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-navy uppercase tracking-wide">
              Why Choose Us
            </h2>
            <div className="w-12 h-1 bg-orange mx-auto mt-4 rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_US.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-background rounded-lg p-6 flex flex-col gap-3 border border-border shadow-xs"
              >
                <div className="w-11 h-11 rounded bg-orange/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-orange" />
                </div>
                <h3 className="text-navy font-black text-sm uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* About text block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-16 bg-navy rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8"
          >
            <div className="flex-1">
              <div className="text-orange text-xs font-bold uppercase tracking-widest mb-3">
                About Us
              </div>
              <h3 className="text-white font-black text-2xl md:text-3xl uppercase mb-4">
                Sri Siddivinayaka Borewells
              </h3>
              <p className="text-white/70 leading-relaxed mb-6">
                Established in Jadcherla, Telangana, we have been the most
                trusted name in borewell drilling for over 30 years. With
                state-of-the-art Robo Technology and a fleet of 10+
                well-equipped vehicles, we deliver precision drilling services
                for every need \u2014 from small farms to large industrial
                complexes. Our team of experienced professionals ensures every
                borewell meets the highest safety and quality standards.
              </p>
              <Button
                asChild
                className="bg-orange hover:bg-orange-dark text-white font-bold uppercase tracking-wider text-sm"
                data-ocid="about.primary_button"
              >
                <a href="#contact">Get Free Inspection</a>
              </Button>
            </div>
            <div className="flex-shrink-0 grid grid-cols-2 gap-3 w-full md:w-72">
              <div className="col-span-2 bg-white/10 rounded-lg p-5 flex items-center gap-3">
                <Cpu className="w-8 h-8 text-orange shrink-0" />
                <div>
                  <div className="text-white font-black text-lg">Robo Tech</div>
                  <div className="text-white/60 text-xs">Advanced drilling</div>
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-5 flex flex-col items-center text-center">
                <div className="text-orange font-black text-2xl">30+</div>
                <div className="text-white/60 text-xs mt-1">Years</div>
              </div>
              <div className="bg-white/10 rounded-lg p-5 flex flex-col items-center text-center">
                <div className="text-orange font-black text-2xl">60K+</div>
                <div className="text-white/60 text-xs mt-1">Borewells</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-20 bg-navy">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="text-orange text-xs font-bold uppercase tracking-widest mb-2">
              Reach Us
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-wide">
              Contact Us
            </h2>
            <div className="w-12 h-1 bg-orange mx-auto mt-4 rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <div>
                <div className="text-white font-black text-xl mb-1">
                  Sri Siddivinayaka Borewells
                </div>
                <div className="text-white/60 text-sm">
                  Your trusted borewell partner since 1994
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded bg-orange/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5 text-orange" />
                </div>
                <div>
                  <div className="text-white/50 text-xs uppercase tracking-wider mb-0.5">
                    Phone
                  </div>
                  <a
                    href="tel:9948955693"
                    className="text-white font-bold text-lg hover:text-orange transition-colors"
                  >
                    9948955693
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded bg-orange/20 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-orange" />
                </div>
                <div>
                  <div className="text-white/50 text-xs uppercase tracking-wider mb-0.5">
                    Address
                  </div>
                  <div className="text-white text-sm leading-relaxed">
                    Signal gadda road, Kalwakurty road,
                    <br />
                    Near BC Hostel, Jadcherla,
                    <br />
                    Telangana 509302
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded bg-orange/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5 text-orange" />
                </div>
                <div>
                  <div className="text-white/50 text-xs uppercase tracking-wider mb-0.5">
                    Working Hours
                  </div>
                  <div className="text-white text-sm">
                    Monday \u2013 Saturday: 8:00 AM \u2013 6:00 PM
                  </div>
                </div>
              </div>

              <div className="mt-2 bg-orange/15 border border-orange/30 rounded-lg p-4">
                <div className="text-orange font-bold text-sm uppercase tracking-wide mb-1">
                  Free Site Inspection
                </div>
                <div className="text-white/70 text-sm">
                  Call us today for a no-cost site visit and water assessment.
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-7 flex flex-col gap-4"
              data-ocid="contact.modal"
            >
              <h3 className="text-navy font-black text-lg uppercase tracking-wide">
                Send Us a Message
              </h3>

              <div className="flex flex-col gap-1.5">
                <label
                  className="text-sm font-semibold text-foreground"
                  htmlFor="contact-name"
                >
                  Your Name
                </label>
                <Input
                  id="contact-name"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, name: e.target.value }))
                  }
                  required
                  className="border-border"
                  data-ocid="contact.input"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  className="text-sm font-semibold text-foreground"
                  htmlFor="contact-phone"
                >
                  Phone Number
                </label>
                <Input
                  id="contact-phone"
                  placeholder="Enter your phone number"
                  type="tel"
                  value={form.phone}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, phone: e.target.value }))
                  }
                  required
                  className="border-border"
                  data-ocid="contact.input"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  className="text-sm font-semibold text-foreground"
                  htmlFor="contact-msg"
                >
                  Message
                </label>
                <Textarea
                  id="contact-msg"
                  placeholder="Tell us about your requirement..."
                  value={form.message}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, message: e.target.value }))
                  }
                  required
                  rows={4}
                  className="border-border resize-none"
                  data-ocid="contact.textarea"
                />
              </div>

              {submitted ? (
                <div
                  className="flex items-center gap-2 bg-green-50 border border-green-200 rounded p-3"
                  data-ocid="contact.success_state"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span className="text-green-700 text-sm font-semibold">
                    Thank you! We'll contact you soon.
                  </span>
                </div>
              ) : (
                <Button
                  type="submit"
                  className="bg-orange hover:bg-orange-dark text-white font-bold uppercase tracking-wider w-full"
                  data-ocid="contact.submit_button"
                >
                  Send Message
                </Button>
              )}
            </motion.form>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[oklch(0.18_0.038_248)] py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-orange flex items-center justify-center shrink-0">
                <span className="text-white font-black text-sm">SSB</span>
              </div>
              <div>
                <div className="text-white font-black text-sm leading-tight">
                  Sri Siddivinayaka Borewells
                </div>
                <div className="text-white/50 text-xs mt-0.5">
                  Jadcherla, Telangana 509302
                </div>
              </div>
            </div>

            <nav className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-white/60 text-xs uppercase tracking-wider hover:text-orange transition-colors"
                  data-ocid="nav.link"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-white/40 text-xs">
            <span>
              \u00a9 {new Date().getFullYear()} Sri Siddivinayaka Borewells. All
              rights reserved.
            </span>
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/70 transition-colors"
            >
              Built with \u2764\ufe0f using caffeine.ai
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
