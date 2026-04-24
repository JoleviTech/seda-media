// import { useState, useEffect, useRef } from "react";

// const FontStyle = () => (
//   <style>{`
//     @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&family=Space+Mono:wght@400;700&display=swap');

//     *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

//     :root {
//       --black: #0A0A0A;
//       --white: #FFFFFF;
//       --red: #D70011;
//       --gray: #F4F4F4;
//       --muted: #888888;
//       --text: #0A0A0A;
//       --text-muted: #777777;
//       --border: rgba(0,0,0,0.09);
//     }

//     html { scroll-behavior: smooth; }

//     body {
//       background: var(--white);
//       color: var(--text);
//       font-family: 'DM Sans', sans-serif;
//       font-weight: 300;
//       overflow-x: hidden;
//     }

//     body::before {
//       content: '';
//       position: fixed; inset: 0;
//       background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
//       opacity: 0.025;
//       pointer-events: none;
//       z-index: 9999;
//     }

//     ::-webkit-scrollbar { width: 3px; }
//     ::-webkit-scrollbar-track { background: var(--white); }
//     ::-webkit-scrollbar-thumb { background: var(--red); }

//     .cursor-dot {
//       width: 7px; height: 7px;
//       background: var(--red);
//       border-radius: 50%;
//       position: fixed;
//       pointer-events: none;
//       z-index: 10000;
//       transform: translate(-50%, -50%);
//     }

//     /* ── Nav ── */
//     nav {
//       position: fixed; top: 0; left: 0; right: 0;
//       z-index: 100;
//       display: flex; align-items: center; justify-content: space-between;
//       padding: 28px 60px;
//       transition: background 0.4s, padding 0.4s;
//     }
//     nav.scrolled {
//       background: rgba(255,255,255,0.96);
//       backdrop-filter: blur(12px);
//       padding: 18px 60px;
//       border-bottom: 1px solid var(--border);
//     }
//     .nav-logo img { height: 34px; }
//     .nav-links { display: flex; gap: 40px; list-style: none; }
//     .nav-links a {
//       font-family: 'Space Mono', monospace;
//       font-size: 11px;
//       letter-spacing: 0.15em;
//       text-transform: uppercase;
//       color: rgba(0,0,0,0.45);
//       text-decoration: none;
//       transition: color 0.2s;
//     }
//     .nav-links a:hover { color: var(--black); }
//     .nav-cta {
//       font-family: 'Space Mono', monospace;
//       font-size: 11px;
//       letter-spacing: 0.1em;
//       text-transform: uppercase;
//       color: var(--white);
//       background: var(--red);
//       border: none;
//       padding: 12px 22px;
//       cursor: pointer;
//       transition: background 0.2s;
//       text-decoration: none;
//     }
//     .nav-cta:hover { background: #ff0014; }

//     /* ── Hero ── */
//     .hero {
//       min-height: auto;
//       display: grid;
//       grid-template-columns: 1fr 1fr;
//       padding: 0;
//       position: relative;
//       overflow: hidden;
//       background: var(--white);
//     }
//     .hero-grid-line { display: none; }
//     .hero-left {
//       padding: 160px 56px 80px 60px;
//       display: flex; flex-direction: column;
//       justify-content: center;
//     }
//     .hero-right {
//       background: var(--black);
//       display: flex; flex-direction: column;
//       justify-content: flex-end;
//       padding: 60px;
//       position: relative;
//       overflow: hidden;
//     }
//     .hero-right-bg {
//       position: absolute;
//       inset: 0;
//       display: flex; align-items: center; justify-content: center;
//       pointer-events: none;
//     }
//     .hero-right-word {
//       font-family: 'Bebas Neue', sans-serif;
//       font-size: clamp(120px, 16vw, 220px);
//       color: rgba(255,255,255,0.04);
//       line-height: 0.9;
//       letter-spacing: -0.02em;
//       white-space: nowrap;
//       transform: rotate(-90deg);
//       user-select: none;
//     }
//     .hero-right-stats {
//       position: relative;
//       border-top: 1px solid rgba(255,255,255,0.08);
//       padding-top: 32px;
//       display: grid;
//       grid-template-columns: 1fr 1fr;
//       gap: 32px;
//     }
//     .hero-stat-num {
//       font-family: 'Bebas Neue', sans-serif;
//       font-size: 48px;
//       color: var(--white);
//       line-height: 1;
//     }
//     .hero-stat-num span { color: var(--red); }
//     .hero-stat-label {
//       font-family: 'Space Mono', monospace;
//       font-size: 9px;
//       letter-spacing: 0.15em;
//       text-transform: uppercase;
//       color: rgba(255,255,255,0.3);
//       margin-top: 6px;
//     }
//     .hero-right-tag {
//       position: absolute;
//       top: 60px; right: 60px;
//       font-family: 'Space Mono', monospace;
//       font-size: 9px;
//       letter-spacing: 0.2em;
//       text-transform: uppercase;
//       color: rgba(255,255,255,0.2);
//       writing-mode: vertical-rl;
//       display: flex; align-items: center; gap: 12px;
//     }
//     .hero-right-tag::after {
//       content: '';
//       width: 1px; height: 40px;
//       background: rgba(255,255,255,0.12);
//       display: block;
//     }
//     .hero-eyebrow {
//       font-family: 'Space Mono', monospace;
//       font-size: 11px;
//       letter-spacing: 0.2em;
//       text-transform: uppercase;
//       color: var(--red);
//       margin-bottom: 22px;
//       display: flex; align-items: center; gap: 14px;
//     }
//     .hero-eyebrow::before {
//       content: '';
//       display: block;
//       width: 32px; height: 1px;
//       background: var(--red);
//       flex-shrink: 0;
//     }
//     .hero-headline {
//       font-family: 'Bebas Neue', sans-serif;
//       font-size: clamp(34px, 3.8vw, 60px);
//       line-height: 1.08;
//       letter-spacing: 0.01em;
//     }
//     .hero-headline .accent { color: var(--red); }
//     .hero-sub {
//       font-size: 15px;
//       line-height: 1.75;
//       color: var(--text-muted);
//       margin-top: 22px;
//     }
//     .hero-cta {
//       display: inline-flex; align-items: center; gap: 14px;
//       font-family: 'Space Mono', monospace;
//       font-size: 11px;
//       letter-spacing: 0.12em;
//       text-transform: uppercase;
//       color: var(--white);
//       background: var(--red);
//       border: none;
//       padding: 16px 30px;
//       cursor: pointer;
//       transition: all 0.2s;
//       text-decoration: none;
//       margin-top: 36px;
//       align-self: flex-start;
//     }
//     .hero-cta:hover { background: #ff0014; gap: 20px; }

//     /* ── Marquee ── */
//     .marquee-strip {
//       overflow: hidden;
//       white-space: nowrap;
//       padding: 16px 0;
//       background: var(--black);
//       border-top: 1px solid rgba(255,255,255,0.04);
//       border-bottom: 1px solid rgba(255,255,255,0.04);
//     }
//     .marquee-track {
//       display: inline-flex;
//       animation: marquee 28s linear infinite;
//     }
//     .marquee-item {
//       font-family: 'Bebas Neue', sans-serif;
//       font-size: 13px;
//       letter-spacing: 0.15em;
//       color: rgba(255,255,255,0.28);
//       padding: 0 32px;
//       display: flex; align-items: center; gap: 32px;
//     }
//     .marquee-item span { color: var(--red); font-size: 14px; }
//     @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }

//     /* ── Section base ── */
//     section { padding: 72px 60px; }
//     .section-label {
//       font-family: 'Space Mono', monospace;
//       font-size: 10px;
//       letter-spacing: 0.25em;
//       text-transform: uppercase;
//       color: var(--red);
//       margin-bottom: 24px;
//     }

//     /* ── About ── */
//     .about-grid {
//       display: grid;
//       grid-template-columns: 5fr 7fr;
//       gap: 56px;
//       align-items: start;
//     }
//     .about-title {
//       font-family: 'Bebas Neue', sans-serif;
//       font-size: clamp(32px, 3.5vw, 54px);
//       line-height: 1.08;
//       color: var(--black);
//     }
//     .about-title em { color: var(--red); font-style: normal; }
//     .about-subtitle {
//       font-family: 'Space Mono', monospace;
//       font-size: 10px;
//       letter-spacing: 0.15em;
//       text-transform: uppercase;
//       color: var(--muted);
//       margin-top: 18px;
//       line-height: 1.6;
//     }
//     .about-body {
//       font-size: 15px;
//       line-height: 1.85;
//       color: var(--text-muted);
//     }
//     .about-body p + p { margin-top: 16px; }

//     /* ── Mission / Vision ── */
//     .mv-grid {
//       display: grid;
//       grid-template-columns: 1fr 1fr;
//       gap: 1px;
//       background: var(--border);
//     }
//     .mv-card {
//       background: var(--white);
//       padding: 40px 48px;
//       position: relative;
//     }
//     .mv-card::after {
//       content: '';
//       position: absolute;
//       top: 0; left: 0;
//       width: 3px; height: 100%;
//       background: var(--red);
//     }
//     .mv-label {
//       font-family: 'Space Mono', monospace;
//       font-size: 10px;
//       letter-spacing: 0.2em;
//       text-transform: uppercase;
//       color: var(--red);
//       margin-bottom: 14px;
//     }
//     .mv-text {
//       font-size: 15px;
//       line-height: 1.7;
//       color: var(--text-muted);
//     }

//     /* ── Services ── */
//     .services-intro {
//       font-size: 15px;
//       color: var(--text-muted);
//       margin-bottom: 36px;
//       max-width: 540px;
//       line-height: 1.75;
//     }
//     .service-list { border-top: 1px solid var(--border); }
//     .service-item {
//       display: grid;
//       grid-template-columns: 1fr 1fr auto;
//       align-items: center;
//       gap: 40px;
//       padding: 26px 0;
//       border-bottom: 1px solid var(--border);
//       transition: padding-left 0.3s;
//       cursor: default;
//     }
//     .service-item:hover { padding-left: 10px; }
//     .service-item:hover .service-name { color: var(--red); }
//     .service-name {
//       font-family: 'Bebas Neue', sans-serif;
//       font-size: 28px;
//       letter-spacing: 0.02em;
//       color: var(--black);
//       transition: color 0.3s;
//     }
//     .service-desc {
//       font-size: 13px;
//       color: var(--text-muted);
//       line-height: 1.6;
//     }
//     .service-tag {
//       font-family: 'Space Mono', monospace;
//       font-size: 9px;
//       letter-spacing: 0.1em;
//       text-transform: uppercase;
//       color: var(--muted);
//       border: 1px solid var(--border);
//       padding: 5px 10px;
//       white-space: nowrap;
//     }

//     /* ── Approach ── */
//     .approach-section { background: var(--black); }
//     .approach-header {
//       display: grid;
//       grid-template-columns: 5fr 7fr;
//       gap: 56px;
//       align-items: start;
//     }
//     .approach-intro {
//       font-size: 14px;
//       color: rgba(255,255,255,0.4);
//       line-height: 1.8;
//       padding-top: 6px;
//     }
//     .approach-grid {
//       display: grid;
//       grid-template-columns: repeat(3, 1fr);
//       gap: 1px;
//       background: rgba(255,255,255,0.06);
//       border: 1px solid rgba(255,255,255,0.06);
//       margin-top: 44px;
//     }
//     .approach-card {
//       background: var(--black);
//       padding: 40px 32px;
//       position: relative;
//       overflow: hidden;
//     }
//     .approach-card::before {
//       content: attr(data-step);
//       position: absolute;
//       top: -8px; right: 14px;
//       font-family: 'Bebas Neue', sans-serif;
//       font-size: 90px;
//       color: rgba(255,255,255,0.03);
//       line-height: 1;
//       pointer-events: none;
//     }
//     .approach-card-icon {
//       width: 34px; height: 34px;
//       border: 1px solid var(--red);
//       display: flex; align-items: center; justify-content: center;
//       margin-bottom: 24px;
//       color: var(--red);
//       font-size: 13px;
//     }
//     .approach-card-title {
//       font-family: 'Bebas Neue', sans-serif;
//       font-size: 24px;
//       margin-bottom: 10px;
//       letter-spacing: 0.02em;
//       color: var(--white);
//     }
//     .approach-card-body {
//       font-size: 13px;
//       line-height: 1.7;
//       color: rgba(255,255,255,0.4);
//     }

//     /* ── Differentiators ── */
//     .diff-wrap {
//       display: grid;
//       grid-template-columns: 1fr 1fr;
//       gap: 1px;
//       background: var(--border);
//     }
//     .diff-left {
//       background: var(--white);
//       padding: 56px 60px;
//       display: flex; flex-direction: column; justify-content: center;
//     }
//     .diff-right {
//       background: var(--gray);
//       padding: 56px 60px;
//       display: flex; flex-direction: column; justify-content: center;
//     }
//     .diff-title {
//       font-family: 'Bebas Neue', sans-serif;
//       font-size: clamp(28px, 3vw, 48px);
//       line-height: 1.08;
//       color: var(--black);
//     }
//     .diff-title .accent { color: var(--red); }
//     .diff-body p {
//       font-size: 14px;
//       line-height: 1.8;
//       color: var(--text-muted);
//     }
//     .diff-body p + p { margin-top: 18px; }

//     /* ── Gallery ── */
//     .gallery-section { padding: 72px 0; background: var(--gray); }
//     .gallery-header { padding: 0 60px 32px; }
//     .gallery-title {
//       font-family: 'Bebas Neue', sans-serif;
//       font-size: clamp(32px, 3.5vw, 56px);
//       line-height: 1;
//       color: var(--black);
//     }
//     .gallery-grid {
//       display: grid;
//       grid-template-columns: repeat(5, 1fr);
//       grid-auto-rows: 230px;
//       gap: 2px;
//     }
//     .gallery-item {
//       overflow: hidden;
//       position: relative;
//       background: #d8d8d8;
//       cursor: pointer;
//     }
//     .gallery-item:nth-child(3n+1) { grid-row: span 2; }
//     .gallery-item img {
//       width: 100%; height: 100%;
//       object-fit: cover;
//       transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), filter 0.4s;
//       filter: grayscale(10%);
//     }
//     .gallery-item:hover img { transform: scale(1.05); filter: grayscale(0%); }
//     .gallery-item-overlay {
//       position: absolute; inset: 0;
//       background: rgba(215,0,17,0);
//       transition: background 0.4s;
//     }
//     .gallery-item:hover .gallery-item-overlay { background: rgba(215,0,17,0.07); }

//     /* ── Clients ── */
//     .clients-grid {
//       display: grid;
//       grid-template-columns: repeat(6, 1fr);
//       gap: 1px;
//       background: var(--border);
//       border: 1px solid var(--border);
//       margin-top: 32px;
//     }
//     .client-cell {
//       background: var(--white);
//       aspect-ratio: 3/2;
//       display: flex; align-items: center; justify-content: center;
//       padding: 18px;
//       transition: background 0.2s;
//     }
//     .client-cell:hover { background: var(--gray); }
//     .client-cell img {
//       max-width: 100%; max-height: 40px;
//       object-fit: contain;
//       opacity: 0.32;
//       transition: opacity 0.2s;
//     }
//     .client-cell:hover img { opacity: 0.72; }
//     .client-placeholder {
//       font-family: 'Space Mono', monospace;
//       font-size: 9px;
//       letter-spacing: 0.12em;
//       text-transform: uppercase;
//       color: rgba(0,0,0,0.14);
//       text-align: center;
//       line-height: 1.6;
//     }

//     /* ── Testimonials ── */
//     .testimonials-section { background: var(--white); }
//     .testimonials-grid {
//       display: grid;
//       grid-template-columns: repeat(3, 1fr);
//       gap: 1px;
//       background: var(--border);
//       border: 1px solid var(--border);
//       margin-top: 32px;
//     }
//     .testimonial-card {
//       background: var(--white);
//       padding: 36px 32px;
//     }
//     .testimonial-quote {
//       font-size: 40px;
//       color: var(--red);
//       font-family: Georgia, serif;
//       line-height: 1;
//       margin-bottom: 8px;
//     }
//     .testimonial-text {
//       font-size: 14px;
//       line-height: 1.8;
//       color: var(--text-muted);
//       font-style: italic;
//     }
//     .testimonial-author {
//       margin-top: 20px;
//       border-top: 1px solid var(--border);
//       padding-top: 16px;
//     }
//     .testimonial-name {
//       font-family: 'Space Mono', monospace;
//       font-size: 10px;
//       letter-spacing: 0.1em;
//       text-transform: uppercase;
//       color: var(--black);
//     }
//     .testimonial-role {
//       font-size: 12px;
//       color: var(--muted);
//       margin-top: 3px;
//     }

//     /* ── CTA Banner ── */
//     .cta-banner {
//       padding: 96px 60px;
//       text-align: center;
//       position: relative;
//       overflow: hidden;
//       background: var(--black);
//     }
//     .cta-banner::before {
//       content: 'GROW';
//       position: absolute;
//       top: 50%; left: 50%;
//       transform: translate(-50%, -50%);
//       font-family: 'Bebas Neue', sans-serif;
//       font-size: 320px;
//       color: rgba(215,0,17,0.04);
//       pointer-events: none;
//       white-space: nowrap;
//       line-height: 1;
//     }
//     .cta-banner-title {
//       font-family: 'Bebas Neue', sans-serif;
//       font-size: clamp(32px, 4.5vw, 64px);
//       line-height: 1.08;
//       position: relative;
//       color: var(--white);
//     }
//     .cta-banner-sub {
//       font-size: 14px;
//       color: rgba(255,255,255,0.42);
//       margin: 18px auto 0;
//       max-width: 420px;
//       line-height: 1.7;
//       position: relative;
//     }
//     .cta-btn {
//       display: inline-flex; align-items: center; gap: 14px;
//       font-family: 'Space Mono', monospace;
//       font-size: 11px;
//       letter-spacing: 0.15em;
//       text-transform: uppercase;
//       color: var(--white);
//       background: var(--red);
//       border: none;
//       padding: 16px 40px;
//       cursor: pointer;
//       margin-top: 36px;
//       transition: all 0.2s;
//       position: relative;
//       text-decoration: none;
//     }
//     .cta-btn:hover { background: #ff0014; gap: 20px; }

//     /* ── Footer ── */
//     footer {
//       background: var(--black);
//       border-top: 1px solid rgba(255,255,255,0.05);
//       padding: 60px 60px 32px;
//     }
//     .footer-top {
//       display: grid;
//       grid-template-columns: 1.8fr 1fr 1fr;
//       gap: 56px;
//       padding-bottom: 44px;
//       border-bottom: 1px solid rgba(255,255,255,0.05);
//     }
//     .footer-brand img {
//       height: 28px;
//       filter: brightness(0) invert(1);
//     }
//     .footer-tagline {
//       font-size: 13px;
//       color: rgba(255,255,255,0.28);
//       line-height: 1.7;
//       margin-top: 14px;
//       max-width: 260px;
//     }
//     .footer-col-title {
//       font-family: 'Space Mono', monospace;
//       font-size: 10px;
//       letter-spacing: 0.2em;
//       text-transform: uppercase;
//       color: rgba(255,255,255,0.22);
//       margin-bottom: 18px;
//     }
//     .footer-links { list-style: none; display: flex; flex-direction: column; gap: 10px; }
//     .footer-links a {
//       font-size: 14px;
//       color: rgba(255,255,255,0.4);
//       text-decoration: none;
//       transition: color 0.2s;
//     }
//     .footer-links a:hover { color: var(--white); }
//     .footer-bottom {
//       display: flex; align-items: center; justify-content: space-between;
//       padding-top: 24px;
//     }
//     .footer-copy {
//       font-family: 'Space Mono', monospace;
//       font-size: 10px;
//       letter-spacing: 0.08em;
//       color: rgba(255,255,255,0.18);
//     }
//     .footer-social { display: flex; gap: 20px; }
//     .footer-social a {
//       font-family: 'Space Mono', monospace;
//       font-size: 10px;
//       letter-spacing: 0.1em;
//       text-transform: uppercase;
//       color: rgba(255,255,255,0.28);
//       text-decoration: none;
//       transition: color 0.2s;
//     }
//     .footer-social a:hover { color: var(--red); }

//     /* ── Fade-up ── */
//     .fade-up {
//       opacity: 0;
//       transform: translateY(28px);
//       transition: opacity 0.65s ease, transform 0.65s ease;
//     }
//     .fade-up.visible { opacity: 1; transform: translateY(0); }

//     @media (max-width: 1024px) {
//       nav { padding: 22px 32px; }
//       nav.scrolled { padding: 16px 32px; }
//       .hero { padding: 110px 32px 52px; }
//       section { padding: 56px 32px; }
//       .hero { grid-template-columns: 1fr; }
//       .hero-left { padding: 110px 32px 52px; }
//       .hero-right { display: none; }
//       .about-grid { grid-template-columns: 1fr; gap: 32px; }
//       .approach-header { grid-template-columns: 1fr; gap: 20px; }
//       .mv-grid { grid-template-columns: 1fr; }
//       .service-item { grid-template-columns: 1fr auto; gap: 20px; }
//       .service-desc { display: none; }
//       .approach-grid { grid-template-columns: 1fr; }
//       .diff-wrap { grid-template-columns: 1fr; }
//       .diff-left, .diff-right { padding: 40px 32px; }
//       .gallery-grid { grid-template-columns: repeat(3, 1fr); }
//       .gallery-item:nth-child(3n+1) { grid-row: span 1; }
//       .clients-grid { grid-template-columns: repeat(3, 1fr); }
//       .testimonials-grid { grid-template-columns: 1fr; }
//       .footer-top { grid-template-columns: 1fr 1fr; gap: 32px; }
//     }

//     @media (max-width: 640px) {
//       nav { padding: 18px 24px; }
//       .nav-links { display: none; }
//       .hero-left { padding: 88px 24px 44px; }
//       section { padding: 48px 24px; }
//       .gallery-section { padding: 56px 0; }
//       .gallery-header { padding: 0 24px 24px; }
//       .gallery-grid { grid-template-columns: repeat(2, 1fr); }
//       .clients-grid { grid-template-columns: repeat(2, 1fr); }
//       .footer-top { grid-template-columns: 1fr; gap: 28px; }
//       .footer-bottom { flex-direction: column; gap: 12px; text-align: center; }
//       .cta-banner { padding: 56px 24px; }
//       .mv-card { padding: 32px 28px; }
//     }
//   `}</style>
// );

// const galleryImages = [
//   { src: "/gallery/sample-1.jpg",  alt: "Brand campaign" },
//   { src: "/gallery/sample-2.jpg",  alt: "Content production" },
//   { src: "/gallery/sample-3.jpg",  alt: "Digital marketing" },
//   { src: "/gallery/sample-4.jpg",  alt: "Social media design" },
//   { src: "/gallery/sample-5.jpg",  alt: "Video production" },
//   { src: "/gallery/sample-6.jpg",  alt: "Strategy deck" },
//   { src: "/gallery/sample-7.jpg",  alt: "Brand identity" },
//   { src: "/gallery/sample-8.jpg",  alt: "Campaign visuals" },
//   { src: "/gallery/sample-9.jpg",  alt: "Typography design" },
//   { src: "/gallery/sample-10.jpg", alt: "Event marketing" },
// ];

// function useFadeUp() {
//   const ref = useRef(null);
//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;
//     const obs = new IntersectionObserver(
//       ([e]) => { if (e.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } },
//       { threshold: 0.1 }
//     );
//     obs.observe(el);
//     return () => obs.disconnect();
//   }, []);
//   return ref;
// }

// function Cursor() {
//   const dot = useRef(null);
//   useEffect(() => {
//     const move = (e) => {
//       if (dot.current) {
//         dot.current.style.left = e.clientX + "px";
//         dot.current.style.top  = e.clientY + "px";
//       }
//     };
//     window.addEventListener("mousemove", move);
//     return () => window.removeEventListener("mousemove", move);
//   }, []);
//   return <div className="cursor-dot" ref={dot} />;
// }

// function Nav() {
//   const [scrolled, setScrolled] = useState(false);
//   useEffect(() => {
//     const fn = () => setScrolled(window.scrollY > 40);
//     window.addEventListener("scroll", fn);
//     return () => window.removeEventListener("scroll", fn);
//   }, []);
//   return (
//     <nav className={scrolled ? "scrolled" : ""}>
//       <div className="nav-logo">
//         <img src="/SEDA_NEW_LOGO.png" alt="SEDA Media Limited" />
//       </div>
//       <ul className="nav-links">
//         {[["About", "#about"], ["Services", "#services"], ["Work", "#work"], ["Approach", "#approach"]].map(([l, h]) => (
//           <li key={l}><a href={h}>{l}</a></li>
//         ))}
//       </ul>
//       <a href="#contact" className="nav-cta">Start Project</a>
//     </nav>
//   );
// }

// function Hero() {
//   return (
//     <section className="hero" id="home">
//       {/* Left — content */}
//       <div className="hero-left">
//         <div className="hero-eyebrow">Creative &amp; Strategy Agency</div>
//         <h1 className="hero-headline">
//           Grow Your Brand With Strategy,<br />
//           Content, and Design That<br />
//           <span className="accent">Actually Works.</span>
//         </h1>
//         <p className="hero-sub">
//           We help businesses stand out, attract the right audience, and convert attention into real growth through powerful content and smart marketing.
//         </p>
//         <a href="#contact" className="hero-cta">
//           Start Your Project Today <span>→</span>
//         </a>
//       </div>

//       {/* Right — dark panel */}
//       <div className="hero-right">
//         <div className="hero-right-tag">Lagos · Africa · Global</div>
//         <div className="hero-right-bg">
//           <span className="hero-right-word">SEDA</span>
//         </div>
//         <div className="hero-right-stats">
//           <div>
//             <div className="hero-stat-num">10<span>+</span></div>
//             <div className="hero-stat-label">Years of Experience</div>
//           </div>
//           <div>
//             <div className="hero-stat-num">50<span>+</span></div>
//             <div className="hero-stat-label">Brands Served</div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function Marquee() {
//   const items = ["Content Production", "Digital Marketing", "Media Strategy", "Brand Identity", "Visual Design", "Campaign Execution"];
//   const doubled = [...items, ...items];
//   return (
//     <div className="marquee-strip">
//       <div className="marquee-track">
//         {doubled.map((t, i) => (
//           <span className="marquee-item" key={i}>{t}<span>✦</span></span>
//         ))}
//       </div>
//     </div>
//   );
// }

// function About() {
//   const ref = useFadeUp();
//   return (
//     <section id="about">
//       <div className="section-label">Who We Are</div>
//       <div className="about-grid fade-up" ref={ref}>
//         <div>
//           <h2 className="about-title">
//             Your Brand Deserves<br />More Than Just<br /><em>"Nice Designs."</em>
//           </h2>
//           <p className="about-subtitle">Everything You Need to Grow — In One Place</p>
//         </div>
//         <div className="about-body">
//           <p>SEDA Media Limited is a creative agency built on one simple idea: <strong style={{ color: "#0A0A0A" }}>Great design means nothing without results.</strong></p>
//           <p>With over a decade of experience working with brands both locally and globally, we bring a depth of insight that goes beyond aesthetics, delivering solutions that drive real business outcomes.</p>
//           <p>We partner with businesses to create content, design, and strategies that don't just capture attention, but turn that attention into measurable growth.</p>
//           <p>From startups to established companies, we help brands communicate clearly, show up confidently, and compete effectively in today's digital landscape.</p>
//         </div>
//       </div>
//     </section>
//   );
// }

// function MissionVision() {
//   const ref = useFadeUp();
//   return (
//     <section style={{ padding: 0 }}>
//       <div className="mv-grid fade-up" ref={ref}>
//         <div className="mv-card">
//           <div className="mv-label">Our Mission</div>
//           <div className="mv-text">To help brands grow through clarity, creativity, and consistency.</div>
//         </div>
//         <div className="mv-card">
//           <div className="mv-label">Our Vision</div>
//           <div className="mv-text">To become a leading creative and strategy partner for businesses across Africa, shaping how brands are seen, heard, and experienced.</div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function Services() {
//   const ref = useFadeUp();
//   const services = [
//     {
//       name: "Content Production",
//       desc: "Video, design, and storytelling.",
//       tag: "Video · Design · Story",
//     },
//     {
//       name: "Digital Marketing",
//       desc: "Visibility, campaigns, and positioning.",
//       tag: "Visibility · Campaigns",
//     },
//     {
//       name: "Media Strategy",
//       desc: "Targeting, planning, and execution.",
//       tag: "Targeting · Planning",
//     },
//   ];
//   return (
//     <section id="services" style={{ background: "var(--gray)" }}>
//       <div className="section-label">What We Do</div>
//       <p className="services-intro">
//         We operate at the intersection of creativity and strategy. Our work spans content production, digital marketing, and media strategy.
//       </p>
//       <div className="service-list fade-up" ref={ref}>
//         {services.map((s) => (
//           <div className="service-item" key={s.name}>
//             <span className="service-name">{s.name}</span>
//             <span className="service-desc">{s.desc}</span>
//             <span className="service-tag">{s.tag}</span>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// function Approach() {
//   const ref = useFadeUp();
//   const steps = [
//     {
//       step: "01", icon: "◎", title: "Understand",
//       body: "We start with understanding your business, your audience, and your goals."
//     },
//     {
//       step: "02", icon: "◈", title: "Strategise",
//       body: "We develop clear strategies, ensuring everything we create is aligned with your business outcomes."
//     },
//     {
//       step: "03", icon: "◉", title: "Execute",
//       body: "From a single design to a full campaign — we deliver with precision and consistency."
//     },
//   ];
//   return (
//     <section className="approach-section" id="approach">
//       <div className="section-label" style={{ color: "rgba(255,255,255,0.3)" }}>Our Approach</div>
//       <div className="approach-header">
//         <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(32px, 3.5vw, 56px)", lineHeight: 1.08, color: "var(--white)" }}>
//           We Don't Jump Straight<br />Into Execution.
//         </h2>
//         <p className="approach-intro">
//           We start with understanding your business, your audience, and your goals. From there, we develop clear strategies and execute with precision, ensuring that everything we create — from a single design to a full campaign — is aligned with real business outcomes.
//         </p>
//       </div>
//       <div className="approach-grid fade-up" ref={ref}>
//         {steps.map(s => (
//           <div className="approach-card" data-step={s.step} key={s.title}>
//             <div className="approach-card-icon">{s.icon}</div>
//             <div className="approach-card-title">{s.title}</div>
//             <div className="approach-card-body">{s.body}</div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// function Differentiators() {
//   const ref = useFadeUp();
//   return (
//     <section style={{ padding: 0 }} id="difference">
//       <div className="diff-wrap fade-up" ref={ref}>
//         <div className="diff-left">
//           <div className="section-label">What Makes Us Different</div>
//           <h2 className="diff-title">
//             Most Agencies Focus on Output.<br /><span className="accent">We Focus on Impact.</span>
//           </h2>
//         </div>
//         <div className="diff-right">
//           <div className="diff-body">
//             <p>At SEDA Media Limited, we provide end to end delivery across multiple disciplines within brand communication. From ideation to final execution, we handle every stage of the process, ensuring consistency, clarity, and effectiveness at every touchpoint.</p>
//             <p>We think strategically before we create, bringing together content, design, and marketing into one seamless workflow. This integrated approach allows us to deliver work that is not only creative, but purposeful and results driven.</p>
//             <p>We are your one stop shop for building and communicating your brand, partnering with you from concept to completion to drive real growth.</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function Gallery() {
//   const ref = useFadeUp();
//   return (
//     <section className="gallery-section" id="work">
//       <div className="gallery-header">
//         <div className="section-label">Our Work</div>
//         <h2 className="gallery-title">Work That Speaks.</h2>
//       </div>
//       <div className="gallery-grid fade-up" ref={ref}>
//         {galleryImages.map((img, i) => (
//           <div className="gallery-item" key={i}>
//             {/*
//               Import your images then replace src:
//               import s1 from './assets/gallery/sample (1).jpg'
//               then in galleryImages: { src: s1, alt: "..." }
//             */}
//             <img src={img.src} alt={img.alt} loading="lazy" />
//             <div className="gallery-item-overlay" />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// function Clients() {
//   const ref = useFadeUp();
//   const clientSlots = Array.from({ length: 12 }, (_, i) => i);
//   return (
//     <section style={{ background: "var(--white)" }}>
//       <div className="section-label">Brands We Have Worked With</div>
//       <div className="clients-grid fade-up" ref={ref}>
//         {clientSlots.map(i => (
//           <div className="client-cell" key={i}>
//             <div className="client-placeholder">Client<br />Logo</div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// function Testimonials() {
//   const ref = useFadeUp();
//   const testimonials = [
//     {
//       text: "SEDA Media didn't just deliver great designs — they delivered results. Our engagement went up significantly within weeks of working with them.",
//       name: "Client Name",
//       role: "CEO, Company Name",
//     },
//     {
//       text: "The team's ability to blend strategy with creative execution is unmatched. They felt less like an agency and more like an extension of our team.",
//       name: "Client Name",
//       role: "Marketing Director, Company Name",
//     },
//     {
//       text: "From brief to delivery, the process was seamless. They understood our brand voice instantly and produced work that truly stood out.",
//       name: "Client Name",
//       role: "Founder, Company Name",
//     },
//   ];
//   return (
//     <section className="testimonials-section">
//       <div className="section-label">Testimonials</div>
//       <div className="testimonials-grid fade-up" ref={ref}>
//         {testimonials.map((t, i) => (
//           <div className="testimonial-card" key={i}>
//             <div className="testimonial-quote">"</div>
//             <p className="testimonial-text">{t.text}</p>
//             <div className="testimonial-author">
//               <div className="testimonial-name">{t.name}</div>
//               <div className="testimonial-role">{t.role}</div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// function CTABanner() {
//   return (
//     <section className="cta-banner" id="contact">
//       <h2 className="cta-banner-title">
//         Your Brand Deserves<br />More Than Just<br />"Nice Designs."
//       </h2>
//       <p className="cta-banner-sub">
//         Everything you need to grow — in one place. Let's build something together.
//       </p>
//       <a href="mailto:hello@sedamedia.com" className="cta-btn">
//         Start Your Project Today <span>→</span>
//       </a>
//     </section>
//   );
// }

// function Footer() {
//   return (
//     <footer>
//       <div className="footer-top">
//         <div>
//           <div className="footer-brand">
//             <img src="/SEDA_NEW_LOGO.png" alt="SEDA Media Limited" />
//           </div>
//           <p className="footer-tagline">
//             Creative agency built on one idea: great design means nothing without results.
//           </p>
//         </div>
//         <div>
//           <div className="footer-col-title">Navigate</div>
//           <ul className="footer-links">
//             {[["About", "#about"], ["Services", "#services"], ["Our Work", "#work"], ["Approach", "#approach"]].map(([l, h]) => (
//               <li key={l}><a href={h}>{l}</a></li>
//             ))}
//           </ul>
//         </div>
//         <div>
//           <div className="footer-col-title">Get In Touch</div>
//           <ul className="footer-links">
//             <li><a href="mailto:hello@sedamedia.com">hello@sedamedia.com</a></li>
//             <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
//             <li><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
//             <li><a href="https://x.com" target="_blank" rel="noreferrer">X / Twitter</a></li>
//           </ul>
//         </div>
//       </div>
//       <div className="footer-bottom">
//         <span className="footer-copy">© {new Date().getFullYear()} SEDA Media Limited. All rights reserved.</span>
//       </div>
//     </footer>
//   );
// }

// export default function SEDAWebsite() {
//   return (
//     <>
//       <FontStyle />
//       <Cursor />
//       <Nav />
//       <main>
//         <Hero />
//         <Marquee />
//         <About />
//         <MissionVision />
//         <Services />
//         <Approach />
//         <Differentiators />
//         <Gallery />
//         <Clients />
//         <Testimonials />
//         <CTABanner />
//       </main>
//       <Footer />
//     </>
//   );
// }

import { useState, useEffect, useRef } from "react";

const FontStyle = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&family=Space+Mono:wght@400;700&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --black: #0A0A0A;
      --white: #FFFFFF;
      --red: #D70011;
      --gray: #F4F4F4;
      --muted: #888888;
      --text: #0A0A0A;
      --text-muted: #777777;
      --border: rgba(0,0,0,0.09);
    }

    html { scroll-behavior: smooth; }

    body {
      background: var(--white);
      color: var(--text);
      font-family: 'DM Sans', sans-serif;
      font-weight: 300;
      overflow-x: hidden;
    }

    body::before {
      content: '';
      position: fixed; inset: 0;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
      opacity: 0.025;
      pointer-events: none;
      z-index: 9999;
    }

    ::-webkit-scrollbar { width: 3px; }
    ::-webkit-scrollbar-track { background: var(--white); }
    ::-webkit-scrollbar-thumb { background: var(--red); }

    .cursor-dot {
      width: 7px; height: 7px;
      background: var(--red);
      border-radius: 50%;
      position: fixed;
      pointer-events: none;
      z-index: 10000;
      transform: translate(-50%, -50%);
    }

    /* ── Nav ── */
    nav {
      position: fixed; top: 0; left: 0; right: 0;
      z-index: 100;
      display: flex; align-items: center; justify-content: space-between;
      padding: 28px 60px;
      transition: background 0.4s, padding 0.4s;
    }
    nav.scrolled {
      background: rgba(255,255,255,0.96);
      backdrop-filter: blur(12px);
      padding: 18px 60px;
      border-bottom: 1px solid var(--border);
    }
    .nav-logo img { height: 34px; }
    .nav-links { display: flex; gap: 40px; list-style: none; }
    .nav-links a {
      font-family: 'Space Mono', monospace;
      font-size: 11px;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: rgba(0,0,0,0.45);
      text-decoration: none;
      transition: color 0.2s;
    }
    .nav-links a:hover { color: var(--black); }
    .nav-cta {
      font-family: 'Space Mono', monospace;
      font-size: 11px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--white);
      background: var(--red);
      border: none;
      padding: 12px 22px;
      cursor: pointer;
      transition: background 0.2s;
      text-decoration: none;
    }
    .nav-cta:hover { background: #ff0014; }

    /* ── Hero ── */
    .hero {
      min-height: auto;
      display: grid;
      grid-template-columns: 55fr 45fr;
      padding: 0;
      position: relative;
      overflow: hidden;
      background: var(--white);
    }
    .hero-grid-line { display: none; }
    .hero-left {
      padding: 160px 64px 80px 60px;
      display: flex; flex-direction: column;
      justify-content: center;
      border-right: 1px solid var(--border);
    }
    .hero-right {
      background: var(--gray);
      display: flex; flex-direction: column;
      justify-content: space-between;
      padding: 160px 48px 80px;
      position: relative;
      overflow: hidden;
    }
    .hero-right-logo {
      position: relative;
    }
    .hero-right-logo img {
      width: 100%;
      max-width: 260px;
      opacity: 0.12;
      filter: grayscale(1);
    }
    .hero-right-accent {
      width: 40px;
      height: 3px;
      background: var(--red);
      margin-bottom: 20px;
    }
    .hero-right-label {
      font-family: 'Space Mono', monospace;
      font-size: 9px;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: var(--muted);
      margin-bottom: 10px;
    }
    .hero-right-value {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(13px, 1.2vw, 17px);
      color: var(--black);
      letter-spacing: 0.04em;
      line-height: 1.5;
    }
    .hero-right-list {
      list-style: none;
      border-top: 1px solid var(--border);
      padding-top: 32px;
    }
    .hero-right-list li {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 10px 0;
      border-bottom: 1px solid var(--border);
      font-family: 'Space Mono', monospace;
      font-size: 10px;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: rgba(0,0,0,0.45);
    }
    .hero-right-list li::before {
      content: '';
      width: 4px; height: 4px;
      border-radius: 50%;
      background: var(--red);
      flex-shrink: 0;
    }
    .hero-eyebrow {
      font-family: 'Space Mono', monospace;
      font-size: 11px;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--red);
      margin-bottom: 22px;
      display: flex; align-items: center; gap: 14px;
    }
    .hero-eyebrow::before {
      content: '';
      display: block;
      width: 32px; height: 1px;
      background: var(--red);
      flex-shrink: 0;
    }
    .hero-headline {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(34px, 3.8vw, 60px);
      line-height: 1.08;
      letter-spacing: 0.01em;
    }
    .hero-headline .accent { color: var(--red); }
    .hero-sub {
      font-size: 15px;
      line-height: 1.75;
      color: var(--text-muted);
      margin-top: 22px;
    }
    .hero-cta {
      display: inline-flex; align-items: center; gap: 14px;
      font-family: 'Space Mono', monospace;
      font-size: 11px;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--white);
      background: var(--red);
      border: none;
      padding: 16px 30px;
      cursor: pointer;
      transition: all 0.2s;
      text-decoration: none;
      margin-top: 36px;
      align-self: flex-start;
    }
    .hero-cta:hover { background: #ff0014; gap: 20px; }

    /* ── Marquee ── */
    .marquee-strip {
      overflow: hidden;
      white-space: nowrap;
      padding: 16px 0;
      background: var(--black);
      border-top: 1px solid rgba(255,255,255,0.04);
      border-bottom: 1px solid rgba(255,255,255,0.04);
    }
    .marquee-track {
      display: inline-flex;
      animation: marquee 28s linear infinite;
    }
    .marquee-item {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 13px;
      letter-spacing: 0.15em;
      color: rgba(255,255,255,0.28);
      padding: 0 32px;
      display: flex; align-items: center; gap: 32px;
    }
    .marquee-item span { color: var(--red); font-size: 14px; }
    @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }

    /* ── Section base ── */
    section { padding: 72px 60px; }
    .section-label {
      font-family: 'Space Mono', monospace;
      font-size: 10px;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      color: var(--red);
      margin-bottom: 24px;
    }

    /* ── About ── */
    .about-grid {
      display: grid;
      grid-template-columns: 5fr 7fr;
      gap: 56px;
      align-items: start;
    }
    .about-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(32px, 3.5vw, 54px);
      line-height: 1.08;
      color: var(--black);
    }
    .about-title em { color: var(--red); font-style: normal; }
    .about-subtitle {
      font-family: 'Space Mono', monospace;
      font-size: 10px;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--muted);
      margin-top: 18px;
      line-height: 1.6;
    }
    .about-body {
      font-size: 15px;
      line-height: 1.85;
      color: var(--text-muted);
    }
    .about-body p + p { margin-top: 16px; }

    /* ── Mission / Vision ── */
    .mv-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1px;
      background: var(--border);
    }
    .mv-card {
      background: var(--white);
      padding: 40px 48px;
      position: relative;
    }
    .mv-card::after {
      content: '';
      position: absolute;
      top: 0; left: 0;
      width: 3px; height: 100%;
      background: var(--red);
    }
    .mv-label {
      font-family: 'Space Mono', monospace;
      font-size: 10px;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--red);
      margin-bottom: 14px;
    }
    .mv-text {
      font-size: 15px;
      line-height: 1.7;
      color: var(--text-muted);
    }

    /* ── Services ── */
    .services-intro {
      font-size: 15px;
      color: var(--text-muted);
      margin-bottom: 36px;
      max-width: 540px;
      line-height: 1.75;
    }
    .service-list { border-top: 1px solid var(--border); }
    .service-item {
      display: grid;
      grid-template-columns: 1fr 1fr auto;
      align-items: center;
      gap: 40px;
      padding: 26px 0;
      border-bottom: 1px solid var(--border);
      transition: padding-left 0.3s;
      cursor: default;
    }
    .service-item:hover { padding-left: 10px; }
    .service-item:hover .service-name { color: var(--red); }
    .service-name {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 28px;
      letter-spacing: 0.02em;
      color: var(--black);
      transition: color 0.3s;
    }
    .service-desc {
      font-size: 13px;
      color: var(--text-muted);
      line-height: 1.6;
    }
    .service-tag {
      font-family: 'Space Mono', monospace;
      font-size: 9px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--muted);
      border: 1px solid var(--border);
      padding: 5px 10px;
      white-space: nowrap;
    }

    /* ── Approach ── */
    .approach-section { background: var(--black); }
    .approach-header {
      display: grid;
      grid-template-columns: 5fr 7fr;
      gap: 56px;
      align-items: start;
    }
    .approach-intro {
      font-size: 14px;
      color: rgba(255,255,255,0.4);
      line-height: 1.8;
      padding-top: 6px;
    }
    .approach-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1px;
      background: rgba(255,255,255,0.06);
      border: 1px solid rgba(255,255,255,0.06);
      margin-top: 44px;
    }
    .approach-card {
      background: var(--black);
      padding: 40px 32px;
      position: relative;
      overflow: hidden;
    }
    .approach-card::before {
      content: attr(data-step);
      position: absolute;
      top: -8px; right: 14px;
      font-family: 'Bebas Neue', sans-serif;
      font-size: 90px;
      color: rgba(255,255,255,0.03);
      line-height: 1;
      pointer-events: none;
    }
    .approach-card-icon {
      width: 34px; height: 34px;
      border: 1px solid var(--red);
      display: flex; align-items: center; justify-content: center;
      margin-bottom: 24px;
      color: var(--red);
      font-size: 13px;
    }
    .approach-card-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 24px;
      margin-bottom: 10px;
      letter-spacing: 0.02em;
      color: var(--white);
    }
    .approach-card-body {
      font-size: 13px;
      line-height: 1.7;
      color: rgba(255,255,255,0.4);
    }

    /* ── Differentiators ── */
    .diff-wrap {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1px;
      background: var(--border);
    }
    .diff-left {
      background: var(--white);
      padding: 56px 60px;
      display: flex; flex-direction: column; justify-content: center;
    }
    .diff-right {
      background: var(--gray);
      padding: 56px 60px;
      display: flex; flex-direction: column; justify-content: center;
    }
    .diff-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(28px, 3vw, 48px);
      line-height: 1.08;
      color: var(--black);
    }
    .diff-title .accent { color: var(--red); }
    .diff-body p {
      font-size: 14px;
      line-height: 1.8;
      color: var(--text-muted);
    }
    .diff-body p + p { margin-top: 18px; }

    /* ── Gallery ── */
    .gallery-section { padding: 72px 0; background: var(--gray); }
    .gallery-header { padding: 0 60px 32px; }
    .gallery-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(32px, 3.5vw, 56px);
      line-height: 1;
      color: var(--black);
    }
    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-auto-rows: 230px;
      gap: 2px;
    }
    .gallery-item {
      overflow: hidden;
      position: relative;
      background: #d8d8d8;
      cursor: pointer;
    }
    .gallery-item:nth-child(3n+1) { grid-row: span 2; }
    .gallery-item img {
      width: 100%; height: 100%;
      object-fit: cover;
      transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), filter 0.4s;
      filter: grayscale(10%);
    }
    .gallery-item:hover img { transform: scale(1.05); filter: grayscale(0%); }
    .gallery-item-overlay {
      position: absolute; inset: 0;
      background: rgba(215,0,17,0);
      transition: background 0.4s;
    }
    .gallery-item:hover .gallery-item-overlay { background: rgba(215,0,17,0.07); }

    /* ── Clients ── */
    .clients-grid {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 1px;
      background: var(--border);
      border: 1px solid var(--border);
      margin-top: 32px;
    }
    .client-cell {
      background: var(--white);
      aspect-ratio: 3/2;
      display: flex; align-items: center; justify-content: center;
      padding: 18px;
      transition: background 0.2s;
    }
    .client-cell:hover { background: var(--gray); }
    .client-cell img {
      max-width: 100%; max-height: 40px;
      object-fit: contain;
      opacity: 0.32;
      transition: opacity 0.2s;
    }
    .client-cell:hover img { opacity: 0.72; }
    .client-placeholder {
      font-family: 'Space Mono', monospace;
      font-size: 9px;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: rgba(0,0,0,0.14);
      text-align: center;
      line-height: 1.6;
    }

    /* ── Testimonials ── */
    .testimonials-section { background: var(--white); }
    .testimonials-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1px;
      background: var(--border);
      border: 1px solid var(--border);
      margin-top: 32px;
    }
    .testimonial-card {
      background: var(--white);
      padding: 36px 32px;
    }
    .testimonial-quote {
      font-size: 40px;
      color: var(--red);
      font-family: Georgia, serif;
      line-height: 1;
      margin-bottom: 8px;
    }
    .testimonial-text {
      font-size: 14px;
      line-height: 1.8;
      color: var(--text-muted);
      font-style: italic;
    }
    .testimonial-author {
      margin-top: 20px;
      border-top: 1px solid var(--border);
      padding-top: 16px;
    }
    .testimonial-name {
      font-family: 'Space Mono', monospace;
      font-size: 10px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--black);
    }
    .testimonial-role {
      font-size: 12px;
      color: var(--muted);
      margin-top: 3px;
    }

    /* ── CTA Banner ── */
    .cta-banner {
      padding: 96px 60px;
      text-align: center;
      position: relative;
      overflow: hidden;
      background: var(--black);
    }
    .cta-banner::before {
      content: 'GROW';
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      font-family: 'Bebas Neue', sans-serif;
      font-size: 320px;
      color: rgba(215,0,17,0.04);
      pointer-events: none;
      white-space: nowrap;
      line-height: 1;
    }
    .cta-banner-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(32px, 4.5vw, 64px);
      line-height: 1.08;
      position: relative;
      color: var(--white);
    }
    .cta-banner-sub {
      font-size: 14px;
      color: rgba(255,255,255,0.42);
      margin: 18px auto 0;
      max-width: 420px;
      line-height: 1.7;
      position: relative;
    }
    .cta-btn {
      display: inline-flex; align-items: center; gap: 14px;
      font-family: 'Space Mono', monospace;
      font-size: 11px;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--white);
      background: var(--red);
      border: none;
      padding: 16px 40px;
      cursor: pointer;
      margin-top: 36px;
      transition: all 0.2s;
      position: relative;
      text-decoration: none;
    }
    .cta-btn:hover { background: #ff0014; gap: 20px; }

    /* ── Footer ── */
    footer {
      background: var(--black);
      border-top: 1px solid rgba(255,255,255,0.05);
      padding: 60px 60px 32px;
    }
    .footer-top {
      display: grid;
      grid-template-columns: 1.8fr 1fr 1fr;
      gap: 56px;
      padding-bottom: 44px;
      border-bottom: 1px solid rgba(255,255,255,0.05);
    }
    .footer-brand img {
      height: 28px;
      filter: brightness(0) invert(1);
    }
    .footer-tagline {
      font-size: 13px;
      color: rgba(255,255,255,0.28);
      line-height: 1.7;
      margin-top: 14px;
      max-width: 260px;
    }
    .footer-col-title {
      font-family: 'Space Mono', monospace;
      font-size: 10px;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.22);
      margin-bottom: 18px;
    }
    .footer-links { list-style: none; display: flex; flex-direction: column; gap: 10px; }
    .footer-links a {
      font-size: 14px;
      color: rgba(255,255,255,0.4);
      text-decoration: none;
      transition: color 0.2s;
    }
    .footer-links a:hover { color: var(--white); }
    .footer-bottom {
      display: flex; align-items: center; justify-content: space-between;
      padding-top: 24px;
    }
    .footer-copy {
      font-family: 'Space Mono', monospace;
      font-size: 10px;
      letter-spacing: 0.08em;
      color: rgba(255,255,255,0.18);
    }
    .footer-social { display: flex; gap: 20px; }
    .footer-social a {
      font-family: 'Space Mono', monospace;
      font-size: 10px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.28);
      text-decoration: none;
      transition: color 0.2s;
    }
    .footer-social a:hover { color: var(--red); }

    /* ── Fade-up ── */
    .fade-up {
      opacity: 0;
      transform: translateY(28px);
      transition: opacity 0.65s ease, transform 0.65s ease;
    }
    .fade-up.visible { opacity: 1; transform: translateY(0); }

    @media (max-width: 1024px) {
      nav { padding: 22px 32px; }
      nav.scrolled { padding: 16px 32px; }
      .hero { padding: 110px 32px 52px; }
      section { padding: 56px 32px; }
      .hero { grid-template-columns: 1fr; }
      .hero-left { padding: 110px 32px 52px; }
      .hero-right { display: none; }
      .about-grid { grid-template-columns: 1fr; gap: 32px; }
      .approach-header { grid-template-columns: 1fr; gap: 20px; }
      .mv-grid { grid-template-columns: 1fr; }
      .service-item { grid-template-columns: 1fr auto; gap: 20px; }
      .service-desc { display: none; }
      .approach-grid { grid-template-columns: 1fr; }
      .diff-wrap { grid-template-columns: 1fr; }
      .diff-left, .diff-right { padding: 40px 32px; }
      .gallery-grid { grid-template-columns: repeat(3, 1fr); }
      .gallery-item:nth-child(3n+1) { grid-row: span 1; }
      .clients-grid { grid-template-columns: repeat(3, 1fr); }
      .testimonials-grid { grid-template-columns: 1fr; }
      .footer-top { grid-template-columns: 1fr 1fr; gap: 32px; }
    }

    @media (max-width: 640px) {
      nav { padding: 18px 24px; }
      .nav-links { display: none; }
      .hero-left { padding: 88px 24px 44px; }
      section { padding: 48px 24px; }
      .gallery-section { padding: 56px 0; }
      .gallery-header { padding: 0 24px 24px; }
      .gallery-grid { grid-template-columns: repeat(2, 1fr); }
      .clients-grid { grid-template-columns: repeat(2, 1fr); }
      .footer-top { grid-template-columns: 1fr; gap: 28px; }
      .footer-bottom { flex-direction: column; gap: 12px; text-align: center; }
      .cta-banner { padding: 56px 24px; }
      .mv-card { padding: 32px 28px; }
    }
  `}</style>
);

const galleryImages = [
  { src: "/gallery/sample-1.jpg",  alt: "Brand campaign" },
  { src: "/gallery/sample-2.jpg",  alt: "Content production" },
  { src: "/gallery/sample-3.jpg",  alt: "Digital marketing" },
  { src: "/gallery/sample-4.jpg",  alt: "Social media design" },
  { src: "/gallery/sample-5.jpg",  alt: "Video production" },
  { src: "/gallery/sample-6.jpg",  alt: "Strategy deck" },
  { src: "/gallery/sample-7.jpg",  alt: "Brand identity" },
  { src: "/gallery/sample-8.jpg",  alt: "Campaign visuals" },
  { src: "/gallery/sample-9.jpg",  alt: "Typography design" },
  { src: "/gallery/sample-10.jpg", alt: "Event marketing" },
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
        <img src="/SEDA_NEW_LOGO.png" alt="SEDA Media Limited" />
      </div>
      <ul className="nav-links">
        {[["About", "#about"], ["Services", "#services"], ["Work", "#work"], ["Approach", "#approach"]].map(([l, h]) => (
          <li key={l}><a href={h}>{l}</a></li>
        ))}
      </ul>
      <a href="#contact" className="nav-cta">Start Project</a>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      {/* Left — content */}
      <div className="hero-left">
        <div className="hero-eyebrow">Creative &amp; Strategy Agency</div>
        <h1 className="hero-headline">
          Grow Your Brand With Strategy,<br />
          Content, and Design That<br />
          <span className="accent">Actually Works.</span>
        </h1>
        <p className="hero-sub">
          We help businesses stand out, attract the right audience, and convert attention into real growth through powerful content and smart marketing.
        </p>
        <a href="#contact" className="hero-cta">
          Start Your Project Today <span>→</span>
        </a>
      </div>

      {/* Right — dark panel */}
      <div className="hero-right">
        <div className="hero-right-tag">Lagos · Africa · Global</div>
        <div className="hero-right-bg">
          <span className="hero-right-word">SEDA</span>
        </div>
        <div className="hero-right-stats">
          <div>
            <div className="hero-stat-num">10<span>+</span></div>
            <div className="hero-stat-label">Years of Experience</div>
          </div>
          <div>
            <div className="hero-stat-num">50<span>+</span></div>
            <div className="hero-stat-label">Brands Served</div>
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
          <p className="about-subtitle">Everything You Need to Grow — In One Place</p>
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

function Clients() {
  const ref = useFadeUp();
  const clientSlots = Array.from({ length: 12 }, (_, i) => i);
  return (
    <section style={{ background: "var(--white)" }}>
      <div className="section-label">Brands We Have Worked With</div>
      <div className="clients-grid fade-up" ref={ref}>
        {clientSlots.map(i => (
          <div className="client-cell" key={i}>
            <div className="client-placeholder">Client<br />Logo</div>
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
      <h2 className="cta-banner-title">
        Your Brand Deserves<br />More Than Just<br />"Nice Designs."
      </h2>
      <p className="cta-banner-sub">
        Everything you need to grow — in one place. Let's build something together.
      </p>
      <a href="mailto:hello@sedamedia.com" className="cta-btn">
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
            <img src="/SEDA_NEW_LOGO.png" alt="SEDA Media Limited" />
          </div>
          <p className="footer-tagline">
            Creative agency built on one idea: great design means nothing without results.
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
            <li><a href="mailto:hello@sedamedia.com">hello@sedamedia.com</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a href="https://x.com" target="_blank" rel="noreferrer">X / Twitter</a></li>
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
      <FontStyle />
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