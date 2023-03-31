export interface CryptoCoin {
  id: string;
  name: string;
  symbol: string;
  metrics: {
    market_data: {
      price_usd: number;
    };
  };
}

export interface CryptoApiResponse {
  data: CryptoCoin[];
}
