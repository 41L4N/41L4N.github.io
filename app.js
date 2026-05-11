(function () {
  "use strict";

  const STORAGE_THEME = "cv-theme";
  const STORAGE_LANG = "cv-lang";

  const STRINGS = {
    es: {
      "a11y.skip": "Saltar al contenido",
      "nav.profile": "Perfil",
      "nav.experience": "Experiencia",
      "nav.skills": "Habilidades",
      "nav.education": "Formación",
      "nav.sectionsNav": "Secciones del CV",
      "nav.download": "Descargar CV",
      "download.es": "PDF en español",
      "download.en": "PDF en inglés",
      "hero.eyebrow": "Disponible para proyectos y equipos remotos",
      "hero.role": "Desarrollador Full-Stack",
      "hero.tagline": "Laravel · Vue.js · React · Node.js",
      "hero.lead":
        "Ocho años construyendo aplicaciones web escalables, APIs y sistemas con exigencia de calidad y documentación.",
      "hero.ctaEmail": "Escribirme",
      "hero.copyEmail": "Copiar email",
      "hero.location": "Caracas, Venezuela",
      "hero.statYears": "años",
      "hero.h1": "Infraestructura crítica y alto tráfico",
      "hero.h2": "Liderazgo técnico y mentoría",
      "hero.h3": "SOLID, Clean Code, documentación",
      "profile.title": "Perfil profesional",
      "profile.kicker": "Más que un PDF: contexto vivo",
      "profile.p1":
        "Desarrollador Full-Stack con 8 años de experiencia construyendo aplicaciones web escalables y de alto rendimiento. Especializado en el ecosistema Laravel/PHP para backend y Vue.js/React para frontend, con sólida experiencia en arquitecturas robustas, APIs RESTful, optimización de bases de datos y liderazgo técnico de equipos.",
      "profile.p2":
        "Comprometido con la calidad del código a través de principios SOLID, Clean Code y documentación técnica rigurosa. Experiencia comprobada en proyectos de infraestructura crítica, e-commerce y sistemas de gestión empresarial, trabajando bajo metodologías ágiles en entornos remotos e híbridos.",
      "exp.title": "Experiencia",
      "exp.kicker": "Línea de tiempo interactiva",
      "skills.title": "Habilidades técnicas",
      "skills.kicker": "Ecosistema y prácticas",
      "edu.title": "Formación y capacitación",
      "lang.title": "Idiomas",
      "lang.esTitle": "Español",
      "lang.esLevel": "Nativo.",
      "lang.enTitle": "Inglés",
      "lang.enLevel": "Nivel básico — lectura de documentación técnica.",
      "footer.built": "Hecho a mano con HTML, CSS y JS",
      "footer.source": "Código fuente",
      "toast.copied": "Email copiado al portapapeles",
    },
    en: {
      "a11y.skip": "Skip to content",
      "nav.profile": "Profile",
      "nav.experience": "Experience",
      "nav.skills": "Skills",
      "nav.education": "Education",
      "nav.sectionsNav": "Resume sections",
      "nav.download": "Download CV",
      "download.es": "PDF in Spanish",
      "download.en": "PDF in English",
      "hero.eyebrow": "Open to projects and remote teams",
      "hero.role": "Full-Stack Developer",
      "hero.tagline": "Laravel · Vue.js · React · Node.js",
      "hero.lead":
        "Eight years shipping scalable web apps, APIs, and systems with a strong focus on quality and documentation.",
      "hero.ctaEmail": "Email me",
      "hero.copyEmail": "Copy email",
      "hero.location": "Caracas, Venezuela",
      "hero.statYears": "years",
      "hero.h1": "Critical infrastructure & high traffic",
      "hero.h2": "Technical leadership & mentoring",
      "hero.h3": "SOLID, Clean Code, documentation",
      "profile.title": "Professional profile",
      "profile.kicker": "Beyond a PDF: living context",
      "profile.p1":
        "Full-Stack Developer with 8 years of experience building scalable, high-performance web applications. Specialized in the Laravel/PHP ecosystem for backend and Vue.js/React for frontend, with solid expertise in robust architectures, RESTful APIs, database optimization, and technical team leadership.",
      "profile.p2":
        "Committed to code quality through SOLID principles, Clean Code, and rigorous technical documentation. Proven experience in critical infrastructure projects, e-commerce, and enterprise management systems — working under Agile methodologies in remote and hybrid environments.",
      "exp.title": "Experience",
      "exp.kicker": "Interactive timeline",
      "skills.title": "Technical skills",
      "skills.kicker": "Stack & practices",
      "edu.title": "Education & training",
      "lang.title": "Languages",
      "lang.esTitle": "Spanish",
      "lang.esLevel": "Native.",
      "lang.enTitle": "English",
      "lang.enLevel": "Basic — technical documentation reading.",
      "footer.built": "Hand-crafted with HTML, CSS & JS",
      "footer.source": "Source code",
      "toast.copied": "Email copied to clipboard",
    },
  };

  const SKILL_LABELS = {
    es: {
      frontend: "Frontend",
      backend: "Backend",
      databases: "Bases de datos",
      apis: "APIs e integraciones",
      infra: "Infraestructura",
      practices: "Prácticas",
    },
    en: {
      frontend: "Frontend",
      backend: "Backend",
      databases: "Databases",
      apis: "APIs & integrations",
      infra: "Infrastructure",
      practices: "Practices",
    },
  };

  const SKILL_TAGS = {
    frontend: [
      "Vue.js (Quasar, Vuetify)",
      "React (Material UI)",
      "Next.js",
      "HTML5",
      "CSS3 / SASS",
      "Bootstrap",
      "JavaScript",
      "TypeScript",
      "jQuery",
    ],
    backend: ["PHP / Laravel", "Ruby on Rails", "Node.js", "TypeScript"],
    apis: {
      es: ["APIs REST", "Pasarelas de pago", "Servicios externos"],
      en: ["REST APIs", "Payment gateways", "External services"],
    },
    infra: ["Google Cloud", "Hostinger", "cPanel", "Git", "GitHub", "GitLab"],
    databases: {
      es: ["MySQL", "Diseño relacional", "Optimización de consultas SQL"],
      en: ["MySQL", "Relational design", "SQL query optimization"],
    },
    practices: {
      es: ["SOLID", "Clean Code", "Scrum", "Kanban", "CI/CD", "Revisión de código", "Documentación técnica"],
      en: ["SOLID", "Clean Code", "Scrum", "Kanban", "CI/CD", "Code review", "Technical documentation"],
    },
  };

  const EDUCATION = {
    es: [
      {
        title: "Desarrollo Full-Stack — PHP, Laravel, Vue.js, React",
        period: "2016 – Presente",
        source: "Aprendizaje autodidacta · Udemy / Platzi / Documentación oficial",
        desc: "Formación continua en desarrollo web moderno, arquitecturas de software y buenas prácticas de programación.",
      },
      {
        title: "Cloud Hosting & DevOps — Google Cloud, cPanel, Hostinger",
        period: "2020 – Presente",
        source: "Aprendizaje autodidacta · Google Cloud Skills Boost / Comunidad",
        desc: "Administración de entornos de hosting, configuración de servidores y despliegue de aplicaciones web en producción.",
      },
    ],
    en: [
      {
        title: "Full-Stack Development — PHP, Laravel, Vue.js, React",
        period: "2016 – Present",
        source: "Self-directed learning · Udemy / Platzi / Official documentation",
        desc: "Ongoing training in modern web development, software architectures, and programming best practices.",
      },
      {
        title: "Cloud Hosting & DevOps — Google Cloud, cPanel, Hostinger",
        period: "2020 – Present",
        source: "Self-directed learning · Google Cloud Skills Boost / Community",
        desc: "Hosting administration, server configuration, and production deployment of web applications.",
      },
    ],
  };

  const EXPERIENCE = {
    es: [
      {
        role: "Desarrollador Full-Stack Freelance",
        company: "Autónomo / Clientes privados",
        period: "jun. 2018 – Presente",
        bullets: [
          "Desarrollo de aplicaciones web full-stack con Laravel, Vue.js (Quasar, Vuetify) y React.",
          "Arquitecturas escalables para gestión, e-commerce y aplicaciones educativas.",
          "Optimización de rendimiento y UX en proyectos de mediana y alta complejidad.",
          "Ciclo completo: requisitos, desarrollo, despliegue y soporte post-entrega.",
          "Integración de APIs, pasarelas de pago y servicios de terceros.",
        ],
      },
      {
        role: "Desarrollador Web",
        company: "Prolesys Consultores C.A.",
        period: "jun. 2022 – abr. 2025",
        bullets: [
          "Sistemas críticos para infraestructura nacional: seguridad y alta disponibilidad.",
          "Liderazgo técnico en arquitecturas robustas y estándares de desarrollo.",
          "Optimización en aplicaciones de alto tráfico: tiempos de respuesta y estabilidad.",
          "Gestión de equipo y mentoría: Clean Code, SOLID, revisión de código y documentación.",
          "Diseño y consumo de APIs REST para integración con sistemas externos.",
        ],
      },
      {
        role: "Web Developer",
        company: "SISMG Chile",
        period: "jun. 2022 – abr. 2025",
        bullets: [
          "Módulos de software para el mercado chileno, coordinación con equipos remotos.",
          "Frontend con Vue.js y React, compatibilidad y rendimiento cross-browser.",
          "Integración con backends PHP/Laravel y Node.js vía REST.",
          "Scrum/Kanban y entrega continua en sprints.",
        ],
      },
      {
        role: "Web Developer",
        company: "GoldTech",
        period: "mar. 2021 – nov. 2021",
        bullets: [
          "Módulos de gestión de datos para sistemas empresariales.",
          "Mejoras de rendimiento: ~40% menos tiempo de carga (SQL + caché).",
          "APIs REST para integración con sistemas externos.",
          "Refactorización de módulos legacy: mantenibilidad y escalabilidad.",
        ],
      },
      {
        role: "Desarrollador Web",
        company: "Corporación Homines",
        period: "sept. 2019 – feb. 2021",
        bullets: [
          "Módulos de gestión de datos para sistemas corporativos internos.",
          "Microservicios: modularidad y escalabilidad.",
          "Interfaces responsivas con Vue.js, HTML5, CSS3 y JavaScript.",
          "Migración de legacy a tecnologías modernas, reduciendo deuda técnica.",
        ],
      },
    ],
    en: [
      {
        role: "Freelance Full-Stack Developer",
        company: "Independent / Private clients",
        period: "Jun. 2018 – Present",
        bullets: [
          "Full-stack web apps with Laravel, Vue.js (Quasar, Vuetify), and React.",
          "Scalable architectures for management systems, e-commerce, and education platforms.",
          "Performance and UX improvements on medium-to-high complexity projects.",
          "End-to-end ownership: requirements, development, deployment, and post-delivery support.",
          "External APIs, payment gateways, and third-party integrations.",
        ],
      },
      {
        role: "Web Developer",
        company: "Prolesys Consultores C.A.",
        period: "Jun. 2022 – Apr. 2025",
        bullets: [
          "Critical systems for national infrastructure: strict security and high availability.",
          "Technical leadership on robust architectures and team-wide development standards.",
          "High-traffic performance work: faster responses and improved stability.",
          "Team leadership and mentoring: Clean Code, SOLID, code review, and documentation.",
          "RESTful API design and consumption for external integrations.",
        ],
      },
      {
        role: "Web Developer",
        company: "SISMG Chile",
        period: "Jun. 2022 – Apr. 2025",
        bullets: [
          "Software modules for the Chilean market with remote team coordination.",
          "Vue.js and React frontends with cross-browser compatibility and performance.",
          "PHP/Laravel and Node.js backends via RESTful endpoints.",
          "Active participation in Scrum/Kanban and continuous delivery sprints.",
        ],
      },
      {
        role: "Web Developer",
        company: "GoldTech",
        period: "Mar. 2021 – Nov. 2021",
        bullets: [
          "Data management modules for enterprise systems.",
          "Performance improvements cutting load times by ~40% (SQL + caching).",
          "RESTful APIs for external systems and third-party apps.",
          "Legacy refactoring for maintainability and scalability.",
        ],
      },
      {
        role: "Web Developer",
        company: "Corporación Homines",
        period: "Sep. 2019 – Feb. 2021",
        bullets: [
          "Data management modules for internal corporate systems.",
          "Microservices architecture for modularity and scalability.",
          "Responsive UIs with Vue.js, HTML5, CSS3, and JavaScript.",
          "Legacy migration to modern stacks, reducing technical debt.",
        ],
      },
    ],
  };

  function getStoredTheme() {
    try {
      return localStorage.getItem(STORAGE_THEME);
    } catch {
      return null;
    }
  }

  function setStoredTheme(value) {
    try {
      localStorage.setItem(STORAGE_THEME, value);
    } catch {
      /* ignore */
    }
  }

  function getStoredLang() {
    try {
      return localStorage.getItem(STORAGE_LANG);
    } catch {
      return null;
    }
  }

  function setStoredLang(value) {
    try {
      localStorage.setItem(STORAGE_LANG, value);
    } catch {
      /* ignore */
    }
  }

  function resolveTheme() {
    const stored = getStoredTheme();
    if (stored === "light" || stored === "dark") return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function resolveLang() {
    const stored = getStoredLang();
    if (stored === "es" || stored === "en") return stored;
    const nav = navigator.language || "";
    return nav.toLowerCase().startsWith("es") ? "es" : "en";
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    setStoredTheme(theme);
  }

  function applyLang(lang) {
    document.documentElement.lang = lang === "es" ? "es" : "en";
    setStoredLang(lang);

    const table = STRINGS[lang];
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      if (key && table[key] != null) {
        el.textContent = table[key];
      }
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      const key = el.getAttribute("data-i18n-aria");
      if (key && table[key] != null) {
        el.setAttribute("aria-label", table[key]);
      }
    });

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      const isEs = btn.getAttribute("data-lang") === "es";
      const active = (isEs && lang === "es") || (!isEs && lang === "en");
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    renderExperience(lang);
    renderEducation(lang);
    renderSkills(lang);

    const themeBtn = document.querySelector(".theme-toggle");
    if (themeBtn) {
      themeBtn.setAttribute(
        "aria-label",
        lang === "es" ? "Cambiar tema claro u oscuro" : "Toggle light or dark theme"
      );
      themeBtn.setAttribute("title", lang === "es" ? "Tema" : "Theme");
    }

    const dd = document.querySelector("[data-dropdown-trigger]");
    if (dd && table["nav.download"]) {
      dd.textContent = table["nav.download"];
    }
  }

  function renderExperience(lang) {
    const root = document.getElementById("experience-root");
    if (!root) return;
    const items = EXPERIENCE[lang];
    root.innerHTML = items
      .map(function (job) {
        const bullets = job.bullets
          .map(function (b) {
            return "<li>" + escapeHtml(b) + "</li>";
          })
          .join("");
        return (
          '<article class="tl-item">' +
          '<span class="tl-dot" aria-hidden="true"></span>' +
          '<div class="tl-card">' +
          "<header>" +
          "<p class=\"tl-role\">" +
          escapeHtml(job.role) +
          "</p>" +
          "<p class=\"tl-company\">" +
          escapeHtml(job.company) +
          "</p>" +
          '<p class="tl-period">' +
          escapeHtml(job.period) +
          "</p>" +
          "</header>" +
          "<ul>" +
          bullets +
          "</ul>" +
          "</div>" +
          "</article>"
        );
      })
      .join("");
  }

  function renderEducation(lang) {
    const root = document.getElementById("education-root");
    if (!root) return;
    root.innerHTML = EDUCATION[lang]
      .map(function (e) {
        return (
          '<article class="edu-card">' +
          "<h3>" +
          escapeHtml(e.title) +
          "</h3>" +
          '<p class="edu-meta">' +
          escapeHtml(e.period) +
          "</p>" +
          '<p class="edu-source">' +
          escapeHtml(e.source) +
          "</p>" +
          '<p class="edu-desc">' +
          escapeHtml(e.desc) +
          "</p>" +
          "</article>"
        );
      })
      .join("");
  }

  function renderSkills(lang) {
    const root = document.getElementById("skills-root");
    if (!root) return;
    const labels = SKILL_LABELS[lang];
    const order = ["frontend", "backend", "databases", "apis", "infra", "practices"];
    root.innerHTML = order
      .map(function (key) {
        const raw = SKILL_TAGS[key];
        const list = Array.isArray(raw) ? raw : raw[lang];
        const tags = list
          .map(function (t) {
            return '<span class="tag">' + escapeHtml(t) + "</span>";
          })
          .join("");
        return (
          '<div class="bento-card">' +
          "<h3>" +
          escapeHtml(labels[key]) +
          "</h3>" +
          '<div class="tags">' +
          tags +
          "</div>" +
          "</div>"
        );
      })
      .join("");
  }

  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function showToast(message) {
    const toast = document.getElementById("toast");
    if (!toast) return;
    toast.textContent = message;
    toast.hidden = false;
    toast.classList.add("is-visible");
    window.clearTimeout(showToast._t);
    showToast._t = window.setTimeout(function () {
      toast.classList.remove("is-visible");
      window.setTimeout(function () {
        toast.hidden = true;
      }, 400);
    }, 2200);
  }

  function initThemeToggle() {
    const btn = document.querySelector(".theme-toggle");
    if (!btn) return;
    btn.addEventListener("click", function () {
      const current = document.documentElement.getAttribute("data-theme") || resolveTheme();
      applyTheme(current === "dark" ? "light" : "dark");
    });
  }

  function initLangSwitch() {
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const lang = btn.getAttribute("data-lang");
        if (lang === "es" || lang === "en") applyLang(lang);
      });
    });
  }

  function initDropdown() {
    const wrap = document.querySelector("[data-dropdown]");
    if (!wrap) return;
    const trigger = wrap.querySelector("[data-dropdown-trigger]");
    const panel = wrap.querySelector("[data-dropdown-panel]");
    if (!trigger || !panel) return;

    function close() {
      panel.hidden = true;
      trigger.setAttribute("aria-expanded", "false");
    }

    function toggle() {
      const open = panel.hidden;
      panel.hidden = !open;
      trigger.setAttribute("aria-expanded", open ? "true" : "false");
    }

    trigger.addEventListener("click", function (e) {
      e.stopPropagation();
      toggle();
    });

    document.addEventListener("click", function (e) {
      if (!wrap.contains(e.target)) close();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") close();
    });
  }

  function initCopyEmail() {
    document.querySelectorAll(".copy-email").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const email = btn.getAttribute("data-email");
        if (!email) return;
        const lang = document.documentElement.lang.startsWith("es") ? "es" : "en";
        const msg = STRINGS[lang]["toast.copied"];

        function ok() {
          showToast(msg);
        }

        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(email).then(ok).catch(function () {
            fallbackCopy(email, ok);
          });
        } else {
          fallbackCopy(email, ok);
        }
      });
    });
  }

  function fallbackCopy(text, done) {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.left = "-9999px";
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand("copy");
      done();
    } catch {
      /* ignore */
    }
    document.body.removeChild(ta);
  }

  function initReveal() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll(".reveal").forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }
    const io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    els.forEach(function (el) {
      io.observe(el);
    });
  }

  function init() {
    applyTheme(resolveTheme());
    applyLang(resolveLang());
    initThemeToggle();
    initLangSwitch();
    initDropdown();
    initCopyEmail();
    initReveal();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
