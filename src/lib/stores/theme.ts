import { writable } from 'svelte/store';
import { browser } from '$app/environment';

type Theme = 'light' | 'dark';

function createThemeStore() {
	const { subscribe, set } = writable<Theme>('light');

	return {
		subscribe,
		init: () => {
			if (!browser) return;

			const stored = localStorage.getItem('theme') as Theme | null;
			const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
			const initialTheme = stored || (prefersDark ? 'dark' : 'light');

			set(initialTheme);
			document.documentElement.setAttribute('data-theme', initialTheme);
		},
		toggle: () => {
			if (!browser) return;

			const currentTheme = document.documentElement.getAttribute('data-theme') as Theme;
			const newTheme: Theme = currentTheme === 'dark' ? 'light' : 'dark';

			document.documentElement.setAttribute('data-theme', newTheme);
			localStorage.setItem('theme', newTheme);
			set(newTheme);
		},
		set: (newTheme: Theme) => {
			if (!browser) return;

			document.documentElement.setAttribute('data-theme', newTheme);
			localStorage.setItem('theme', newTheme);
			set(newTheme);
		}
	};
}

export const theme = createThemeStore();
