<script setup>
import { onMounted, ref } from "vue";
import { RouterLink } from "vue-router";
import products from "../products.json";

const props = defineProps({
	path: String,
	showProductsMenu: Boolean,
});

const emit = defineEmits(["close-menu", "toggle-products"]);

let productTypes = ref({});

onMounted(() => {
	let filteredObject = {};
	for (const product in products) {
		if (!filteredObject[products[product].productType]) {
			filteredObject[products[product].productType] = [];
		}

		filteredObject[products[product].productType].push(
			products[product].modelNameShort
		);
	}
	productTypes.value = filteredObject;
});
</script>

<template>
	<section>
		<h2
			v-if="!showProductsMenu"
			class="navbar__products-title"
			@click="emit('toggle-products')"
		>
			Products <i class="fa-solid fa-chevron-down"></i>
		</h2>

		<h2
			v-if="showProductsMenu"
			class="navbar__products-title navbar__products-title--active"
			@click="emit('toggle-products')"
		>
			Products <i class="fa-solid fa-chevron-up"></i>
		</h2>

		<nav v-if="showProductsMenu" class="navbar__products-nav">
			<template v-for="(productType, key) in productTypes">
				<div>
					<h3 class="navbar__products-subtitle">
						{{ key.capitalize() + "s" }}
					</h3>

					<RouterLink
						v-for="product in productType"
						:to="path + '/' + product.combineLower()"
						class="navbar__link navbar__link--clean-border"
						@click="emit('close-menu')"
					>
						{{ product }}
					</RouterLink>
				</div>
			</template>
		</nav>
	</section>
</template>

<style scoped>
@media (min-width: 768px) {
	.navbar__products-nav {
		margin: 0;
		position: absolute;
		border-top: none;
		font-size: 0.9rem;
		/* fixed width */
		width: 10rem;
	}

	.navbar__products-subtitle {
		margin: 1rem 1rem 0;
	}
}

.navbar__products {
	position: relative;
}
.navbar__products-title {
	color: var(--color-heading);
	background-color: var(--color-background);
	text-decoration: none;
	color: var(--color-heading);
	transition: 0.4s all ease-in-out;
	display: block;
	padding: 0.3rem 1rem;
	border-left: 1px solid var(--color-border);
	cursor: pointer;
}
.navbar__products-title--active {
	color: var(--color-text);
}

.navbar__products-nav {
	background-color: var(--color-background);
	margin: 1rem 0;
}

.navbar__products-subtitle {
	color: hsla(1, 0%, 37%, 1);
	font-weight: 500;
	text-decoration: underline;
}

.gentle-menu {
	transition: all 0.3s ease-in-out;
	height: 0rem;
	opacity: 0;
}

/* Modifiers */
.navbar__link--clean-border {
	border-left: none;
}

.gentle-menu--open {
	opacity: 1;
	height: 8rem;
}
</style>
