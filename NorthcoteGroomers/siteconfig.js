const SiteConfig = {

  business: {
    name: "Northcote ",
    fullName: "Northcote",
    tagline: "Caring, professional one-to-one dog grooming",
    shortTagline: "Groomers",
    phone: "+447710431422",
    phoneDisplay: "+44 7710 431422",
    phoneDisplayShort: "07710 431422",
    email: "northcotegroomers@outlook.com",
    address: {
      line1: "Northcote, Sandy Lane, Great Steeping",
      line2: "Spilsby, United Kingdom PE23 5PS",
      full: "Northcote, Sandy Lane, Great Steeping, Spilsby, United Kingdom PE23 5PS"
    },
    hours: {
      days: "By Appointment",
      time: "Flexible hours",
      display: "By Appointment | Flexible hours"
    },
    logo: { emoji: "", path: "https://scontent.fjdh3-1.fna.fbcdn.net/v/t39.30808-6/825328980_122121148665365651_6817420490596312680_n.jpg?stp=dst-jpg_tt6&cstp=mx1254x1254&ctp=s1254x1254&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=1_1s5r7fWIUQ7kNvwFZPcwB&_nc_oc=Adq4vW5Amk-i6yImI4n3sAZtLGwa8WySzhUM2KMP18XBVAPn-UivSR9uDq_cvyCC7r2ixeH7mFS5VAzLEoCUnmLx&_nc_zt=23&_nc_ht=scontent.fjdh3-1.fna&_nc_gid=VxkedBaYq4hhS1vxlNgGZg&_nc_ss=7b2a8&oh=00_AQOCmI-ICnlM3Nixfwm_9bQKhbs9QlODY_7zjAANRNRogg&oe=6AC56FBB", alt: "Northcote Groomers Logo" },
    favicon: "assets/images/favicon.ico",
    social: {
      instagram: "https://www.instagram.com/northcote.groomers",
      facebook: "https://www.facebook.com/profile.php?id=61590969554148",
      whatsapp: "https://wa.me/447710431422"
    },
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Northcote+Sandy+Lane+Great+Steeping+Spilsby+PE23+5PS"
  },

  seo: {
    title: "Northcote Groomers | Professional Dog Grooming in Great Steeping",
    description: "Caring, professional one-to-one dog grooming services in a calm and friendly environment in Great Steeping, Spilsby. Full grooms, deshedding, puppy introductions, nail trims and more.",
    keywords: "dog groomer Great Steeping, dog grooming Spilsby, Northcote Groomers, puppy grooming, deshed, hand stripping, nail trim, Lincolnshire dog groomer",
    author: "Northcote Groomers",
    ogImage: "https://images.unsplash.com/photo-1587300003388-59208cc962cb",
    canonical: "https://northcotegroomers.com/",
    robots: "index, follow"
  },

  /* Only these theme tokens — rest is derived automatically */
  theme: {
    primary: "#c79234",
    background: "#0F1110",
    text: "#F2F0EA",
    navBackground: "#151715",
    navText: "#D9D5CB",
    footerBackground: "#080908",
    footerText: "#C8C6C0",
    headingFont: "DM Serif Display",
    bodyFont: "Plus Jakarta Sans"
  },

  images: {
    hero: "https://images.unsplash.com/photo-1587300003388-59208cc962cb",
    about: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b",
    process: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1",
    gallery: [
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=1200",
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1200",
      "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?q=80&w=1200",
      "https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=1200",
      "https://images.unsplash.com/photo-1558788353-f76d92427f16?q=80&w=1200",
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=1200"
    ],
    team: [
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb"
    ],
    testimonials: [
      "https://randomuser.me/api/portraits/women/44.jpg",
      "https://randomuser.me/api/portraits/women/68.jpg",
      "https://randomuser.me/api/portraits/men/32.jpg",
      "https://randomuser.me/api/portraits/women/65.jpg"
    ],
    trustAvatars: [
      "https://randomuser.me/api/portraits/women/44.jpg",
      "https://randomuser.me/api/portraits/women/68.jpg",
      "https://randomuser.me/api/portraits/men/32.jpg"
    ]
  },

  content: {
    nav: {
      links: [
        { label: "Home", href: "index.html" },
        { label: "About Us", href: "about.html" },
        { label: "Services", href: "services.html" },
        { label: "Gallery", href: "projects.html" },
        { label: "Contact", href: "contact.html" }
      ],
      cta: "Book a Groom"
    },
    hero: {
      title: "Caring, Professional Dog Grooming in a",
      titleHighlight: "Calm & Friendly Environment",
      subtitle: "Based in Great Steeping, Northcote Groomers provides one-to-one dog grooming services. We are passionate about helping every dog look and feel their very best.",
      primaryCta: "Book a Groom →",
      secondaryCta: "View Services",
      rating: "5.0/5",
      ratingText: "from happy local clients"
    },
    stats: {
      heading: "Trusted by Dog Owners Across Lincolnshire",
      items: [
        { value: "1-to-1", label: "Personal Attention" },
        { value: "Calm", label: "Friendly Environment" },
        { value: "iPet L3", label: "Student Groomer" }
      ]
    },
    about: {
      eyebrow: "About Us",
      title: "One-to-One Dog Grooming with Care & Passion",
      paragraph1: "Based in Great Steeping, Northcote Groomers provides caring, professional, one-to-one dog grooming services in a calm and friendly environment. We are passionate about helping every dog look and feel their very best.",
      paragraph2: "As an iPet Network Level 3 student, Lauren focuses on gentle handling, thorough grooming, and creating a positive experience for even the most anxious dogs. Every appointment is tailored to your dog’s needs, temperament and coat type.",
      features: [
        { title: "One-to-One Care:", text: "Your dog receives full personal attention throughout their appointment" },
        { title: "Calm Environment:", text: "Quiet, friendly setting ideal for nervous or first-time dogs" },
        { title: "Professional Standards:", text: "iPet Network Level 3 trained with a genuine love for dogs" }
      ]
    },
    services: {
      title: "Our Grooming Services",
      subtitle: "Professional, caring treatments tailored to your dog’s breed, coat and personality.",
      items: [
        { title: "Full Groom", description: "Complete bath, dry, clip or scissor finish, nail trim, ear clean and tidy-up for a polished, healthy look." },
        { title: "De-Shed", description: "Thorough undercoat removal to reduce shedding, improve coat health and keep your home cleaner." },
        { title: "Puppy Introductions", description: "Gentle first grooming experiences designed to build confidence and positive associations for young dogs." },
        { title: "Bath & Blow Dry", description: "Refreshing wash with quality products and professional drying for a clean, soft, fragrant coat." },
        { title: "Nail Trims", description: "Careful nail clipping to keep paws comfortable and prevent overgrowth or splitting." },
        { title: "Hand Stripping & Teeth Cleaning", description: "Traditional hand stripping for wire-coated breeds plus gentle teeth cleaning to support oral health." }
      ],
      cta: "Book Now →"
    },
    process: {
      title: "How It Works",
      subtitle: "A simple, stress-free process focused on your dog’s comfort and happiness.",
      steps: [
        { number: "1", title: "Get in Touch", description: "Call, WhatsApp or message us to discuss your dog’s needs and book a convenient appointment." },
        { number: "2", title: "Settling In", description: "We welcome you and your dog into our calm space, take time to settle them and confirm the required services." },
        { number: "3", title: "Groom & Collect", description: "Your dog enjoys one-to-one care throughout. You’ll collect a happy, smart and sweet-smelling companion." }
      ],
      cta: "Book a Groom"
    },
    gallery: {
      title: "Happy Clients",
      subtitle: "A selection of recent grooms and smiling faces",
      viewLabel: "View"
    },

    projects: {
      seoTitle: "Gallery | Northcote Groomers",
      eyebrow: "Gallery",
      title: "Recent Grooms",
      subtitle: "See the transformations and happy dogs that leave Northcote Groomers looking and feeling their best.",
      viewLabel: "View",
      items: [
        {
          title: "Full Groom – Bear",
          location: "Great Steeping",
          description: "Fresh, fabulous and smelling gorgeous after a complete groom.",
          tags: ["Full Groom"],
          image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=1200"
        },
        {
          title: "Cockapoo Duo",
          location: "Local Client",
          description: "From wild and hairy to looking exceptional and smelling gorgeous.",
          tags: ["Full Groom", "Cockapoo"],
          image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1200"
        },
        {
          title: "First Groom – Simba",
          location: "Spilsby Area",
          description: "A calm, reassuring first experience – never looked so smart!",
          tags: ["Puppy Intro", "First Groom"],
          image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?q=80&w=1200"
        },
        {
          title: "Anxious Dogs – Calm Groom",
          location: "Lincolnshire",
          description: "Usually anxious dogs left happy and relaxed after their appointment.",
          tags: ["Calm Environment"],
          image: "https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=1200"
        },
        {
          title: "Fresh & Fragrant",
          location: "Great Steeping",
          description: "Bath, blow dry and tidy for a soft, clean, beautiful coat.",
          tags: ["Bath & Blow Dry"],
          image: "https://images.unsplash.com/photo-1558788353-f76d92427f16?q=80&w=1200"
        },
        {
          title: "Hand Strip Finish",
          location: "Local",
          description: "Traditional hand stripping for a natural, breed-correct appearance.",
          tags: ["Hand Stripping"],
          image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=1200"
        }
      ],
      cta: {
        title: "Ready for Your Dog’s Next Groom?",
        subtitle: "Get in touch to book a one-to-one appointment in our calm, friendly environment.",
        primary: "Book a Groom",
        secondaryPhone: true
      }
    },
    team: {
      title: "Meet Lauren",
      subtitle: "Passionate, caring and dedicated to making every dog feel comfortable and look their best.",
      members: [
        { name: "Lauren", role: "Groomer – iPet Network Level 3 Student" }
      ]
    },
    testimonials: {
      eyebrow: "Testimonials",
      title: "Loved by",
      titleHighlight: "Local Dog Owners",
      items: [
        {
          name: "Lisa Voss",
          role: "Dog Owner",
          rating: "★★★★★",
          text: "Amazing!! Thank you so much Lauren, for grooming Bear today he looks fabulous and smells gorgeous. Would 100% recommend anyone to come to you!! Such a lovely little business."
        },
        {
          name: "Kirsty Chantrell",
          role: "Dog Owner",
          rating: "★★★★★",
          text: "Fitted us in at short notice. An absolute delight. Really impressed with both dogs’ grooms and how calm they were. They’re usually really anxious dogs but they were so happy. Would recommend and will definitely be back."
        },
        {
          name: "Keith Sharpe",
          role: "Dog Owner",
          rating: "★★★★★",
          text: "Simba’s first ever grooming experience. Lauren is very welcoming and reassuring, and Simba certainly had a great time. Never had him so smart and smelling so good! Great service, highly recommend."
        },
        {
          name: "Claire Carter",
          role: "Cockapoo Owner",
          rating: "★★★★★",
          text: "Fantastic first groom at Northcote Groomers! Lauren was warm, welcoming and instantly put both me and my fur babies completely at ease. They went in looking like wild, hairy little beasts and came home smelling gorgeous, looking exceptional."
        }
      ]
    },
    faq: {
      eyebrow: "FAQ",
      title: "Frequently Asked Questions",
      subtitle: "Common questions about our dog grooming services in Great Steeping.",
      items: [
        {
          question: "Do you offer one-to-one grooming?",
          answer: "Yes – every dog is groomed individually in a calm environment so they receive full personal attention and feel as relaxed as possible."
        },
        {
          question: "Are you suitable for anxious or first-time dogs?",
          answer: "Absolutely. Many clients comment on how calm and happy their usually anxious dogs are with us. We also offer gentle puppy introduction sessions."
        },
        {
          question: "What services do you provide?",
          answer: "Full grooms, de-shedding, puppy introductions, bath & blow dry, nail trims, hand stripping and teeth cleaning."
        },
        {
          question: "How do I book an appointment?",
          answer: "Simply call or WhatsApp us on +44 7710 431422, or send a message via Instagram or Facebook. We’ll find a suitable time for you and your dog."
        },
        {
          question: "Where are you based?",
          answer: "We are based at Northcote, Sandy Lane, Great Steeping, Spilsby, PE23 5PS – a quiet rural location ideal for a relaxed grooming experience."
        }
      ]
    },
    contact: {
      title: "Contact Us",
      subtitle: "Ready to book? Get in touch – we’d love to meet you and your dog.",
      form: {
        namePlaceholder: "Your Name *",
        phonePlaceholder: "Phone Number *",
        emailPlaceholder: "Email Address *",
        messagePlaceholder: "Tell us about your dog (breed, size, services needed, any special requirements) *",
        submit: "Send Message"
      },
      addressLabel: "Our Address",
      phoneLabel: "Call or WhatsApp",
      mapsLabel: "Find Us",
      mapsCta: "Get Directions on Google Maps"
    },
    footer: {
      about: "Caring, professional one-to-one dog grooming in a calm and friendly environment in Great Steeping.",
      quickLinksTitle: "Quick Links",
      servicesTitle: "Services",
      contactTitle: "Get In Touch",
      copyright: "© 2026 Northcote Groomers • Great Steeping, Spilsby. All Rights Reserved.",
      designedBy: "Designed by",
      designedByLink: "https://stellarwebstudio.com/",
      designedByName: "Stellar Web Studio"
    }
  }
};

window.SiteConfig = SiteConfig;



/* =====================================================
 *  BOOTSTRAP
 * ===================================================== */
(function () {
  if (!window.SiteConfig) {
    console.error("SiteConfig not found.");
    return;
  }

  const cfg = window.SiteConfig;
  const theme = cfg.theme;
  const biz = cfg.business;
  const content = cfg.content;
  const images = cfg.images;

  // ===================== FREE TRIAL LOGIC =====================
// ===================== FREE TRIAL LOGIC =====================
function initTrial() {
  const trial = cfg.trial || {};
  if (!trial.enabled || !trial.endDate) return;

  const end = new Date(trial.endDate).getTime();
  const now = Date.now();

  const banner = document.getElementById("trial-banner");
  const expired = document.getElementById("trial-expired");
  const countdownEl = document.getElementById("trial-countdown");
  const nav = document.getElementById("main-nav");

  // Trial has ended
  if (now >= end) {
    if (expired) {
      expired.classList.remove("hidden");
      document.body.style.overflow = "hidden";
    }
    if (banner) banner.classList.add("hidden");
    return;
  }

  // Trial still active → show countdown banner
  if (banner) {
    banner.classList.remove("hidden");

    // Push navbar down by the height of the banner
    const bannerHeight = banner.offsetHeight;
    if (nav) {
      nav.style.top = bannerHeight + "px";
    }
    // Also add padding to the body so content doesn't jump under the fixed banner
    document.body.style.paddingTop = bannerHeight + "px";
  }

  function updateCountdown() {
    const remaining = end - Date.now();

    if (remaining <= 0) {
      location.reload();
      return;
    }

    const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

    let text = "";
    if (days > 0) text += `${days} day${days !== 1 ? "s" : ""} `;
    text += `${hours} hour${hours !== 1 ? "s" : ""} `;
    text += `${minutes} min `;
    text += `${seconds} sec left of free trial`;

    if (countdownEl) countdownEl.textContent = text;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}
  // Run trial check early
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initTrial);
  } else {
    initTrial();
  }
  // ===========================================================

  function adjustBrightness(hex, percent) {
    let num = parseInt(String(hex).replace("#", ""), 16);
    if (isNaN(num)) return hex;
    let r = Math.min(255, Math.max(0, (num >> 16) + percent));
    let g = Math.min(255, Math.max(0, ((num >> 8) & 0x00ff) + percent));
    let b = Math.min(255, Math.max(0, (num & 0x0000ff) + percent));
    return "#" + (0x1000000 + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }

  function isLightColor(hex) {
    const num = parseInt(String(hex).replace("#", ""), 16);
    const r = (num >> 16) & 255;
    const g = (num >> 8) & 255;
    const b = num & 255;
    return (r * 299 + g * 587 + b * 114) / 1000 > 160;
  }

  function applyTheme() {
    const root = document.documentElement;
    const primary = theme.primary;
    const bg = theme.background;
    const text = theme.text;
    const light = isLightColor(bg);

    root.style.setProperty("--primary", primary);
    root.style.setProperty("--primary-dark", adjustBrightness(primary, -25));
    root.style.setProperty("--primary-light", primary + "22");
    root.style.setProperty("--primary-50", primary + "15");

    root.style.setProperty("--bg-color", bg);
    root.style.setProperty("--bg-alt", adjustBrightness(bg, light ? -8 : 12));
    root.style.setProperty("--card-bg", light ? "#ffffff" : adjustBrightness(bg, 18));
    root.style.setProperty("--border-color", light ? "#e7e5e4" : adjustBrightness(bg, 30));

    root.style.setProperty("--text-color", text);
    root.style.setProperty("--text-muted", adjustBrightness(text, isLightColor(text) ? -40 : 40));

    root.style.setProperty("--nav-bg", theme.navBackground || (light ? "#ffffff" : adjustBrightness(bg, 12)));
    root.style.setProperty("--nav-text", theme.navText || text);

    root.style.setProperty("--footer-bg", theme.footerBackground);
    root.style.setProperty("--footer-text", theme.footerText);
    root.style.setProperty("--footer-muted", adjustBrightness(theme.footerText, isLightColor(theme.footerText) ? -35 : 35));

    root.style.setProperty("--font-heading", `"${theme.headingFont}", serif`);
    root.style.setProperty("--font-body", `"${theme.bodyFont}", system-ui, sans-serif`);
  }

  function loadFonts() {
    const heading = theme.headingFont.replace(/ /g, "+");
    const body = theme.bodyFont.replace(/ /g, "+");
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `https://fonts.googleapis.com/css2?family=${heading}:wght@400;700&family=${body}:wght@400;500;600&display=swap`;
    document.head.appendChild(link);
  }

  function applySeo() {
    const seo = cfg.seo;
    if (seo.title) document.title = seo.title;
    function setMeta(name, val, attr) {
      if (!val) return;
      attr = attr || "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", val);
    }
    setMeta("description", seo.description);
    setMeta("keywords", seo.keywords);
    setMeta("author", seo.author);
    setMeta("robots", seo.robots);
    setMeta("og:title", seo.title, "property");
    setMeta("og:description", seo.description, "property");
    setMeta("og:image", seo.ogImage, "property");
    setMeta("og:type", "website", "property");
    if (seo.canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = seo.canonical;
    }
    if (biz.favicon) {
      let fav = document.querySelector('link[rel="icon"]');
      if (!fav) {
        fav = document.createElement("link");
        fav.rel = "icon";
        document.head.appendChild(fav);
      }
      fav.href = biz.favicon;
    }
  }

  function hydrateNav() {
    const desktop = document.querySelector("[data-nav-desktop]");
    const mobile = document.querySelector("[data-nav-mobile]");
    if (desktop) {
      desktop.innerHTML = content.nav.links
        .map((l) => `<a href="${l.href}" class="nav-link">${l.label}</a>`)
        .join("");
    }
    if (mobile) {
      mobile.innerHTML = content.nav.links
        .map((l) => `<a href="${l.href}" onclick="toggleMobileMenu()" class="py-3 border-b border-theme text-main">${l.label}</a>`)
        .join("");
    }
    document.querySelectorAll("[data-nav-cta]").forEach((el) => {
      el.textContent = content.nav.cta;
    });
  }

  function hydrateHero() {
    const h = content.hero;
    const titleEl = document.querySelector("[data-hero-title]");
    if (titleEl) titleEl.innerHTML = `${h.title} <span class="text-primary">${h.titleHighlight}</span>`;
    const sub = document.querySelector("[data-hero-subtitle]");
    if (sub) sub.textContent = h.subtitle;
    const primary = document.querySelector("[data-hero-primary-cta]");
    if (primary) primary.textContent = h.primaryCta;
    const secondary = document.querySelector("[data-hero-secondary-cta]");
    if (secondary) secondary.textContent = h.secondaryCta;
    const rating = document.querySelector("[data-hero-rating]");
    if (rating) rating.textContent = h.rating;
    const ratingText = document.querySelector("[data-hero-rating-text]");
    if (ratingText) ratingText.textContent = h.ratingText;
    const avatars = document.querySelector("[data-hero-avatars]");
    if (avatars && images.trustAvatars) {
      avatars.innerHTML = images.trustAvatars
        .map((src) => `<img class="w-10 h-10 rounded-full border-2 border-white object-cover" src="${src}" alt="">`)
        .join("");
    }
    const heroImg = document.querySelector("[data-hero-img]");
    if (heroImg) heroImg.src = images.hero;
  }

  function hydrateStats() {
    const heading = document.querySelector("[data-stats-heading]");
    if (heading) heading.textContent = content.stats.heading;
    const grid = document.querySelector("[data-stats-grid]");
    if (grid) {
      grid.innerHTML = content.stats.items
        .map((item) => `<div><p class="text-4xl sm:text-5xl font-bold text-primary">${item.value}</p><h4 class="mt-2 text-lg font-medium text-muted">${item.label}</h4></div>`)
        .join("");
    }
  }

  function hydrateAbout() {
    const a = content.about;
    const eyebrow = document.querySelector("[data-about-eyebrow]");
    if (eyebrow) eyebrow.textContent = a.eyebrow;
    const title = document.querySelector("[data-about-title]");
    if (title) title.textContent = a.title;
    const p1 = document.querySelector("[data-about-p1]");
    if (p1) p1.textContent = a.paragraph1;
    const p2 = document.querySelector("[data-about-p2]");
    if (p2) p2.textContent = a.paragraph2;
    const features = document.querySelector("[data-about-features]");
    if (features) {
      features.innerHTML = a.features
        .map((f) => `<li class="flex items-start gap-3"><span class="text-primary text-xl">✓</span><span><strong>${f.title}</strong> ${f.text}</span></li>`)
        .join("");
    }
    const img = document.querySelector("[data-about-img]");
    if (img) img.src = images.about;
  }

  function hydrateServices() {
    const s = content.services;
    const title = document.querySelector("[data-services-title]");
    if (title) title.textContent = s.title;
    const sub = document.querySelector("[data-services-subtitle]");
    if (sub) sub.textContent = s.subtitle;
    const grid = document.querySelector("[data-services-grid]");
    if (grid) {
      grid.innerHTML = s.items
        .map((item) => `
        <div class="animate-on-scroll">
          <div class="bg-card p-6 rounded-xl border border-theme shadow-sm hover:shadow-lg transition flex flex-col h-full">
            <h5 class="mb-3 text-xl font-semibold text-main">${item.title}</h5>
            <p class="text-muted mb-6 flex-grow">${item.description}</p>
            <a href="contact.html" class="mt-auto inline-flex items-center justify-center text-white bg-primary hover:bg-primary-dark font-medium rounded-lg text-sm px-4 py-2.5 transition">${s.cta}</a>
          </div>
        </div>`)
        .join("");
    }
  }

  function hydrateProcess() {
    const p = content.process;
    const title = document.querySelector("[data-process-title]");
    if (title) title.textContent = p.title;
    const sub = document.querySelector("[data-process-subtitle]");
    if (sub) sub.textContent = p.subtitle;
    const steps = document.querySelector("[data-process-steps]");
    if (steps) {
      steps.innerHTML =
        p.steps
          .map((step) => `
        <div class="flex gap-5">
          <div class="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shadow-md">${step.number}</div>
          <div><h4 class="text-lg font-semibold text-main">${step.title}</h4><p class="text-muted mt-1">${step.description}</p></div>
        </div>`)
          .join("") +
        `<div class="pt-6"><a href="contact.html" class="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl shadow-md transition">${p.cta} <i class="fa-solid fa-arrow-right"></i></a></div>`;

    }
    const img = document.querySelector("[data-process-img]");
    if (img) img.src = images.process;
  }

  function hydrateGallery() {
    const g = content.gallery;
    const title = document.querySelector("[data-gallery-title]");
    if (title) title.textContent = g.title;
    const sub = document.querySelector("[data-gallery-subtitle]");
    if (sub) sub.textContent = g.subtitle;
    const grid = document.querySelector("#galleryGrid");
    if (grid && images.gallery) {
      grid.innerHTML = images.gallery
        .map((src, i) => `
        <div onclick="openLightbox(event, ${i})" class="cursor-pointer group relative overflow-hidden rounded-lg aspect-square">
          <img class="w-full h-full object-cover rounded-lg transition duration-500 group-hover:scale-110" src="${src}" alt="Project ${i + 1}">
          <div class="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-300"></div>
          <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
            <div class="px-4 py-2 bg-white text-gray-900 text-sm font-semibold rounded-lg shadow">${g.viewLabel}</div>
          </div>
        </div>`)
        .join("");
    }
  }

  function hydrateProjects() {
    const p = content.projects;
    if (!p) return;

    if (p.seoTitle) document.title = p.seoTitle;

    const eyebrow = document.querySelector("[data-projects-eyebrow]");
    if (eyebrow) eyebrow.textContent = p.eyebrow;
    const title = document.querySelector("[data-projects-title]");
    if (title) title.textContent = p.title;
    const sub = document.querySelector("[data-projects-subtitle]");
    if (sub) sub.textContent = p.subtitle;

    const grid = document.querySelector("[data-projects-grid]");
    if (grid && p.items) {
      grid.innerHTML = p.items.map((item, i) => {
        const tags = (item.tags || []).map(t =>
          `<span class="text-xs font-medium px-2.5 py-1 rounded-full bg-primary-50 text-primary">${t}</span>`
        ).join("");
        return `
        <div class="animate-on-scroll group bg-card rounded-2xl border border-theme shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full">
          <div onclick="openLightbox(event, ${i})" class="cursor-pointer relative overflow-hidden aspect-[4/3]">
            <img class="w-full h-full object-cover transition duration-500 group-hover:scale-110" src="${item.image}" alt="${item.title}">
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition duration-300"></div>
            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <div class="px-4 py-2 bg-white text-gray-900 text-sm font-semibold rounded-lg shadow">${p.viewLabel || "View Project"}</div>
            </div>
          </div>
          <div class="p-5 sm:p-6 flex flex-col flex-grow">
            <h3 class="text-xl font-semibold text-main">${item.title}</h3>
            <p class="mt-2 text-sm text-muted">${item.location || ""}</p>
            <p class="mt-3 text-muted text-sm leading-relaxed flex-grow">${item.description}</p>
            <div class="mt-4 flex flex-wrap gap-2">${tags}</div>
          </div>
        </div>`;
      }).join("");
    }

    const ctaTitle = document.querySelector("[data-projects-cta-title]");
    if (ctaTitle && p.cta) ctaTitle.textContent = p.cta.title;
    const ctaSub = document.querySelector("[data-projects-cta-subtitle]");
    if (ctaSub && p.cta) ctaSub.textContent = p.cta.subtitle;
    const ctaPrimary = document.querySelector("[data-projects-cta-primary]");
    if (ctaPrimary && p.cta) ctaPrimary.textContent = p.cta.primary;
  }

  function hydrateTeam() {
    const t = content.team;
    const title = document.querySelector("[data-team-title]");
    if (title) title.textContent = t.title;
    const sub = document.querySelector("[data-team-subtitle]");
    if (sub) sub.textContent = t.subtitle;
    const grid = document.querySelector("[data-team-grid]");
    if (grid) {
      grid.innerHTML = t.members
        .map((m, i) => `
        <div class="group text-center">
          <div class="relative overflow-hidden rounded-xl">
            <img src="${images.team[i] || ""}" class="w-full h-72 object-cover transition duration-500 group-hover:scale-110" alt="${m.name}">
            <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition"></div>
          </div>
          <h3 class="mt-4 text-xl font-semibold text-main">${m.name}</h3>
          <p class="text-muted">${m.role}</p>
        </div>`)
        .join("");
    }
  }

  function hydrateTestimonials() {
    const t = content.testimonials;
    const eyebrow = document.querySelector("[data-testimonials-eyebrow]");
    if (eyebrow) eyebrow.textContent = t.eyebrow;
    const title = document.querySelector("[data-testimonials-title]");
    if (title) title.innerHTML = `${t.title} <span class="text-primary">${t.titleHighlight}</span>`;
    const wrapper = document.querySelector("[data-testimonials-wrapper]");
    if (wrapper) {
      wrapper.innerHTML = t.items
        .map((item, i) => `
        <div class="swiper-slide review-card border border-solid rounded-2xl p-6 transition-all duration-500">
          <div class="flex items-center gap-5 mb-5 sm:mb-9">
            <img class="rounded-full object-cover w-12 h-12" src="${images.testimonials[i] || ""}" alt="${item.name}">
            <div class="grid gap-1">
              <h5 class="text-main font-semibold">${item.name}</h5>
              <span class="text-sm text-muted">${item.role}</span>
            </div>
          </div>
          <div class="flex items-center mb-5 sm:mb-9 gap-1 text-amber-500">${item.rating}</div>
          <p class="text-sm text-muted leading-6 min-h-24">${item.text}</p>
        </div>`)
        .join("");
    }
  }

  function hydrateFaq() {
    const f = content.faq;
    const eyebrow = document.querySelector("[data-faq-eyebrow]");
    if (eyebrow) eyebrow.textContent = f.eyebrow;
    const title = document.querySelector("[data-faq-title]");
    if (title) title.textContent = f.title;
    const sub = document.querySelector("[data-faq-subtitle]");
    if (sub) sub.textContent = f.subtitle;
    const list = document.querySelector("[data-faq-list]");
    if (list) {
      list.innerHTML = f.items
        .map((item) => `
        <div class="faq-item border rounded-2xl overflow-hidden">
          <button onclick="toggleFaq(this)" class="faq-button w-full px-6 py-5 text-left flex justify-between items-center transition-all">
            <span class="font-medium text-main pr-4">${item.question}</span>
            <span class="faq-icon text-primary text-2xl">+</span>
          </button>
          <div class="faq-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
            <div class="px-6 pb-6 text-muted">${item.answer}</div>
          </div>
        </div>`)
        .join("");
    }
  }

  function hydrateContact() {
    const c = content.contact;
    const title = document.querySelector("[data-contact-title]");
    if (title) title.textContent = c.title;
    const sub = document.querySelector("[data-contact-subtitle]");
    if (sub) sub.textContent = c.subtitle;
    const name = document.getElementById("name");
    if (name) name.placeholder = c.form.namePlaceholder;
    const phone = document.getElementById("phone");
    if (phone) phone.placeholder = c.form.phonePlaceholder;
    const email = document.getElementById("email");
    if (email) email.placeholder = c.form.emailPlaceholder;
    const message = document.getElementById("message");
    if (message) message.placeholder = c.form.messagePlaceholder;
    const submit = document.querySelector("[data-contact-submit]");
    if (submit) submit.innerHTML = `${c.form.submit} <i class="fa-solid fa-arrow-right"></i>`;
    const addrLabel = document.querySelector("[data-contact-address-label]");
    if (addrLabel) addrLabel.textContent = c.addressLabel;
    const phoneLabel = document.querySelector("[data-contact-phone-label]");
    if (phoneLabel) phoneLabel.textContent = c.phoneLabel;
    const mapsLabel = document.querySelector("[data-contact-maps-label]");
    if (mapsLabel) mapsLabel.textContent = c.mapsLabel;
    document.querySelectorAll("[data-contact-maps-cta]").forEach((mapsCta) => {
      mapsCta.innerHTML = `<i class="fa-solid fa-map-marker-alt text-primary text-xl transition group-hover:scale-110 shrink-0"></i><span>${c.mapsCta}</span>`;
      mapsCta.href = biz.mapsUrl || "#";
    });
  }

  function hydrateFooter() {
    const f = content.footer;
    const about = document.querySelector("[data-footer-about]");
    if (about) about.textContent = f.about;
    const quickTitle = document.querySelector("[data-footer-quick-title]");
    if (quickTitle) quickTitle.textContent = f.quickLinksTitle;
    const servicesTitle = document.querySelector("[data-footer-services-title]");
    if (servicesTitle) servicesTitle.textContent = f.servicesTitle;
    const contactTitle = document.querySelector("[data-footer-contact-title]");
    if (contactTitle) contactTitle.textContent = f.contactTitle;
    const quickLinks = document.querySelector("[data-footer-quick-links]");
    if (quickLinks) {
      quickLinks.innerHTML = content.nav.links
        .map((l) => `<li><a href="${l.href}" class="text-footer-muted hover:text-primary transition">${l.label}</a></li>`)
        .join("");
    }
    const servicesList = document.querySelector("[data-footer-services-list]");
    if (servicesList) {
      servicesList.innerHTML = content.services.items
        .map((s) => `<li class="text-footer-muted">${s.title}</li>`)
        .join("");
    }
    const social = document.querySelector("[data-footer-social]");
    if (social) {
      social.innerHTML = `
        <a href="${biz.social.instagram}" class="w-9 h-9 rounded-2xl border border-primary hover:bg-primary transition flex items-center justify-center text-xl text-primary hover:text-white"><i class="fa-brands fa-instagram"></i></a>
        <a href="${biz.social.facebook}" class="w-9 h-9 rounded-2xl border border-primary hover:bg-primary transition flex items-center justify-center text-xl text-primary hover:text-white"><i class="fa-brands fa-facebook-f"></i></a>
        <a href="${biz.social.whatsapp}" class="w-9 h-9 rounded-2xl border border-primary hover:bg-primary transition flex items-center justify-center text-xl text-primary hover:text-white"><i class="fa-brands fa-whatsapp"></i></a>`;
    }
    const copyright = document.querySelector("[data-footer-copyright]");
    if (copyright) copyright.textContent = f.copyright;
    const designed = document.querySelector("[data-footer-designed]");
    if (designed) {
      designed.innerHTML = `${f.designedBy} <a href="${f.designedByLink}" target="_blank" rel="noopener noreferrer" class="hover:text-primary transition-colors">${f.designedByName}</a>`;
    }
  }

  function applyBusinessData() {
    document.querySelectorAll("[data-phone]").forEach((el) => {
      el.setAttribute("onclick", `handlePhoneCTA('${biz.phone}')`);
      const mode = el.getAttribute("data-phone");
      const span = el.querySelector("span");
      if (mode === "short" && span) span.textContent = biz.phoneDisplayShort;
      else if (span) span.textContent = biz.phoneDisplay;
    });
    document.querySelectorAll("[data-address]").forEach((el) => {
      el.innerHTML = `${biz.address.line1}<br>${biz.address.line2}`;
    });
    document.querySelectorAll("[data-hours]").forEach((el) => {
      el.textContent = biz.hours.display;
    });
    document.querySelectorAll("[data-logo-emoji]").forEach((el) => {
      if (biz.logo.path) {
        el.style.display = "none";
      } else {
        el.textContent = biz.logo.emoji || "";
      }
    });
    document.querySelectorAll("[data-logo-img]").forEach((el) => {
      if (biz.logo.path) {
        el.src = biz.logo.path;
        el.alt = biz.logo.alt || biz.name;
        el.classList.remove("hidden");
      } else {
        el.classList.add("hidden");
      }
    });
    document.querySelectorAll("[data-logo-name]").forEach((el) => {
      el.textContent = biz.name;
    });
    document.querySelectorAll("[data-logo-tagline]").forEach((el) => {
      el.textContent = biz.shortTagline;
    });
  }


  applyTheme();
  loadFonts();
  applySeo();

  function run() {
    applyBusinessData();
    hydrateNav();
    hydrateHero();
    hydrateStats();
    hydrateAbout();
    hydrateServices();
    hydrateProcess();
    hydrateGallery();
    hydrateProjects();
    hydrateTeam();
    hydrateTestimonials();
    hydrateFaq();
    hydrateContact();
    hydrateFooter();

    const imgs = document.querySelectorAll("#galleryGrid img");
    window.images = Array.from(imgs).map((img) => img.src);

    if (window.IntersectionObserver) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) entry.target.classList.add("visible");
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
      );
      document.querySelectorAll(".animate-on-scroll").forEach((el, i) => {
        el.style.setProperty("--i", i % 6);
        observer.observe(el);
      });
    }

    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-link").forEach((link) => {
      if (link.getAttribute("href") === currentPage) link.classList.add("active");
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }
})();
