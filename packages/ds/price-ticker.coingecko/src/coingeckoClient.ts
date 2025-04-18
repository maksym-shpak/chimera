import { HttpClient } from '@chimera/infra.http-client';

export interface PriceData {
    symbol: string;
    price: number;
}

export function createCoingeckoClient(http: HttpClient) {
    return {
        async getPrices(symbols: string[]): Promise<PriceData[]> {
            const url = `https://api.coingecko.com/api/v3/simple/price?ids=${symbols.join(',')}&vs_currencies=usd`;
            try {
                const data = await http.get<Record<string, { usd: number }>>(url);
                return symbols.map(symbol => {
                    const priceInfo = data[symbol];
                    return priceInfo ? { symbol, price: priceInfo.usd } : null;
                }).filter((priceData): priceData is PriceData => priceData !== null);
            } catch (error) {
                console.error('Error fetching prices:', error);
                return [];
            }
        }
    };
}
