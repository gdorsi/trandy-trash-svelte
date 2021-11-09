<script context="module">
	export const prerender = true;
</script>

<script>
	import { generateGrid, getCombos, getRandomTrash } from '$lib/game';
	import { flip } from 'svelte/animate';
	import { fade } from 'svelte/transition';

	const grid = generateGrid(8);
	let selected = null;
	let validMoves = [];

	$: if (selected !== null) {
		validMoves = [selected - 8, selected + 8];

		const selectedRow = Math.floor(selected / 8);

		if (selectedRow === Math.floor((selected - 1) / 8)) {
			validMoves.push(selected - 1);
		}

		if (selectedRow === Math.floor((selected + 1) / 8)) {
			validMoves.push(selected + 1);
		}
	} else {
		validMoves = [];
	}

	function processCombos() {
		const combos = getCombos(grid, 8);

		for (let combo of combos) {
			for (let i of combo) {
				let j = i;

				while (j > 7) {
					[grid[j], grid[j - 8]] = [grid[j - 8], grid[j]];
					j -= 8;
				}

				grid[i % 8] = getRandomTrash();
			}
		}

		if (getCombos(grid, 8).length) {
			setTimeout(processCombos, 500);
		}
	}

	function handleClick(i) {
		if (selected !== null) {
			if (validMoves.includes(i)) {
				[grid[i], grid[selected]] = [grid[selected], grid[i]];
			}

			processCombos();

			selected = null;
		} else {
			selected = i;
		}
	}
</script>

<svelte:head>
	<title>Trandy Trash</title>
</svelte:head>

<div class="grid">
	{#each grid as item, i (item.id)}
		<div
			class="{selected === i && 'selected'} {Boolean(validMoves.length) &&
				!validMoves.includes(i) &&
				'not-valid-move'}"
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
	.grid {
		display: grid;
		grid-template-columns: repeat(8, 1fr);
		grid-template-rows: repeat(8, 1fr);
		width: 400px;
		height: 400px;
		user-select: none;
		place-items: center;
		font-size: 36px;
	}

	.not-valid-move {
		opacity: 0.3;
	}

	.selected {
		opacity: 1;
	}
</style>
