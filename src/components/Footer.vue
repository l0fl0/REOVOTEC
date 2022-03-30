<script setup></script>

<template>
	<footer>
		<span> Copyright © {{ new Date().getFullYear() }} REOVOTEC LLC.</span>
		<div class="footer__links">
			<a href="https://www.linkedin.com/in/andres-moreno-096aa33a/">Linkedin</a>
			<a href="">Products</a>
			<a href="">Events</a>
			<a href="">Partners</a>
		</div>
	</footer>
</template>

<style scoped>
footer {
	margin-top: auto;
	padding-top: 3rem;
	width: 100%;
	color: var(--color-heading);
	font-size: 0.7rem;
	display: flex;
	flex-direction: column-reverse;
	text-align: center;
}

span {
	font-size: 0.6rem;
	padding: 1rem;
}

.footer__links {
	display: flex;
	gap: 1rem;
	margin: 0 auto;
}
a:hover {
	color: var(--color-text);
}
</style>
