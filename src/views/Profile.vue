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
		<div class="profile__languages">
			<ul class="profile__languages-list">
				<li
					v-for="entry in languageEntries"
					:key="entry.nameKey"
					class="profile__languages-item"
				>
					<span class="profile__languages-name">{{ t(entry.nameKey) }}</span>
					<span class="profile__languages-level">{{ t(entry.levelKey) }}</span>
				</li>
			</ul>
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

const languageEntries = [
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
.profile {
	&__prose p {
		margin: 0 0 1rem;
		max-width: 70ch;
		color: var(--text-muted);
	}

	&__prose p:last-child {
		margin-bottom: 0.9rem;
	}

	&__languages {
		max-width: 70ch;
	}

	&__languages-list {
		margin: 0;
		padding: 0;
		list-style: none;
		display: grid;
		gap: 0.65rem;

		@media (min-width: 680px) {
			grid-template-columns: 1fr 1fr;
		}
	}

	&__languages-item {
		border: 1px solid var(--border);
		background: color-mix(in srgb, var(--surface-solid) 78%, transparent);
		border-radius: var(--radius-md);
		padding: 0.72rem 0.85rem;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 0.25rem;
		color: var(--text-muted);
		box-shadow: var(--shadow-sm);
		position: relative;
		overflow: hidden;

		&::before {
			content: "";
			position: absolute;
			left: 0;
			top: 0;
			bottom: 0;
			width: 3px;
			background: linear-gradient(180deg, var(--accent), var(--accent-2));
		}
	}

	&__languages-name {
		color: var(--text);
		font-weight: 600;
		font-size: 0.92rem;
	}

	&__languages-level {
		font-size: 0.84rem;
		font-weight: 400;
		color: var(--text-muted);
		line-height: 1.35;
	}
}
</style>
