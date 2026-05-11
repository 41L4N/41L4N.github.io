<template>
	<section
		id="projects"
		class="section projects reveal"
		aria-labelledby="projects-heading"
	>
		<div class="section-head">
			<h2 id="projects-heading">
				{{ t('projects.title') }}
			</h2>
			<p class="section-kicker">
				{{ t('projects.kicker') }}
			</p>
		</div>
		<article class="projects__card">
			<header class="projects__card-head">
				<div>
					<h3 class="projects__name">
						{{ t('projects.proStoreKit.name') }}
					</h3>
					<p class="projects__status">
						{{ t('projects.proStoreKit.statusLabel') }}
						<span class="projects__status-pill">{{ t('projects.proStoreKit.statusValue') }}</span>
					</p>
				</div>
				<a
					class="btn btn--primary btn--sm"
					href="https://41l4n.github.io/pro-store-kit-DOCS/"
					target="_blank"
					rel="noopener noreferrer"
				>
					{{ t('projects.proStoreKit.ctaDocs') }}
				</a>
			</header>
			<p class="projects__description">
				{{ t('projects.proStoreKit.description') }}
			</p>
			<p class="projects__links-label">
				{{ t('projects.proStoreKit.linksLabel') }}
			</p>
			<ul class="projects__links">
				<li>
					<a
						href="https://github.com/41L4N/pro-store-kit-DOCS"
						target="_blank"
						rel="noopener noreferrer"
					>
						{{ t('projects.proStoreKit.links.docs') }}
					</a>
				</li>
				<li>
					<a
						href="https://github.com/41L4N/pro-store-kit--FRONT"
						target="_blank"
						rel="noopener noreferrer"
					>
						{{ t('projects.proStoreKit.links.frontRepo') }}
					</a>
				</li>
				<li class="projects__link-disabled">
					{{ t('projects.proStoreKit.links.backRepoPending') }}
				</li>
			</ul>
		</article>
	</section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<style lang="scss" scoped>
.projects {
	&__card {
		padding: 1.2rem;
		border: 1px solid var(--border);
		border-radius: var(--radius-lg);
		background: color-mix(in srgb, var(--surface-solid) 88%, transparent);
		box-shadow: var(--shadow-sm);
	}

	&__card-head {
		display: flex;
		flex-direction: column;
		gap: 0.85rem;
		margin-bottom: 0.8rem;

		@media (min-width: 720px) {
			flex-direction: row;
			align-items: flex-start;
			justify-content: space-between;
			gap: 1rem;
		}
	}

	&__name {
		margin: 0;
		font-family: var(--font-display);
		font-size: clamp(1.2rem, 2.2vw, 1.45rem);
		font-weight: 600;
		letter-spacing: 0.01em;
	}

	&__status {
		margin: 0.45rem 0 0;
		display: inline-flex;
		align-items: center;
		gap: 0.45rem;
		font-size: 0.84rem;
		color: var(--text-muted);
	}

	&__status-pill {
		padding: 0.15rem 0.55rem;
		border-radius: 999px;
		background: var(--accent-soft);
		color: var(--accent);
		font-weight: 600;
	}

	&__description {
		margin: 0 0 0.9rem;
		max-width: 68ch;
		color: var(--text);
		font-size: 0.95rem;
		line-height: 1.58;
	}

	&__links {
		margin: 0;
		padding-left: 1rem;
		display: grid;
		gap: 0.45rem;

		a {
			color: var(--accent);
			text-decoration: none;
			font-weight: 500;

			&:hover {
				text-decoration: underline;
			}
		}
	}

	&__link-disabled {
		color: var(--text-muted);
	}

	&__links-label {
		margin: 0 0 0.4rem;
		font-size: 0.9rem;
		font-weight: 600;
		color: var(--text);
	}
}
</style>
