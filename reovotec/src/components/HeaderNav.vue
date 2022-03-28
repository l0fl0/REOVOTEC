<script setup>
import { onMounted, ref } from "vue";
import { RouterLink } from "vue-router";
import router from "../router/index";
import ProductsNav from "./ProductsNav.vue";

import products from "../products.json";

const props = defineProps({
	menu: Boolean,
	delay: Boolean,
});

const emit = defineEmits(["update:menu", "update:delay"]);

const disabled = ref(false);
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

			<nav
				v-if="route.path === '/products'"
				class="navbar__products"
				@click="disabled = !disabled"
			>
				<h2>Products</h2>

				<div v-if="disabled" class="navbar__products-nav">
					<h3>Packers</h3>
					<template v-for="product in products">
						<RouterLink
							v-if="product.productType === 'packer'"
							:to="route.path + '/' + product.modelNameShort.combineLower()"
							class="navbar__link navbar__link--clean-border"
						>
							{{ product.modelNameShort }}
						</RouterLink>
					</template>

					<h3>Graders</h3>

					<template v-for="product in products">
						<RouterLink
							v-if="product.productType === 'grader'"
							:to="route.path + '/' + product.modelNameShort.combineLower()"
							class="navbar__link navbar__link--clean-border"
						>
							{{ product.modelNameShort }}
						</RouterLink>
					</template>
				</div>
			</nav>
		</template>
	</nav>
</template>

<style scoped>
.navbar__products {
	color: var(--color-heading);
	background-color: var(--color-background);
}

.navbar__products h2 {
	text-decoration: none;
	color: var(--color-heading);
	transition: 0.4s;
	display: block;
	padding: 0.3rem 1rem;
	border-left: 1px solid var(--color-border);
	cursor: pointer;
	background-color: var(--color-background);
}

.navbar__products:hover,
.navbar__products:active {
	background-color: var(--color-background);
}

.navbar__products-nav {
	border: 1px solid black;
	position: absolute;
	padding: 1rem;
	background-color: var(--color-background);
}

.navbar__products-nav h3 {
	color: hsla(1, 0%, 37%, 1);
	font-weight: 500;
	margin-top: 0.5rem;
	text-decoration: underline;
}
.navbar__link {
	text-decoration: none;
	color: var(--color-heading);
	transition: 0.4s;
	display: block;
	padding: 0.3rem 1rem;
	border-left: 1px solid var(--color-border);
	cursor: pointer;
	background-color: var(--color-background);
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

/* Modifiers */
.navbar__link--clean-border {
	border-left: none;
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
