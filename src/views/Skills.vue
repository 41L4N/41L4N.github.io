<template>
	<section
		class="section section--skills skills reveal"
		id="habilidades"
	>
		<div class="section-head">
			<h2>{{ t('skills.title') }}</h2>
			<p class="section-kicker">
				{{ t('skills.kicker') }}
			</p>
		</div>
		<div class="skills__bento">
			<div
				v-for="(category, categoryIndex) in categories"
				:key="categoryIndex"
				class="skills__card"
			>
				<h3>{{ t(category.nameKey) }}</h3>
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
		nameKey: 'skills.categories.backend.name',
		tagKeys: [
			'skills.categories.backend.phpLaravel',
			'skills.categories.backend.rails',
			'skills.categories.backend.node',
			'skills.categories.backend.typescript',
		],
	},
	{
		nameKey: 'skills.categories.databases.name',
		tagKeys: [
			'skills.categories.databases.mysql',
			'skills.categories.databases.relational',
			'skills.categories.databases.sqlOpt',
		],
	},
	{
		nameKey: 'skills.categories.apis.name',
		tagKeys: [
			'skills.categories.apis.rest',
			'skills.categories.apis.payments',
			'skills.categories.apis.external',
		],
	},
	{
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
	&__bento {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
	}

	&__card {
		border-radius: var(--radius-md);
		border: 1px solid var(--border);
		background: var(--surface);
		padding: 1.15rem 1.25rem;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		min-height: 140px;
		transition: border-color 0.2s;

		&:hover {
			border-color: color-mix(in srgb, var(--accent-2) 40%, var(--border));
		}

		h3 {
			margin: 0;
			font-size: 0.82rem;
			font-weight: 700;
			letter-spacing: 0.05em;
			text-transform: uppercase;
			color: var(--accent);
		}
	}

	&__tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.45rem;
	}

	&__tag {
		font-size: 0.78rem;
		padding: 0.28rem 0.55rem;
		border-radius: 999px;
		background: var(--surface-solid);
		border: 1px solid var(--border);
		color: var(--text);
		font-weight: 500;
	}
}

:global([data-theme="dark"]) .skills__tag {
	background: color-mix(in srgb, var(--surface-solid) 88%, transparent);
}
</style>
