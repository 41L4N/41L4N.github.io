<template>
	<PreMainChrome />
	<SiteHeader />
	<main id="main">
		<Hero />
		<Profile />
		<Experience />
		<Skills />
		<Education />
		<Languages />
	</main>
	<SiteFooter />
	<Toast />
</template>

<script setup>
import { nextTick, onMounted } from 'vue';

import Education from '@/views/Education.vue';
import Experience from '@/views/Experience.vue';
import Hero from '@/views/Hero.vue';
import Languages from '@/views/Languages.vue';
import PreMainChrome from '@/views/PreMainChrome.vue';
import Profile from '@/views/Profile.vue';
import SiteFooter from '@/views/SiteFooter.vue';
import SiteHeader from '@/views/SiteHeader.vue';
import Skills from '@/views/Skills.vue';
import Toast from '@/views/Toast.vue';

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
