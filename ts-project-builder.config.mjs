import wasm from '@rollup/plugin-wasm';
import { defineConfig } from 'ts-project-builder';

export default defineConfig({ additionalInputPlugins: { afterBuiltIns: [wasm()] } });