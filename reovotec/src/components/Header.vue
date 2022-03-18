<script setup>
import { reactive, ref } from "vue";
import { RouterLink } from "vue-router";
import router from "../router/index";
import Hamburger from "./Hamburger.vue";
// state
const isMenu = ref(false);

const routes = router.getRoutes();

//Methods
</script>

<template>
	<header
		class="flex items-center leading-tight h-30 p-4 shadow-md"
		:class="{ shadow_none: isMenu }"
	>
		<RouterLink to="/" @click.prevent="isMenu = false">
			<img
				alt="Reovotec Logo"
				class="w-20 md:w-30"
				src="@/assets/reovotec-logo-blue.svg"
			/>
		</RouterLink>

		<div class="md:hidden ml-auto mr-5" @click.prevent="isMenu = !isMenu">
			<Hamburger :class="{ open: isMenu }" />
		</div>

		<!-- Tablet/Desktop Nav -->
		<nav class="hidden md:flex ml-8">
			<RouterLink
				v-for="route in routes"
				:to="route.path"
				@click.prevent="isMenu = false"
			>
				{{ route.name.capitalize() }}
			</RouterLink>
		</nav>
	</header>

	<!-- Mobile Nav -->
	<nav
		class="text-center shadow-md md:hidden gentle-menu"
		:class="{ 'gentle-menu--close': isMenu }"
		v-if="isMenu"
	>
		<RouterLink
			v-for="route in routes"
			:to="route.path"
			@click.prevent="isMenu = false"
		>
			{{ route.name.capitalize() }}
		</RouterLink>
	</nav>
</template>

<style scoped>
.shadow_none {
	@apply shadow-none;
}

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
	display: block;
	padding: 0.4rem 1rem;
	border-left: 1px solid var(--color-border);
}
nav a:hover,
nav a:active {
	background-color: hsla(211, 100%, 37%, 0.2);
}

nav a:first-of-type {
	border: 0;
}

.gentle-menu {
	overflow: hidden;
	/* animation: gentle-menu 1s ease-in-out; */
	transition: all 1s ease-in-out;
	height: 0;
	opacity: 1;
}

.gentle-menu.gentle-menu--close {
	opacity: 0;
	height: 9rem;
}

@keyframes gentle-menu {
	0% {
		height: 0;
		opacity: 0;
	}
	100% {
		height: 9rem;
		opacity: 1;
	}
}
</style>
