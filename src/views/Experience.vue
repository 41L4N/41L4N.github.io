<template>
	<section
		class="section section--experience reveal"
		id="experiencia"
	>
		<div class="section-head">
			<h2>{{ t('experience.title') }}</h2>
			<p class="section-kicker">
				{{ t('experience.kicker') }}
			</p>
		</div>
		<div class="timeline">
			<article
				v-for="(job, jobIndex) in jobs"
				:key="jobIndex"
				class="tl-item"
			>
				<span
					class="tl-dot"
					aria-hidden="true"
				/>
				<div class="tl-card">
					<header>
						<p class="tl-role">{{ t(job.roleKey) }}</p>
						<p class="tl-company">{{ t(job.companyKey) }}</p>
						<p class="tl-period">{{ t(job.periodKey) }}</p>
					</header>
					<ul>
						<li
							v-for="bulletKey in job.bulletKeys"
							:key="bulletKey"
						>
							{{ t(bulletKey) }}
						</li>
					</ul>
				</div>
			</article>
		</div>
	</section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const jobs = [
	{
		roleKey: 'experience.freelance.role',
		companyKey: 'experience.freelance.company',
		periodKey: 'experience.freelance.period',
		bulletKeys: [
			'experience.freelance.bullet1',
			'experience.freelance.bullet2',
			'experience.freelance.bullet3',
			'experience.freelance.bullet4',
			'experience.freelance.bullet5',
		],
	},
	{
		roleKey: 'experience.prolesys.role',
		companyKey: 'experience.prolesys.company',
		periodKey: 'experience.prolesys.period',
		bulletKeys: [
			'experience.prolesys.bullet1',
			'experience.prolesys.bullet2',
			'experience.prolesys.bullet3',
			'experience.prolesys.bullet4',
			'experience.prolesys.bullet5',
		],
	},
	{
		roleKey: 'experience.sismg.role',
		companyKey: 'experience.sismg.company',
		periodKey: 'experience.sismg.period',
		bulletKeys: [
			'experience.sismg.bullet1',
			'experience.sismg.bullet2',
			'experience.sismg.bullet3',
			'experience.sismg.bullet4',
		],
	},
	{
		roleKey: 'experience.goldtech.role',
		companyKey: 'experience.goldtech.company',
		periodKey: 'experience.goldtech.period',
		bulletKeys: [
			'experience.goldtech.bullet1',
			'experience.goldtech.bullet2',
			'experience.goldtech.bullet3',
			'experience.goldtech.bullet4',
		],
	},
	{
		roleKey: 'experience.homines.role',
		companyKey: 'experience.homines.company',
		periodKey: 'experience.homines.period',
		bulletKeys: [
			'experience.homines.bullet1',
			'experience.homines.bullet2',
			'experience.homines.bullet3',
			'experience.homines.bullet4',
		],
	},
];
</script>

<style lang="scss" scoped>
.timeline {
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
}

.timeline::before {
	content: "";
	position: absolute;
	left: 11px;
	top: 6px;
	bottom: 6px;
	width: 2px;
	background: linear-gradient(var(--accent), var(--accent-2));
	opacity: 0.35;
	border-radius: 2px;
}

@media (min-width: 640px) {
	.timeline::before {
		left: 15px;
	}
}

.tl-item {
	position: relative;
	padding-left: 2.75rem;
}

@media (min-width: 640px) {
	.tl-item {
		padding-left: 3.25rem;
	}
}

.tl-dot {
	position: absolute;
	left: 4px;
	top: 6px;
	width: 16px;
	height: 16px;
	border-radius: 50%;
	background: var(--surface-solid);
	border: 3px solid var(--accent);
	box-shadow: 0 0 0 4px var(--accent-soft);
}

@media (min-width: 640px) {
	.tl-dot {
		left: 8px;
	}
}

.tl-card {
	border-radius: var(--radius-md);
	border: 1px solid var(--border);
	background: var(--surface);
	padding: 1.25rem 1.35rem;
	transition: border-color 0.2s, transform 0.2s var(--ease-out);
}

.tl-card:hover {
	border-color: color-mix(in srgb, var(--accent) 35%, var(--border));
	transform: translateY(-2px);
}

.tl-card header {
	display: flex;
	flex-wrap: wrap;
	gap: 0.35rem 1rem;
	align-items: baseline;
	margin-bottom: 0.65rem;
}

.tl-role {
	margin: 0;
	font-size: 1.05rem;
	font-weight: 600;
}

.tl-company {
	margin: 0;
	color: var(--accent-2);
	font-weight: 500;
	font-size: 0.95rem;
}

.tl-period {
	margin: 0 0 0 auto;
	font-size: 0.82rem;
	color: var(--text-muted);
	font-variant-numeric: tabular-nums;
}

.tl-card ul {
	margin: 0;
	padding-left: 1.15rem;
	color: var(--text-muted);
	font-size: 0.92rem;
}

.tl-card li {
	margin-bottom: 0.35rem;
}

.tl-card li:last-child {
	margin-bottom: 0;
}
</style>
