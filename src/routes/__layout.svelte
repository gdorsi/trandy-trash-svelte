<script>
	import '../app.css';
</script>

<main>
	<slot />
</main>

<style>
	main {
		display: grid;
		grid-template-rows: 1fr 1fr max-content 1fr 1fr;
		place-items: center;
		height: 100vh;
	}
</style>
