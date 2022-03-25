<script setup>
import { onMounted, ref } from "vue";
import { RouterLink } from "vue-router";
import router from "../router/index";
import products from "../products.json";

const disabled = ref(false);

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
	<nav class="navbar">
		<template v-for="route in routes">
			<RouterLink
				v-if="route.path !== '/products/:model'"
				:to="route.path"
				@click="closeMenu"
				class="navbar__link"
			>
				{{ route.name.capitalize() }}
			</RouterLink>
			<!--Todo: the products should be second on the list -->
			<nav v-else class="navbar__products" @click="disabled = !disabled">
				<h2>Products</h2>

				<div v-if="disabled">
					<h3>Packers</h3>
					<template v-for="product in products">
						<RouterLink
							v-if="product.productType === 'packer'"
							:to="route.path + '/' + product.modelNameShort"
							class="navbar__link"
						>
							{{ product.modelNameShort }}
						</RouterLink>
					</template>

					<h3>Graders</h3>
					<template v-for="product in products">
						<RouterLink
							v-if="product.productType === 'grader'"
							:to="route.path + '/' + product.modelNameShort"
							class="navbar__link"
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
	order: 2;
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
.navbar__products h3 {
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
