<script>
	import '../app.css';
</script>

<main>
	<h1>Trendy Trash</h1>
	<slot />
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
	}
</style>
