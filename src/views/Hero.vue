<template>
	<section
		class="hero"
		id="top"
	>
		<div class="hero__grid">
			<div class="hero__copy">
				<p class="hero__eyebrow">
					{{ t('hero.eyebrow') }}
				</p>
				<h1 class="hero__title">
					<span class="hero__name">{{ t('hero.name') }}</span>
					<span class="hero__role">{{ t('hero.role') }}</span>
				</h1>
				<p class="hero__tagline">
					{{ t('hero.tagline') }}
				</p>
				<p class="hero__lead">
					{{ t('hero.lead') }}
				</p>
				<div class="hero__cta">
					<a
						class="btn btn--primary"
						:href="`mailto:${CONTACT_EMAIL}`"
					>{{ t('hero.ctaWrite') }}</a>
					<a
						class="btn btn--outline"
						href="https://github.com/41L4N"
						target="_blank"
						rel="noopener noreferrer"
					>{{ t('hero.ctaGithub') }}</a>
					<a
						class="btn btn--outline"
						href="https://www.linkedin.com/in/ailan-alberto-nanez"
						target="_blank"
						rel="noopener noreferrer"
					>{{ t('hero.ctaLinkedin') }}</a>
					<button
						type="button"
						class="btn btn--ghost"
						@click="onCopyEmail"
					>
						{{ t('hero.ctaCopyEmail') }}
					</button>
				</div>
				<p class="hero__meta">
					<span>{{ t('hero.location') }}</span>
					<span
						class="hero__dot"
						aria-hidden="true"
					/>
					<a href="tel:+584241306799">+58 424-1306799</a>
				</p>
				<nav
					class="hero__nav-mobile"
					:aria-label="t('a11y.cvSections')"
				>
					<a href="#profile">{{ t('nav.profile') }}</a>
					<a href="#experience">{{ t('nav.experience') }}</a>
					<a href="#skills">{{ t('nav.skills') }}</a>
				</nav>
			</div>
			<aside
				class="hero__card"
				:aria-label="t('a11y.heroCard')"
			>
				<div
					class="stat-ring"
					:style="statRingCssVars"
				>
					<svg
						viewBox="0 0 120 120"
						class="stat-ring__svg"
						aria-hidden="true"
					>
						<circle
							class="stat-ring__track"
							cx="60"
							cy="60"
							r="52"
						/>
						<circle
							class="stat-ring__progress"
							cx="60"
							cy="60"
							r="52"
						/>
					</svg>
					<div class="stat-ring__label">
						<span class="stat-ring__num">{{ t('hero.statYearsNum') }}</span>
						<span class="stat-ring__cap">{{ t('hero.statYears') }}</span>
					</div>
				</div>
				<ul class="hero__highlights">
					<li
						v-for="lineKey in highlightKeys"
						:key="lineKey"
					>
						{{ t(lineKey) }}
					</li>
				</ul>
				<div
					class="hero__badges"
					aria-hidden="true"
				>
					<span class="hero__pill">{{ t('badges.rest') }}</span>
					<span class="hero__pill">{{ t('badges.cicd') }}</span>
					<span class="hero__pill">{{ t('badges.mysql') }}</span>
				</div>
			</aside>
		</div>
	</section>
</template>

<script setup>
import { inject } from 'vue';
import { useI18n } from 'vue-i18n';

import { SHOW_TOAST_KEY } from '@/views/Toast.vue';

const CONTACT_EMAIL = 'ailanruiz1994@gmail.com';

const { t } = useI18n();
const showToast = inject(SHOW_TOAST_KEY);

async function onCopyEmail() {
	if (!navigator.clipboard?.writeText) return;
	const ok = await navigator.clipboard.writeText(CONTACT_EMAIL).then(
		() => true,
		() => false,
	);
	if (ok) showToast?.(t('toast.emailCopied'));
}

const highlightKeys = [
	'hero.highlights.infra',
	'hero.highlights.leadership',
	'hero.highlights.practices',
];

/** Ring radius matches SVG `r="52"`; arc fill = years / scaleMax (8+ of 10). */
const STAT_RING_R = 52;
const STAT_RING_C = 2 * Math.PI * STAT_RING_R;
const STAT_RING_YEARS = 8;
const STAT_RING_SCALE_MAX = 10;
const statRingDashoffset =
	STAT_RING_C * (1 - STAT_RING_YEARS / STAT_RING_SCALE_MAX);

const statRingCssVars = {
	'--stat-ring-c': String(STAT_RING_C),
	'--stat-ring-off': String(statRingDashoffset),
};
</script>

<style lang="scss" scoped>
.hero {
	position: relative;
	z-index: 1;
	padding: clamp(2rem, 5vw, 4rem) 1.25rem 3rem;
	background: var(--hero-grad);
	border-bottom: 1px solid var(--border);

	&__grid {
		max-width: 1120px;
		margin: 0 auto;
		display: grid;
		gap: 2.5rem;
		align-items: start;

		@media (min-width: 900px) {
			grid-template-columns: 1fr minmax(260px, 320px);
			gap: 3rem;
		}
	}

	&__eyebrow {
		display: inline-block;
		font-size: 0.8rem;
		font-weight: 600;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--accent-2);
		margin: 0 0 1rem;
		padding: 0.35rem 0.75rem;
		border-radius: 999px;
		background: var(--accent-2-soft);
		border: 1px solid color-mix(in srgb, var(--accent-2) 35%, transparent);
	}

	&__title {
		margin: 0 0 0.5rem;
		font-family: var(--font-display);
		font-weight: 700;
		font-size: clamp(2.1rem, 4.5vw, 3.25rem);
		line-height: 1.1;
		letter-spacing: -0.02em;
	}

	&__name {
		display: block;
		background: linear-gradient(120deg, var(--text) 0%, var(--text-muted) 100%);
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
	}

	&__role {
		display: block;
		margin-top: 0.35rem;
		font-size: clamp(1.1rem, 2.2vw, 1.45rem);
		font-weight: 500;
		color: var(--accent);
		font-style: italic;
	}

	&__tagline {
		margin: 0 0 1rem;
		font-size: 1rem;
		color: var(--text-muted);
		font-weight: 500;
	}

	&__lead {
		margin: 0 0 1.5rem;
		max-width: 52ch;
		color: var(--text-muted);
		font-size: 1.08rem;
	}

	&__cta {
		display: flex;
		flex-wrap: wrap;
		gap: 0.6rem;
		margin-bottom: 1.25rem;
	}

	&__meta {
		margin: 0;
		font-size: 0.92rem;
		color: var(--text-muted);

		a {
			color: var(--accent-2);
			text-decoration: none;
			font-weight: 500;

			&:hover {
				text-decoration: underline;
			}
		}
	}

	&__nav-mobile {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-top: 1.25rem;

		@media (min-width: 900px) {
			display: none;
		}

		a {
			font-size: 0.82rem;
			font-weight: 600;
			padding: 0.35rem 0.65rem;
			border-radius: 999px;
			text-decoration: none;
			color: var(--text-muted);
			border: 1px solid var(--border);
			background: var(--surface);

			&:hover {
				color: var(--text);
				border-color: color-mix(in srgb, var(--accent) 40%, var(--border));
			}
		}
	}

	&__dot {
		display: inline-block;
		width: 4px;
		height: 4px;
		border-radius: 50%;
		background: var(--text-muted);
		margin: 0 0.5rem;
		vertical-align: middle;
	}

	&__card {
		border-radius: var(--radius-lg);
		padding: 1.5rem;
		border: 1px solid var(--border);
		background: var(--surface);
		backdrop-filter: blur(12px);
		box-shadow: var(--shadow-sm);

		svg defs {
			display: none;
		}
	}

	&__highlights {
		margin: 0 0 1rem;
		padding: 0 0 0 1.1rem;
		color: var(--text-muted);
		font-size: 0.92rem;

		li {
			margin-bottom: 0.4rem;
		}
	}

	&__badges {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
	}

	&__pill {
		font-size: 0.72rem;
		font-weight: 600;
		letter-spacing: 0.04em;
		padding: 0.25rem 0.55rem;
		border-radius: 6px;
		background: var(--accent-soft);
		color: var(--accent);
		border: 1px solid color-mix(in srgb, var(--accent) 25%, transparent);
	}
}

:global([data-theme="dark"]) .hero__name {
	background: linear-gradient(120deg, #fff 0%, #d6d3d1 100%);
	-webkit-background-clip: text;
	background-clip: text;
}

.stat-ring {
	--stat-ring-c: 326.73;
	--stat-ring-off: 65.35;
	position: relative;
	width: 120px;
	height: 120px;
	margin: 0 auto 1.25rem;

	&__svg {
		width: 100%;
		height: 100%;
		transform: rotate(-90deg);
	}

	&__track {
		fill: none;
		stroke: var(--border);
		stroke-width: 8;
	}

	&__progress {
		fill: none;
		stroke: var(--accent);
		stroke-width: 8;
		stroke-linecap: round;
		stroke-dasharray: var(--stat-ring-c);
		stroke-dashoffset: var(--stat-ring-off);
		animation: ringFill 1.4s var(--ease-out) forwards;
	}

	&__label {
		position: absolute;
		inset: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 0.12rem;
		text-align: center;
		translate: 0 -1px;
	}

	&__num {
		font-family: var(--font-display);
		font-size: 1.75rem;
		font-weight: 700;
		color: var(--text);
		line-height: 1;
	}

	&__cap {
		font-size: 0.75rem;
		color: var(--text-muted);
		line-height: 1.2;
	}
}

@keyframes ringFill {
	from {
		stroke-dashoffset: var(--stat-ring-c);
	}
}
</style>
