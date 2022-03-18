<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
	<header class="flex items-center leading-tight h-30">
		<RouterLink to="/">
			<img
				alt="Reovotec Logo"
				class="h-full w-40"
				src="@/assets/reovotec-logo-blue.svg"
			/>
		</RouterLink>
		<div class="flex items-center md:hidden">
			<button class="outline-none">
				<svg
					class="w-6 h-6 text-gray-500"
					x-show="!showMenu"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path d="M4 6h16M4 12h16M4 18h16"></path>
				</svg>
			</button>
		</div>
		<nav class="hidden md:flex">
			<RouterLink to="/">Home</RouterLink>
			<RouterLink to="/products">Products</RouterLink>
			<RouterLink to="/updates">Updates</RouterLink>
			<RouterLink to="/contact">Contact</RouterLink>
		</nav>
	</header>
</template>

<style scoped>
a {
	text-decoration: none;
	color: hsla(1, 0%, 37%, 1);
	transition: 0.4s;
}

nav a.router-link-exact-active {
	color: var(--color-text);
}

nav a.router-link-exact-active:hover {
	background-color: transparent;
}

nav a {
	display: inline-block;
	padding: 0 1rem;
	border-left: 1px solid var(--color-border);
}
nav a:hover {
	background-color: hsla(211, 100%, 37%, 0.2);
}

nav a:first-of-type {
	border: 0;
}

@media (min-width: var(--breakpoint-tablet)) {
}
</style>
