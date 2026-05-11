<template>
	<div
		class="toast"
		:class="{ 'is-visible': toastVisible }"
		role="status"
		aria-live="polite"
	>
		{{ toastMessage }}
	</div>
</template>

<script>
export const SHOW_TOAST_KEY = Symbol('showToast');
</script>

<script setup>
import { ref } from 'vue';

const toastVisible = ref(false);
const toastMessage = ref('');

let hideTimer;

function showToast(message, ms = 2800) {
	toastMessage.value = message;
	toastVisible.value = true;
	clearTimeout(hideTimer);
	hideTimer = setTimeout(() => {
		toastVisible.value = false;
	}, ms);
}

defineExpose({ showToast });
</script>

<style lang="scss" scoped>
.toast {
	position: fixed;
	bottom: 1.5rem;
	left: 50%;
	transform: translateX(-50%) translateY(120%);
	z-index: 200;
	padding: 0.65rem 1.25rem;
	border-radius: 999px;
	background: var(--surface-solid);
	color: var(--text);
	border: 1px solid var(--border);
	box-shadow: var(--shadow-md);
	font-size: 0.9rem;
	font-weight: 500;
	transition: transform 0.35s var(--ease-out);
	pointer-events: none;
}

.toast.is-visible {
	transform: translateX(-50%) translateY(0);
}
</style>
