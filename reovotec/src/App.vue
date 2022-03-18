<script setup>
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
</script>

<template>
	<Header />
	<RouterView />
</template>

<style>
@import "@/assets/base.css";

#app {
	max-width: 1280px;
	padding: 1rem 0.5rem;
	font-weight: normal;
}
</style>
