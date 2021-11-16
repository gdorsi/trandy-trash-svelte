<script>
	import { generateGrid, getCombo, replaceItems, getValidMoves } from '$lib/game';
	import { flip } from 'svelte/animate';
	import { fly, fade } from 'svelte/transition';

	const GRID_SIZE = 8;

	let grid = generateGrid(GRID_SIZE);
	let selected = null;
	let validMoves = [];

	$: if (selected !== null) {
		validMoves = getValidMoves(grid, selected);
	} else {
		validMoves = [];
	}

	function processCombos() {
		const combo = getCombo(grid);

		if (combo.length) {
			grid = replaceItems(grid, combo);

			if (getCombo(grid).length) {
				setTimeout(processCombos, 500);
			}
		}
	}

	function handleClick(i) {
		if (selected !== null) {
			if (validMoves.includes(i)) {
				[grid[i], grid[selected]] = [grid[selected], grid[i]];
			}

			setTimeout(processCombos, 500);

			selected = null;
		} else {
			selected = i;
		}
	}
</script>

<svelte:head>
	<title>3</title>
</svelte:head>

<h1>✨ Trandy Trash ✨</h1>

<div />

<!-- built in animations! -->
<div class="grid" style="--size: {GRID_SIZE}">
	{#each grid as item, i (item)}
		<div
			class="cell"
			class:interactive={selected === null || validMoves.includes(i)}
			on:click={() => handleClick(i)}
			animate:flip
			in:fly
			out:fade
		>
			{item.value}
		</div>
	{/each}
</div>

<a href="/steps/4" style="color:black; font-weight: bold;"target="_blank">Next</a>

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
		opacity: 0.3;
	}

	.interactive {
		opacity: 1;
	}
</style>
