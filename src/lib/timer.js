import { writable } from 'svelte/store';

function createTimer() {
	const { set, update, subscribe } = writable(0, () => {
        return stop;
    });

	let interval;

	function stop() {
		clearInterval(interval);
	}

	function start() {
		set(60);
		stop();

		interval = setInterval(() => {
			update((time) => {
				time--;

				if (time === 0) {
					stop();
				}

				return time;
			});
		}, 1000);
	}

    return {
        subscribe,
        start,
        stop,
    }
}

export const timer = createTimer();
