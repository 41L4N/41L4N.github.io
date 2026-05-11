<template>
	<section
		class="section section--skills skills reveal"
		id="skills"
		aria-labelledby="skills-heading"
	>
		<div class="section-head">
			<h2 id="skills-heading">
				{{ t('skills.title') }}
			</h2>
			<p class="section-kicker">
				{{ t('skills.kicker') }}
			</p>
		</div>
		<div class="skills__groups">
			<div
				v-for="(category, categoryIndex) in categories"
				:key="categoryIndex"
				class="skills__group"
			>
				<div
					class="skills__icon-wrap"
					aria-hidden="true"
				>
					<svg
						class="skills__icon"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="1.65"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<template v-if="category.icon === 'frontend'">
							<polyline points="16 18 22 12 16 6" />
							<polyline points="8 6 2 12 8 18" />
						</template>
						<template v-else-if="category.icon === 'backend'">
							<rect
								x="2"
								y="3"
								width="20"
								height="6"
								rx="2"
							/>
							<rect
								x="2"
								y="15"
								width="20"
								height="6"
								rx="2"
							/>
							<path d="M6 6h.01M6 18h.01" />
						</template>
						<template v-else-if="category.icon === 'database'">
							<ellipse
								cx="12"
								cy="5"
								rx="9"
								ry="3"
							/>
							<path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
							<path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
						</template>
						<template v-else-if="category.icon === 'api'">
							<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
							<path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
						</template>
						<template v-else-if="category.icon === 'infra'">
							<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
						</template>
						<template v-else-if="category.icon === 'practices'">
							<path d="M9 11l3 3L22 4" />
							<path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
						</template>
						<template v-else-if="category.icon === 'ai'">
							<path d="M12 3v4" />
							<path d="M12 17v4" />
							<path d="M3 12h4" />
							<path d="M17 12h4" />
							<path d="M6 6l2.6 2.6" />
							<path d="M15.4 15.4L18 18" />
							<path d="M18 6l-2.6 2.6" />
							<path d="M8.6 15.4L6 18" />
							<circle
								cx="12"
								cy="12"
								r="3.6"
							/>
						</template>
					</svg>
				</div>
				<h3 class="skills__cat-title">
					{{ t(category.nameKey) }}
				</h3>
				<div class="skills__tags">
					<span
						v-for="tagKey in category.tagKeys"
						:key="tagKey"
						class="skills__tag"
					>{{ t(tagKey) }}</span>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const categories = [
	{
		icon: 'ai',
		nameKey: 'skills.categories.ai.name',
		tagKeys: [
			'skills.categories.ai.cursor',
			'skills.categories.ai.gemini',
			'skills.categories.ai.agents',
			'skills.categories.ai.prompting',
			'skills.categories.ai.stackConfig',
			'skills.categories.ai.notebooksGems',
		],
	},
	{
		icon: 'frontend',
		nameKey: 'skills.categories.frontend.name',
		tagKeys: [
			'skills.categories.frontend.vueQuasar',
			'skills.categories.frontend.reactMui',
			'skills.categories.frontend.next',
			'skills.categories.frontend.html5',
			'skills.categories.frontend.cssSass',
			'skills.categories.frontend.bootstrap',
			'skills.categories.frontend.javascript',
			'skills.categories.frontend.typescript',
			'skills.categories.frontend.jquery',
		],
	},
	{
		icon: 'backend',
		nameKey: 'skills.categories.backend.name',
		tagKeys: [
			'skills.categories.backend.phpLaravel',
			'skills.categories.backend.rails',
			'skills.categories.backend.node',
			'skills.categories.backend.typescript',
		],
	},
	{
		icon: 'database',
		nameKey: 'skills.categories.databases.name',
		tagKeys: [
			'skills.categories.databases.mysql',
			'skills.categories.databases.relational',
			'skills.categories.databases.sqlOpt',
		],
	},
	{
		icon: 'api',
		nameKey: 'skills.categories.apis.name',
		tagKeys: [
			'skills.categories.apis.rest',
			'skills.categories.apis.payments',
			'skills.categories.apis.external',
		],
	},
	{
		icon: 'infra',
		nameKey: 'skills.categories.infra.name',
		tagKeys: [
			'skills.categories.infra.gcp',
			'skills.categories.infra.hostinger',
			'skills.categories.infra.cpanel',
			'skills.categories.infra.git',
			'skills.categories.infra.github',
			'skills.categories.infra.gitlab',
		],
	},
	{
		icon: 'practices',
		nameKey: 'skills.categories.practices.name',
		tagKeys: [
			'skills.categories.practices.solid',
			'skills.categories.practices.cleanCode',
			'skills.categories.practices.scrum',
			'skills.categories.practices.kanban',
			'skills.categories.practices.cicd',
			'skills.categories.practices.codeReview',
			'skills.categories.practices.docs',
		],
	},
];
</script>

<style lang="scss" scoped>
.skills {
	&__groups {
		display: flex;
		flex-direction: column;
		gap: 0;
	}

	&__group {
		display: grid;
		grid-template-columns: 44px 1fr;
		grid-template-rows: auto auto;
		column-gap: 0.9rem;
		row-gap: 0.55rem;
		align-items: start;
		padding: 1.15rem 0;
		border-bottom: 1px solid var(--border);

		&:first-child {
			padding-top: 0.35rem;
		}

		&:last-child {
			border-bottom: none;
			padding-bottom: 0;
		}

		@media (min-width: 720px) {
			grid-template-columns: 48px minmax(148px, 200px) 1fr;
			grid-template-rows: auto;
			column-gap: 1rem;
			row-gap: 0;
			align-items: center;
			padding: 1.05rem 0;
		}
	}

	&__icon-wrap {
		grid-row: 1 / 3;
		width: 44px;
		height: 44px;
		border-radius: 50%;
		display: grid;
		place-items: center;
		background: var(--accent-soft);
		color: var(--accent);
		box-shadow: inset 0 1px 0 color-mix(in srgb, var(--text) 6%, transparent);

		@media (min-width: 720px) {
			grid-row: 1;
			width: 48px;
			height: 48px;
		}
	}

	&__icon {
		width: 22px;
		height: 22px;

		@media (min-width: 720px) {
			width: 24px;
			height: 24px;
		}
	}

	&__cat-title {
		grid-column: 2;
		margin: 0;
		align-self: start;
		font-family: var(--font-body);
		font-size: 0.95rem;
		font-weight: 600;
		letter-spacing: 0.01em;
		text-transform: none;
		color: var(--text);
		line-height: 1.25;

		@media (min-width: 720px) {
			align-self: center;
		}
	}

	&__tags {
		grid-column: 2;
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem 0.5rem;

		@media (min-width: 720px) {
			grid-column: 3;
		}
	}

	&__tag {
		font-size: 0.8rem;
		padding: 0.32rem 0.65rem;
		border-radius: 999px;
		background: color-mix(in srgb, var(--accent-soft) 55%, var(--surface-solid));
		border: 1px solid color-mix(in srgb, var(--accent) 12%, var(--border));
		color: var(--text);
		font-weight: 500;
		line-height: 1.3;
		transition:
			background 0.2s var(--ease-out),
			border-color 0.2s var(--ease-out);

		&:hover {
			background: color-mix(in srgb, var(--accent-soft) 85%, var(--surface-solid));
			border-color: color-mix(in srgb, var(--accent) 28%, var(--border));
		}
	}
}

:global([data-theme="dark"]) .skills__tag {
	background: color-mix(in srgb, var(--accent-soft) 40%, var(--surface-solid));
}
</style>
