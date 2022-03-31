<script setup>
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import products from "../products.json";

const route = useRoute();
const product = ref({});

watch(
	() => route.params.model,
	() =>
		(product.value = products.filter(
			(product) => product.modelNameShort.combineLower() === route.params.model
		)[0])
);

onMounted(() => {
	product.value = products.filter(
		(product) => product.modelNameShort.combineLower() === route.params.model
	)[0];
});
</script>

<template>
	<main class="product">
		<h1 class="product__title">{{ product.modelName }}</h1>
		<img src="https://via.placeholder.com/600" alt="" />
		<p class="product__description">{{ product.description }}</p>
		<div>
			<h2 class="product__subtitle">{{ product.modelNameShort }}</h2>
			<img src="https://via.placeholder.com/600?text=Video+here" />
		</div>
		<section>
			<h2 class="product__subtitle">Configurations</h2>

			<template v-for="config in product.configurations">
				<h3>{{ config.modelType }}</h3>
			</template>
		</section>
	</main>
</template>

<style scoped>
.product {
	padding: 1rem;
	display: grid;
	gap: 1rem;
}

.product__title {
	color: var(--color-heading);
	font-size: 2rem;
}
.product__subtitle {
	color: var(--color-heading);
	font-size: 1.5rem;
}
</style>
