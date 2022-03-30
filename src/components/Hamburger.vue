<template>
	<div class="menu-btn">
		<div class="menu-btn__burger"></div>
	</div>
</template>

<style scoped>
/* https://github.com/codeSTACKr/hamburger-animation */
.menu-btn {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 30px;
	height: 30px;
	cursor: pointer;
	transition: all 0.5s ease-in-out;
}
.menu-btn__burger {
	width: 25px;
	height: 3px;
	background: var(--color-text);
	border-radius: 5px;
	box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
	transition: all 0.5s ease-in-out;
}
.menu-btn__burger::before,
.menu-btn__burger::after {
	content: "";
	position: absolute;
	width: 25px;
	height: 3px;
	background: var(--color-text);
	border-radius: 5px;
	box-shadow: 0 2px 5px var(--color-border);
	transition: all 0.5s ease-in-out;
}
.menu-btn__burger::before {
	transform: translateY(-8px);
}
.menu-btn__burger::after {
	transform: translateY(8px);
}
/* ANIMATION */
.menu-btn.open .menu-btn__burger {
	transform: translateX(-50px);
	background: transparent;
	box-shadow: none;
}
.menu-btn.open .menu-btn__burger::before {
	transform: rotate(45deg) translate(35px, -35px);
}
.menu-btn.open .menu-btn__burger::after {
	transform: rotate(-45deg) translate(35px, 35px);
}
</style>
