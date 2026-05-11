<template>
	<div
		ref="hostEl"
		class="ai-network-canvas"
		aria-hidden="true"
	>
		<canvas
			ref="canvasEl"
			class="ai-network-canvas__canvas"
		/>
	</div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';

const hostEl = ref(null);
const canvasEl = ref(null);

let rafId = 0;
let ro = null;
let removeResizeListener = null;

function parseCssColor(raw) {
	const s = String(raw || '').trim();
	if (!s) return null;
	return s;
}

function pickColors(el) {
	const cs = window.getComputedStyle(el);
	const accent = parseCssColor(cs.getPropertyValue('--accent')) || '#b91c1c';
	const accent2 = parseCssColor(cs.getPropertyValue('--accent-2')) || '#dc2626';
	return { accent, accent2 };
}

function clamp(n, a, b) {
	return Math.max(a, Math.min(b, n));
}

function buildState(w, h) {
	const area = Math.max(1, w * h);
	const count = clamp(Math.round(area / 14000), 22, 48);
	const linkDist = clamp(Math.round(Math.min(w, h) * 0.14), 92, 150);

	const nodes = [];
	for (let i = 0; i < count; i += 1) {
		const r = 1.15 + Math.random() * 1.4;
		nodes.push({
			x: Math.random() * w,
			y: Math.random() * h,
			vx: (Math.random() - 0.5) * 0.35,
			vy: (Math.random() - 0.5) * 0.35,
			r,
		});
	}

	return { nodes, linkDist };
}

function drawFrame(ctx, w, h, state, colors, skipPhysics) {
	const { nodes, linkDist } = state;

	ctx.clearRect(0, 0, w, h);

	ctx.lineWidth = 1.2;
	ctx.lineCap = 'round';
	for (let i = 0; i < nodes.length; i += 1) {
		for (let j = i + 1; j < nodes.length; j += 1) {
			const a = nodes[i];
			const b = nodes[j];
			const dx = a.x - b.x;
			const dy = a.y - b.y;
			const d = Math.hypot(dx, dy);
			if (d >= linkDist) continue;
			const t = 1 - d / linkDist;
			const alpha = 0.11 + t * 0.3;
			ctx.strokeStyle = colors.accent;
			ctx.globalAlpha = alpha;
			ctx.beginPath();
			ctx.moveTo(a.x, a.y);
			ctx.lineTo(b.x, b.y);
			ctx.stroke();
		}
	}

	ctx.globalAlpha = 1;
	for (const n of nodes) {
		const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 3.2);
		g.addColorStop(0, colors.accent2);
		g.addColorStop(0.55, colors.accent);
		g.addColorStop(1, 'rgba(0,0,0,0)');
		ctx.fillStyle = g;
		ctx.beginPath();
		ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
		ctx.fill();
	}

	if (skipPhysics) return;

	for (const n of nodes) {
		n.x += n.vx;
		n.y += n.vy;
		if (n.x < 0 || n.x > w) n.vx *= -1;
		if (n.y < 0 || n.y > h) n.vy *= -1;
		n.x = clamp(n.x, 0, w);
		n.y = clamp(n.y, 0, h);
	}
}

function mountNetwork() {
	const host = hostEl.value;
	const canvas = canvasEl.value;
	if (!host || !canvas) return;

	const ctx = canvas.getContext('2d', { alpha: true });
	if (!ctx) return;

	const reducedMotion =
		window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;

	let state = null;
	let colors = pickColors(host);

	const resize = () => {
		const rect = host.getBoundingClientRect();
		const w = Math.max(1, Math.floor(rect.width));
		const h = Math.max(1, Math.floor(rect.height));
		const dpr = Math.min(2, window.devicePixelRatio || 1);

		canvas.width = Math.floor(w * dpr);
		canvas.height = Math.floor(h * dpr);
		canvas.style.width = `${w}px`;
		canvas.style.height = `${h}px`;

		ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
		colors = pickColors(host);
		state = buildState(w, h);
		drawFrame(ctx, w, h, state, colors, true);
		if (reducedMotion) return;
	};

	const loop = () => {
		const rect = host.getBoundingClientRect();
		const w = Math.max(1, Math.floor(rect.width));
		const h = Math.max(1, Math.floor(rect.height));
		if (!state) state = buildState(w, h);
		drawFrame(ctx, w, h, state, colors, reducedMotion);
		rafId = window.requestAnimationFrame(loop);
	};

	resize();

	if (!reducedMotion) {
		rafId = window.requestAnimationFrame(loop);
	}

	const onWinResize = () => {
		window.cancelAnimationFrame(rafId);
		resize();
		if (!reducedMotion) {
			rafId = window.requestAnimationFrame(loop);
		}
	};

	if (typeof window.ResizeObserver !== 'undefined') {
		ro = new window.ResizeObserver(onWinResize);
		ro.observe(host);
		removeResizeListener = () => {
			ro?.disconnect();
			ro = null;
		};
	} else {
		window.addEventListener('resize', onWinResize, { passive: true });
		removeResizeListener = () => {
			window.removeEventListener('resize', onWinResize);
		};
	}
}

onMounted(() => {
	mountNetwork();
});

onBeforeUnmount(() => {
	window.cancelAnimationFrame(rafId);
	removeResizeListener?.();
	removeResizeListener = null;
});
</script>

<style lang="scss" scoped>
.ai-network-canvas {
	--ai-bleed-y: clamp(-3.25rem, -7vw, -1.5rem);

	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	width: 100vw;
	top: var(--ai-bleed-y);
	bottom: var(--ai-bleed-y);
	z-index: 0;
	pointer-events: none;
	overflow: hidden;
	mask-image: radial-gradient(ellipse 85% 75% at 50% 45%, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.55) 62%, transparent 100%);
	-webkit-mask-image: radial-gradient(ellipse 85% 75% at 50% 45%, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.55) 62%, transparent 100%);

	&__canvas {
		display: block;
		width: 100%;
		height: 100%;
		opacity: 0.97;
	}
}
</style>
