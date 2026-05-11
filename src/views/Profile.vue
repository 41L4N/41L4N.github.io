<template>
	<section
		class="section section--profile reveal"
		id="perfil"
	>
		<div class="section-head">
			<h2>{{ t('profile.title') }}</h2>
			<p class="section-kicker">
				{{ t('profile.kicker') }}
			</p>
		</div>
		<div class="prose profile-prose">
			<p
				v-for="paragraphKey in paragraphKeys"
				:key="paragraphKey"
			>
				{{ t(paragraphKey) }}
			</p>
		</div>
	</section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const paragraphKeys = [
	'profile.intro',
	'profile.commitment',
];
</script>

<style lang="scss" scoped>
.prose p {
	margin: 0 0 1rem;
	max-width: 70ch;
	color: var(--text-muted);
}

.prose p:last-child {
	margin-bottom: 0;
}
</style>
