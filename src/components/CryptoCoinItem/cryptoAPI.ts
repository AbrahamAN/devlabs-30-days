import {CryptoApiResponse} from '../types';

export const fetchCryptoData = async () => {
  try {
    const response = await fetch('https://data.messari.io/api/v1/assets');
    const {data}: CryptoApiResponse = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};