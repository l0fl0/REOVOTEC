<script setup>
import { onMounted, ref } from "vue";
import { RouterLink } from "vue-router";
import router from "../router/index";

const props = defineProps({
	menu: Boolean,
});

const emit = defineEmits(["update:menu"]);

const routes = ref(null);

const closeMenu = () => {
	emit("update:menu", false);
};

onMounted(() => {
	routes.value = router.getRoutes();
});
</script>

<template>
	<nav>
		<RouterLink v-for="route in routes" :to="route.path" @click="closeMenu">
			{{ route.name.capitalize() }}
		</RouterLink>
	</nav>
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
	display: block;
	padding: 0.3rem 1rem;
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
	transition: all 0.4s ease-in-out;
	height: 0;
	opacity: 0;
}

.gentle-menu.gentle-menu--close {
	opacity: 1;
	height: 8rem;
}
</style>
