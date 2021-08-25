import { Adapter } from '@sveltejs/kit';
import { BuildOptions } from 'esbuild';

interface AdapterOptions {
	out?: string;
	precompress?: boolean;
	env?: {
		path?: string;
		host?: string;
		port?: string;
	};
	esbuild?: (options: BuildOptions) => Promise<BuildOptions> | BuildOptions;
}
interface HandlerOptions {
	build: string;
	dev: boolean;
}
declare function plugin(options?: AdapterOptions): Adapter;

export default plugin;

export declare function svelteKit(options: HandlerOptions): any;
