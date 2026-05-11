<template>
	<header class="site-header">
		<div class="header-inner">
			<a
				class="brand"
				href="#top"
				:aria-label="t('a11y.brandHome')"
			>
				<span class="brand-mark">{{ t('cv.brandMark') }}</span>
				<span class="brand-text">{{ t('cv.brandName') }}</span>
			</a>
			<nav
				class="nav"
				:aria-label="t('a11y.mainNav')"
			>
				<a href="#perfil">{{ t('nav.profile') }}</a>
				<a href="#experiencia">{{ t('nav.experience') }}</a>
				<a href="#habilidades">{{ t('nav.skills') }}</a>
				<a href="#formacion">{{ t('nav.education') }}</a>
			</nav>
			<div class="header-actions">
				<div
					class="lang-switch"
					role="group"
					:aria-label="t('a11y.language')"
				>
					<button
						type="button"
						class="lang-btn is-active"
						data-lang="es"
						aria-pressed="true"
					>
						{{ t('locale.es') }}
					</button>
					<button
						type="button"
						class="lang-btn"
						data-lang="en"
						aria-pressed="false"
					>
						{{ t('locale.en') }}
					</button>
				</div>
				<button
					type="button"
					class="icon-btn theme-toggle"
					:aria-label="t('a11y.theme.ariaLabel')"
					:title="t('a11y.theme.title')"
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
				<div
					class="downloads"
					data-dropdown
				>
					<button
						type="button"
						class="btn btn--ghost btn--sm"
						data-dropdown-trigger
						aria-expanded="false"
						aria-haspopup="true"
					>
						{{ t('header.downloadCv') }}
					</button>
					<div
						class="downloads-panel"
						data-dropdown-panel
						hidden
					>
						<a
							class="downloads-item"
							href="/assets/cv-es.pdf"
							download="Ailan-Nanez-CV-ES.pdf"
						>
							<span class="downloads-item__label">{{ t('header.cvPdfEs') }}</span>
							<span class="downloads-item__meta">{{ t('header.fileExtension') }}</span>
						</a>
						<a
							class="downloads-item"
							href="/assets/cv-en.pdf"
							download="Ailan-Nanez-CV-EN.pdf"
						>
							<span class="downloads-item__label">{{ t('header.cvPdfEn') }}</span>
							<span class="downloads-item__meta">{{ t('header.fileExtension') }}</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
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
}

.header-inner {
	max-width: 1120px;
	margin: 0 auto;
	padding: 0 1.25rem;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1rem;
}

.brand {
	display: flex;
	align-items: center;
	gap: 0.65rem;
	text-decoration: none;
	color: var(--text);
	font-weight: 600;
	flex-shrink: 0;
}

.brand-mark {
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

.brand-text {
	font-family: var(--font-display);
	font-size: 1.05rem;
}

.nav {
	display: none;
	gap: 1.25rem;
	align-items: center;
}

@media (min-width: 900px) {
	.nav {
		display: flex;
	}
}

.nav a {
	color: var(--text-muted);
	text-decoration: none;
	font-size: 0.92rem;
	font-weight: 500;
	transition: color 0.2s var(--ease-out);
}

.nav a:hover {
	color: var(--text);
}

.header-actions {
	display: flex;
	align-items: center;
	gap: 0.5rem;
	flex-wrap: wrap;
	justify-content: flex-end;
}

.lang-switch {
	display: flex;
	border: 1px solid var(--border);
	border-radius: 999px;
	padding: 3px;
	background: var(--surface);
}

.lang-btn {
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
}

.lang-btn:hover {
	color: var(--text);
}

.lang-btn.is-active {
	background: var(--accent-soft);
	color: var(--accent);
}

.icon-btn {
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
}

.icon-btn:hover {
	border-color: color-mix(in srgb, var(--accent) 40%, var(--border));
}

.icon-btn:active {
	transform: scale(0.96);
}

.icon-btn:focus-visible {
	outline: none;
	box-shadow: var(--ring-focus);
}

.theme-icon {
	width: 20px;
	height: 20px;
	display: block;
	background: currentColor;
	mask-size: contain;
	mask-repeat: no-repeat;
	mask-position: center;
}

.theme-icon--sun {
	mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='black' stroke-width='2'%3E%3Ccircle cx='12' cy='12' r='4'/%3E%3Cpath d='M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41'/%3E%3C/svg%3E");
}

.theme-icon--moon {
	mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='black' stroke-width='2'%3E%3Cpath d='M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z'/%3E%3C/svg%3E");
}

.downloads {
	position: relative;
}

.downloads-panel {
	position: absolute;
	right: 0;
	top: calc(100% + 8px);
	min-width: 220px;
	padding: 0.4rem;
	border-radius: var(--radius-md);
	border: 1px solid var(--border);
	background: var(--surface-solid);
	box-shadow: var(--shadow-md);
	z-index: 50;
}

.downloads-panel[hidden] {
	display: none;
}

.downloads-item {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 0.75rem;
	padding: 0.65rem 0.75rem;
	border-radius: var(--radius-sm);
	text-decoration: none;
	color: var(--text);
	transition: background 0.15s;
}

.downloads-item:hover {
	background: var(--accent-soft);
}

.downloads-item__label {
	font-size: 0.9rem;
	font-weight: 500;
}

.downloads-item__meta {
	font-size: 0.75rem;
	color: var(--text-muted);
}
</style>
