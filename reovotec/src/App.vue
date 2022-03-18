<script setup>
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
import "./utils/formatString";
</script>

<template>
	<Header />
	<RouterView />
</template>

<style>
@import "@/assets/base.css";

#app {
	max-width: var(--breakpoint-desktop);
	margin: 0 auto;
	font-weight: normal;
}
</style>
