<template>
	<footer class="site-footer">
		<div class="site-footer__inner">
			<p class="site-footer__subtitle">
				{{ t('footer.subtitle') }}
			</p>
			<div class="site-footer__cta">
				<a
					class="btn btn--primary btn--sm"
					href="mailto:ailanalbertonanez@gmail.com"
				>{{ t('hero.ctaWrite') }}</a>
				<a
					class="btn btn--outline btn--sm"
					href="https://www.linkedin.com/in/ailan-alberto-nanez"
					target="_blank"
					rel="noopener noreferrer"
				>{{ t('hero.ctaLinkedin') }}</a>
				<a
					class="btn btn--ghost btn--sm"
					href="https://github.com/41L4N"
					target="_blank"
					rel="noopener noreferrer"
				>{{ t('hero.ctaGithub') }}</a>
			</div>
		</div>
	</footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<style lang="scss" scoped>
.site-footer {
	position: relative;
	z-index: 1;
	padding: 2.5rem 1.25rem 3rem;
	border-top: 1px solid var(--border);

	&__inner {
		max-width: 1120px;
		margin: 0 auto;
		text-align: center;
	}

	&__subtitle {
		margin: 0 auto 1rem;
		max-width: 62ch;
		color: var(--text-muted);
		font-size: 0.92rem;
		line-height: 1.5;
	}

	&__cta {
		display: flex;
		gap: 0.55rem;
		justify-content: center;
		flex-wrap: wrap;

		:global(.btn) {
			min-width: 112px;
		}
	}
}
</style>
