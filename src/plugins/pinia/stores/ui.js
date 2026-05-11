import { defineStore } from 'pinia';

import i18n from '@/plugins/vue-i18n';

export const LOCALE_STORAGE_KEY = 'site-locale';
export const THEME_STORAGE_KEY = 'site-theme';

function readInitialLocale() {
	if (typeof localStorage !== 'undefined') {
		const saved = localStorage.getItem(LOCALE_STORAGE_KEY);
		if (saved === 'es' || saved === 'en') return saved;
	}
	const browser = typeof navigator !== 'undefined' ? navigator.language : 'en';
	return browser.startsWith('es') ? 'es' : 'en';
}

function readInitialTheme() {
	if (typeof localStorage !== 'undefined') {
		const stored = localStorage.getItem(THEME_STORAGE_KEY);
		if (stored === 'light' || stored === 'dark') return stored;
	}
	if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
		return 'dark';
	}
	return 'light';
}

export const useUiStore = defineStore('ui', {
	state: () => ({
		locale: 'en',
		theme: 'light',
	}),
	actions: {
		hydrateFromStorage() {
			this.locale = readInitialLocale();
			this.theme = readInitialTheme();
			this._applyThemeToDom();
			this._applyLangToDom();
			i18n.global.locale.value = this.locale;
		},
		setLocale(code) {
			if (code !== 'es' && code !== 'en') return;
			this.locale = code;
			localStorage.setItem(LOCALE_STORAGE_KEY, code);
			i18n.global.locale.value = code;
			this._applyLangToDom();
		},
		toggleTheme() {
			const next = this.theme === 'dark' ? 'light' : 'dark';
			this.theme = next;
			localStorage.setItem(THEME_STORAGE_KEY, next);
			this._applyThemeToDom();
		},
		_applyThemeToDom() {
			if (typeof document === 'undefined') return;
			document.documentElement.setAttribute('data-theme', this.theme);
		},
		_applyLangToDom() {
			if (typeof document === 'undefined') return;
			document.documentElement.setAttribute('lang', this.locale === 'es' ? 'es' : 'en');
		},
	},
});
