import path from 'path';
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": [
    "../apps/storybook/stories/**/*.mdx",
    "../apps/storybook/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/experimental-addon-test"
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
  viteFinal: async (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@chimera/ui.card': path.resolve(process.cwd(), 'packages/ui/card/src'),
      '@chimera/ui.icon': path.resolve(process.cwd(), 'packages/ui/icon/src'),
      '@chimera/ui.stat-card': path.resolve(process.cwd(), 'packages/ui/stat-card/src'),
      '@chimera/ui.styles': path.resolve(process.cwd(), 'packages/ui/styles/src'),
      '@chimera/lib.utils': path.resolve(process.cwd(), 'packages/lib/utils/src'),
    };

    config.css = {
      ...(config.css || {}),
      postcss: {
        plugins: [
          (await import('@tailwindcss/postcss')).default,
          (await import('autoprefixer')).default,
        ],
      },
    };

    return config;
  },
};
export default config;