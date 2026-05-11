<template>
	<header class="site-header">
		<div class="site-header__inner">
			<a
				class="site-header__brand"
				href="#top"
				:aria-label="t('a11y.brandHome')"
			>
				<span class="site-header__brand-mark">{{ t('cv.brandMark') }}</span>
				<span class="site-header__brand-text">{{ t('cv.brandName') }}</span>
			</a>
			<nav
				class="site-header__nav"
				:aria-label="t('a11y.mainNav')"
			>
				<a href="#perfil">{{ t('nav.profile') }}</a>
				<a href="#experiencia">{{ t('nav.experience') }}</a>
				<a href="#habilidades">{{ t('nav.skills') }}</a>
				<a href="#formacion">{{ t('nav.education') }}</a>
			</nav>
			<div class="site-header__actions">
				<div
					class="site-header__lang-switch"
					role="group"
					:aria-label="t('a11y.language')"
				>
					<button
						type="button"
						class="site-header__lang-btn"
						:class="{ 'site-header__lang-btn--active': locale === 'es' }"
						:aria-pressed="locale === 'es'"
						@click="setLocale('es')"
					>
						{{ t('locale.es') }}
					</button>
					<button
						type="button"
						class="site-header__lang-btn"
						:class="{ 'site-header__lang-btn--active': locale === 'en' }"
						:aria-pressed="locale === 'en'"
						@click="setLocale('en')"
					>
						{{ t('locale.en') }}
					</button>
				</div>
				<button
					type="button"
					class="site-header__theme-toggle"
					:aria-label="t('a11y.theme.ariaLabel')"
					:title="t('a11y.theme.title')"
					@click="toggleTheme"
				>
					<span
						class="theme-icon theme-icon--sun"
						aria-hidden="true"
					/>
					<span
						class="theme-icon theme-icon--moon"
						aria-hidden="true"
					/>
				</button>
				<a
					class="btn btn--ghost btn--sm"
					:href="cvHref"
					:download="cvDownloadFilename"
				>
					{{ t('header.downloadCv') }}
				</a>
			</div>
		</div>
	</header>
</template>

<script setup>
import { computed, onMounted, watch } from 'vue';
import { useI18n } from 'vue-i18n';

import cvEnUrl from '@/assets/files/cv-en.pdf?url';
import cvEsUrl from '@/assets/files/cv-es.pdf?url';

const LOCALE_STORAGE_KEY = 'site-locale';
const THEME_STORAGE_KEY = 'site-theme';

const { t, locale } = useI18n();

const cvHref = computed(() => (locale.value === 'es' ? cvEsUrl : cvEnUrl));
const cvDownloadFilename = computed(() =>
	locale.value === 'es' ? 'Ailan-Nanez-CV-ES.pdf' : 'Ailan-Nanez-CV-EN.pdf',
);

function setLocale(code) {
	locale.value = code;
	localStorage.setItem(LOCALE_STORAGE_KEY, code);
}

watch(
	locale,
	(l) => {
		document.documentElement.setAttribute('lang', l === 'es' ? 'es' : 'en');
	},
	{ immediate: true },
);

function applyDataTheme(mode) {
	document.documentElement.setAttribute('data-theme', mode);
}

function initThemeFromStorageOrSystem() {
	const stored = localStorage.getItem(THEME_STORAGE_KEY);
	const mode =
		stored === 'light' || stored === 'dark'
			? stored
			: window.matchMedia('(prefers-color-scheme: dark)').matches
				? 'dark'
				: 'light';
	applyDataTheme(mode);
}

function toggleTheme() {
	const next =
		document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
	applyDataTheme(next);
	localStorage.setItem(THEME_STORAGE_KEY, next);
}

onMounted(() => {
	initThemeFromStorageOrSystem();
});
</script>

<style lang="scss" scoped>
.site-header {
	position: sticky;
	top: 0;
	z-index: 100;
	height: var(--header-h);
	border-bottom: 1px solid var(--border);
	background: color-mix(in srgb, var(--bg0) 82%, transparent);
	backdrop-filter: blur(14px);

	&__inner {
		max-width: 1120px;
		margin: 0 auto;
		padding: 0 1.25rem;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
	}

	&__brand {
		display: flex;
		align-items: center;
		gap: 0.65rem;
		text-decoration: none;
		color: var(--text);
		font-weight: 600;
		flex-shrink: 0;
	}

	&__brand-mark {
		display: grid;
		place-items: center;
		width: 40px;
		height: 40px;
		border-radius: 12px;
		background: linear-gradient(135deg, var(--accent), var(--accent-2));
		color: #0c0a09;
		font-size: 0.75rem;
		font-weight: 700;
		letter-spacing: -0.02em;
	}

	&__brand-text {
		font-family: var(--font-display);
		font-size: 1.05rem;
	}

	&__nav {
		display: none;
		gap: 1.25rem;
		align-items: center;

		@media (min-width: 900px) {
			display: flex;
		}

		a {
			color: var(--text-muted);
			text-decoration: none;
			font-size: 0.92rem;
			font-weight: 500;
			transition: color 0.2s var(--ease-out);

			&:hover {
				color: var(--text);
			}
		}
	}

	&__actions {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		flex-wrap: wrap;
		justify-content: flex-end;
	}

	&__lang-switch {
		display: flex;
		border: 1px solid var(--border);
		border-radius: 999px;
		padding: 3px;
		background: var(--surface);
	}

	&__lang-btn {
		border: none;
		background: transparent;
		color: var(--text-muted);
		font-family: inherit;
		font-size: 0.78rem;
		font-weight: 600;
		letter-spacing: 0.04em;
		padding: 0.35rem 0.65rem;
		border-radius: 999px;
		cursor: pointer;
		transition: background 0.2s, color 0.2s;

		&:hover {
			color: var(--text);
		}

		&--active {
			background: var(--accent-soft);
			color: var(--accent);
		}
	}

	&__theme-toggle {
		width: 42px;
		height: 42px;
		border-radius: 12px;
		border: 1px solid var(--border);
		background: var(--surface);
		cursor: pointer;
		display: grid;
		place-items: center;
		color: var(--text);
		transition: border-color 0.2s, transform 0.15s;

		&:hover {
			border-color: color-mix(in srgb, var(--accent) 40%, var(--border));
		}

		&:active {
			transform: scale(0.96);
		}

		&:focus-visible {
			outline: none;
			box-shadow: var(--ring-focus);
		}
	}

	.theme-icon {
		width: 20px;
		height: 20px;
		display: block;
		background: currentColor;
		mask-size: contain;
		mask-repeat: no-repeat;
		mask-position: center;

		&--sun {
			mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='black' stroke-width='2'%3E%3Ccircle cx='12' cy='12' r='4'/%3E%3Cpath d='M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41'/%3E%3C/svg%3E");
		}

		&--moon {
			mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='black' stroke-width='2'%3E%3Cpath d='M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z'/%3E%3C/svg%3E");
		}
	}
}
</style>
