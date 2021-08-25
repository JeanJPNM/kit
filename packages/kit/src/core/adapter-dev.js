import { load_config } from './config/index.js';

/**
 *
 * @param {{
 *  port?: number
 *  host?: string
 *  https?: boolean
 * }} options
 */
export async function startServer({ port = 3000, host, https = false } = {}) {
	process.env.NODE_ENV = process.env.NODE_ENV || 'development';
	const config = await load_config();

	const { dev } = await import('./dev/index.js');

	const watcher = await dev({ port, host, https, config });

	watcher.on('stdout', (data) => {
		process.stdout.write(data);
	});

	watcher.on('stderr', (data) => {
		process.stderr.write(data);
	});
	return /** @type {import('vite').ViteDevServer} */ (watcher.vite).middlewares;
}
