import { useEffect, useState, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ProjectDetailPage({
  projectName = "Serenity Villa",
  projectSubtitle = "A timeless residence where light, stone, and silence become architecture.",
  projectLocation = "Surat, Gujarat",
  projectYear = "2024",
  projectTags = ["Architecture", "Interior", "Landscape"],
  videoSrc = "https://www.pexels.com/download/video/36113775/",

  title = "Crafted for a Life of Elegance and Tranquility",
  description = "Nestled in the heart of Dubai's premier waterfront location, Sunset Bay combines modern architectural design with nature's beauty. Our residences offer spacious interiors, world-class finishes, and breathtaking sea views.",
  image = "https://images.pexels.com/photos/29174529/pexels-photo-29174529.jpeg",
  location = "Sanand, Gujarat",
  type = "Residential",
  status = "Under Construction",

  // ✅ working video
}) {
  const [loaded, setLoaded] = useState(false);
  const videoRef = useRef(null);

  const amenities = [
    {
      label: "Swimming Pool",
      img: "https://images.pexels.com/photos/14548470/pexels-photo-14548470.png",
      tall: true,
    },
    {
      label: "Kids Pool",
      img: "https://images.pexels.com/photos/11114684/pexels-photo-11114684.jpeg",
      tall: false,
    },
    {
      label: "Kids Play Area",
      img: "https://images.pexels.com/photos/29247929/pexels-photo-29247929.jpeg",
      tall: true,
    },
    {
      label: "Pool Side Lounge",
      img: "https://images.pexels.com/photos/14548470/pexels-photo-14548470.png",
      tall: false,
    },
  ];

  const floorData = [
    {
      key: "ground",
      label: "Ground Floor",
      title: "Ground Floor",
      rooms: [
        {
          label: "Lobby",
          img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        },
        {
          label: "Entrance",
          img: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1200&q=80",
        },
        {
          label: "Corridor",
          img: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1200&q=80",
        },
      ],
    },

    {
      key: "podium1",
      label: "1st Podium Floor",
      title: "1st Podium Floor",
      rooms: [
        {
          label: "Pool Deck",
          img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
        },
        {
          label: "Swimming Pool",
          img: "https://images.unsplash.com/photo-1576013551627-0c2f1b7c0c4d?auto=format&fit=crop&w=1200&q=80",
        },
        {
          label: "Gym",
          img: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1200&q=80",
        },
      ],
    },

    {
      key: "podium2",
      label: "2nd Podium Floor",
      title: "2nd Podium Floor",
      rooms: [
        {
          label: "Dining",
          img: "https://images.unsplash.com/photo-1617098900591-3f90928e8c54?auto=format&fit=crop&w=1200&q=80",
        },
        {
          label: "Lounge",
          img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
        },
        {
          label: "Living",
          img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
        },
      ],
    },

    {
      key: "floor1",
      label: "1st Floor",
      title: "1st Floor",
      rooms: [
        {
          label: "Suite",
          img: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
        },
        {
          label: "Bedroom",
          img: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1200&q=80",
        },
        {
          label: "Master Bed",
          img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
        },
      ],
    },

    {
      key: "floor2468",
      label: "2nd, 4th, 6th, 8th Floor",
      title: "2nd, 4th, 6th & 8th Floor",
      rooms: [
        {
          label: "Drawing",
          img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
        },
        {
          label: "Bedroom 1",
          img: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80",
        },
        {
          label: "Bedroom 2",
          img: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1200&q=80",
        },
        {
          label: "Bedroom 3",
          img: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80",
        },
      ],
    },

    {
      key: "floor357",
      label: "3rd, 5th, 7th Floor",
      title: "3rd, 5th & 7th Floor",
      rooms: [
        {
          label: "Living Room",
          img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
        },
        {
          label: "Bedroom",
          img: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1200&q=80",
        },
        {
          label: "Terrace",
          img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
        },
      ],
    },

    {
      key: "rooftop",
      label: "Rooftop Floor",
      title: "Rooftop Floor",
      rooms: [
        {
          label: "Infinity Pool",
          img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
        },
        {
          label: "Sky Lounge",
          img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
        },
        {
          label: "Sky Dining",
          img: "https://images.unsplash.com/photo-1617098900591-3f90928e8c54?auto=format&fit=crop&w=1200&q=80",
        },
      ],
    },
  ];

  const [activeFloor, setActiveFloor] = useState("floor2468");
  const [activeRoom, setActiveRoom] = useState(0);

  const floor = floorData.find((f) => f.key === activeFloor);

  const handleFloorChange = (key) => {
    setActiveFloor(key);
    setActiveRoom(0);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        console.log("Autoplay blocked");
      });
    }

    const handleLoaded = () => setLoaded(true);
    video.addEventListener("loadeddata", handleLoaded);

    const fallback = setTimeout(() => setLoaded(true), 600);

    return () => {
      video.removeEventListener("loadeddata", handleLoaded);
      clearTimeout(fallback);
    };
  }, []);

 const [hoveredId, setHoveredId] = useState(null);

  const getFlex = (id) => {
    if (!hoveredId) return "1";           // all equal by default
    if (hoveredId === id) return "4";     // hovered → expand
    return "0.4";                          // others → shrink
  };

  const images = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80",
    alt: "Home 1",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=900&q=80",
    alt: "Home 2",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80",
    alt: "Home 3",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80",
    alt: "Home 4",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=900&q=80",
    alt: "Home 5",
  },
];

const nearbyPlaces = [
  {
    name: "Health1 Super Speciality",
    sub: "Hospital · 4.9 ★",
    type: "Hospital",
    distance: "~1.0 km",
    iconBg: "bg-red-50",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#e24b4a" strokeWidth="2">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    name: "Avadh Multispeciality Hospital",
    sub: "Hospital · 4.6 ★",
    type: "Hospital",
    distance: "~2.3 km",
    iconBg: "bg-red-50",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#e24b4a" strokeWidth="2">
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        <line x1="12" y1="15" x2="12" y2="19" />
        <line x1="10" y1="17" x2="14" y2="17" />
      </svg>
    ),
  },
  {
    name: "Ved Arcade Mall",
    sub: "Shopping Mall · 4.4 ★",
    type: "Mall",
    distance: "~2.8 km",
    iconBg: "bg-blue-50",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#378add" strokeWidth="2">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
  {
    name: "Podar International School",
    sub: "School · 4.6 ★",
    type: "School",
    distance: "~1.5 km",
    iconBg: "bg-green-50",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#639922" strokeWidth="2">
        <path d="M4 19V8l8-5 8 5v11" />
        <path d="M9 19v-5a3 3 0 0 1 6 0v5" />
        <rect x="10" y="10" width="4" height="4" />
      </svg>
    ),
  },
];
 
const MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14694.5!2d72.6525!3d22.9984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e87b1b9e4b1f1%3A0x4c0be1e6b8f7b3b5!2sVastral%2C+Ahmedabad%2C+Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";

  return (
    <>
      {/* ✅ Navbar */}
      <Navbar />

      {/* ✅ Hero Section */}
      <section className="relative w-full h-screen overflow-hidden bg-black flex flex-col items-center justify-center">
        {/* 🎥 Video Background */}
        <video
          ref={videoRef}
          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[14000ms] ease-out ${
            loaded ? "scale-100" : "scale-105"
          }`}
          style={{ filter: "brightness(0.38) saturate(0.65)" }}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/65" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-6">
          {/* Breadcrumb */}
          <nav
            className="flex items-center gap-2.5 text-[11px] font-light tracking-[0.22em] uppercase mb-6"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(28px)",
              transition: "all 0.9s cubic-bezier(.22,1,.36,1) 0.3s",
            }}
          >
            <a href="/" className="text-white/55 hover:text-white">
              Home
            </a>
            <span className="text-white/35">›</span>
            <a href="/projects" className="text-white/55 hover:text-white">
              Projects
            </a>
            <span className="text-white/35">›</span>
            <span className="text-white/90">{projectName}</span>
          </nav>

          {/* Year */}
          <p className="text-[10px] font-light tracking-[0.38em] uppercase text-white/45 mb-4">
            Residential · {projectYear}
          </p>

          {/* Title */}
          <h1
            className="font-light tracking-[0.14em] uppercase text-white leading-none"
            style={{ fontSize: "clamp(52px, 9vw, 112px)" }}
          >
            {projectName}
          </h1>

          {/* Subtitle */}
          <p className="text-white/60 text-[13px] mt-5 max-w-md">
            {projectSubtitle}
          </p>

          {/* Tags */}
          <div className="flex items-center gap-4 mt-7 flex-wrap justify-center">
            {projectTags.map((tag) => (
              <span
                key={tag}
                className="text-[9px] tracking-[0.28em] uppercase text-white/40 border border-white/20 px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-white/40 mt-6 w-20" />
        </div>

        {/* Bottom Left */}
        <div className="absolute bottom-12 left-10 text-white/70">
          <p className="text-[10px] uppercase opacity-50">Location</p>
          <p>{projectLocation}</p>
        </div>

        {/* Bottom Right */}
        <div className="absolute bottom-12 right-10 text-right text-white/70">
          <p className="text-[10px] uppercase opacity-50">Year</p>
          <p>{projectYear}</p>
        </div>

        {/* Scroll */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 text-xs">
          Scroll ↓
        </div>
      </section>

      <section className="w-full py-20 px-6 md:px-16 bg-[#F8F7F4]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          {/* ── Left: Image + Stats ── */}
          <div className="flex flex-col h-full">
            <div className="rounded-2xl overflow-hidden flex-1">
              <img
                src={image}
                alt={projectName}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* ── Right: Content ── */}
          <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col gap-5">
              {/* Badge */}
              <span className="inline-flex w-fit items-center bg-[#FFE9E2] text-[#E4572E] rounded-full px-4 py-1.5 text-[11px] tracking-widest">
                About {projectName}
              </span>

              {/* Title */}
              <h2 className="text-[clamp(28px,3.5vw,42px)] text-[#1F2A44] leading-tight">
                {title}
              </h2>

              {/* Description */}
              <p className="text-[14px] leading-relaxed text-[#5F6B7A] max-w-md">
                {description}
              </p>
            </div>

            {/* Meta */}
            <div className="flex gap-7 pt-6 border-t border-[#E3E6EA] mt-6">
              <div>
                <p className="text-[10px] tracking-[0.28em] uppercase text-[#A0A8B5] mb-1">
                  Location
                </p>
                <p className="text-[15px] text-[#1F2A44]">{location}</p>
              </div>

              <div>
                <p className="text-[10px] tracking-[0.28em] uppercase text-[#A0A8B5] mb-1">
                  Type
                </p>
                <p className="text-[15px] text-[#1F2A44]">{type}</p>
              </div>

              <div>
                <p className="text-[10px] tracking-[0.28em] uppercase text-[#A0A8B5] mb-1">
                  Status
                </p>
                <p className="text-[15px] text-[#1F2A44]">{status}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 px-4 md:px-10 bg-white text-center">
        <h2 className="text-[clamp(28px,4vw,44px)] font-normal text-[#1a2332] leading-snug mb-12">
          Unparalleled Amenities for
          <br />
          Unmatched Living
        </h2>

        {/* Full width grid */}
        <div className="w-full flex items-center justify-center gap-4">
          {amenities.map(({ label, img, tall }) => (
            <div
              key={label}
              className={`relative rounded-[20px] overflow-hidden group cursor-pointer w-full
        ${tall ? "h-[420px]" : "h-[360px]"}`}
            >
              {/* Image */}
              <img
                src={img}
                alt={label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
              />

              {/* Arrow */}
              <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="#1a2332"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </div>

              {/* Label */}
              <span
                className="absolute bottom-3 left-3 px-4 py-1.5 rounded-full text-[12px] text-white"
                style={{
                  background: "rgba(255,255,255,0.22)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.35)",
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full py-14 px-6 md:px-12 bg-[#F8F7F4] font-['Montserrat',sans-serif]">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-[36px] font-medium text-[#1F2A44]">
            Floor Previews
          </h2>

          <button className="inline-flex items-center gap-3 border border-[#E3E6EA] rounded-full px-5 py-2.5 text-[12px] tracking-wide text-[#1F2A44] bg-white hover:bg-[#F1F3F6] transition">
            Download Floor Plan
            <span className="w-8 h-8 rounded-full bg-[#E4572E] flex items-center justify-center">
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="white"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </span>
          </button>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-[22px] p-6 md:p-8 grid md:grid-cols-[240px_1fr] gap-6 shadow-sm border border-[#E9EDF2] h-[520px] overflow-hidden">
          {/* ✅ Sidebar scroll */}
          <div className="flex flex-col gap-2 overflow-y-auto no-scrollbar pr-2">
            {floorData.map((f) => (
              <button
                key={f.key}
                onClick={() => handleFloorChange(f.key)}
                className={`px-4 py-3 rounded-xl text-left flex justify-between items-center transition
          ${
            activeFloor === f.key
              ? "bg-[#FFF1EC] text-[#E4572E] font-medium"
              : "text-[#6B7280] hover:bg-[#F4F6F8]"
          }`}
              >
                {f.label}

                {activeFloor === f.key && (
                  <span className="w-7 h-7 rounded-full bg-[#E4572E] flex items-center justify-center">
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="white"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="flex flex-col h-full overflow-hidden">
            <p className="text-[24px] text-[#1F2A44] mb-4 font-medium">
              {floor.title}
            </p>

            <div className="grid grid-cols-[140px_1fr] gap-4 flex-1 overflow-hidden">
              {/* ✅ Thumbnails scroll */}
              <div className="flex flex-col gap-3 overflow-y-auto no-scrollbar pr-2">
                {floor.rooms.map((room, i) => (
                  <div
                    key={i}
                    onClick={() => setActiveRoom(i)}
                    className={`relative rounded-xl overflow-hidden cursor-pointer h-[110px] flex-shrink-0
              ${activeRoom === i ? "ring-2 ring-[#E4572E]" : ""}`}
                  >
                    <img
                      src={room.img}
                      alt={room.label}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 px-2 py-1 bg-gradient-to-t from-black/60 text-[11px] text-white">
                      {room.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden h-full">
                <img
                  src={floor.rooms[activeRoom]?.img}
                  alt=""
                  className="w-full h-full object-cover"
                />

                <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/40 backdrop-blur-md rounded-full px-3 py-1.5">
                  <span className="text-[11px] text-white">360° View</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

<section className="w-full py-14 px-6 md:px-12 bg-[#f5f4f2]">
      {/* Heading */}
      <h2
        className="text-center text-3xl font-medium text-gray-900 mb-7 tracking-tight"
      >
        Image Gallery
      </h2>

      {/* Gallery */}
      <div className="flex gap-2 h-[480px] items-stretch">
        {images.map((img) => (
          <div
            key={img.id}
            className="relative overflow-hidden rounded-2xl cursor-pointer"
            style={{
              flex: getFlex(img.id),
              transition: "flex 0.5s cubic-bezier(0.4,0,0.2,1)",
            }}
            onMouseEnter={() => setHoveredId(img.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover block"
              style={{
                transform: hoveredId === img.id ? "scale(1.04)" : "scale(1)",
                transition: "transform 0.5s ease",
              }}
            />
          </div>
        ))}
      </div>
    </section>

     <section className="bg-[#f5f4f1] rounded-2xl px-8 py-9">
 
      {/* TOP ROW: Heading | Description */}
      <div className="grid grid-cols-2 gap-7 mb-6 items-start">
        <h2
          className="text-[34px] font-medium leading-tight text-gray-900"
        >
          An Icon of Coastal<br />Elegance
        </h2>
        <p className="text-[13px] text-gray-500 leading-[1.75] pt-1">
          Nestled in the thriving neighbourhood of Vastral, Ahmedabad, this
          exclusive residence places you moments from the city's finest
          hospitals, shopping destinations, and green spaces — where every
          convenience is within easy reach.
        </p>
      </div>
 
      {/* BOTTOM ROW: Places | Map */}
      <div className="grid grid-cols-2 gap-6 items-stretch">
 
        {/* LEFT: Nearby places + CTA */}
        <div className="flex flex-col gap-5">
          <div className="bg-white rounded-2xl overflow-hidden">
 
            {/* Header */}
            <div className="grid grid-cols-[1fr_auto_auto] bg-[#f9f8f7] px-[18px] py-[10px]">
              <span className="text-[10px] uppercase tracking-[.07em] font-medium text-gray-400">Nearby Places</span>
              <span className="text-[10px] uppercase tracking-[.07em] font-medium text-gray-400 px-4">Type</span>
              <span className="text-[10px] uppercase tracking-[.07em] font-medium text-gray-400">Distance</span>
            </div>
 
            {/* Rows */}
            {nearbyPlaces.map((p, i) => (
              <div
                key={i}
                className="grid grid-cols-[1fr_auto_auto] items-center px-[18px] py-[12px] border-t border-gray-100 hover:bg-[#fafaf9] transition-colors"
              >
                <div className="flex items-center gap-[10px]">
                  <div className={`w-8 h-8 rounded-[9px] flex items-center justify-center flex-shrink-0 ${p.iconBg}`}>
                    {p.icon}
                  </div>
                  <div>
                    <p className="text-[13px] font-medium text-[#1c1c1c]">{p.name}</p>
                    <p className="text-[11px] text-gray-400 mt-[1px]">{p.sub}</p>
                  </div>
                </div>
                <span className="text-[11px] text-gray-400 px-4">{p.type}</span>
                <span className="bg-[#f0efec] text-gray-600 text-[11px] font-medium rounded-full px-[10px] py-[4px] whitespace-nowrap">
                  {p.distance}
                </span>
              </div>
            ))}
          </div>
 
          {/* CTA */}
          <button className="inline-flex items-center gap-[10px] border-[1.5px] border-gray-800 rounded-full px-[18px] py-[9px] text-[13px] font-medium text-gray-800 bg-transparent hover:bg-[#ece9e4] transition-colors w-fit">
            Download Floor Plan
            <span className="w-7 h-7 bg-[#1a1a2e] rounded-full flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="1.8">
                <path d="M2 10L10 2M10 2H5M10 2v5" />
              </svg>
            </span>
          </button>
        </div>
 
        {/* RIGHT: Google Map – Vastral */}
        <div className="bg-white rounded-2xl overflow-hidden relative min-h-[320px]">
          <iframe
            src={MAP_EMBED}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            title="Property location in Vastral, Ahmedabad"
            className="w-full h-full min-h-[320px] border-0 block"
          />
          <div className="absolute bottom-[10px] left-[10px] bg-[rgba(20,20,30,0.85)] text-white text-[11px] font-medium px-3 py-[5px] rounded-full tracking-[.03em]">
            📍 Vastral, Ahmedabad
          </div>
        </div>
 
      </div>
    </section>

      {/* ✅ Footer */}
      <Footer />
    </>
  );
}
