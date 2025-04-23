import { defineConfig } from 'vitest/config';
import tailwindcss from 'tailwindcss'

import path from 'path';

export default defineConfig({
    test: {
        globals: true,
        environment: 'happy-dom',
        include: ['packages/*/*/src/**/*.test.ts', 'packages/*/*/src/**/*.test.tsx'],
        alias: {
            '@chimera/*': path.resolve(__dirname, 'packages/*/src')
        }
    },
    resolve: {
        alias: {
            '@chimera/*': path.resolve(__dirname, 'packages/*/src'),
            '@chimera/ui.styles': path.resolve(process.cwd(), 'packages/ui/styles/src')
        }
    },
    plugins: [
        tailwindcss(),
    ],
}); 