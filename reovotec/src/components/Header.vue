<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import Hamburger from "./Hamburger.vue";
import HeaderNav from "./HeaderNav.vue";

// state
const isMenu = ref(false);
</script>

<template>
	<header
		class="flex items-center leading-tight h-30 p-4 shadow-md transition-all duration-700"
		:class="{ shadow_none: isMenu }"
	>
		<RouterLink to="/" @click="isMenu = false">
			<img
				alt="Reovotec Logo"
				class="w-20 md:w-30"
				src="@/assets/reovotec-logo-blue.svg"
			/>
		</RouterLink>

		<div class="md:hidden ml-auto mr-5" @click="isMenu = !isMenu">
			<Hamburger :class="{ open: isMenu }" />
		</div>

		<!-- Tablet/Desktop Nav -->
		<HeaderNav v-model:menu="isMenu" class="hidden md:flex ml-8" />
	</header>

	<!-- Mobile Nav -->
	<HeaderNav
		v-model:menu="isMenu"
		class="text-center shadow-md md:hidden gentle-menu"
		:class="{ 'gentle-menu--close': isMenu }"
	/>
</template>

<style scoped>
.shadow_none {
	@apply shadow-none;
}
</style>
