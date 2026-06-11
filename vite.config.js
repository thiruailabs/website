import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vitest/config';
import { playwright } from '@vitest/browser-playwright';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],

	server: {
		allowedHosts: [
			'localhost',
			'127.0.0.1',
			'lunchroom-ladybug-appliance.ngrok-free.dev'
		]
	},

	test: {
		expect: { requireAssertions: true },

		projects: [
			{
				extends: './vite.config.js',

				test: {
					name: 'client',

					browser: {
						enabled: true,
						provider: playwright(),
						instances: [{ browser: 'chromium', headless: true }]
					},

					include: ['test/**/*.svelte.{test,spec}.{js,ts}'],
					exclude: ['src/lib/server/**']
				}
			},

			{
				extends: './vite.config.js',

				test: {
					name: 'server',
					environment: 'node',
					include: ['test/**/*.{test,spec}.{js,ts}'],
					exclude: ['src/**/*.svelte.{test,spec}.{js,ts}']
				}
			}
		]
	}
});
