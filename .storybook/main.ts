import path from 'path';
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": [
    "../apps/storybook/stories/**/*.mdx",
    "../apps/storybook/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-essentials",
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
      '@chimera/ui.chart-overview': path.resolve(process.cwd(), 'packages/ui/chart-overview/src'),
      '@chimera/ui.avatar': path.resolve(process.cwd(), 'packages/ui/avatar/src'),
      '@chimera/ui.sales': path.resolve(process.cwd(), 'packages/ui/sales/src'),
      '@chimera/data.use-stats-overview': path.resolve(process.cwd(), 'packages/data/use-stats-overview/src'),
      '@chimera/widgets.stat-overview': path.resolve(process.cwd(), 'packages/widgets/stat-overview/src'),
      '@chimera/data.use-chart-overview': path.resolve(process.cwd(), 'packages/data/use-chart-overview/src'),
      '@chimera/widgets.stat-chart': path.resolve(process.cwd(), 'packages/widgets/stat-chart/src'),
      '@chimera/data.use-sales-overview': path.resolve(process.cwd(), 'packages/data/use-sales-overview/src'),
      '@chimera/widgets.stat-sales': path.resolve(process.cwd(), 'packages/widgets/stat-sales/src'),
      '@chimera/layouts.dashboard': path.resolve(process.cwd(), 'packages/layouts/dashboard/src'),
    };

    return config;
  },
};
export default config;