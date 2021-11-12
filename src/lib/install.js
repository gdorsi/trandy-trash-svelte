import { readable } from 'svelte/store';

export function createInstallPrompt() {
	return readable(null, (set) => {
		const handler = (e) => {
			e.preventDefault();
			set(e);
		};

		if (typeof window !== 'undefined') {
			addEventListener('beforeinstallprompt', handler);

			return () => removeEventListener('beforeinstallprompt', handler);
		}
	});
}
