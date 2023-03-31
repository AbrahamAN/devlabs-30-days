export interface CryptoCoin {
  id: string;
  name: string;
  symbol: string;
  metrics: {
    market_data: {
      price_usd: number;
      percent_change_usd_last_24_hours: number;
    };
  };
}

export interface CryptoApiResponse {
  data: CryptoCoin[];
}
