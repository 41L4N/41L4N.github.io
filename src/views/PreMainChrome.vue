<template>
	<a
		class="pre-main-chrome__skip"
		href="#main"
	>
		{{ t('a11y.skipToContent') }}
	</a>

	<div
		class="pre-main-chrome__noise"
		aria-hidden="true"
	/>
	<div
		class="pre-main-chrome__orb pre-main-chrome__orb--a"
		aria-hidden="true"
	/>
	<div
		class="pre-main-chrome__orb pre-main-chrome__orb--b"
		aria-hidden="true"
	/>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<style lang="scss" scoped>
.pre-main-chrome {
	&__noise {
		pointer-events: none;
		position: fixed;
		inset: 0;
		opacity: var(--noise-opacity);
		background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
		z-index: 0;
	}

	&__orb {
		position: fixed;
		border-radius: 50%;
		filter: blur(80px);
		opacity: 0.45;
		z-index: 0;
		pointer-events: none;

		&--a {
			width: min(50vw, 420px);
			height: min(50vw, 420px);
			background: var(--accent-2);
			top: -10%;
			right: -5%;
		}

		&--b {
			width: min(60vw, 520px);
			height: min(60vw, 520px);
			background: var(--accent);
			bottom: -15%;
			left: -15%;
			opacity: 0.25;
		}
	}

	&__skip {
		position: absolute;
		left: -9999px;
		top: auto;
		width: 1px;
		height: 1px;
		overflow: hidden;
		z-index: 9999;
		padding: 0.75rem 1rem;
		background: var(--accent);
		color: #0c0a09;
		font-weight: 600;
		border-radius: var(--radius-sm);

		&:focus {
			left: 1rem;
			top: 1rem;
			width: auto;
			height: auto;
			overflow: visible;
		}
	}
}
</style>
