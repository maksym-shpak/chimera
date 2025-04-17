import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
    test: {
        globals: true,
        environment: 'happy-dom',
        include: ['packages/*/*/src/**/*.ts', 'packages/*/*/src/**/*.tsx'],
        alias: {
            '@chimera/*': path.resolve(__dirname, 'packages/*/src')
        }
    },
    resolve: {
        alias: {
            '@chimera/*': path.resolve(__dirname, 'packages/*/src')
        }
    }
}); 