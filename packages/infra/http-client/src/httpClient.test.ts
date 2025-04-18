import { describe, it, expect, vi } from 'vitest';
import { defaultHttpClient } from './httpClient';

const mockFetch = vi.fn();
global.fetch = mockFetch;

describe('defaultHttpClient', () => {
    it('should return JSON when response is 200 OK', async () => {
        const mockResponse = { data: 'test' };
        mockFetch.mockResolvedValueOnce({
            ok: true,
            json: async () => mockResponse
        });

        const result = await defaultHttpClient.get('https://api.example.com');
        expect(result).toEqual(mockResponse);
    });

    it('should throw an error when response status is not 2xx', async () => {
        mockFetch.mockResolvedValueOnce({
            ok: false,
            status: 404
        });

        await expect(defaultHttpClient.get('https://api.example.com')).rejects.toThrow('HTTP error! Status: 404');
    });
}); 