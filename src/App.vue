<template>
	<PreMainChrome />
	<SiteHeader />
	<main id="main">
		<Hero />
		<Profile />
		<AISection />
		<Skills />
		<ProjectWorkflow />
		<Projects />
		<Experience />
		<Languages />
	</main>
	<SiteFooter />
	<Toast ref="toastRef" />
</template>

<script setup>
import { nextTick, onMounted, provide, ref } from 'vue';

import AISection from '@/views/AISection.vue';
import Experience from '@/views/Experience.vue';
import Hero from '@/views/Hero.vue';
import Languages from '@/views/Languages.vue';
import PreMainChrome from '@/views/PreMainChrome.vue';
import Profile from '@/views/Profile.vue';
import Projects from '@/views/Projects.vue';
import ProjectWorkflow from '@/views/ProjectWorkflow.vue';
import SiteFooter from '@/views/SiteFooter.vue';
import SiteHeader from '@/views/SiteHeader.vue';
import Skills from '@/views/Skills.vue';
import Toast, { SHOW_TOAST_KEY } from '@/views/Toast.vue';

const toastRef = ref(null);

provide(SHOW_TOAST_KEY, (message, ms) => {
	toastRef.value?.showToast?.(message, ms);
});

function initReveal() {
	const els = document.querySelectorAll('.reveal');
	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
		els.forEach((el) => el.classList.add('is-visible'));
		return;
	}
	const IO = globalThis.IntersectionObserver;
	if (!IO) {
		els.forEach((el) => el.classList.add('is-visible'));
		return;
	}
	const io = new IO(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					entry.target.classList.add('is-visible');
					io.unobserve(entry.target);
				}
			}
		},
		{ root: null, rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
	);
	els.forEach((el) => io.observe(el));
}

onMounted(() => {
	nextTick(() => initReveal());
});
</script>
