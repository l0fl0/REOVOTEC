<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { RouterLink } from "vue-router";
import Hamburger from "./Hamburger.vue";
import HeaderNav from "./HeaderNav.vue";
// state
const isMenu = ref(false);
const delayMenu = ref(false);
const headerEl = ref();
const navHide = ref(false);

// Variables fot hide/show navbar depending on scroll pos/direction
const didScroll = ref(false);
const delta = 5;
let lastScrollTop = 0;
let navbarHeight = 0;
let scrollCheck; // setInterval function

onMounted(() => {
	navbarHeight = headerEl.value.scrollHeight;
	window.onscroll = () => (didScroll.value = true);

	// run hasScrolled() and reset didScroll status
	scrollCheck = setInterval(() => {
		if (didScroll.value) {
			hasScrolled();
			didScroll.value = false;
		}
	}, 250);
});

onUnmounted(() => {
	clearInterval(scrollCheck);
});

const hasScrolled = () => {
	// https://medium.com/@mariusc23/hide-header-on-scroll-down-show-on-scroll-up-67bbaae9a78c
	let st = window.scrollY;

	if (Math.abs(lastScrollTop - st) <= delta) return;
	console.log(Math.abs(lastScrollTop - st) <= delta);
	// If current position > last position AND scrolled past navbar...
	if (st > lastScrollTop && st > navbarHeight) {
		// Scroll Down
		navHide.value = true;
	} else {
		// Scroll Up
		navHide.value = false;
	}

	lastScrollTop = st;
};

const toggleMenu = () => {
	isMenu.value = !isMenu.value;

	// for closing the menu with delay
	if (!isMenu.value && delayMenu.value) {
		setTimeout(() => {
			delayMenu.value = !delayMenu.value;
		}, 300);
		return;
	}
	// default for showing the menu
	setTimeout(() => {
		delayMenu.value = !delayMenu.value;
	}, 200);
};
</script>

<template>
	<header ref="headerEl" :class="{ 'nav-hide': navHide }">
		<section
			class="flex items-center leading-tight h-30 p-4 shadow-md transition-all duration-700 w-full"
			:class="{ shadow_none: isMenu }"
		>
			<RouterLink to="/" @click="isMenu = false">
				<img
					alt="Reovotec Logo"
					class="w-20 md:w-30"
					src="../../reovotec-logo-blue.svg"
				/>
			</RouterLink>

			<div class="md:hidden ml-auto mr-5" @click="toggleMenu">
				<Hamburger :class="{ open: isMenu }" />
			</div>

			<!-- Tablet/Desktop Nav -->
			<HeaderNav v-model:menu="isMenu" class="hidden ml-8 md:flex" />
		</section>

		<!-- Mobile Nav -->
		<HeaderNav
			v-if="isMenu ? isMenu : delayMenu"
			v-model:menu="isMenu"
			v-model:delay="delayMenu"
			class="text-center shadow-md md:hidden gentle-menu"
			:class="{ 'gentle-menu--open': isMenu ? delayMenu : isMenu }"
		/>
	</header>
</template>

<style scoped>
header {
	position: fixed;
	width: 100%;
	max-width: var(--breakpoint-desktop);
	height: var(--navigation-height);
	top: 0;
	background: var(--color-background);
	transition: top 0.2s ease-in;
}

.nav-hide {
	top: calc(var(--navigation-height) * -1);
}
.shadow_none {
	@apply shadow-none;
}
</style>
