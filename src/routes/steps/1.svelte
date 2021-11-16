<script>
	import { generateGrid } from '$lib/game';

	const GRID_SIZE = 8;

	const grid = generateGrid(GRID_SIZE);
</script>

<svelte:head>
	<title>1</title>
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

<a href="/steps/2" style="color:black; font-weight: bold;"target="_blank">Next</a>

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
