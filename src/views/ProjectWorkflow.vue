<template>
	<section
		class="section section--project-workflow project-workflow reveal"
		id="project-workflow"
		aria-labelledby="project-workflow-heading"
	>
		<div class="section-head">
			<h2 id="project-workflow-heading">
				{{ t('projectWorkflow.title') }}
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
