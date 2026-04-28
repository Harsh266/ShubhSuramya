import { useEffect, useState } from "react";
import heroimg from "../../public/hero_img.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ── sample project data ──────────────────────────────────────────
const projects = [
  {
    id: 1,
    title: "Hillview Apartments",
    status: "Completed",
    statusColor: "bg-green-400 text-green-900",
    description:
      "A premium residential community designed for modern urban living with natural light and open spaces.",
    location: "Whitefield, Bengaluru",
    image: heroimg,
  },
  {
    id: 2,
    title: "The Maple Residences",
    status: "Ongoing",
    statusColor: "bg-amber-400 text-amber-900",
    description:
      "Contemporary mid-rise towers offering thoughtfully crafted 2 & 3 BHK apartments amid lush green corridors.",
    location: "Sarjapur Road, Bengaluru",
    image: heroimg,
  },
  {
    id: 3,
    title: "Skyline Heights",
    status: "Upcoming",
    statusColor: "bg-sky-400 text-sky-900",
    description:
      "A landmark high-rise development redefining luxury living with panoramic city views and world-class amenities.",
    location: "Baner, Pune",
    image: heroimg,
  },
];

const filters = ["Project Type", "Location", "Project Status", "Built-up Area", "Service Type"];

// ── Single large featured card (matches reference image exactly) ─
function ProjectCard({ project, index }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 150 * index);
    return () => clearTimeout(t);
  }, [index]);

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}
    >
      {/* Outer card — full width, tall, rounded, overflow hidden */}
      <div className="relative w-full rounded-2xl overflow-hidden group" style={{ height: "580px" }}>

        {/* Full-bleed image */}
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Subtle dark tint so info card pops */}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-500" />

        {/* Info card — bottom right, floating over the image */}
        <div
          className="absolute bottom-5 right-5 bg-white rounded-2xl shadow-2xl p-5"
          style={{ width: "300px" }}
        >
          {/* Status pill */}
          <span
            className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 ${project.statusColor}`}
          >
            {project.status}
          </span>

          {/* Title */}
          <h3 className="text-gray-900 font-bold text-xl leading-snug mb-2">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-gray-500 text-sm leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Location + arrow */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {/* Location pin circle */}
              <span className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-green-600">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                </svg>
              </span>
              <span className="text-gray-600 text-sm">{project.location}</span>
            </div>

            {/* Arrow button */}
            <button className="w-9 h-9 rounded-full bg-green-400 hover:bg-green-500 flex items-center justify-center transition-colors shadow-md flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Main page ────────────────────────────────────────────────────
export default function Project() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative w-full h-screen overflow-hidden bg-black flex flex-col items-center justify-center">
        <div
          className={`absolute inset-0 bg-cover bg-top transition-transform duration-[14000ms] ease-out ${
            loaded ? "scale-100" : "scale-110"
          }`}
          style={{
            backgroundImage: `url(${heroimg})`,
            filter: "brightness(0.45) saturate(0.8)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/55" />

        <nav
          className="relative z-10 flex items-center gap-2.5 text-xs font-light tracking-[0.22em] uppercase mb-5"
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
          className="relative z-10 text-center font-light tracking-[0.12em] uppercase text-white leading-none"
          style={{
            fontSize: "clamp(52px, 9vw, 112px)",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(28px)",
            transition: "all 1s cubic-bezier(.22,1,.36,1) 0.15s",
          }}
        >
          Projects
        </h1>

        <div
          className="relative z-10 h-px bg-white/50 mt-5"
          style={{
            width: loaded ? "80px" : "0px",
            transition: "width 1s cubic-bezier(.22,1,.36,1) 0.7s",
          }}
        />
      </section>

      {/* ── PROJECTS SECTION ── */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto">

          {/* Heading */}
          <h2 className="text-center text-gray-900 font-bold text-4xl sm:text-5xl leading-tight mb-10">
            Discover some of our<br />projects
          </h2>

          {/* Filter pills */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-12">
            {filters.map((f) => (
              <button
                key={f}
                className="flex items-center gap-1.5 text-sm text-gray-700 border border-gray-300 rounded-full px-4 py-2 hover:border-gray-500 hover:bg-gray-50 transition-all"
              >
                {f}
                <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 fill-gray-500">
                  <path d="M5 7l5 5 5-5H5z" />
                </svg>
              </button>
            ))}
          </div>

          {/* Vertical stack of full-width cards */}
          <div className="flex flex-col gap-6">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}