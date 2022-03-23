<script setup>
import { onMounted, ref } from "vue";
import { RouterLink } from "vue-router";
import router from "../router/index";

const props = defineProps({
	menu: Boolean,
	delay: Boolean,
});

const emit = defineEmits(["update:menu", "update:delay"]);

const routes = ref(null);

const closeMenu = () => {
	emit("update:menu", false);
	emit("update:delay", false);
};

onMounted(() => {
	routes.value = router.getRoutes();
});
</script>

<template>
	<nav>
		<template v-for="route in routes">
			<nav class="navbar__products" v-if="route.path.startsWith('/products')">
				<h2>Products ⌄</h2>
				<h3>Packers</h3>
				<RouterLink :to="route.path"> Farm Packer One </RouterLink>
				<RouterLink :to="route.path"> Grader Packer One </RouterLink>
				<h3>Graders</h3>
			</nav>
			<RouterLink v-else :to="route.path" @click="closeMenu">
				{{ route.name.capitalize() }}
			</RouterLink>
		</template>
	</nav>
</template>

<style scoped>
.navbar__products {
	color: var(--color-heading);
}
.navbar__products h3 {
	color: hsla(1, 0%, 37%, 1);
	font-weight: 500;
	margin-top: 0.5rem;
	text-decoration: underline;
}
nav {
	background: var(--color-background);
}
a {
	text-decoration: none;
	color: var(--color-heading);
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
	transition: all 0.3s ease-in-out;
	height: 0rem;
	opacity: 0;
}

.gentle-menu.gentle-menu--open {
	opacity: 1;
	height: 8rem;
}
</style>
