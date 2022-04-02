<script setup>
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import reovotecData from "../products.json";

const route = useRoute();
let product = ref({});
const showConfigType = ref(true);
let configuration = ref({});
watch(
	() => route.params.model,
	() =>
		(product.value = reovotecData.filter(
			(product) => product.modelNameShort.combineLower() === route.params.model
		)[0])
);

onMounted(() => {
	product.value = reovotecData.filter(
		(product) => product.modelNameShort.combineLower() === route.params.model
	)[0];
});

const setConfig = (config) => {
	config = Object.fromEntries(Object.entries(config).slice(4));
	configuration.value = config;
};
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

			<div class="product__config-table">
				<template v-for="config in product.configurations">
					<h4 class="product__config-item" @click="() => setConfig(config)">
						{{ config.modelType }}
					</h4>
				</template>
				<template v-for="(option, key) in configuration">
					<!-- <div>{{ showConfig(config) }}</div> -->
					<div v-if="key == 'dimentions'" class="product__config-option">
						<span>{{ key }}</span>
						<span>{{ option[0] + "m " + "x " + option[1] + "m" }}</span>
					</div>
					<div v-else-if="key == 'exits'" class="product__config-option">
						<span>{{ key }}</span>
						<span>{{ option[0] + ", " + option[1] }}</span>
					</div>

					<div v-else class="product__config-option">
						<span>{{ key }}</span>
						<span>{{ option }}</span>
					</div>
				</template>
			</div>
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

.product__config-table {
	text-align: center;
}

.product__config-item {
	border: 1px solid var(--color-border);
	cursor: pointer;
}

.product__config-option {
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid black;
	padding: 1rem 0 0;
}

@media (min-width: 768px) {
	.product__config-table {
		display: flex;
	}
}
</style>
