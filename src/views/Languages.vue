<template>
	<section
		class="section section--languages languages reveal"
		id="languages"
	>
		<div class="section-head">
			<h2 class="section-heading">
				<svg class="section-heading__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
					<circle cx="12" cy="12" r="9" />
					<path d="M3 12h18M12 3c2.5 2.5 3.8 5.5 3.8 9S14.5 18.5 12 21c-2.5-2.5-3.8-5.5-3.8-9S9.5 5.5 12 3z" />
				</svg>
				<span>{{ t('languages.title') }}</span>
			</h2>
		</div>
		<div class="languages__cards">
			<article
				v-for="(entry, index) in entries"
				:key="index"
				class="languages__card"
			>
				<h3>{{ t(entry.nameKey) }}</h3>
				<p>{{ t(entry.levelKey) }}</p>
			</article>
		</div>
	</section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const entries = [
	{
		nameKey: 'languages.spanish.name',
		levelKey: 'languages.spanish.level',
	},
	{
		nameKey: 'languages.english.name',
		levelKey: 'languages.english.level',
	},
];
</script>

<style lang="scss" scoped>
.languages {
	&__cards {
		display: grid;
		gap: 1rem;

		@media (min-width: 600px) {
			grid-template-columns: 1fr 1fr;
		}
	}

	&__card {
		border-radius: var(--radius-md);
		border: 1px solid var(--border);
		padding: 1.25rem 1.35rem;
		background: var(--surface);

		h3 {
			margin: 0 0 0.35rem;
			font-size: 1rem;
		}

		p {
			margin: 0;
			color: var(--text-muted);
			font-size: 0.95rem;
		}
	}
}
</style>
