import { createPinia } from 'pinia';

import { useUiStore } from './stores/ui';

const pinia = createPinia();

export function hydrateUiStore() {
	useUiStore().hydrateFromStorage();
}

export { useUiStore, LOCALE_STORAGE_KEY, THEME_STORAGE_KEY } from './stores/ui';
export default pinia;
