<script setup>
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import "./utils/formatString";
</script>

<template>
	<Header />
	<RouterView class="main-content" />
	<Footer />
</template>

<style>
@import "@/assets/css/global.css";

#app {
	display: flex;
	flex-direction: column;
	position: relative;
	max-width: var(--breakpoint-desktop);
	margin: 0 auto;
	font-weight: normal;
	min-height: 100vh;
}
.main-content {
	margin-top: var(--navigation-height);
}
</style>
