"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Language = "de" | "en";

const copy = {
  de: {
    nav: ["Sortiment", "Lieferung", "Über uns", "Kontakt"],
    soon: "Online-Shop kommt bald",
    eyebrow: "Asiatischer Lebensmittelladen in Erlangen",
    titleA: "Frisch. Authentisch.",
    titleB: "Ein Stück Asien.",
    intro: "Entdecken Sie ausgewählte Lebensmittel, Gewürze und Spezialitäten aus Sri Lanka, Thailand und ganz Asien.",
    whatsapp: "Per WhatsApp bestellen", call: "Jetzt anrufen",
    open: "Mo–Sa · 08:00–20:00 Uhr", delivery: "Kostenlose Lieferung ab 15 € im Umkreis von 1 km",
    strip: ["Frisches Obst & Gemüse", "Gewürze", "Reis & Trockenwaren", "Bio-Produkte", "Asiatische Spezialitäten"],
    sectionEyebrow: "Unser Sortiment", sectionTitle: "Alles für Ihre asiatische Küche",
    sectionText: "Von Grundzutaten für den Alltag bis zu besonderen Aromen aus der Heimat. Unser Sortiment wächst laufend.",
    categories: [
      ["Obst & Gemüse", "Frisch importierte und saisonale Auswahl aus Asien."],
      ["Gewürze & Kräuter", "Ganze Gewürze, Mischungen, Pasten und frische Kräuter."],
      ["Reis & Trockenwaren", "Reis, Linsen, Mehl, Nudeln und Vorratsprodukte."],
      ["Bio-Produkte", "Ausgewählte Bio-Lebensmittel und natürliche Zutaten."],
      ["Snacks & Getränke", "Beliebte süße, herzhafte und erfrischende Produkte."],
      ["Fisch auf Vorbestellung", "Frischer Fisch nach Verfügbarkeit und Vorbestellung."],
    ],
    deliveryEyebrow: "Sri Asia Lieferservice", deliveryTitle: "Ihre Bestellung kommt zu Ihnen.",
    deliveryText: "Bestellen Sie bequem per WhatsApp. Ab 15 € liefern wir innerhalb von 1 km kostenlos, je nach Bestellzeit und Verfügbarkeit am selben oder nächsten Tag.",
    steps: ["Produkte per WhatsApp senden", "Bestellung bestätigen", "Lieferung erhalten"], order: "Bestellung starten",
    aboutEyebrow: "Über Sri Asia", aboutTitle: "Lebensmittel, Kultur und vertrauter Geschmack.",
    aboutText: "Wir sind ein familiengeführtes Geschäft mit Wurzeln in Sri Lanka und Thailand. In Erlangen bringen wir Menschen mit originalen Lebensmitteln, frischen Zutaten und den vielfältigen Aromen Asiens zusammen.",
    quality: [
      ["Authentisch", "Produkte und Marken, die Menschen aus Asien kennen und lieben."],
      ["Frisch", "Regelmäßig ausgewählte Ware für Qualität und guten Geschmack."],
      ["Persönlich", "Freundliche Beratung bei Produkten, Zutaten und Bestellungen."],
    ],
    visit: "Besuchen Sie uns", addressLabel: "Adresse", hoursLabel: "Öffnungszeiten",
    hours: "Montag bis Samstag\n08:00 bis 20:00 Uhr", contactLabel: "Kontakt", closed: "Sonntag geschlossen",
    footerText: "Frisch · Authentisch · Exotisch", imprint: "Impressum", privacy: "Datenschutz",
    imprintBody: "Angaben gemäß § 5 DDG", represented: "Inhaberin und verantwortlich für den Inhalt",
    privacyBody: "Diese Website setzt keine Analyse- oder Marketing-Cookies ein. Beim Aufruf verarbeitet der Hostinganbieter technisch notwendige Verbindungsdaten zur sicheren Bereitstellung der Website. Bei Kontakt per Telefon, E-Mail oder WhatsApp verarbeiten wir Ihre Angaben nur zur Bearbeitung Ihrer Anfrage. Sie haben Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung und Widerspruch im Rahmen der DSGVO.",
  },
  en: {
    nav: ["Products", "Delivery", "About us", "Contact"], soon: "Online shop coming soon",
    eyebrow: "Asian grocery store in Erlangen", titleA: "Fresh. Authentic.", titleB: "A taste of Asia.",
    intro: "Explore selected groceries, spices and specialities from Sri Lanka, Thailand and across Asia.",
    whatsapp: "Order via WhatsApp", call: "Call us", open: "Mon–Sat · 8:00 am–8:00 pm",
    delivery: "Free delivery from €15 within 1 km",
    strip: ["Fresh fruit & vegetables", "Spices", "Rice & dry foods", "Organic products", "Asian specialities"],
    sectionEyebrow: "Our selection", sectionTitle: "Everything for your Asian kitchen",
    sectionText: "From daily essentials to distinctive flavours from home. Our selection keeps growing.",
    categories: [
      ["Fruit & vegetables", "Fresh imported and seasonal produce from Asia."],
      ["Spices & herbs", "Whole spices, blends, pastes and fresh herbs."],
      ["Rice & dry foods", "Rice, lentils, flour, noodles and pantry essentials."],
      ["Organic products", "Selected organic foods and natural ingredients."],
      ["Snacks & drinks", "Popular sweet, savoury and refreshing products."],
      ["Fish by pre-order", "Fresh fish subject to availability and pre-order."],
    ],
    deliveryEyebrow: "Sri Asia delivery", deliveryTitle: "Your groceries, delivered.",
    deliveryText: "Send your order through WhatsApp. Orders from €15 receive free delivery within 1 km, on the same or next day depending on order time and availability.",
    steps: ["Send your list on WhatsApp", "Confirm your order", "Receive your delivery"], order: "Start an order",
    aboutEyebrow: "About Sri Asia", aboutTitle: "Food, culture and familiar flavours.",
    aboutText: "We are a family-run shop with roots in Sri Lanka and Thailand. In Erlangen, we bring people together through original groceries, fresh ingredients and the diverse flavours of Asia.",
    quality: [
      ["Authentic", "Products and brands people across Asia know and love."],
      ["Fresh", "Regularly selected goods for quality and great taste."],
      ["Personal", "Friendly help with products, ingredients and orders."],
    ],
    visit: "Visit us", addressLabel: "Address", hoursLabel: "Opening hours",
    hours: "Monday to Saturday\n8:00 am to 8:00 pm", contactLabel: "Contact", closed: "Closed on Sunday",
    footerText: "Fresh · Authentic · Exotic", imprint: "Legal notice", privacy: "Privacy",
    imprintBody: "Information under Section 5 DDG", represented: "Owner and responsible for content",
    privacyBody: "This website uses no analytics or marketing cookies. When you visit, the hosting provider processes technically required connection data to deliver the website securely. When you contact us by phone, email or WhatsApp, we process your information only to answer your request. Under the GDPR, you have rights to access, correction, deletion, restriction and objection.",
  },
} as const;

const categoryIcons = ["🥬", "✦", "◉", "↟", "◌", "≈"];
const whatsapp = "https://wa.me/4915204880532?text=Hallo%20Sri%20Asia%2C%20ich%20möchte%20gerne%20bestellen.";

export default function Home() {
  const [language, setLanguage] = useState<Language>("de");
  const t = copy[language];

  useEffect(() => { document.documentElement.lang = language; }, [language]);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Sri Asia home">
          <Image src="/sri-asia-logo.webp" alt="Sri Asia" width={50} height={50} priority /><span>Sri Asia</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#sortiment">{t.nav[0]}</a><a href="#lieferung">{t.nav[1]}</a>
          <a href="#ueber-uns">{t.nav[2]}</a><a href="#kontakt">{t.nav[3]}</a>
        </nav>
        <div className="language-switch" aria-label="Language">
          <button className={language === "de" ? "active" : ""} onClick={() => setLanguage("de")} aria-pressed={language === "de"}>DE</button>
          <span>/</span>
          <button className={language === "en" ? "active" : ""} onClick={() => setLanguage("en")} aria-pressed={language === "en"}>EN</button>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-orb orb-one" /><div className="hero-orb orb-two" />
        <div className="hero-copy">
          <div className="soon-pill"><span />{t.soon}</div>
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>{t.titleA}<br /><em>{t.titleB}</em></h1>
          <p className="hero-intro">{t.intro}</p>
          <div className="hero-actions">
            <a className="button button-primary" href={whatsapp} target="_blank" rel="noreferrer">{t.whatsapp}<span aria-hidden="true">↗</span></a>
            <a className="button button-secondary" href="tel:+4915204880532">{t.call}</a>
          </div>
          <div className="hero-facts">
            <p><span className="fact-icon">◷</span>{t.open}</p>
            <p><span className="fact-icon">⌂</span>{t.delivery}</p>
          </div>
        </div>
        <div className="hero-mark">
          <div className="logo-halo" /><Image src="/sri-asia-logo.webp" alt="Sri Asia, fresh, authentic and exotic" width={1000} height={1000} priority />
          <span className="stamp stamp-one">100%<small>ASIA</small></span><span className="stamp stamp-two">ERLANGEN<small>LOCAL</small></span>
        </div>
      </section>

      <div className="product-strip" aria-label="Product highlights">
        {t.strip.map((item, index) => <span key={item}>{item}{index < t.strip.length - 1 && <b>✦</b>}</span>)}
      </div>

      <section className="products" id="sortiment">
        <div className="section-heading"><p className="eyebrow">{t.sectionEyebrow}</p><h2>{t.sectionTitle}</h2><p>{t.sectionText}</p></div>
        <div className="category-grid">
          {t.categories.map(([title, text], index) => (
            <article className="category-card" key={title}>
              <span className="category-number">0{index + 1}</span><div className="category-icon" aria-hidden="true">{categoryIcons[index]}</div>
              <h3>{title}</h3><p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="delivery-section" id="lieferung">
        <div className="delivery-copy"><p className="eyebrow">{t.deliveryEyebrow}</p><h2>{t.deliveryTitle}</h2><p>{t.deliveryText}</p>
          <a className="button button-dark" href={whatsapp} target="_blank" rel="noreferrer">{t.order}<span aria-hidden="true">↗</span></a>
        </div>
        <ol className="delivery-steps">{t.steps.map((step, index) => <li key={step}><span>{index + 1}</span><p>{step}</p></li>)}</ol>
      </section>

      <section className="about" id="ueber-uns">
        <div className="about-visual" aria-hidden="true"><span className="leaf leaf-one">✦</span><span className="leaf leaf-two">✦</span><Image src="/sri-asia-logo.webp" alt="" width={1000} height={1000} /></div>
        <div className="about-copy"><p className="eyebrow">{t.aboutEyebrow}</p><h2>{t.aboutTitle}</h2><p className="about-intro">{t.aboutText}</p>
          <div className="quality-list">{t.quality.map(([title, text], index) => <article key={title}><span>{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
        </div>
      </section>

      <section className="contact" id="kontakt">
        <div className="contact-title"><p className="eyebrow">{t.visit}</p><h2>Sri Asia<br /><em>Erlangen</em></h2></div>
        <div className="contact-grid">
          <article><span>01</span><h3>{t.addressLabel}</h3><p>Sieglitzhofer Straße 18<br />91054 Erlangen</p></article>
          <article><span>02</span><h3>{t.hoursLabel}</h3><p>{t.hours.split("\n").map((line) => <span key={line}>{line}<br /></span>)}</p><small>{t.closed}</small></article>
          <article><span>03</span><h3>{t.contactLabel}</h3><p><a href="tel:+4915204880532">+49 1520 4880532</a><br /><a href="mailto:info@sri-asia.de">info@sri-asia.de</a></p></article>
        </div>
      </section>

      <footer>
        <div className="footer-main"><div><Image src="/sri-asia-logo.webp" alt="Sri Asia" width={58} height={58} /><p>{t.footerText}</p></div><a href="https://wa.me/4915204880532" target="_blank" rel="noreferrer">WhatsApp ↗</a></div>
        <div className="legal-grid">
          <details id="impressum"><summary>{t.imprint}</summary><div><strong>{t.imprintBody}</strong><p>Samniang Maneepakorn<br />Sieglitzhofer Straße 18<br />91054 Erlangen<br /><a href="tel:+4915204880532">+49 1520 4880532</a><br /><a href="mailto:info@sri-asia.de">info@sri-asia.de</a></p><strong>{t.represented}</strong><p>Samniang Maneepakorn</p></div></details>
          <details id="datenschutz"><summary>{t.privacy}</summary><div><p>{t.privacyBody}</p><p><a href="mailto:info@sri-asia.de">info@sri-asia.de</a></p></div></details>
        </div>
        <div className="footer-bottom"><span>© 2026 Sri Asia</span><span>www.sri-asia.de</span></div>
      </footer>
    </main>
  );
}
