import { useMemo, useState } from "react";
import "./styles/global.css";
import { CallConfirmationModal } from "./components/CallConfirmationModal";
import { ContactInfoPage, ContactNumber } from "./components/ContactInfoPage";

type IconName =
  | "arrow"
  | "calendar"
  | "chat"
  | "chevron"
  | "clock"
  | "heart"
  | "location"
  | "menu"
  | "phone"
  | "search"
  | "shield"
  | "spark"
  | "user"
  | "x";

type Page = "home" | "resources" | "detail" | "contact";

type Resource = {
  id: number;
  title: string;
  type: "Mental health" | "Physical health" | "Safety & support" | "Wellbeing";
  blurb: string;
  location: string;
  availability: string;
  icon: IconName;
  tint: "lavender" | "mint" | "peach" | "blue";
  services: string[];
  website: string;
  phone: string;
};

const resources: Resource[] = [
  {
    id: 1,
    title: "Counseling & Psychological Services",
    type: "Mental health",
    blurb: "Confidential counseling, groups, and support for your emotional wellbeing.",
    location: "MMC & BBC",
    availability: "Open today",
    icon: "chat",
    tint: "lavender",
    services: ["Individual counseling", "Crisis support", "Group sessions"],
    website: "https://counseling.fiu.edu/",
    phone: "305-348-2277"
  },
  {
    id: 2,
    title: "Student Health Clinics",
    type: "Physical health",
    blurb: "Primary care, immunizations, lab services, and same-day sick visits.",
    location: "MMC & BBC",
    availability: "Open today",
    icon: "heart",
    tint: "mint",
    services: ["General checkups", "Immunizations", "Lab services"],
    website: "https://dasa.fiu.edu/all-departments/student-health/",
    phone: "305-348-2401"
  },
  {
    id: 3,
    title: "Victim Empowerment Program",
    type: "Safety & support",
    blurb: "Free, confidential support and advocacy available 24 hours a day.",
    location: "Virtual & on campus",
    availability: "24/7 support",
    icon: "shield",
    tint: "peach",
    services: ["Advocacy", "Safety planning", "Crisis response"],
    website: "https://dasa.fiu.edu/all-departments/victim-empowerment/",
    phone: "305-348-3050"
  },
  {
    id: 4,
    title: "Healthy Living Program",
    type: "Wellbeing",
    blurb: "Nutrition, sleep, movement, and stress-management coaching for students.",
    location: "Student Wellness Center",
    availability: "Weekdays",
    icon: "spark",
    tint: "blue",
    services: ["Wellness coaching", "Nutrition planning", "Sleep support"],
    website: "https://dasa.fiu.edu/all-departments/wellness-recreation/",
    phone: "305-348-2797"
  }
];

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 10h18" />
      </>
    ),
    chat: <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" />,
    chevron: <path d="m9 18 6-6-6-6" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    heart: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />,
    location: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
    phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.7 19.7 0 0 1-8.6-3.1 19.3 19.3 0 0 1-6-6A19.7 19.7 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.8.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />,
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </>
    ),
    shield: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    spark: <path d="m12 3 1.4 4.6L18 9l-4.6 1.4L12 15l-1.4-4.6L6 9l4.6-1.4L12 3ZM5 15l.7 2.3L8 18l-2.3.7L5 21l-.7-2.3L2 18l2.3-.7L5 15Z" />,
    user: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 22a8 8 0 0 1 16 0" />
      </>
    ),
    x: (
      <>
        <path d="m6 6 12 12M18 6 6 18" />
      </>
    )
  };

  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}

function Button({
  children,
  kind = "primary",
  onClick,
  icon
}: {
  children: React.ReactNode;
  kind?: "primary" | "secondary" | "text";
  onClick?: () => void;
  icon?: IconName;
}) {
  return (
    <button className={`btn btn-${kind}`} onClick={onClick}>
      {children}
      {icon && <Icon name={icon} size={18} />}
    </button>
  );
}

function Logo() {
  return (
    <button className="brand" onClick={() => window.location.reload()} aria-label="Panther Care home">
      <span className="brand-mark"><span>+</span></span>
      <span><b>Panther Care</b><small>FIU Student Health & Wellness</small></span>
    </button>
  );
}

function ResourceCard({ resource, onOpen }: { resource: Resource; onOpen: () => void }) {
  return (
    <article className="resource-card" onClick={onOpen}>
      <div className={`resource-icon ${resource.tint}`}>
        <Icon name={resource.icon} size={25} />
      </div>
      <span className="eyebrow">{resource.type}</span>
      <h3>{resource.title}</h3>
      <p>{resource.blurb}</p>
      <div className="meta">
        <span><Icon name="location" size={16} />{resource.location}</span>
        <span><Icon name="clock" size={16} />{resource.availability}</span>
      </div>
      <button className="card-link" onClick={onOpen}>
        View resource <Icon name="arrow" size={17} />
      </button>
    </article>
  );
}

function App() {
  const [page, setPage] = useState<Page>("home");
  const [selected, setSelected] = useState<Resource>(resources[0]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"All" | Resource["type"]>("All");
  const [guide, setGuide] = useState(false);
  const [menu, setMenu] = useState(false);
  const [callModal, setCallModal] = useState<{ isOpen: boolean; phone: string; title?: string; isEmergency?: boolean }>({
    isOpen: false,
    phone: "",
    title: undefined,
    isEmergency: false,
  });

  const contactNumbers: ContactNumber[] = [
    {
      number: "305-348-2277",
      title: "General Support",
      description: "Counseling & Psychological Services, Student Health Clinics, and general FIU health questions.",
      available: "During business hours",
    },
    {
      number: "305-348-2401",
      title: "Student Health Clinics",
      description: "Schedule appointments for primary care, immunizations, and lab services.",
      available: "Monday - Friday",
    },
    {
      number: "305-348-3050",
      title: "Victim Empowerment Program",
      description: "Free, confidential support and advocacy for students in crisis.",
      isEmergency: false,
      available: "24/7 support available",
    },
    {
      number: "305-348-2797",
      title: "Healthy Living Program",
      description: "Wellness coaching, nutrition planning, and stress-management support.",
      available: "Weekdays",
    },
    {
      number: "988",
      title: "Crisis Support Line",
      description: "National Suicide & Crisis Lifeline. Free, confidential support for anyone in distress.",
      isEmergency: true,
      available: "24/7 - Call or text",
    },
  ];

  const filtered = useMemo(
    () =>
      resources.filter((r) =>
        (filter === "All" || r.type === filter) &&
        `${r.title} ${r.type} ${r.blurb}`.toLowerCase().includes(search.toLowerCase())
      ),
    [search, filter]
  );

  const openResource = (resource: Resource) => {
    setSelected(resource);
    setPage("detail");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCallClick = (phoneNumber: string, isEmergency: boolean = false, title?: string) => {
    setCallModal({
      isOpen: true,
      phone: phoneNumber,
      title: title,
      isEmergency: isEmergency,
    });
  };

  const handleCallConfirm = () => {
    window.location.href = `tel:${callModal.phone}`;
    setCallModal({ isOpen: false, phone: "", title: undefined, isEmergency: false });
  };

  const handleCallCancel = () => {
    setCallModal({ isOpen: false, phone: "", title: undefined, isEmergency: false });
  };

  return (
    <div className="app-shell">
      <div className="urgent-bar">
        <span>Need help right now?</span>
        <button 
          onClick={() => handleCallClick("305-348-2277", false, "General Support")}
          style={{ background: 'none', border: 'none', color: 'white', textDecoration: 'underline', cursor: 'pointer' }}
        >
          Call 305-348-2277
        </button>
        <span className="divider">or</span>
        <button 
          onClick={() => handleCallClick("988", true, "Crisis Support Line")}
          style={{ background: 'none', border: 'none', color: 'var(--gold)', textDecoration: 'underline', cursor: 'pointer' }}
        >
          Get crisis support
        </button>
      </div>

      <header>
        <Logo />
        <nav className={menu ? "open" : ""}>
          <button className={page === "home" ? "active" : ""} onClick={() => { setPage("home"); setMenu(false); }}>Home</button>
          <button className={page === "resources" ? "active" : ""} onClick={() => { setPage("resources"); setMenu(false); }}>Find care</button>
          <button className={page === "contact" ? "active" : ""} onClick={() => { setPage("contact"); setMenu(false); }}>Contact numbers</button>
          <button disabled title="Coming in next release" onClick={() => alert('Guided discovery is coming soon! For now, try browsing by category or using search.')}>Not sure where to start? (coming soon)</button>
        </nav>
        <div className="header-actions">
          <button className="icon-button" aria-label="Search" onClick={() => setPage("resources")}><Icon name="search" /></button>
        </div>
        <button className="mobile-menu" aria-label="Open menu" onClick={() => setMenu(!menu)}>
          <Icon name={menu ? "x" : "menu"} />
        </button>
      </header>

      {page === "home" && (
        <main>
          <section className="hero">
            <div className="hero-copy">
              <span className="kicker"><Icon name="spark" size={16} /> Care for every part of you</span>
              <h1>Your wellbeing,<br /><em>all in one place.</em></h1>
              <p>
                Explore free and low-cost health resources available to you as an FIU student.
                Simple, confidential, and here when you need it.
              </p>
              <div className="hero-actions">
                <Button icon="arrow" onClick={() => setPage("resources")}>Find a resource</Button>
                <button 
                  className="btn btn-secondary"
                  disabled
                  title="Coming in next release"
                  onClick={() => alert('Guided discovery is coming soon! For now, try browsing by category or using search.')}
                  style={{ opacity: 0.7, cursor: 'not-allowed' }}
                >
                  Help me choose (coming soon)
                </button>
              </div>
              <div className="trust-row">
                <span><Icon name="shield" size={17} /> Confidential</span>
                <span>No referral needed</span>
                <span>Made for FIU students</span>
              </div>
            </div>
            <div className="hero-visual">
              <img src="https://images.unsplash.com/photo-1619512673224-91cfb2688284?auto=format&fit=crop&w=1000&q=85" alt="University students spending time together on campus" />
              <div className="float-card">
                <div className="float-icon"><Icon name="heart" /></div>
                <div>
                  <b>You don’t have to figure it out alone.</b>
                  <span>We’ll help you find the right next step.</span>
                </div>
              </div>
              <div className="shape shape-one" />
              <div className="shape shape-two" />
            </div>
          </section>

          <section className="quick-find">
            <div>
              <span className="section-label">START HERE</span>
              <h2>What can we help with?</h2>
            </div>
            <div className="quick-grid">
              {[
                ["I’m feeling anxious or overwhelmed", "chat", "Mental health"],
                ["I don’t feel well", "heart", "Physical health"],
                ["I need support after something happened", "shield", "Safety & support"],
                ["I want to feel healthier", "spark", "Wellbeing"]
              ].map(([label, icon, type]) => (
                <button key={label} className="quick-card" onClick={() => { setFilter(type as Resource["type"]); setPage("resources"); }}>
                  <span><Icon name={icon as IconName} /></span>
                  <b>{label}</b>
                  <small>{type}</small>
                </button>
              ))}
            </div>
          </section>

          <section className="featured">
            <div className="section-heading">
              <div>
                <span className="section-label">POPULAR RESOURCES</span>
                <h2>Care students use most</h2>
              </div>
              <button onClick={() => setPage("resources")}>View all resources <Icon name="chevron" size={16} /></button>
            </div>
            <div className="resource-grid">
              {resources.slice(0, 3).map((r) => (
                <ResourceCard key={r.id} resource={r} onOpen={() => openResource(r)} />
              ))}
            </div>
          </section>
        </main>
      )}

      {page === "resources" && (
        <main className="listing-page">
          <section className="listing-head">
            <span className="section-label">RESOURCE DIRECTORY</span>
            <h1>Find the care that fits.</h1>
            <p>Search support available to all currently enrolled FIU students.</p>
            <label className="search-box">
              <Icon name="search" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by need, service, or keyword"
              />
              <span>⌘ K</span>
            </label>
          </section>
          <section className="listing-content">
            <div className="filters">
              <b>Filter by</b>
              {["All", "Mental health", "Physical health", "Safety & support", "Wellbeing"].map((f) => (
                <button key={f} className={filter === f ? "selected" : ""} onClick={() => setFilter(f as "All" | Resource["type"])}>
                  {f}
                </button>
              ))}
            </div>
            <div className="results">
              <div className="results-head">
                <h2>{filtered.length} resources</h2>
                <span>Available to FIU students</span>
              </div>
              <div className="resource-grid">
                {filtered.map((r) => (
                  <ResourceCard key={r.id} resource={r} onOpen={() => openResource(r)} />
                ))}
              </div>
            </div>
          </section>
        </main>
      )}

      {page === "detail" && (
        <main className="detail-page">
          <button className="back-link" onClick={() => setPage("resources")}>← Back to all resources</button>
          <div className="detail-layout">
            <article className="detail-main">
              <div className={`resource-icon large ${selected.tint}`}>
                <Icon name={selected.icon} size={30} />
              </div>
              <span className="eyebrow">{selected.type}</span>
              <h1>{selected.title}</h1>
              <p className="lead">{selected.blurb}</p>
              <hr />
              <h3>Services</h3>
              <ul>
                {selected.services.map((service) => <li key={service}>{service}</li>)}
              </ul>
            </article>
            <aside className="action-card">
              <span className="status-dot">Accepting appointments</span>
              <h2>Ready to connect?</h2>
              <button 
                onClick={() => handleCallClick(selected.phone, false, selected.title)}
                className="btn btn-primary"
                aria-label={`Call ${selected.title} at ${selected.phone}`}
              >
                📞 Call to schedule
              </button>
              <a 
                href={selected.website}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
              >
                🌐 Visit website
              </a>
            </aside>
          </div>
        </main>
      )}

      {page === "contact" && (
        <ContactInfoPage
          numbers={contactNumbers}
          onCall={handleCallClick}
          onBack={() => setPage("home")}
        />
      )}

      <CallConfirmationModal
        isOpen={callModal.isOpen}
        phoneNumber={callModal.phone}
        serviceTitle={callModal.title}
        isEmergency={callModal.isEmergency}
        onConfirm={handleCallConfirm}
        onCancel={handleCallCancel}
        onViewAllNumbers={() => {
          handleCallCancel();
          setPage("contact");
        }}
      />
    </div>
  );
}

export default App;