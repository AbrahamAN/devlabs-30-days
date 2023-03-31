import React, {useEffect, useState} from 'react';
import {ActivityIndicator, ScrollView, Text} from 'react-native';
import styled from 'styled-components/native';
import Avatar from './Avatar';
import {CryptoApiResponse, CryptoCoin} from './types';

export const CryptoCoinItem = () => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [crypto, setCrypto] = useState<CryptoCoin[]>([]);

  const getCrypto = async () => {
    try {
      const response = await fetch('https://data.messari.io/api/v1/assets');
      const {data}: CryptoApiResponse = await response.json();
      setCrypto(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCrypto();
  }, []);

  const Container = styled.View({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    margin: 25,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  });

  const ContainerSymbol = styled.View({
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  });

  return (
    <ScrollView>
      {isLoading && <ActivityIndicator />}
      {!isLoading &&
        crypto.map((coin: CryptoCoin) => (
          <Container key={coin.id}>
            <Avatar
              size={50}
              uri={`https://messari.io/asset-images/${coin.id}/128.png`}
            />
            <ContainerSymbol>
              <Text>{coin.name}</Text>
              <Text>{coin.symbol}</Text>
            </ContainerSymbol>
            <Text>${coin.metrics.market_data.price_usd.toFixed(2)}</Text>
          </Container>
        ))}
    </ScrollView>
  );
};
