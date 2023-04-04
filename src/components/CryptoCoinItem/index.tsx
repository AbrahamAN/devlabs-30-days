import React, {useEffect, useState} from 'react';
import {ActivityIndicator, ScrollView} from 'react-native';
import Avatar from '../Avatar';
import {
  Container,
  ContainerLeft,
  ContainerRight,
  ContainerSymbol,
  TextPercentage,
  TitleBold,
  TitleNormal,
  Wrapper,
  OuterContainer,
  TextPercentageValue,
} from './styles';
import {CryptoCoin} from '../types';
import {fetchCryptoData} from './cryptoAPI';
import Icon from 'react-native-vector-icons/Feather';

export const CryptoCoinItem = () => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [crypto, setCrypto] = useState<CryptoCoin[]>([]);

  useEffect(() => {
    const getCrypto = async () => {
      const data = await fetchCryptoData();
      setCrypto(data);
      setLoading(false);
    };

    getCrypto();
  }, []);

  return (
    <Wrapper>
      <ScrollView>
        {isLoading && <ActivityIndicator />}
        {!isLoading &&
          crypto.map((coin: CryptoCoin) => (
            <OuterContainer key={coin.id}>
              <Container>
                <ContainerLeft>
                  <Avatar
                    size={50}
                    uri={`https://messari.io/asset-images/${coin.id}/128.png`}
                  />
                  <ContainerSymbol>
                    <TitleBold>{coin.name}</TitleBold>
                    <TitleNormal>{coin.symbol}</TitleNormal>
                  </ContainerSymbol>
                </ContainerLeft>
                <ContainerRight>
                  <TitleBold>
                    $
                    {coin.metrics.market_data.price_usd
                      ? coin.metrics.market_data.price_usd.toFixed(2)
                      : 'N/A'}
                  </TitleBold>
                  <TextPercentage
                    positive={
                      coin.metrics.market_data
                        .percent_change_usd_last_24_hours >= 0
                    }
                    negative={
                      coin.metrics.market_data
                        .percent_change_usd_last_24_hours < 0
                    }>
                    {coin.metrics.market_data
                      .percent_change_usd_last_24_hours >= 0 ? (
                      <>
                        <TextPercentageValue positive>
                          <Icon size={15} name="arrow-up-right" />
                          {coin.metrics.market_data
                            .percent_change_usd_last_24_hours
                            ? coin.metrics.market_data.percent_change_usd_last_24_hours.toFixed(
                                2
                              )
                            : 'N/A'}
                        </TextPercentageValue>
                      </>
                    ) : (
                      <>
                        <TextPercentageValue negative>
                          <Icon size={15} name="arrow-down-left" />
                          {coin.metrics.market_data
                            .percent_change_usd_last_24_hours
                            ? coin.metrics.market_data.percent_change_usd_last_24_hours.toFixed(
                                2
                              )
                            : 'N/A'}
                        </TextPercentageValue>
                      </>
                    )}
                    %
                  </TextPercentage>
                </ContainerRight>
              </Container>
            </OuterContainer>
          ))}
      </ScrollView>
    </Wrapper>
  );
};
