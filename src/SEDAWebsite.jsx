import { useState, useEffect, useRef } from "react";
import sedamedia from "./assets/logos/sedamedia.png";
import sample from "./assets/gallery/sample.jpg";
import sample1 from "./assets/gallery/sample1.png";
import sample2 from "./assets/gallery/sample2.jpg";
import sample3 from "./assets/gallery/sample3.jpg";
import sample4 from "./assets/gallery/sample4.png";
import sample5 from "./assets/gallery/sample5.jpg";
import sample6 from "./assets/gallery/sample6.png";
import sample7 from "./assets/gallery/sample7.jpg";
import sample8 from "./assets/gallery/sample8.jpg";
import sample9 from "./assets/gallery/sample9.jpg";
import sample10 from "./assets/gallery/sample10.jpg";

import client1 from "./assets/clients/client1.png";
import client2 from "./assets/clients/client2.png";
import client3 from "./assets/clients/client3.png";
import client4 from "./assets/clients/client4.png";
import client5 from "./assets/clients/client5.png";
import client6 from "./assets/clients/client6.png";
import client7 from "./assets/clients/client7.png";
import client8 from "./assets/clients/client8.png";
import client9 from "./assets/clients/client9.png";
import client10 from "./assets/clients/client10.png";
import client11 from "./assets/clients/client11.png";
import client12 from "./assets/clients/client12.jpeg";

import "./landing-page.css";

const galleryImages = [
  { src: sample,  alt: "Brand campaign" },
  { src: sample1,  alt: "Content production" },
  { src: sample2,  alt: "Digital marketing" },
  { src: sample3,  alt: "Social media design" },
  { src: sample4,  alt: "Video production" },
  { src: sample5,  alt: "Strategy deck" },
  { src: sample6,  alt: "Brand identity" },
  { src: sample7,  alt: "Campaign visuals" },
  { src: sample8,  alt: "Typography design" },
  { src: sample9, alt: "Event marketing" },
];

function useFadeUp() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function Cursor() {
  const dot = useRef(null);
  useEffect(() => {
    const move = (e) => {
      if (dot.current) {
        dot.current.style.left = e.clientX + "px";
        dot.current.style.top  = e.clientY + "px";
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return <div className="cursor-dot" ref={dot} />;
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <div className="nav-logo">
        <img src={sedamedia} alt="SEDA Media Limited"  />
      </div>
      <ul className="nav-links">
        {[["About", "#about"], ["Services", "#services"], ["Work", "#work"], ["Approach", "#approach"]].map(([l, h]) => (
          <li key={l}><a href={h}>{l}</a></li>
        ))}
      </ul>
      <a href="https://forms.gle/qVrirfaGUFu5jUDi7" target="_blank" rel="noreferrer" className="nav-cta">Start Project</a>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <div className="hero-eyebrow">Creative &amp; Strategy Agency</div>
       <h1 className="hero-headline">
  Grow Your Brand With Strategy, Content, and Design That{" "}
  <span className="accent">Actually Works.</span>
</h1>
        <p className="hero-sub">
          We help businesses stand out, attract the right audience, and convert attention into real growth through powerful content and smart marketing.
        </p>
        <a href="https://forms.gle/qVrirfaGUFu5jUDi7" target="_blank" rel="noreferrer" className="hero-cta">
          Start Your Project Today <span>→</span>
        </a>
      </div>

      <div className="hero-right">
        {/*
          Import your hero image and replace the src:
          import heroImg from './assets/hero-image.jpg'
          then: <img src={heroImg} alt="SEDA Media creative work" />
        */}
        <img src={sample10} alt="SEDA Media creative work" />
        <div className="hero-right-overlay" />
        <div className="hero-right-caption">
          <div className="hero-right-caption-line" />
          <div className="hero-right-caption-text">
            Strategy · Content · Design<br />
            Lagos, Nigeria
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Content Production", "Digital Marketing", "Media Strategy", "Brand Identity", "Visual Design", "Campaign Execution"];
  const doubled = [...items, ...items];
  return (
    <div className="marquee-strip">
      <div className="marquee-track">
        {doubled.map((t, i) => (
          <span className="marquee-item" key={i}>{t}<span>✦</span></span>
        ))}
      </div>
    </div>
  );
}

function About() {
  const ref = useFadeUp();
  return (
    <section id="about">
      <div className="section-label">Who We Are</div>
      <div className="about-grid fade-up" ref={ref}>
        <div>
          <h2 className="about-title">
            Your Brand Deserves<br />More Than Just<br /><em>"Nice Designs."</em>
          </h2>
        </div>
        <div className="about-body">
          <p>SEDA Media Limited is a creative agency built on one simple idea: <strong style={{ color: "#0A0A0A" }}>Great design means nothing without results.</strong></p>
          <p>With over a decade of experience working with brands both locally and globally, we bring a depth of insight that goes beyond aesthetics, delivering solutions that drive real business outcomes.</p>
          <p>We partner with businesses to create content, design, and strategies that don't just capture attention, but turn that attention into measurable growth.</p>
          <p>From startups to established companies, we help brands communicate clearly, show up confidently, and compete effectively in today's digital landscape.</p>
        </div>
      </div>
    </section>
  );
}

function MissionVision() {
  const ref = useFadeUp();
  return (
    <section style={{ padding: 0 }}>
      <div className="mv-grid fade-up" ref={ref}>
        <div className="mv-card">
          <div className="mv-label">Our Mission</div>
          <div className="mv-text">To help brands grow through clarity, creativity, and consistency.</div>
        </div>
        <div className="mv-card">
          <div className="mv-label">Our Vision</div>
          <div className="mv-text">To become a leading creative and strategy partner for businesses across Africa, shaping how brands are seen, heard, and experienced.</div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const ref = useFadeUp();
  const services = [
    {
      name: "Content Production",
      desc: "Video, design, and storytelling.",
      tag: "Video · Design · Story",
    },
    {
      name: "Digital Marketing",
      desc: "Visibility, campaigns, and positioning.",
      tag: "Visibility · Campaigns",
    },
    {
      name: "Media Strategy",
      desc: "Targeting, planning, and execution.",
      tag: "Targeting · Planning",
    },
  ];
  return (
    <section id="services" style={{ background: "var(--gray)" }}>
      <div className="section-label">What We Do</div>
      <p className="services-intro">
        We operate at the intersection of creativity and strategy. Our work spans content production, digital marketing, and media strategy.
      </p>
      <div className="service-list fade-up" ref={ref}>
        {services.map((s) => (
          <div className="service-item" key={s.name}>
            <span className="service-name">{s.name}</span>
            <span className="service-desc">{s.desc}</span>
            <span className="service-tag">{s.tag}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Approach() {
  const ref = useFadeUp();
  const steps = [
    {
      step: "01", icon: "◎", title: "Understand",
      body: "We start with understanding your business, your audience, and your goals."
    },
    {
      step: "02", icon: "◈", title: "Strategise",
      body: "We develop clear strategies, ensuring everything we create is aligned with your business outcomes."
    },
    {
      step: "03", icon: "◉", title: "Execute",
      body: "From a single design to a full campaign — we deliver with precision and consistency."
    },
  ];
  return (
    <section className="approach-section" id="approach">
      <div className="section-label" style={{ color: "rgba(255,255,255,0.3)" }}>Our Approach</div>
      <div className="approach-header">
        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(32px, 3.5vw, 56px)", lineHeight: 1.08, color: "var(--white)" }}>
          We Don't Jump Straight<br />Into Execution.
        </h2>
        <p className="approach-intro">
          We start with understanding your business, your audience, and your goals. From there, we develop clear strategies and execute with precision, ensuring that everything we create — from a single design to a full campaign — is aligned with real business outcomes.
        </p>
      </div>
      <div className="approach-grid fade-up" ref={ref}>
        {steps.map(s => (
          <div className="approach-card" data-step={s.step} key={s.title}>
            <div className="approach-card-icon">{s.icon}</div>
            <div className="approach-card-title">{s.title}</div>
            <div className="approach-card-body">{s.body}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Differentiators() {
  const ref = useFadeUp();
  return (
    <section style={{ padding: 0 }} id="difference">
      <div className="diff-wrap fade-up" ref={ref}>
        <div className="diff-left">
          <div className="section-label">What Makes Us Different</div>
          <h2 className="diff-title">
            Most Agencies Focus on Output.<br /><span className="accent">We Focus on Impact.</span>
          </h2>
        </div>
        <div className="diff-right">
          <div className="diff-body">
            <p>At SEDA Media Limited, we provide end to end delivery across multiple disciplines within brand communication. From ideation to final execution, we handle every stage of the process, ensuring consistency, clarity, and effectiveness at every touchpoint.</p>
            <p>We think strategically before we create, bringing together content, design, and marketing into one seamless workflow. This integrated approach allows us to deliver work that is not only creative, but purposeful and results driven.</p>
            <p>We are your one stop shop for building and communicating your brand, partnering with you from concept to completion to drive real growth.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const ref = useFadeUp();
  return (
    <section className="gallery-section" id="work">
      <div className="gallery-header">
        <div className="section-label">Our Work</div>
        <h2 className="gallery-title">Work That Speaks.</h2>
      </div>
      <div className="gallery-grid fade-up" ref={ref}>
        {galleryImages.map((img, i) => (
          <div className="gallery-item" key={i}>
            {/*
              Import your images then replace src:
              import s1 from './assets/gallery/sample (1).jpg'
              then in galleryImages: { src: s1, alt: "..." }
            */}
            <img src={img.src} alt={img.alt} loading="lazy" />
            <div className="gallery-item-overlay" />
          </div>
        ))}
      </div>
    </section>
  );
}

const clients = [
  { src: client1, alt: "Client 1" },
  { src: client2, alt: "Client 2" },
  { src: client3, alt: "Client 3" },
  { src: client4, alt: "Client 4" },
  { src: client5, alt: "Client 5" },
  { src: client6, alt: "Client 6" },
  { src: client7, alt: "Client 7" },
  { src: client8, alt: "Client 8" },
  { src: client9, alt: "Client 9" },
  { src: client10, alt: "Client 10" },
  { src: client11, alt: "Client 11" },
  { src: client12, alt: "Client 12" },
];

function Clients() {
  const ref = useFadeUp();

  return (
    <section style={{ background: "var(--white)" }}>
      <div className="section-label">Brands We Have Worked With</div>

      <div className="clients-grid fade-up" ref={ref}>
        {clients.map((client, i) => (
          <div className="client-cell" key={i}>
            <img
              src={client.src}
              alt={client.alt}
              className="client-logo"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const ref = useFadeUp();
  const testimonials = [
    {
      text: "SEDA Media didn't just deliver great designs — they delivered results. Our engagement went up significantly within weeks of working with them.",
      name: "Client Name",
      role: "CEO, Company Name",
    },
    {
      text: "The team's ability to blend strategy with creative execution is unmatched. They felt less like an agency and more like an extension of our team.",
      name: "Client Name",
      role: "Marketing Director, Company Name",
    },
    {
      text: "From brief to delivery, the process was seamless. They understood our brand voice instantly and produced work that truly stood out.",
      name: "Client Name",
      role: "Founder, Company Name",
    },
  ];
  return (
    <section className="testimonials-section">
      <div className="section-label">Testimonials</div>
      <div className="testimonials-grid fade-up" ref={ref}>
        {testimonials.map((t, i) => (
          <div className="testimonial-card" key={i}>
            <div className="testimonial-quote">"</div>
            <p className="testimonial-text">{t.text}</p>
            <div className="testimonial-author">
              <div className="testimonial-name">{t.name}</div>
              <div className="testimonial-role">{t.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <section className="cta-banner" id="contact">
      <h4 className="cta-banner-title">
       Let's build something together.
      </h4>
    
      <a href="https://forms.gle/qVrirfaGUFu5jUDi7" target="_blank" rel="noreferrer" className="cta-btn">
        Start Your Project Today <span>→</span>
      </a>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div>
          <div className="footer-brand">
            <img src={sedamedia} alt="SEDA Media Limited" style={{ width: "150px", height: "auto" }}  />
          </div>
          <p className="footer-tagline">
            Creative agency built on one idea: great design means nothing without results.
          </p>
          <p className="footer-tagline">
          Address: 15 Abebi Close, Ojodu Berger, Lagos State.
          </p>
        </div>
        <div>
          <div className="footer-col-title">Navigate</div>
          <ul className="footer-links">
            {[["About", "#about"], ["Services", "#services"], ["Our Work", "#work"], ["Approach", "#approach"]].map(([l, h]) => (
              <li key={l}><a href={h}>{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="footer-col-title">Get In Touch</div>
          <ul className="footer-links">
            <li><a href="mailto:email">Email</a></li>
            <li><a href="https://www.instagram.com/seda.media/" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href="https://www.linkedin.com/company/seda-media-house/" target="_blank" rel="noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span className="footer-copy">© {new Date().getFullYear()} SEDA Media Limited. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default function SEDAWebsite() {
  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <MissionVision />
        <Services />
        <Approach />
        <Differentiators />
        <Gallery />
        <Clients />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}