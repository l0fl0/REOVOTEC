<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
</script>

<template>
	<header>
		<img
			alt="Reovotec Logo"
			class="logo"
			src="@/assets/reovotec-logo.svg"
			width="125"
			height="125"
		/>
		<nav>
			<RouterLink to="/">Home</RouterLink>
			<RouterLink to="/about">Products</RouterLink>
			<RouterLink to="/contact">Contact</RouterLink>
		</nav>
	</header>

	<RouterView />
</template>

<style>
@import "@/assets/base.css";
* {
	outline: green solid 1px;
}
#app {
	max-width: 1280px;
	padding: 1rem 0.5rem;
	font-weight: normal;
}

header {
	line-height: 1.5;
	display: flex;
}

.logo {
	display: inline-block;
	margin: 0 auto 2rem;
}

a,
.green {
	text-decoration: none;
	color: hsla(160, 100%, 37%, 1);
	transition: 0.4s;
}

@media (hover: hover) {
	a:hover {
		background-color: hsla(160, 100%, 37%, 0.2);
	}
}

nav {
	width: 100%;
	font-size: 12px;
	text-align: center;
	margin-top: 2rem;
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

nav a:first-of-type {
	border: 0;
}

@media (min-width: 1024px) {
}
</style>
