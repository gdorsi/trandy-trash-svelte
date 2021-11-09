<script context="module">
	export const prerender = true;
</script>

<script>
	import { generateGrid, getCombos, getRandomTrash } from '$lib/game';
	import { flip } from 'svelte/animate';
	import { fade } from 'svelte/transition';
	import { tweened } from 'svelte/motion';

	const GRID_SIZE = 8;

	const grid = generateGrid(GRID_SIZE);
	let selected = null;
	let validMoves = [];
	let score = 0;
	const displayedScore = tweened();

	$: displayedScore.set(score);

	$: if (selected !== null) {
		validMoves = [selected - GRID_SIZE, selected + GRID_SIZE];

		const selectedRow = Math.floor(selected / GRID_SIZE);

		if (selectedRow === Math.floor((selected - 1) / GRID_SIZE)) {
			validMoves.push(selected - 1);
		}

		if (selectedRow === Math.floor((selected + 1) / GRID_SIZE)) {
			validMoves.push(selected + 1);
		}
	} else {
		validMoves = [];
	}

	let streak = 1;

	function processCombos() {
		const combos = getCombos(grid, GRID_SIZE);

		for (let combo of combos) {
			score += combo.size * streak * combos.length;

			for (let i of combo) {
				let j = i;

				while (j > 7) {
					[grid[j], grid[j - GRID_SIZE]] = [grid[j - GRID_SIZE], grid[j]];
					j -= GRID_SIZE;
				}

				grid[i % GRID_SIZE] = getRandomTrash();
			}
		}

		if (getCombos(grid, GRID_SIZE).length) {
			streak++;
			setTimeout(processCombos, 500);
		} else {
			streak = 1;
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
	<title>Trendy Trash</title>
</svelte:head>

<h2>Score: <span class="bulletin">{Math.floor($displayedScore)}</span></h2>
<div class="grid" style="--size: {GRID_SIZE}">
	{#each grid as item, i (item)}
		<div
			class={selected === i
				? 'selected'
				: Boolean(validMoves.length) && !validMoves.includes(i)
				? 'not-valid-move'
				: ''}
			on:click={() => handleClick(i)}
			animate:flip
			in:fade
			out:fade
		>
			{item.value}
		</div>
	{/each}
</div>

<style>
	h2 {
		font-weight: bold;
		font-family: var(--font-mono);
		text-transform: uppercase;
		font-size: 28px;
		background-color: #0000003d;
		padding: 16px;
		border-radius: 5px;
		box-shadow: 1px 1px #00000078;
	}

	.bulletin {
		display: inline-block;
		background-color: #FFFAE2;
		padding: .5em;
		text-align: center;
		border-radius: 5px;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(var(--size), 1fr);
		grid-template-rows: repeat(var(--size), 1fr);
		width: 400px;
		height: 400px;
		user-select: none;
		text-align: center;
		place-items: center;
		font-size: 34px;
		border-radius: 5px;
		background-color: #0000003d;
		gap: 2px;
		text-shadow: 2px 2px #00000078;
		box-shadow: 2px 2px #00000078;
	}

	.grid > div {
		height: 100%;
		width: 100%;
		border-radius: 2px;
	}

	.not-valid-move {
		opacity: 0.3;
	}

	.selected {
		opacity: 1;
	}
</style>
