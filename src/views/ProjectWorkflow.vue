<template>
	<section
		class="section section--project-workflow project-workflow reveal"
		id="project-workflow"
		aria-labelledby="project-workflow-heading"
	>
		<div class="section-head">
			<h2 id="project-workflow-heading" class="section-heading">
				<svg class="section-heading__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
					<circle cx="6" cy="5" r="2" />
					<circle cx="18" cy="5" r="2" />
					<circle cx="6" cy="19" r="2" />
					<path d="M6 7v10M8 5h4a6 6 0 0 1 6 6v-4M8 19h4a6 6 0 0 0 6-6v-6" />
				</svg>
				<span>{{ t('projectWorkflow.title') }}</span>
			</h2>
			<p class="section-kicker">
				{{ t('projectWorkflow.kicker') }}
			</p>
		</div>
		<div class="project-workflow__copy">
			<p class="project-workflow__lead">
				{{ t('projectWorkflow.primary') }}
			</p>
			<p class="project-workflow__secondary">
				{{ t('projectWorkflow.secondary') }}
			</p>
		</div>
	</section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<style lang="scss" scoped>
.project-workflow {
	&__copy {
		max-width: 62ch;
	}

	&__lead {
		margin: 0 0 0.65rem;
		color: var(--text);
		font-size: 0.98rem;
		line-height: 1.58;
	}

	&__secondary {
		margin: 0;
		color: var(--text-muted);
		font-size: 0.92rem;
		line-height: 1.55;
	}
}
</style>
