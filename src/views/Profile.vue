<template>
	<section
		class="section section--profile profile reveal"
		id="profile"
	>
		<div class="section-head">
			<h2>{{ t('profile.title') }}</h2>
		</div>
		<div class="profile__prose">
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
.profile {
	&__prose p {
		margin: 0 0 1rem;
		max-width: 70ch;
		color: var(--text-muted);
	}

	&__prose p:last-child {
		margin-bottom: 0;
	}
}
</style>
