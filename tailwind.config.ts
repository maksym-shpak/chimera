import type { Config } from 'tailwindcss';
import { join } from 'path';

const config: Config = {
    content: [
        join(__dirname, 'packages/**/*.{js,ts,jsx,tsx}'),
        join(__dirname, 'apps/**/*.{js,ts,jsx,tsx}'),
        join(__dirname, 'storybook/**/*.{js,ts,jsx,tsx}'),
    ],
    theme: {
        extend: {
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
            },
        },
    },
    plugins: [],
};

export default config;
