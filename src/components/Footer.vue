<template>
	<footer class="footer">
		<h3 class="footer__copyright">
			Copyright © {{ new Date().getFullYear() }} REOVOTEC LLC.
		</h3>
		<div class="footer__links">
			<a
				href="https://www.linkedin.com/in/andres-moreno-096aa33a/"
				class="footer__link"
				>Linkedin</a
			>
			<a href="" class="footer__link">Products</a>
			<a href="" class="footer__link">Events</a>
			<a href="" class="footer__link">Partners</a>
		</div>
	</footer>
</template>

<style scoped>
.footer {
	margin-top: auto;
	width: 100%;
	color: var(--color-heading);
	font-size: 0.8rem;
	display: flex;
	flex-direction: column-reverse;
	align-items: center;
	gap: 1rem;
	padding: 1rem 0;
}

.footer__copyright {
	font-size: 0.6rem;
}

.footer__links {
	display: flex;
	gap: 1rem;
}
.footer__link:hover {
	color: var(--color-text);
}

@media (min-width: 768px) {
	.footer {
		flex-direction: row;
		justify-content: center;
	}
}
</style>
