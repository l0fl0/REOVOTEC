<script setup>
import products from "../products.json";
</script>

<template>
	<main>
		Products
		<template v-for="product in products">
			<h2>{{ product.modelNameShort }}</h2>
		</template>
	</main>
</template>

<style scoped></style>
