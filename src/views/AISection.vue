<template>
	<section
		class="section section--ai ai-section reveal"
		id="ai"
		aria-labelledby="ai-heading"
	>
		<div class="section-head ai-section__head">
			<h2 id="ai-heading">
				{{ t('aiSection.title') }}
			</h2>
		</div>

		<p class="ai-section__lead">
			{{ t('aiSection.lead') }}
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

const { t } = useI18n();

const itemKeys = [
	'aiSection.items.cursor',
	'aiSection.items.gemini',
	'aiSection.items.agents',
	'aiSection.items.prompts',
	'aiSection.items.stackSetup',
];
</script>

<style lang="scss" scoped>
.ai-section {
	position: relative;
	isolation: isolate;

	/* Full-bleed Y: solo capas visuales; el padding lo sigue manejando `.section`. */
	--ai-bleed-y: clamp(-3.25rem, -7vw, -1.5rem);

	&::before {
		content: "";
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		width: 100vw;
		top: var(--ai-bleed-y);
		bottom: var(--ai-bleed-y);
		z-index: 0;
		pointer-events: none;
		background-size: 42px 62px, 62px 42px;
		background-image:
			radial-gradient(circle, color-mix(in srgb, var(--accent) 62%, transparent) 1.2px, transparent 1.2px),
			radial-gradient(circle, color-mix(in srgb, var(--accent-2) 42%, transparent) 1.1px, transparent 1.1px);
		animation: ai-particles-rise 14s linear infinite;
		mask-image: linear-gradient(to top, transparent 0%, rgba(0, 0, 0, 1) 38%);
		-webkit-mask-image: linear-gradient(to top, transparent 0%, rgba(0, 0, 0, 1) 38%);
	}

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
		font-size: clamp(0.95rem, 1.65vw, 1.04rem);
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

@keyframes ai-particles-rise {
	from {
		background-position: 0 100%, 0 100%;
	}

	to {
		background-position: 0 0, 0 0;
	}
}

@media (prefers-reduced-motion: reduce) {
	.ai-section::before {
		animation: none;
	}
}
</style>
