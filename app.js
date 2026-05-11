(function () {
	"use strict";

	const STORAGE_THEME = "cv-theme";
	const STORAGE_LANG = "cv-lang";

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
		} catch {}
	}

	function resolveTheme() {
		const stored = getStoredTheme();
		if (stored === "light" || stored === "dark") return stored;
		return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
	}

	function applyTheme(theme) {
		document.documentElement.setAttribute("data-theme", theme);
		setStoredTheme(theme);
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
		} catch {}
	}

	function resolveLang() {
		const stored = getStoredLang();
		if (stored === "es" || stored === "en") return stored;
		const nav = navigator.language || "";
		return nav.toLowerCase().startsWith("es") ? "es" : "en";
	}

	function applyLangPreference(lang) {
		const code = lang === "es" ? "es" : "en";
		document.documentElement.lang = code;
		document.documentElement.setAttribute("data-lang", code);
		setStoredLang(code);

		document.querySelectorAll(".lang-btn").forEach(function (btn) {
			const isEs = btn.getAttribute("data-lang") === "es";
			const active = (isEs && code === "es") || (!isEs && code === "en");
			btn.classList.toggle("is-active", active);
			btn.setAttribute("aria-pressed", active ? "true" : "false");
		});

		const themeBtn = document.querySelector(".theme-toggle");
		if (themeBtn) {
			if (code === "en") {
				themeBtn.setAttribute("aria-label", "Toggle light or dark theme");
				themeBtn.setAttribute("title", "Theme");
			} else {
				themeBtn.setAttribute("aria-label", "Cambiar tema claro u oscuro");
				themeBtn.setAttribute("title", "Tema");
			}
		}
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

	function initLangSwitch() {
		document.querySelectorAll(".lang-btn").forEach(function (btn) {
			btn.addEventListener("click", function () {
				const lang = btn.getAttribute("data-lang");
				if (lang === "es" || lang === "en") applyLangPreference(lang);
			});
		});
	}

	function initThemeToggle() {
		const btn = document.querySelector(".theme-toggle");
		if (!btn) return;
		btn.addEventListener("click", function () {
			const current = document.documentElement.getAttribute("data-theme") || resolveTheme();
			applyTheme(current === "dark" ? "light" : "dark");
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

				function ok() {
					var en = document.documentElement.lang === "en";
					showToast(en ? "Email copied to clipboard" : "Email copiado al portapapeles");
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
		} catch {}
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
		applyLangPreference(resolveLang());
		initLangSwitch();
		initThemeToggle();
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
