export const trash = ['🚬', '🥡', '🍬', '🧱', '🔋', '📀'];

export function getRandomTrash() {
	return {
		value: trash[Math.round(Math.random() * (trash.length - 1))]
	};
}

export function generateGrid(size) {
	const grid = Array.from(Array(size * size), getRandomTrash);
	let combo = getCombo(grid, size);

	// No combo at start
	while (combo.length) {
		for (let i of combo) {
			grid[i] = getRandomTrash();
		}

		combo = getCombo(grid, size);
	}

	return grid;
}

function sameValue(a, b) {
	if (!a || !b) return false;

	return a.value === b.value;
}

export function getCombo(grid) {
	const size = Math.sqrt(grid.length);
	const combo = new Set();

	const getRow = (i) => Math.floor(i / size);
	const addToCombo = (...args) => {
		for (let i of args) {
			combo.add(i);
		}
	};

	const streak = [];

	// horizontal combos
	for (let i = 0; i < grid.length; i++) {
		if (sameValue(grid[i], grid[i + 1]) && getRow(i) === getRow(i + 1)) {
			streak.push(i);
		} else {
			if (streak.length > 1) {
				addToCombo(...streak, i);
			}
			streak.length = 0;
		}
	}

	// vertical combos
	for (let col = 0; col < size; col++) {
		for (let row = 0; row < size; row++) {
			const i = row * size + col;

			if (sameValue(grid[i], grid[i + size])) {
				streak.push(i);
			} else {
				if (streak.length > 1) {
					addToCombo(...streak, i);
				}
				streak.length = 0;
			}
		}
	}

	return Array.from(combo.values()).sort((a, b) => a - b);
}

export function getValidMoves(grid, i) {
	const size = Math.sqrt(grid.length);
	const validMoves = [i - size, i + size];

	const selectedRow = Math.floor(i / size);

	if (selectedRow === Math.floor((i - 1) / size)) {
		validMoves.push(i - 1);
	}

	if (selectedRow === Math.floor((i + 1) / size)) {
		validMoves.push(i + 1);
	}

	return validMoves;
}

export function getComboScore(combo, streak) {
	return combo.length ** streak;
}

export function replaceItems(grid, combo) {
	const size = Math.sqrt(grid.length);

	for (let i of combo) {
		let j = i;

		while (j > 7) {
			[grid[j], grid[j - size]] = [grid[j - size], grid[j]];
			j -= size;
		}

		grid[i % size] = getRandomTrash();
	}

	return grid;
}
