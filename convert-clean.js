const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, 'amonte_equinox_demo/amonte-equinox.html');
let html = fs.readFileSync(htmlPath, 'utf8');

// Match body content
const bodyMatch = html.match(/<body>([\s\S]*?)<\/body>/);
let bodyContent = bodyMatch ? bodyMatch[1] : '';

// Remove script tags
bodyContent = bodyContent.replace(/<script[\s\S]*?<\/script>/g, '');
// Remove base64 image strings from inline styles if any (actually they are in CSS)
// Replace all class= with className=
let jsx = bodyContent.replace(/class="/g, 'className="');
// Replace inline styles like style="display:none" to React style={{display: 'none'}}
jsx = jsx.replace(/style="display:\s*none;?"/g, 'style={{display: "none"}}');
jsx = jsx.replace(/style="display:none"/g, 'style={{display: "none"}}');
// Self-close tags
jsx = jsx.replace(/<img([^>]*)>/g, '<img$1 />');
jsx = jsx.replace(/<input([^>]*)>/g, '<input$1 />');
jsx = jsx.replace(/<br>/g, '<br />');

// Now create the Next.js page template
const pageContent = `"use client";
import React, { useState, useEffect } from 'react';
import styles from './page.module.css';

export default function EquinoxPage() {
  const [timeLeft, setTimeLeft] = useState({ days: '--', hours: '--', mins: '--', secs: '--' });
  const [openFaq, setOpenFaq] = useState(null);
  const [formState, setFormState] = useState({ name: '', phone: '', email: '', pack: '', count: '1' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const target = new Date("2026-09-19T15:00:00").getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = target - now;
      if (diff <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: '00', hours: '00', mins: '00', secs: '00' });
      } else {
        setTimeLeft({
          days: String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, '0'),
          hours: String(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0'),
          mins: String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0'),
          secs: String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(2, '0')
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handleForm = (e) => {
    e.preventDefault();
    let errs = {};
    if (formState.name.length < 3) errs.name = true;
    if (!/^[+()0-9\\s.-]{9,}$/.test(formState.phone)) errs.phone = true;
    if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$/.test(formState.email)) errs.email = true;
    if (!formState.pack) errs.pack = true;
    
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className={styles.equinoxTheme}>
      <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=Anton&family=Cormorant+Garamond:ital,wght@1,400;1,500;1,600&family=Instrument+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet" />
      
      <div dangerouslySetInnerHTML={{ __html: \`
        <style>
          .field.error input, .field.error select { border-color: #ff5b5b; }
          .faq-item.open .faq-a { display: block; }
          .faq-item.open { border-color: var(--gold-dim); background: var(--dusk-edge); }
          .hero-artist .ha-label { font-size: 1.5rem !important; }
          .artist-tag { font-size: 1.5rem !important; }
        </style>
      \`}} />
      
      <div dangerouslySetInnerHTML={{ __html: \`${jsx.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\` }} />
    </div>
  );
}
`;

fs.writeFileSync(path.join(__dirname, 'app/equinox/page.tsx'), pageContent);
console.log('Converted HTML to app/equinox/page.tsx');
