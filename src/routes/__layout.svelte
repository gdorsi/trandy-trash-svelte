<script>
	import '../app.css';
</script>

<main>
	<h1>✨ Trendy Trash ✨</h1>
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
