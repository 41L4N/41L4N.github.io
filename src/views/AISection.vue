<template>
	<section
		class="section ai-section reveal"
		id="ai"
		aria-labelledby="ai-heading"
	>
		<AINetworkCanvas />

		<div class="section-head ai-section__head">
			<h2 id="ai-heading" class="section-heading">
				<svg class="section-heading__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
					<path d="M12 3l1.4 4.1L17.5 8.5l-4.1 1.4L12 14l-1.4-4.1-4.1-1.4 4.1-1.4L12 3z" />
					<path d="M18.5 14l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2z" />
					<path d="M5.5 14l.6 1.7 1.7.6-1.7.6-.6 1.7-.6-1.7-1.7-.6 1.7-.6.6-1.7z" />
				</svg>
				<span>{{ t('aiSection.title') }}</span>
			</h2>
		</div>

		<p class="ai-section__lead">
			<span v-html="t('aiSection.lead')" />
		</p>

		<div class="ai-section__tags">
			<span
				v-for="itemKey in itemKeys"
				:key="itemKey"
				class="ai-section__tag"
			>
				{{ t(itemKey) }}
			</span>
		</div>
	</section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import AINetworkCanvas from '@/views/AINetworkCanvas.vue';

const { t } = useI18n();

const itemKeys = [
	'aiSection.items.assistants',
	'aiSection.items.changes',
	'aiSection.items.impact',
	'aiSection.items.review',
	'aiSection.items.documentation',
];
</script>

<style lang="scss" scoped>
.ai-section {
	position: relative;
	isolation: isolate;

	&__head {
		position: relative;
		z-index: 1;
		margin-bottom: 0.95rem;
	}

	&__lead {
		position: relative;
		z-index: 1;
		margin: 0 0 1rem;
		max-width: 78ch;
		color: var(--text-muted);
		font-size: clamp(1rem, 1.65vw, 1.08rem);
	}

	&__tags {
		position: relative;
		z-index: 1;
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	&__tag {
		font-size: 0.82rem;
		padding: 0.3rem 0.68rem;
		border-radius: 999px;
		background: color-mix(in srgb, var(--accent-soft) 56%, var(--surface-solid));
		border: 1px solid color-mix(in srgb, var(--accent) 20%, var(--border));
		color: var(--text);
		font-weight: 500;
		line-height: 1.3;
	}
}
</style>
