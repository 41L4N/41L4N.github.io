<template>
	<footer class="site-footer">
		<p>
			<span>{{ t('footer.crafted') }}</span>
			·
			<a
				href="https://github.com/41L4N/41L4N.github.io"
				target="_blank"
				rel="noopener noreferrer"
			>{{ t('footer.sourceCode') }}</a>
		</p>
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
	padding: 2rem 1.25rem 3rem;
	text-align: center;
	color: var(--text-muted);
	font-size: 0.88rem;
	border-top: 1px solid var(--border);
}

.site-footer a {
	color: var(--accent-2);
	text-decoration: none;
}

.site-footer a:hover {
	text-decoration: underline;
}
</style>
