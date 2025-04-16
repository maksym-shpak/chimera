/**
 * Represents the price data for a cryptocurrency.
 * @property {string} symbol - The symbol of the cryptocurrency.
 * @property {number} price - The current price of the cryptocurrency.
 * @property {Date} lastUpdated - The date and time when the price was last updated.
 */
export type PriceData = {
    symbol: string;
    price: number;
    lastUpdated: Date;
}; 