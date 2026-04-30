import { useEffect, useState, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ── useInView hook ────────────────────────────────────────────────
function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

// ── Decorative floating shape ─────────────────────────────────────
function Shape({ type, color, style }) {
  if (type === "plus")
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={style} className="absolute pointer-events-none select-none">
        <line x1="12" y1="2" x2="12" y2="22" stroke={color} strokeWidth="3" strokeLinecap="round" />
        <line x1="2" y1="12" x2="22" y2="12" stroke={color} strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  if (type === "arc")
    return (
      <svg width="40" height="22" viewBox="0 0 40 22" fill="none" style={style} className="absolute pointer-events-none select-none">
        <path d="M2 20 Q20 2 38 20" stroke={color} strokeWidth="3.5" strokeLinecap="round" fill="none" />
      </svg>
    );
  return null;
}

// ── Office card ───────────────────────────────────────────────────
function OfficeCard({ city, address, phone, mapUrl, delay }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
      }}
      className="flex items-start gap-4 group"
    >
      {/* Dot */}
      <div className="mt-1.5 w-3 h-3 rounded-full bg-[#E34A2F] flex-shrink-0 group-hover:scale-125 transition-transform duration-200" />
      <div>
        <div className="flex items-center gap-2 mb-1">
          <h4 className="text-gray-900 font-bold text-base">{city}</h4>
          <span className="text-gray-300 font-light">–</span>
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-emerald-600 hover:text-emerald-700 uppercase tracking-wider transition-colors"
          >
            MAP
          </a>
        </div>
        <p className="text-gray-500 text-sm leading-relaxed">{address}</p>
        <p className="text-gray-500 text-sm">{phone}</p>
        <p className="text-gray-400 text-xs mt-0.5 italic">Visit us for in-person project</p>
      </div>
    </div>
  );
}

// ── Contact form ──────────────────────────────────────────────────
function ContactForm() {
  const [formRef, inView] = useInView(0.1);
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div
      ref={formRef}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(36px)",
        transition: "opacity 0.75s ease 0.1s, transform 0.75s ease 0.1s",
      }}
      className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 sm:p-10"
    >
      <h3 className="text-2xl font-black text-gray-900 mb-1">Send us a message</h3>
      <p className="text-gray-400 text-sm mb-8">We'll get back to you within one business day.</p>

      {submitted && (
        <div className="mb-6 flex items-center gap-3 bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-semibold px-4 py-3 rounded-xl">
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-emerald-600 flex-shrink-0">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
          </svg>
          Message sent! We'll be in touch soon.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5 block">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Arjun Mehta"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-[#E34A2F] focus:ring-2 focus:ring-[#E34A2F]/10 transition-all bg-gray-50 focus:bg-white"
            />
          </div>
          <div>
            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5 block">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="arjun@example.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-[#E34A2F] focus:ring-2 focus:ring-[#E34A2F]/10 transition-all bg-gray-50 focus:bg-white"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5 block">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-[#E34A2F] focus:ring-2 focus:ring-[#E34A2F]/10 transition-all bg-gray-50 focus:bg-white"
            />
          </div>
          <div>
            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5 block">Subject</label>
            <select
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 focus:outline-none focus:border-[#E34A2F] focus:ring-2 focus:ring-[#E34A2F]/10 transition-all bg-gray-50 focus:bg-white appearance-none cursor-pointer"
            >
              <option value="" disabled>Select a topic</option>
              <option>Site Visit Request</option>
              <option>Investment Enquiry</option>
              <option>Project Information</option>
              <option>Partnership Opportunity</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        <div>
          <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5 block">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            placeholder="Tell us about your project or query..."
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-[#E34A2F] focus:ring-2 focus:ring-[#E34A2F]/10 transition-all bg-gray-50 focus:bg-white resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full py-4 bg-[#E34A2F] hover:bg-[#C13A20] text-white font-bold text-sm rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#E34A2F]/30 active:translate-y-0"
        >
          Send Message →
        </button>
      </form>
    </div>
  );
}

// ── Main page ─────────────────────────────────────────────────────
export default function Contact() {
  const [loaded, setLoaded] = useState(false);
  const [heroRef, heroInView] = useInView(0.1);
  const [officeRef, officeInView] = useInView(0.1);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 60);
    return () => clearTimeout(t);
  }, []);

  const offices = [
    {
      city: "Bengaluru HQ",
      address: "No. 12, MG Road, Bengaluru, Karnataka 560001",
      phone: "+91 80 4567 8900",
      mapUrl: "https://maps.google.com/?q=MG+Road+Bengaluru",
    },
    {
      city: "Mumbai Office",
      address: "Level 8, Bandra Kurla Complex, Mumbai, Maharashtra 400051",
      phone: "+91 22 6789 0123",
      mapUrl: "https://maps.google.com/?q=Bandra+Kurla+Complex+Mumbai",
    },
    {
      city: "Pune Office",
      address: "Wing B, Baner Road, Pune, Maharashtra 411045",
      phone: "+91 20 2345 6789",
      mapUrl: "https://maps.google.com/?q=Baner+Road+Pune",
    },
  ];

  return (
    <>
      <Navbar />

      {/* ── HERO / CONNECT SECTION ── */}
      <section className="relative px-4 overflow-hidden w-full h-screen flex flex-col items-center justify-center">

  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')",
    }}
  />

  {/* Black Gradient Overlay */}
  <div className="absolute inset-0 bg-black/60" />

  {/* Decorative shapes */}
  <Shape type="plus"  color="#E34A2F"  style={{ top: "18%",  left: "22%",  opacity: 0.7 }} />
  <Shape type="plus"  color="#f0c040"  style={{ top: "55%",  left: "18%",  opacity: 0.8 }} />
  <Shape type="plus"  color="#E34A2F"  style={{ top: "22%",  right: "10%", opacity: 0.65 }} />
  <Shape type="arc"   color="#E34A2F"  style={{ top: "14%",  left: "13%",  opacity: 0.5, transform: "rotate(-15deg)" }} />
  <Shape type="arc"   color="#f0c040"  style={{ top: "12%",  right: "16%", opacity: 0.6, transform: "scaleX(-1)" }} />
  <Shape type="arc"   color="#aaa"     style={{ top: "50%",  right: "8%",  opacity: 0.4, transform: "rotate(20deg)" }} />

  {/* Content */}
  <div
    ref={heroRef}
    className="relative z-10 max-w-2xl mx-auto text-center"
    style={{
      opacity: loaded ? 1 : 0,
      transform: loaded ? "translateY(0)" : "translateY(30px)",
      transition: "opacity 0.9s ease 0.1s, transform 0.9s ease 0.1s",
    }}
  >
    {/* Breadcrumb */}
    <nav className="flex items-center justify-center gap-2 text-xs font-light tracking-[0.22em] uppercase text-gray-300 mb-8">
      <a href="/" className="hover:text-white transition-colors">Home</a>
      <span className="text-gray-400 text-[10px]">›</span>
      <span className="text-white">Contact</span>
    </nav>

    <h1 className="text-white font-black text-4xl sm:text-5xl md:text-6xl leading-tight mb-5">
      Let's <span className="text-[#E34A2F]">Connect</span> With Us
    </h1>

    <p className="text-gray-300 text-base leading-relaxed max-w-md mx-auto mb-10">
      Let's talk about your project or dream home. Send us a message and we will be in touch within one business day.
    </p>

    {/* Quick contact pills */}
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <a
        href="tel:+918045678900"
        className="flex items-center gap-3 bg-white/90 hover:bg-white border border-gray-200 rounded-full px-6 py-3 transition-all duration-200 hover:-translate-y-0.5 group"
      >
        <span className="w-8 h-8 rounded-full bg-[#E34A2F] flex items-center justify-center flex-shrink-0">
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
            <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.5 11.5 0 003.6.58 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.5 11.5 0 00.58 3.6 1 1 0 01-.25 1.02l-2.2 2.17z" />
          </svg>
        </span>
        <span className="text-gray-700 font-semibold text-sm">+91 80 4567 8900</span>
      </a>

      <a
        href="mailto:hello@realestate.com"
        className="flex items-center gap-3 bg-white/90 hover:bg-white border border-gray-200 rounded-full px-6 py-3 transition-all duration-200 hover:-translate-y-0.5 group"
      >
        <span className="w-8 h-8 rounded-full bg-[#E34A2F] flex items-center justify-center flex-shrink-0">
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
            <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
        </span>
        <span className="text-gray-700 font-semibold text-sm">hello@realestate.com</span>
      </a>
    </div>
  </div>
</section>

      {/* ── FORM + OFFICE SECTION ── */}
      <section className="bg-[#F8F7F4] py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left — Contact form */}
          <ContactForm />

          {/* Right — Office info + map */}
          <div>
            {/* Section label */}
            <div
              ref={officeRef}
              style={{
                opacity: officeInView ? 1 : 0,
                transform: officeInView ? "translateY(0)" : "translateY(24px)",
                transition: "opacity 0.7s ease, transform 0.7s ease",
              }}
            >
              <span className="text-[#E34A2F] text-xs font-bold tracking-[0.3em] uppercase mb-3 block">Our Offices</span>
              <h2 className="text-gray-900 font-black text-3xl sm:text-4xl mb-8 leading-tight">
                Some of our<br />office locations
              </h2>
            </div>

            {/* Office list */}
            <div className="space-y-7 mb-10">
              {offices.map((office, i) => (
                <OfficeCard key={i} {...office} delay={i * 0.12} />
              ))}
            </div>

            {/* Office image */}
            <div
              style={{
                opacity: officeInView ? 1 : 0,
                transform: officeInView ? "translateY(0)" : "translateY(24px)",
                transition: "opacity 0.75s ease 0.35s, transform 0.75s ease 0.35s",
              }}
              className="relative rounded-2xl overflow-hidden shadow-lg"
              style={{ height: "220px" }}
            >
              <img
                src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80"
                alt="Our office building"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-5 text-white">
                <p className="text-xs font-bold uppercase tracking-widest text-white/70">Headquarter</p>
                <p className="text-sm font-semibold">Bengaluru, Karnataka</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAP SECTION ── */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#E34A2F] text-xs font-bold tracking-[0.3em] uppercase mb-3 block">Find Us</span>
            <h2 className="text-gray-900 font-black text-3xl sm:text-4xl">
              Visit our offices on the map
            </h2>
            <p className="text-gray-400 text-sm mt-3 max-w-md mx-auto">
              Click any location marker to get directions and plan your visit.
            </p>
          </div>

          {/* Map tabs + embed */}
          <MapSection offices={offices} />
        </div>
      </section>


      <Footer />
    </>
  );
}

// ── Map Section with office switcher ─────────────────────────────
function MapSection({ offices }) {
  const [active, setActive] = useState(0);
  const [mapRef, inView] = useInView(0.1);

  const mapQueries = [
    "MG+Road+Bengaluru+Karnataka",
    "Bandra+Kurla+Complex+Mumbai+Maharashtra",
    "Baner+Road+Pune+Maharashtra",
  ];

  return (
    <div
      ref={mapRef}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(32px)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
      }}
    >
      {/* Office switcher tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {offices.map((o, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
              active === i
                ? "bg-[#E34A2F] text-white shadow-md"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            <span className={`w-2 h-2 rounded-full ${active === i ? "bg-white" : "bg-[#E34A2F]"}`} />
            {o.city}
          </button>
        ))}
      </div>

      {/* Selected office info bar */}
      <div className="bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-full bg-[#E34A2F]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#E34A2F]">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
            </svg>
          </div>
          <div>
            <p className="text-gray-900 font-bold text-sm">{offices[active].city}</p>
            <p className="text-gray-500 text-xs">{offices[active].address}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-gray-500 text-xs">{offices[active].phone}</span>
          <a
            href={offices[active].mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-bold text-white bg-[#E34A2F] hover:bg-[#C13A20] px-4 py-2 rounded-full transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
            Get Directions
          </a>
        </div>
      </div>

      {/* Google Maps embed */}
      <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-sm" style={{ height: "420px" }}>
        <iframe
          key={active}
          title={`Map of ${offices[active].city}`}
          src={`https://maps.google.com/maps?q=${mapQueries[active]}&z=15&output=embed`}
          width="100%"
          height="100%"
          style={{ border: 0, filter: "saturate(0.9) contrast(1.05)" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
        />
      </div>
    </div>
  );
}