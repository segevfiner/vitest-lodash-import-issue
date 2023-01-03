import {defineConfig} from 'tsup';

export default defineConfig({
    entry: ['src/index.ts'],
    target: 'es2020',
    platform: 'browser',
    format: ['esm'],
    sourcemap: true,
    dts: true,
})
