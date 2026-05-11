import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import es from './locales/es.json';

const LOCALE_STORAGE_KEY = 'site-locale';

function initialLocale() {
	if (typeof localStorage !== 'undefined') {
		const saved = localStorage.getItem(LOCALE_STORAGE_KEY);
		if (saved === 'es' || saved === 'en') return saved;
	}
	const browser = typeof navigator !== 'undefined' ? navigator.language : 'en';
	return browser.startsWith('es') ? 'es' : 'en';
}

export default createI18n({
	legacy: false,
	locale: initialLocale(),
	fallbackLocale: 'en',
	messages: { en, es },
});
