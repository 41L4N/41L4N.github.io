var i18nBundles = { es: {}, en: {} };

/**
 * @param {string} key Dot-separated path into the locale JSON (e.g. "toast.emailCopied").
 * @param {string} [lang] Optional "es" | "en"; defaults to document data-lang / lang.
 * @returns {string}
 */
function t(key, lang) {
	function getByPath(obj, path) {
		if (!path || obj == null) return undefined;
		var parts = path.split(".");
		var cur = obj;
		for (var i = 0; i < parts.length; i++) {
			if (cur == null || typeof cur !== "object") return undefined;
			cur = cur[parts[i]];
		}
		return cur;
	}

	function currentLang() {
		var a = document.documentElement.getAttribute("data-lang");
		if (a === "es" || a === "en") return a;
		var l = document.documentElement.lang || "";
		return l.toLowerCase().indexOf("es") === 0 ? "es" : "en";
	}

	var code = lang === "es" || lang === "en" ? lang : currentLang();
	var val = getByPath(i18nBundles[code], key);
	if (typeof val === "string") return val;
	if (typeof val === "number") return String(val);
	return key;
}

function loadI18nBundles(basePath) {
	var base = (basePath || "plugins/").replace(/\/?$/, "/");
	return Promise.all([
		fetch(base + "es.json").then(function (r) {
			if (!r.ok) throw new Error("es");
			return r.json();
		}),
		fetch(base + "en.json").then(function (r) {
			if (!r.ok) throw new Error("en");
			return r.json();
		}),
	])
		.then(function (pair) {
			i18nBundles.es = pair[0] && typeof pair[0] === "object" ? pair[0] : {};
			i18nBundles.en = pair[1] && typeof pair[1] === "object" ? pair[1] : {};
		})
		.catch(function () {
			i18nBundles.es = {};
			i18nBundles.en = {};
		});
}
