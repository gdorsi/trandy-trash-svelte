<script context="module">
    // This is called only on init
    // Here you can place the component props
    // And export some utility functions
	const GRID_SIZE = 8;
</script>

<script>
	import { generateGrid } from '$lib/game';

	const grid = generateGrid(GRID_SIZE);
</script>

<svelte:head>
	<title>✨ Trandy Trash ✨</title>
</svelte:head>

<h1>✨ Trandy Trash ✨</h1>

<div />

<div class="grid" style="--size: {GRID_SIZE}">
    <!-- Keys can be object refs! -->
	{#each grid as item (item)}
		<div class="cell">
			{item.value}
		</div>
	{/each}
</div>

<!-- Styles are automatically scoped -->
<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(var(--size), 1fr);
		grid-template-rows: repeat(var(--size), 1fr);
		max-width: 400px;
		width: 100%;
		aspect-ratio: 1 / 1;
		font-size: min(34px, 8vw);
		user-select: none;
		text-align: center;
		place-items: center;
		border-radius: 5px;
		background-color: #0000003d;
		gap: 2px;
		text-shadow: 2px 2px #00000078;
		box-shadow: 2px 2px #00000078;
	}

	.cell {
		height: 100%;
		width: 100%;
		border-radius: 2px;
	}
</style>
