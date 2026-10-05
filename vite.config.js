import path from 'node:path';
import react from '@vitejs/plugin-react';
import { createLogger, defineConfig } from 'vite';
import { readFileSync } from 'node:fs';

const pkg = JSON.parse(readFileSync('./package.json', 'utf-8'));
const allDeps = Object.keys(pkg.dependencies || {});

// Filtrar advertencias específicas de CSS si es necesario
const logger = createLogger();
const loggerError = logger.error;

logger.error = (msg, options) => {
    if (options?.error?.toString().includes('CssSyntaxError: [postcss]')) {
        return;
    }
    loggerError(msg, options);
};

export default defineConfig({
    optimizeDeps: {
        include: allDeps,
    },
    customLogger: logger,
    plugins: [
        react(),
    ],
    server: {
        port: 3000,
    },
    resolve: {
        extensions: ['.jsx', '.js', '.json'],
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    build: {
        rollupOptions: {
            external: [
                '@babel/parser',
                '@babel/traverse',
                '@babel/generator',
                '@babel/types'
            ],
        }
    }
});