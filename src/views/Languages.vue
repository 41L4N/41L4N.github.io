<template>
	<section
		class="section section--languages reveal"
		id="idiomas"
	>
		<div class="section-head">
			<h2>{{ t('languages.title') }}</h2>
		</div>
		<div class="lang-cards">
			<article
				v-for="(entry, index) in entries"
				:key="index"
				class="lang-card"
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
.lang-cards {
	display: grid;
	gap: 1rem;
}

@media (min-width: 600px) {
	.lang-cards {
		grid-template-columns: 1fr 1fr;
	}
}

.lang-card {
	border-radius: var(--radius-md);
	border: 1px solid var(--border);
	padding: 1.25rem 1.35rem;
	background: var(--surface);
}

.lang-card h3 {
	margin: 0 0 0.35rem;
	font-size: 1rem;
}

.lang-card p {
	margin: 0;
	color: var(--text-muted);
	font-size: 0.95rem;
}
</style>
