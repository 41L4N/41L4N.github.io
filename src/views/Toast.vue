<template>
	<div
		id="toast"
		class="toast"
		role="status"
		aria-live="polite"
		hidden
	/>
</template>

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
}

.toast.is-visible {
	transform: translateX(-50%) translateY(0);
}
</style>
