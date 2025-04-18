import { Meta, StoryObj } from '@storybook/react';
import { PriceTicker } from '@chimera/ui.price-ticker';

const meta: Meta<typeof PriceTicker> = {
    title: 'Components/PriceTicker',
    component: PriceTicker,
};

export default meta;

type Story = StoryObj<typeof PriceTicker>;

export const Default: Story = {
    args: {
        fetchPrices: async () => [
            { symbol: 'bitcoin', price: 50000, lastUpdated: new Date() },
            { symbol: 'ethereum', price: 3000, lastUpdated: new Date() },
        ],
    },
}; 