<script setup>
import { onMounted, ref } from "vue";
import { RouterLink } from "vue-router";
import router from "../router/index";
import ProductsNav from "./ProductsNav.vue";

const emit = defineEmits(["toggle-menu"]);

const routes = ref(null);
const showProductsMenu = ref(false);

const closeMenu = () => {
	showProductsMenu.value = false;
	emit("toggle-menu");
};

const toggleProductsMenu = () => {
	showProductsMenu.value = !showProductsMenu.value;
};

onMounted(() => {
	routes.value = router.getRoutes();
});
</script>

<template>
	<nav class="navbar">
		<template v-for="route in routes">
			<div v-if="route.path === '/products/:model'"></div>

			<RouterLink
				v-else-if="route.path !== '/products'"
				:to="route.path"
				@click="closeMenu"
				class="navbar__link"
			>
				{{ route.name.capitalize() }}
			</RouterLink>

			<ProductsNav
				v-else-if="route.path === '/products'"
				class="navbar__products"
				:path="route.path"
				:show-products-menu="showProductsMenu"
				@close-menu="closeMenu"
				@toggle-products="toggleProductsMenu"
			/>
		</template>
	</nav>
</template>

<style>
.navbar {
	background-color: var(--color-background);
}

.navbar__link {
	text-decoration: none;
	color: var(--color-heading);
	transition: 0.4s;
	display: block;
	padding: 0.3rem 1rem;
	border-left: 1px solid var(--color-border);
	cursor: pointer;
}

.navbar__link:hover,
.navbar__link:active {
	background-color: hsla(211, 100%, 37%, 0.2);
}

.navbar__link.router-link-exact-active {
	color: var(--color-text);
}

.navbar__link.router-link-exact-active:hover {
	background-color: var(--color-background);
}
.navbar__link:first-of-type {
	border: 0;
}
.navbar__products:hover,
.navbar__products:active {
	background-color: var(--color-background);
}

.gentle-menu {
	transition: all 0.3s ease-in-out;
	height: 0rem;
	opacity: 0;
}

/* Modifiers */
.gentle-menu--open {
	opacity: 1;
	height: 8rem;
}
</style>
