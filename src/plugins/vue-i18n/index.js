import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import es from './locales/es.json';

const browser = typeof navigator !== 'undefined' ? navigator.language : 'en';

export default createI18n({
	legacy: false,
	locale: browser.startsWith('es') ? 'es' : 'en',
	fallbackLocale: 'en',
	messages: { en, es },
});
