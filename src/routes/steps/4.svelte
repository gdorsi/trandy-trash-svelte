<script context="module">
	const GRID_SIZE = 8;
</script>

<script>
	import { generateGrid, getCombo, replaceItems, getValidMoves } from '$lib/game';
	import { flip } from 'svelte/animate';
	import { sineIn } from 'svelte/easing';
	import { fly, fade } from 'svelte/transition';

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

	function flyDistance(i) {
		return (400 / GRID_SIZE) * (Math.floor(i / GRID_SIZE) + 1);
	}

	function animationDuration(d) {
		return Math.sqrt(d) * 30;
	}
</script>

<svelte:head>
	<title>✨ Trandy Trash ✨</title>
</svelte:head>

<h1>✨ Trandy Trash ✨</h1>

<div />

<!-- let's add some math! -->
<div class="grid" style="--size: {GRID_SIZE}">
	{#each grid as item, i (item)}
		<div
			class="cell"
			class:interactive={selected === null || validMoves.includes(i)}
			on:click={() => handleClick(i)}
			animate:flip={{ easing: sineIn, duration: animationDuration }}
			in:fly={{
				easing: sineIn,
				y: flyDistance(i) * -1,
				duration: animationDuration(flyDistance(i))
			}}
			out:fade
		>
			{item.value}
		</div>
	{/each}
</div>

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
