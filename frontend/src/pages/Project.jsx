import { useEffect, useState, useRef } from "react";
import heroimg from "../../public/hero_img.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ── Data ──────────────────────────────────────────────────────────
const projects = [
  {
    id: 1,
    title: "Hillview Apartments",
    status: "Upcoming",
    category: "Residential",
    description:
      "A premium residential community designed for modern urban living with natural light and open spaces.",
    location: "Whitefield, Bengaluru",
    area: "2,400 sq.ft",
    units: "120 Units",
    image:
      "https://housing.com/news/wp-content/uploads/2023/03/exterior-design-shutterstock_1932966368-1200x700-compressed.jpg",
  },
  {
    id: 2,
    title: "The Maple Residences",
    status: "Ongoing",
    category: "Mid-Rise",
    description:
      "Contemporary mid-rise towers offering thoughtfully crafted 2 & 3 BHK apartments amid lush green corridors.",
    location: "Sarjapur Road, Bengaluru",
    area: "1,850 sq.ft",
    units: "240 Units",
    image:
      "https://www.citybuildersanddevelopers.com/wp-content/uploads/2024/09/01-1.jpg",
  },
  {
    id: 3,
    title: "Skyline Heights",
    status: "Completed",
    category: "Luxury",
    description:
      "A landmark high-rise development redefining luxury living with panoramic city views and world-class amenities.",
    location: "Baner, Pune",
    area: "3,200 sq.ft",
    units: "88 Units",
    image: heroimg,
  },
];

const stats = [
  { value: "15+", label: "Years of Excellence" },
  { value: "120+", label: "Projects Delivered" },
  { value: "8,500+", label: "Happy Families" },
  { value: "12", label: "Cities Across India" },
];


// Nearby listings scattered across the map
const nearbyListings = [
  {
    id: 1,
    price: "₹1,20,450",
    top: "14%",
    left: "58%",
    image:
      "https://housing.com/news/wp-content/uploads/2023/03/exterior-design-shutterstock_1932966368-1200x700-compressed.jpg",
    hasThumb: true,
    thumbSide: "bottom",
  },
  { id: 2, price: "₹4,27,000", top: "10%", left: "8%", hasThumb: false },
  { id: 3, price: "₹5,90,750", top: "22%", left: "20%", hasThumb: false },
  {
    id: 4,
    price: "₹1,22,941",
    top: "52%",
    left: "5%",
    image:
      "https://www.citybuildersanddevelopers.com/wp-content/uploads/2024/09/01-1.jpg",
    hasThumb: true,
    thumbSide: "right",
  },
  { id: 5, price: "₹3,65,000", top: "40%", left: "83%", hasThumb: false },
  { id: 6, price: "₹3,12,500", top: "72%", left: "28%", hasThumb: false },
  { id: 7, price: "₹4,27,100", top: "82%", left: "14%", hasThumb: false },
  {
    id: 8,
    price: "₹1,75,456",
    top: "66%",
    left: "58%",
    image: heroimg,
    hasThumb: true,
    thumbSide: "top",
  },
  { id: 9, price: "₹51,200", top: "83%", left: "76%", hasThumb: false },
];

const filters = ["All", "Upcoming", "Ongoing", "Completed"];
const typeFilters = ["All Types", "Residential", "Mid-Rise", "Luxury"];

// ── Hook ──────────────────────────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

// ── StatusBadge ───────────────────────────────────────────────────
function StatusBadge({ status }) {
  const map = {
    Upcoming: "bg-amber-50 text-amber-700 border border-amber-200",
    Ongoing: "bg-blue-50 text-blue-700 border border-blue-200",
    Completed: "bg-emerald-50 text-emerald-700 border border-emerald-200",
  };
  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full ${map[status]}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${status === "Upcoming" ? "bg-amber-500" : status === "Ongoing" ? "bg-blue-500" : "bg-emerald-500"}`} />
      {status}
    </span>
  );
}

// ── ProjectCard ───────────────────────────────────────────────────
function ProjectCard({ project, index }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className="group relative w-full rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-shadow duration-500"
      style={{
        height: "580px",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(48px)",
        transition: `opacity 0.75s ease ${index * 0.12}s, transform 0.75s ease ${index * 0.12}s`,
      }}
    >
      <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      <div className="absolute top-5 left-5">
        <span className="text-xs font-semibold tracking-widest uppercase text-white/80 bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1.5 rounded-full">
          {project.category}
        </span>
      </div>
      <div className="absolute bottom-5 right-5 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-5 w-72">
        <StatusBadge status={project.status} />
        <h3 className="text-gray-900 font-bold text-xl leading-snug mt-3 mb-2">{project.title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4">{project.description}</p>
        <div className="flex gap-4 mb-4 pb-4 border-b border-gray-100">
          <div>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest">Area</p>
            <p className="text-sm font-semibold text-gray-800">{project.area}</p>
          </div>
          <div>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest">Units</p>
            <p className="text-sm font-semibold text-gray-800">{project.units}</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-full bg-[#E34A2F] flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
              </svg>
            </span>
            <span className="text-gray-600 text-sm">{project.location}</span>
          </div>
          <button className="w-9 h-9 rounded-full bg-[#E34A2F] hover:bg-[#C13A20] flex items-center justify-center transition-colors shadow-md">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

// ── StatCard ──────────────────────────────────────────────────────
function StatCard({ stat, index }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`,
      }}
      className="text-center"
    >
      <div className="text-5xl font-black text-[#E34A2F] mb-2 tracking-tight">{stat.value}</div>
      <div className="text-sm text-gray-500 font-medium uppercase tracking-widest">{stat.label}</div>
    </div>
  );
}


// ── MapPin ────────────────────────────────────────────────────────
function MapPin({ listing }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="absolute"
      style={{ top: listing.top, left: listing.left, zIndex: hovered ? 30 : 10 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Thumbnail popup for listings with an image */}
      {listing.hasThumb && (
        <div
          className="absolute bg-white rounded-xl overflow-hidden shadow-2xl"
          style={{
            width: "115px",
            ...(listing.thumbSide === "bottom"
              ? { bottom: "100%", marginBottom: "8px", left: "50%", transform: "translateX(-50%)" }
              : listing.thumbSide === "right"
              ? { left: "100%", marginLeft: "8px", top: "50%", transform: "translateY(-50%)" }
              : { top: "100%", marginTop: "8px", left: "50%", transform: "translateX(-50%)" }),
            opacity: hovered ? 1 : 0.88,
            transition: "opacity 0.25s ease, transform 0.25s ease",
            transform: hovered
              ? listing.thumbSide === "bottom"
                ? "translateX(-50%) scale(1.05)"
                : listing.thumbSide === "right"
                ? "translateY(-50%) scale(1.05)"
                : "translateX(-50%) scale(1.05)"
              : listing.thumbSide === "bottom"
              ? "translateX(-50%) scale(1)"
              : listing.thumbSide === "right"
              ? "translateY(-50%) scale(1)"
              : "translateX(-50%) scale(1)",
          }}
        >
          <img src={listing.image} alt="property" className="w-full h-16 object-cover" />
          <div className="px-2 py-1.5">
            <p className="text-[10px] font-bold text-gray-900 leading-tight">{listing.price}</p>
            <p className="text-[9px] text-gray-400 mt-0.5">View listing →</p>
          </div>
        </div>
      )}

      {/* Price pill */}
      <div
        className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg cursor-pointer whitespace-nowrap select-none"
        style={{
          background: hovered ? "#E34A2F" : "white",
          color: hovered ? "white" : "#111",
          transform: hovered ? "scale(1.08)" : "scale(1)",
          transition: "all 0.2s ease",
          boxShadow: hovered
            ? "0 4px 20px rgba(227,74,47,0.4)"
            : "0 2px 12px rgba(0,0,0,0.25)",
        }}
      >
        {listing.hasThumb && (
          <span
            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{ background: hovered ? "white" : "#E34A2F" }}
          />
        )}
        {listing.price}
      </div>
    </div>
  );
}

// ── Explore Nearby Homes Section ──────────────────────────────────
function ExploreMapSection() {
  const [ref, inView] = useInView(0.1);

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden"
      style={{ height: "520px", background: "#111111" }}
    >
      {/* SVG map background — dark city grid + roads */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1200 520"
      >
        {/* Base fill */}
        <rect width="1200" height="520" fill="#111111" />

        {/* Major roads */}
        <g stroke="#1e1e1e" strokeWidth="8" fill="none">
          <path d="M0 200 Q300 185 600 210 T1200 195" />
          <path d="M0 360 Q400 340 700 370 T1200 355" />
          <path d="M150 0 Q165 260 145 520" />
          <path d="M430 0 Q415 260 440 520" />
          <path d="M720 0 Q735 260 710 520" />
          <path d="M980 0 Q965 260 995 520" />
        </g>

        {/* Minor roads */}
        <g stroke="#181818" strokeWidth="3" fill="none">
          <path d="M0 100 Q300 90 650 108 T1200 95" />
          <path d="M0 290 Q350 275 700 295 T1200 280" />
          <path d="M0 440 Q300 430 650 445 T1200 435" />
          <path d="M285 0 Q270 260 290 520" />
          <path d="M575 0 Q590 260 565 520" />
          <path d="M855 0 Q840 260 870 520" />
          <path d="M1100 0 Q1085 260 1110 520" />
        </g>

        {/* City blocks */}
        <g fill="#191919">
          <rect x="10" y="10" width="115" height="75" rx="3" />
          <rect x="175" y="15" width="85" height="60" rx="3" />
          <rect x="300" y="8" width="100" height="80" rx="3" />
          <rect x="455" y="12" width="125" height="70" rx="3" />
          <rect x="625" y="10" width="75" height="85" rx="3" />
          <rect x="745" y="15" width="105" height="65" rx="3" />
          <rect x="890" y="8" width="75" height="78" rx="3" />
          <rect x="1010" y="12" width="90" height="70" rx="3" />
          <rect x="1120" y="10" width="70" height="75" rx="3" />

          <rect x="10" y="115" width="105" height="55" rx="3" />
          <rect x="175" y="110" width="80" height="60" rx="3" />
          <rect x="300" y="118" width="95" height="50" rx="3" />
          <rect x="455" y="112" width="115" height="58" rx="3" />
          <rect x="625" y="115" width="80" height="55" rx="3" />
          <rect x="745" y="108" width="100" height="60" rx="3" />
          <rect x="890" y="112" width="80" height="55" rx="3" />
          <rect x="1010" y="115" width="85" height="52" rx="3" />
          <rect x="1120" y="110" width="70" height="58" rx="3" />

          <rect x="10" y="220" width="110" height="60" rx="3" />
          <rect x="175" y="215" width="90" height="65" rx="3" />
          <rect x="300" y="222" width="100" height="55" rx="3" />
          <rect x="455" y="218" width="120" height="62" rx="3" />
          <rect x="625" y="220" width="75" height="58" rx="3" />
          <rect x="745" y="215" width="105" height="62" rx="3" />
          <rect x="890" y="222" width="80" height="55" rx="3" />
          <rect x="1010" y="220" width="90" height="58" rx="3" />
          <rect x="1120" y="215" width="70" height="62" rx="3" />

          <rect x="10" y="305" width="105" height="30" rx="3" />
          <rect x="175" y="300" width="80" height="35" rx="3" />
          <rect x="300" y="308" width="100" height="28" rx="3" />
          <rect x="455" y="303" width="115" height="32" rx="3" />
          <rect x="625" y="305" width="80" height="30" rx="3" />
          <rect x="745" y="300" width="100" height="35" rx="3" />
          <rect x="890" y="305" width="80" height="30" rx="3" />
          <rect x="1010" y="302" width="85" height="33" rx="3" />
          <rect x="1120" y="300" width="70" height="35" rx="3" />

          <rect x="10" y="375" width="110" height="65" rx="3" />
          <rect x="175" y="370" width="90" height="70" rx="3" />
          <rect x="300" y="378" width="100" height="60" rx="3" />
          <rect x="455" y="372" width="120" height="68" rx="3" />
          <rect x="625" y="375" width="75" height="65" rx="3" />
          <rect x="745" y="370" width="105" height="68" rx="3" />
          <rect x="890" y="378" width="80" height="62" rx="3" />
          <rect x="1010" y="374" width="90" height="66" rx="3" />
          <rect x="1120" y="370" width="70" height="68" rx="3" />

          <rect x="10" y="460" width="105" height="55" rx="3" />
          <rect x="175" y="455" width="80" height="60" rx="3" />
          <rect x="300" y="462" width="100" height="52" rx="3" />
          <rect x="455" y="458" width="115" height="56" rx="3" />
          <rect x="625" y="460" width="80" height="54" rx="3" />
          <rect x="745" y="455" width="100" height="60" rx="3" />
          <rect x="890" y="460" width="80" height="54" rx="3" />
          <rect x="1010" y="458" width="85" height="56" rx="3" />
          <rect x="1120" y="455" width="70" height="60" rx="3" />
        </g>
      </svg>

      {/* Radial dark vignette — deep center for text, light edges to see map */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 52% 58% at 50% 50%, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.42) 55%, rgba(0,0,0,0.12) 100%)",
        }}
      />

      {/* Price pins scattered around */}
      {nearbyListings.map((listing) => (
        <MapPin key={listing.id} listing={listing} />
      ))}

      {/* Center content */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s",
        }}
      >
        <h2
          className="text-white font-black leading-tight mb-3"
          style={{ fontSize: "clamp(28px, 4.5vw, 52px)" }}
        >
          Explore Nearby Homes
        </h2>
        <p className="text-white/55 text-sm sm:text-base max-w-xs leading-relaxed mb-8">
          Browse available homes near you and explore listings in your favorite areas.
        </p>
        <button
          className="pointer-events-auto px-8 py-3.5 bg-white text-gray-900 font-bold text-sm rounded-full transition-all duration-200 hover:bg-gray-100 hover:-translate-y-0.5"
          style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.35)" }}
        >
          Get Started
        </button>
      </div>
    </section>
  );
}

// ── Main Page ─────────────────────────────────────────────────────
export default function Project() {
  const [loaded, setLoaded] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeType, setActiveType] = useState("All Types");
  const [statsRef] = useInView(0.2);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 50);
    return () => clearTimeout(t);
  }, []);

  const filtered = projects.filter((p) => {
    const statusMatch = activeFilter === "All" || p.status === activeFilter;
    const typeMatch = activeType === "All Types" || p.category === activeType;
    return statusMatch && typeMatch;
  });

  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative w-full h-screen overflow-hidden bg-black flex flex-col items-center justify-center">
        <div
          className={`absolute inset-0 bg-cover bg-top transition-transform duration-[14000ms] ease-out ${loaded ? "scale-100" : "scale-110"}`}
          style={{ backgroundImage: `url(${heroimg})`, filter: "brightness(0.40) saturate(0.7)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/65" />

        <nav
          className="relative z-10 flex items-center gap-2.5 text-xs font-light tracking-[0.22em] uppercase mb-6"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(28px)",
            transition: "all 0.9s cubic-bezier(.22,1,.36,1) 0.3s",
          }}
        >
          <a href="/" className="text-white/55 hover:text-white transition-colors">Home</a>
          <span className="text-white/35 text-[10px]">›</span>
          <span className="text-white/90">Projects</span>
        </nav>

        <h1
          className="relative z-10 text-center font-light tracking-[0.14em] uppercase text-white leading-none"
          style={{
            fontSize: "clamp(52px, 9vw, 112px)",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(28px)",
            transition: "all 1s cubic-bezier(.22,1,.36,1) 0.15s",
          }}
        >
          Our Projects
        </h1>

        <p
          className="relative z-10 text-white/60 text-base font-light mt-5 max-w-md text-center px-6"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.9s cubic-bezier(.22,1,.36,1) 0.5s",
          }}
        >
          Crafting homes that inspire. Spaces that endure.
        </p>

        <div
          className="relative z-10 h-px bg-white/40 mt-6"
          style={{ width: loaded ? "80px" : "0px", transition: "width 1s cubic-bezier(.22,1,.36,1) 0.7s" }}
        />

        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ opacity: loaded ? 1 : 0, transition: "opacity 1s ease 1.5s" }}
        >
          <span className="text-white/40 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-px h-8 bg-white/30 animate-pulse" />
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-gray-950 py-14">
        <div
          ref={statsRef}
          className="max-w-5xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-4 gap-10"
        >
          {stats.map((s, i) => (
            <StatCard key={i} stat={s} index={i} />
          ))}
        </div>
      </section>

      {/* ── PROJECTS SECTION ── */}
      <section className="bg-[#F8F7F4] py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-6">
            <div>
              <span className="text-[#E34A2F] text-xs font-bold tracking-[0.3em] uppercase mb-3 block">Portfolio</span>
              <h2 className="text-gray-900 font-black text-4xl sm:text-5xl leading-[1.1] tracking-tight">
                Discover our<br />
                <span className="text-[#E34A2F]">signature</span> projects
              </h2>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              From concept to completion, every project reflects our commitment to quality, design, and livability.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 ${
                    activeFilter === f
                      ? "bg-[#E34A2F] text-white shadow-sm"
                      : "bg-white text-gray-600 border border-gray-200 hover:border-gray-400"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
            <div className="hidden sm:block w-px bg-gray-200 self-stretch" />
            <div className="flex flex-wrap gap-2">
              {typeFilters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveType(f)}
                  className={`text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 ${
                    activeType === f
                      ? "bg-gray-900 text-white shadow-sm"
                      : "bg-white text-gray-600 border border-gray-200 hover:border-gray-400"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <p className="text-xs text-gray-400 uppercase tracking-widest mb-8">
            Showing {filtered.length} project{filtered.length !== 1 ? "s" : ""}
          </p>

          <div className="flex flex-col gap-6">
            {filtered.length > 0 ? (
              filtered.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))
            ) : (
              <div className="text-center py-24 text-gray-400">
                <p className="text-lg">No projects match the selected filters.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── PROCESS SECTION ── */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#E34A2F] text-xs font-bold tracking-[0.3em] uppercase mb-3 block">How We Work</span>
            <h2 className="text-gray-900 font-black text-4xl sm:text-5xl leading-tight">Our development process</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 relative">
            <div className="hidden sm:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gray-200 z-0" />
            {[
              { step: "01", title: "Site Acquisition", desc: "Identifying prime locations with strong growth potential and community value." },
              { step: "02", title: "Design & Planning", desc: "Collaborating with architects to create timeless, functional living spaces." },
              { step: "03", title: "Construction", desc: "Using premium materials and rigorous quality checks at every stage." },
              { step: "04", title: "Handover", desc: "Delivering your dream home on time, with full transparency and care." },
            ].map((item, i) => {
              const [ref, inView] = useInView();
              return (
                <div
                  key={i}
                  ref={ref}
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateY(0)" : "translateY(30px)",
                    transition: `opacity 0.6s ease ${i * 0.12}s, transform 0.6s ease ${i * 0.12}s`,
                  }}
                  className="relative z-10 flex flex-col items-center text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center mb-5 shadow-sm">
                    <span className="text-2xl font-black text-[#E34A2F]">{item.step}</span>
                  </div>
                  <h3 className="text-gray-900 font-bold text-base mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── EXPLORE NEARBY HOMES (replaces CTA) ── */}
      <ExploreMapSection />

      <Footer />
    </>
  );
}