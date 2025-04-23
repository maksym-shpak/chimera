const { join } = require('path');

module.exports = {
    content: [
        join(__dirname, 'packages/**/*.{js,ts,jsx,tsx}'),
        join(__dirname, 'apps/**/*.{js,ts,jsx,tsx}'),
        join(__dirname, 'storybook/**/*.{js,ts,jsx,tsx}'),
    ],
    theme: {
        extend: {
            colors: {
                debug: '#f0f', // рожевий
            },
        },
    },
    plugins: [],
};
