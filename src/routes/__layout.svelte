<script context="module">
	import { createInstallPrompt } from '$lib/install';

	const installPrompt = createInstallPrompt();
</script>

<script>
	import '../app.css';
</script>

<main>
	<slot />

	{#if $installPrompt}
		<button class="install" on:click={() => {
			$installPrompt.prompt();
		}}> 🏠 Add to your homesceen </button>
	{/if}
</main>

<style>
	main {
		display: grid;
		grid-template-rows: 1fr 1fr max-content 1fr 1fr;
		place-items: center;
		height: 100vh;
	}

	.install {
		position: fixed;
		bottom: 16px;
		right: 16px;
	}
</style>
