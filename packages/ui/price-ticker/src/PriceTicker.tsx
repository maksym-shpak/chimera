import React, { useEffect, useState } from 'react';
import { PriceData } from '@chimera/types.price-ticker';

interface PriceTickerProps {
    fetchPrices: () => Promise<PriceData[]>;
}

export const PriceTicker: React.FC<PriceTickerProps> = ({ fetchPrices }) => {
    const [prices, setPrices] = useState<PriceData[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchPrices();
                setPrices(data);
            } catch (error) {
                console.error('Error fetching prices:', error);
            }
        };

        fetchData();
        const interval = setInterval(fetchData, 10000);
        return () => clearInterval(interval);
    }, [fetchPrices]);

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Price Ticker</h1>
            <ul className="list-disc pl-5">
                {prices.map((priceData) => (
                    <li key={priceData.symbol} className="mb-2">
                        <span className="font-semibold">{priceData.symbol}:</span> ${priceData.price.toFixed(2)}
                    </li>
                ))}
            </ul>
        </div>
    );
}; 