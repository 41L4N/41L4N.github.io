<template>
	<section
		class="section section--education education reveal"
		id="education"
	>
		<div class="section-head">
			<h2>{{ t('education.title') }}</h2>
		</div>
		<div class="education__cards">
			<article
				v-for="(card, index) in cards"
				:key="index"
				class="education__card"
			>
				<h3>{{ t(card.titleKey) }}</h3>
				<p class="education__meta">{{ t(card.metaKey) }}</p>
				<p class="education__source">{{ t(card.sourceKey) }}</p>
				<p class="education__desc">
					{{ t(card.descriptionKey) }}
				</p>
			</article>
		</div>
	</section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const cards = [
	{
		titleKey: 'education.fullstack.title',
		metaKey: 'education.fullstack.meta',
		sourceKey: 'education.fullstack.source',
		descriptionKey: 'education.fullstack.description',
	},
	{
		titleKey: 'education.cloud.title',
		metaKey: 'education.cloud.meta',
		sourceKey: 'education.cloud.source',
		descriptionKey: 'education.cloud.description',
	},
];
</script>

<style lang="scss" scoped>
.education {
	&__cards {
		display: grid;
		gap: 1rem;

		@media (min-width: 700px) {
			grid-template-columns: 1fr 1fr;
		}
	}

	&__card {
		border-radius: var(--radius-md);
		border: 1px solid var(--border);
		padding: 1.25rem 1.35rem;
		background: linear-gradient(145deg, var(--surface), transparent);

		h3 {
			margin: 0 0 0.5rem;
			font-size: 1.05rem;
			font-weight: 600;
		}
	}

	&__meta {
		margin: 0 0 0.75rem;
		font-size: 0.82rem;
		color: var(--accent);
		font-weight: 600;
	}

	&__source {
		margin: 0 0 0.5rem;
		font-size: 0.88rem;
		color: var(--text-muted);
	}

	&__desc {
		margin: 0;
		font-size: 0.92rem;
		color: var(--text-muted);
	}
}
</style>
