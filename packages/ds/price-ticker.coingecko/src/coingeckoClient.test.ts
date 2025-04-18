import { describe, it, expect, vi } from 'vitest';
import { createCoingeckoClient } from './coingeckoClient';

describe('createCoingeckoClient', () => {
    it('should return PriceData[] when symbols are found', async () => {
        const mockHttp = {
            get: vi.fn().mockResolvedValue({
                bitcoin: { usd: 50000 },
                ethereum: { usd: 3000 }
            })
        };

        const client = createCoingeckoClient(mockHttp);
        const result = await client.getPrices(['bitcoin', 'ethereum']);

        expect(result).toEqual([
            { symbol: 'bitcoin', price: 50000 },
            { symbol: 'ethereum', price: 3000 }
        ]);
    });

    it('should skip symbols not present in API response', async () => {
        const mockHttp = {
            get: vi.fn().mockResolvedValue({
                bitcoin: { usd: 50000 }
            })
        };

        const client = createCoingeckoClient(mockHttp);
        const result = await client.getPrices(['bitcoin', 'ethereum']);

        expect(result).toEqual([{ symbol: 'bitcoin', price: 50000 }]);
    });

    it('should return [] on error', async () => {
        const mockHttp = {
            get: vi.fn().mockRejectedValue(new Error('network error'))
        };

        const client = createCoingeckoClient(mockHttp);
        const result = await client.getPrices(['bitcoin']);

        expect(result).toEqual([]);
    });
});
