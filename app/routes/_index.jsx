import { useState } from "react";
import {
  IconArrowRight,
  IconBolt,
  IconBriefcase,
  IconBuildingBank,
  IconCheck,
  IconChevronRight,
  IconClock,
  IconDeviceMobile,
  IconMail,
  IconMapPin,
  IconSchool,
  IconShieldCheck,
  IconSparkles,
  IconUpload,
} from "@tabler/icons-react";
import { APP_TITLE } from "@/lib/app-config";

const opportunities = [
  { type: "College", title: "IIM Bangalore", tag: "Top College", place: "Bengaluru", details: "MBA", amount: "₹ 3L+", mark: "IIMB", copy: "India's premier management institute with global exposure..." },
  { type: "Internship", title: "Product Intern", tag: "Internship", place: "Bengaluru", details: "Hybrid", amount: "₹ 35K/mo", mark: "G", copy: "Work on real products, learn from top engineers and build..." },
  { type: "Freelance", title: "Marketing Gig", tag: "Freelance", place: "Remote", details: "Freelance", amount: "₹ 10K – ₹ 25K", mark: "N", copy: "Create content and help with social media campaigns for..." },
];

const roleCards = [
  {
    icon: IconSchool,
    nodeId: "1:960",
    title: "College",
    status: "Coming Soon",
    description: "Explore colleges, courses, fees, placements & more",
    features: ["Search by course, location, fees", "Connect directly with colleges", "Improve student placements"],
    cta: "Join Waitlist",
    href: "#colleges",
    artwork: <div className="campus-art"><IconBuildingBank size={118} stroke={1.1} /></div>,
  },
  {
    icon: IconBriefcase,
    nodeId: "1:1009",
    title: "I'm Looking for a Job",
    status: "Available Now",
    description: "Upload your resume. We'll find jobs that fit you.",
    features: ["Jobs from 1000+ sources", "AI powered matching", "WhatsApp & email alerts"],
    cta: "Explore Jobs",
    href: "#resume",
    artwork: <div className="role-art role-art-student"><span>✦</span><b>98%</b><small>your next opportunity</small></div>,
  },
  {
    icon: IconBriefcase,
    nodeId: "1:1062",
    title: "I'm Hiring",
    status: "Coming Soon",
    description: "Connect with colleges and find candidates — from students to graduates.",
    features: ["Connect directly with colleges", "Find the right candidates", "Simplify your hiring"],
    cta: "Join Waitlist",
    href: "#employers",
    artwork: <div className="role-art role-art-hiring"><span>&lt;/&gt;</span></div>,
  },
];

const steps = [
  ["Set your preferences", "Tell us what you're looking for, from colleges and courses to jobs, internships and gigs.", "Smart Profile"],
  ["Discover relevant opportunities", "Explore colleges and career opportunities matched to your profile, interests and goals.", "AI Ranked"],
  ["Get notified when something fits", "Get notified when a relevant college or new opportunity is found, so you can act early.", "Instant Alerts"],
];

const colleges = [
  ["VERIFIED PROFILE", "Build your college profile", "Showcase your college, courses, fees, campus, placements and achievements in one structured profile that students and recruiters can discover.", "NAAC A++ Ready", "98% Match"],
  ["DIRECT ENROLL", "Students discover and connect", "Students searching for colleges can discover your profile, explore your courses and fees, and connect directly with your admission team.", "Direct Enquiries", "WHATSAPP / CHAT"],
  ["CAMPUS RECRUITING", "Recruiters discover your College", "Companies hiring fresh talent can discover your college, explore your talent and connect with your placement team.", "500+ Hiring Partners", "Connect Directly"],
  ["LIVE HUD", "Track placements in real time", "Track students, interviews, offers and placements from one centralized dashboard.", "LIVE PLACEMENTS", "Students · Interviews · Offers"],
];

const employers = [
  ["Post a role in minutes", "Define your skills, location and hiring requirements. Reach relevant candidates across the CampusPe network.", "5 Min Deployment", "500+ Campus Network"],
  ["Receive a matched shortlist", "Get candidates matched to your role by skills, experience, location and hiring requirements.", "Zero CV Clutter", "Tier 1–Tier 3 Parity"],
  ["Connect with candidates directly", "Message, schedule interviews, and move candidates through your pipeline — all in one place.", "In-App Scheduling", "1-Click Video / Chat"],
  ["Reduce your time-to-hire", "Find matched candidates, connect with them and move from shortlist to offer in one streamlined workflow.", "<2 DAYS", "57% Faster Hiring"],
];

const footerGroups = [
  ["For Students", "Explore Colleges", "Find Opportunities", "Internships", "Full-time Jobs", "Part-time & Gig", "Application Tracker"],
  ["For Colleges", "List Your College", "Admissions", "Fee Collection", "Placements"],
  ["For Employers", "Post a Job", "Find Talent", "Campus Hiring"],
  ["Company", "About Us", "Contact Us", "Blogs", "Careers"],
  ["Legal & Policies", "Privacy Policy", "Terms & Conditions", "Refund & Cancellation Policy", "Cookie Policy", "Grievance Redressal", "Job & Internship Disclaimer"],
];

export function meta() {
  return [
    { title: `${APP_TITLE} | CampusPe` },
    { name: "description", content: "One platform connecting students, colleges and employers." },
  ];
}

export default function HomeRoute() {
  const [filter, setFilter] = useState("All");
  const [fileName, setFileName] = useState("");
  const filters = ["All", "Colleges", "Jobs", "Internships", "Freelance", "Part-time"];
  const filteredOpportunities = opportunities.filter((item) => filter === "All" || item.type === filter || (filter === "Jobs" && item.type === "Freelance"));

  return (
    <div className="campus-page" id="top">
      <header className="site-header" data-node-id="1:797">
        <a href="#top" className="brand-mark" aria-label="CampusPe home"><span className="brand-dot" />Campus<span>Pe</span></a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#colleges">Colleges</a><a href="#employers">Employers</a><a href="#jobs">Jobs</a><a href="#footer">Blogs</a>
        </nav>
        <div className="header-actions"><a className="sign-in" href="#opportunities">Sign in</a><a className="button button-small" href="#opportunities">Sign up</a></div>
      </header>

      <main>
        <section className="hero" data-node-id="1:865">
          <div className="hero-glow hero-glow-one" /><div className="hero-glow hero-glow-two" />
          <div className="hero-heading" data-node-id="1:879">
            <div className="hero-badge"><IconSparkles size={16} /> AI-Powered Campus Assistant</div>
            <h1>Connect <span>10X Faster.</span></h1>
            <p>One platform connecting students, colleges &amp; employers — faster.</p>
            <div className="looking-for"><IconSparkles size={18} />What are you looking for?<IconSparkles size={18} /></div>
          </div>
          <div className="floating-note floating-match"><span className="avatar-stack"><i>AK</i><i>PR</i><i>SN</i></span><div><strong>142 students matched today</strong><small>Just now · IIT, BITS, VIT</small></div></div>
          <div className="floating-note floating-alert"><span className="note-emoji">💼</span><div><strong>Radiant Info <small>shortlisted 8 interns</small></strong><small className="verified">● Verified recruiter · 2 days ago</small></div></div>
          <div className="role-grid">
            {roleCards.map((card) => <RoleCard key={card.nodeId} {...card} />)}
          </div>
          <div className="stats-row" data-node-id="1:807">
            <div><IconSchool /><strong>800+</strong><span>Students</span></div><i className="stat-separator" />
            <div><IconBuildingBank /><strong>130+</strong><span>colleges</span></div><i className="stat-separator" />
            <div><IconBriefcase /><strong>100+</strong><span>jobs &amp; internships</span></div><i className="stat-separator" />
            <div><IconShieldCheck /><strong>100%</strong><span>Safe &amp; Trusted</span></div>
          </div>
        </section>

        <section className="partners" data-node-id="1:859"><p>Trusted by partners across India</p><div className="partner-logos"><b>◉ GINSERV</b><b>STARTUP KARNATAKA</b><b>✺ IIM BANGALORE</b><b>✦ NASSCOM</b><b>◉ FICCI</b><b>✧ DIGITAL INDIA</b></div></section>

        <section className="discovery section-wrap" id="opportunities" data-node-id="1:1118">
          <div className="section-copy">
            <span className="eyebrow">01 · OPPORTUNITY DISCOVERY</span><h2>Stop searching.<br /><span>Start getting matched.</span></h2>
            <p className="section-lead">Tell CampusPe your skills, preferences and goals. We continuously monitor company career pages and job sources, find opportunities that match you, and notify you when they appear.</p>
            <div className="steps-list">{steps.map(([title, text, tag], index) => <article className={`step-card ${index === 0 ? "active" : ""}`} key={title}><span className="step-number">0{index + 1}</span><div><div className="step-title"><h3>{title}</h3><span>{tag}</span></div><p>{text}</p></div></article>)}</div>
            <a className="button rounded-button" href="#jobs">Explore opportunities <IconArrowRight /></a>
          </div>
          <div className="feed-card" id="jobs">
            <div className="feed-heading"><span className="feed-icon"><IconBolt /></span><div><h3>CampusPe Opportunity Feed</h3><p>Colleges &amp; opportunities matched to you</p></div><span className="match-count">● 12 new matches today</span></div>
            <div className="filter-row" role="tablist" aria-label="Opportunity category">{filters.map((item) => <button type="button" role="tab" aria-selected={filter === item} className={filter === item ? "selected" : ""} key={item} onClick={() => setFilter(item)}>{item}</button>)}</div>
            <div className="opportunity-list">{filteredOpportunities.map((item) => <article className="opportunity-item" key={item.title}><span className={`opportunity-mark mark-${item.mark === "IIMB" ? "iim" : item.mark.toLowerCase()}`}>{item.mark}</span><div className="opportunity-info"><div className="opportunity-title"><h4>{item.title}</h4><span>{item.tag}</span></div><div className="opportunity-meta"><span><IconMapPin />{item.place}</span><span><IconClock />{item.details}</span><strong>{item.amount}</strong></div></div><a href="#resume" className="mini-button">{item.type === "Internship" ? "Apply Now" : "View Details"}</a><p className="opportunity-copy">{item.copy}</p></article>)}</div>
            <div className="feed-footer"><a href="#resume">View all matched opportunities <IconChevronRight /></a><span>Curated for you · Updated daily</span></div>
            <p className="handwritten-note">A mix of colleges, jobs,<br />internships and gigs — all in one place.</p>
          </div>
        </section>

        <section className="resume-section" id="resume" data-node-id="1:1312">
          <div className="resume-glow" /><div className="resume-content">
            <div className="resume-heading"><span className="eyebrow">● &nbsp; TRY IT LIVE &nbsp; · &nbsp; v2.4 AI Engine</span><h2>Upload your resume.<br /><span>Find jobs that fit.</span></h2><p>Upload once. CampusPe reads your skills, experience, and preferences — then finds relevant jobs across 1,000+ sources.</p></div>
            <label className="upload-card" data-node-id="1:1337"><span className="match-float"><IconBolt /> <b>98% Match Rate</b><small>AI semantic rank</small></span><span className="upload-inner"><strong>{fileName || "Upload your resume"}</strong><small>PDF, DOC, or DOCX · Up to 10MB · We'll use it to understand your skills and experience.</small><span className="upload-button"><IconUpload />{fileName ? "Choose another file" : "Upload resume"}</span><small>or drag and drop your file here</small><span className="file-types"><i>PDF</i><i>DOC</i><i>DOCX</i></span><input type="file" accept=".pdf,.doc,.docx" onChange={(event) => setFileName(event.currentTarget.files?.[0]?.name ?? "")} /></span><span className="ats-float"><IconShieldCheck /><b>ATS Compliant</b><small>Standardized parser</small></span></label>
            <div className="pipeline"><div><IconShieldCheck /><b>Resume analyzed</b><small>● Ready in 4s</small></div><div><IconSparkles /><b>Skills matched</b><small>Deep taxonomy</small></div><div><IconBolt /><b>Experience matched</b><small>Contextual seniority</small></div><div><IconSearch /><b>1,000+ sources searched</b><small>Real-time aggregators</small></div></div>
          </div>
        </section>

        <section className="college-section section-wrap" id="colleges" data-node-id="1:1439">
          <div className="section-copy"><span className="eyebrow">02 · FOR COLLEGES</span><h2>Get Discovered<br />by Students and<br /><span>Recruiters.</span></h2><p className="section-lead">Put your college in front of students searching for the right course and recruiters looking for the right talent. CampusPe helps you build your presence, attract enquiries and connect with opportunities.</p><a className="button rounded-button" href="#footer">List Your College <IconArrowRight /></a></div>
          <div className="benefit-stack">{colleges.map(([eyebrow, title, text, tag, secondTag], index) => <article className="benefit-card" key={eyebrow}><span className="benefit-eyebrow"><b>0{index + 1}</b>{eyebrow}</span><h3>{title}</h3><p>{text}</p><div className="benefit-tags"><span>{tag}</span><small>{secondTag}</small></div></article>)}</div>
        </section>

        <section className="employer-section section-wrap" id="employers" data-node-id="1:1547">
          <div className="section-copy"><span className="eyebrow">03 · FOR EMPLOYERS</span><h2>Stop running<br />campus drives.<br /><span>Start hiring the right people.</span></h2><p className="section-lead">Post a role in minutes and reach relevant candidates without the time, travel and coordination of traditional hiring. CampusPe helps you discover, match and connect with talent from colleges and beyond.</p><a className="button rounded-button" href="#footer">Post a Job <IconArrowRight /></a></div>
          <div className="employer-stack">{employers.map(([title, text, tag, sub], index) => <article className="employer-card" key={title}><span className="step-number">0{index + 1}</span><div className="employer-copy"><div><h3>{title}</h3><span className="instant-tag">INSTANT SETUP</span></div><p>{text}</p></div><div className="employer-tags"><b>{tag}</b><small>{sub}</small></div></article>)}</div>
        </section>

        <section className="app-showcase" data-node-id="1:1657"><div className="showcase-heading"><h2>Checkout Our App Interface Look</h2><p>Experience the power of a unified campus ecosystem right in your pocket. CampusPe offers a tailored interface for every user: students can explore trending courses, colleges can showcase their campus life, and companies can post job vacancies directly to a pool of qualified candidates.</p></div><div className="phone-gallery"><img src="/campuspe/phone-left.png" alt="CampusPe mobile app preview" /><img src="/campuspe/phone-left-center.png" alt="CampusPe mobile app preview" /><div className="phone-main"><div className="phone-island" /><div className="phone-screen"><span className="phone-logo">CampusPe</span><div className="phone-search">Search colleges, jobs...</div><h3>Find your next opportunity</h3><div className="phone-feature blue-feature">Discover colleges<br /><small>Find the right fit for you</small></div><div className="phone-feature orange-feature">Product Intern<br /><small>New opportunity · Bengaluru</small></div><div className="phone-feature green-feature">Your profile is looking great</div></div></div><img src="/campuspe/phone-right-center.png" alt="CampusPe mobile app preview" /><img src="/campuspe/phone-right.png" alt="CampusPe mobile app preview" /></div><div className="showcase-dots"><i /><i /><i /><i /><i /></div><div className="download-row"><div><h3>Download App Now</h3><p>Elevate your academic journey with CampusPe, the all-in-one digital ecosystem designed to bridge the gap between education and industry. Whether you’re a student seeking your next big internship, a college looking to empower your cohort, or a company scouting for top-tier talent, CampusPe streamlines the connection. Your career doesn't start at graduation—it starts here.</p><div className="store-buttons"><a href="#footer">▶ Google Play</a><a href="#footer">▣ App Store</a></div></div><div className="download-art"><IconDeviceMobile size={170} stroke={1} /><span>CampusPe</span></div></div></section>

        <section className="contact-cta"><h2>Still have questions?</h2><p>Our support team is here to help you succeed. Get in touch anytime.</p><div><a className="button rounded-button" href="mailto:contactus@campuspe.com">Contact Support <IconArrowRight /></a><a className="outline-button" href="tel:+916362606464">Schedule a Call <IconArrowRight /></a></div></section>
        <section className="ready-banner"><div><h2>Ready for what’s next?</h2><p>Discover colleges, find opportunities, list your institution, or start hiring with CampusPe.</p></div><div className="ready-actions"><a href="#colleges">Explore Colleges <IconArrowRight /></a><a href="#jobs">Find Opportunities <IconArrowRight /></a><a className="light-action" href="#colleges">List Your College <IconArrowRight /></a><a className="light-action" href="#employers">Post a Job <IconArrowRight /></a></div></section>
      </main>

      <footer className="site-footer" id="footer" data-node-id="1:1724"><div className="footer-main"><div className="footer-brand"><a href="#top" className="brand-mark"><span className="brand-dot" />Campus<span>Pe</span></a><p>From choosing a college to finding your next opportunity.</p><p>CampusPe connects students, colleges and employers in one place.</p></div>{footerGroups.map(([heading, ...links]) => <div className="footer-group" key={heading}><h3>{heading}</h3>{links.map((link) => <a key={link} href={heading === "For Students" ? "#jobs" : heading === "For Colleges" ? "#colleges" : heading === "For Employers" ? "#employers" : heading === "Company" ? "mailto:contactus@campuspe.com" : "#footer"}>{link}</a>)}</div>)}</div><div className="footer-contact"><a href="mailto:contactus@campuspe.com"><IconMail />contactus@campuspe.com</a><a href="tel:+916362606464"><IconDeviceMobile />+91 6362606464</a><span>● &nbsp; Students · Colleges · Employers</span></div><div className="footer-legal"><span>2026 CampusPe Technologies Pvt. Ltd. &nbsp; Privacy &nbsp; Terms &nbsp; Grievance</span><div className="social-links"><a href="#footer" aria-label="LinkedIn">in</a><a href="#footer" aria-label="Instagram">◎</a><a href="#footer" aria-label="Facebook">f</a><a href="#footer" aria-label="YouTube">▶</a></div></div></footer>
    </div>
  );
}

function RoleCard({ icon: Icon, nodeId, title, status, description, features, cta, href, artwork }) {
  return (
    <article className="role-card" data-node-id={nodeId}>
      <div className="role-top"><span className="role-icon"><Icon /></span><span className={`status-pill ${status === "Available Now" ? "available" : ""}`}>{status}</span></div>
      <h2>{title}</h2><p>{description}</p>
      <ul>{features.map((feature) => <li key={feature}><IconCheck />{feature}</li>)}</ul>
      <a className="button role-button" href={href}>{cta}{cta === "Explore Jobs" ? <IconArrowRight /> : <IconBell />}</a>
      {artwork}
    </article>
  );
}

function IconBell() {
  return <IconClock size={16} />;
}

function IconSearch() {
  return <IconSparkles size={16} />;
}
