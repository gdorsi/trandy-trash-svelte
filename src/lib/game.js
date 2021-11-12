export const trash = ['🚬', '🥡', '🍬', '🧱', '🔋', '📀'];

export function getRandomTrash() {
	return {
		value: trash[Math.round(Math.random() * (trash.length - 1))]
	};
}

export function generateGrid(size) {
	const grid = Array.from(Array(size * size), getRandomTrash);
	let combos = getCombos(grid, size);

	// No combo at start
	while (combos.length) {
		for (let combo of combos) {
			for (let i of combo) {
				grid[i] = getRandomTrash();
			}
		}

		combos = getCombos(grid, size);
	}

	return grid;
}

function sameValue(a, b) {
	if (!a || !b) return false;

	return a.value === b.value;
}

export function getCombos(grid, size) {
	const inACombo = new Set();
	const combos = [];
	let currentCombo = new Set();

	const getRow = (i) => Math.floor(i / size);
	const addToCombo = (i) => {
		currentCombo.add(i);
		inACombo.add(i);
	};

	for (let i = 0; i < grid.length; i++) {
		if (inACombo.has(i)) {
			continue;
		}

		if (
			sameValue(grid[i], grid[i + 1]) &&
			sameValue(grid[i], grid[i + 2]) &&
			getRow(i) === getRow(i + 2)
		) {
			addToCombo(i);
			addToCombo(i + 1);
			addToCombo(i + 2);
			let j = i + 3;

			while (sameValue(grid[i], grid[j]) && getRow(i) === getRow(j)) {
				addToCombo(j);
				j++;
			}
		}

		if (sameValue(grid[i], grid[i + 8]) && sameValue(grid[i], grid[i + 16])) {
			addToCombo(i);
			addToCombo(i + 8);
			addToCombo(i + 16);
			let j = i + 24;

			while (sameValue(grid[i], grid[j])) {
				addToCombo(j);
				j += 8;
			}
		}

		if (currentCombo.size) {
			combos.push(currentCombo);
			currentCombo = new Set();
		}
	}

	return combos;
}
