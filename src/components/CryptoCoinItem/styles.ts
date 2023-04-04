import styled from 'styled-components/native';

export const Container = styled.View`
  flexDirection: row;
  alignItems: center;
  alignContent: center;
  justifyContent: space-between;
  padding: 20px 15px 20px 15px;
  margin: 20px 5px 1px 5px;
  borderBottomWidth: 1px;
  borderBottomColor: rgba(128, 128, 128, 0.1);
  width: 90%; 
  alignSelf: center;
`;

export const ContainerSymbol = styled.View`
  flexDirection: column;
  width: auto;
`;

export const ContainerLeft = styled.View`
  flexDirection: row;
  alignItems: center;
  justifyContent: center;
`;

export const ContainerRight = styled.View`
  flexDirection: column;
  alignItems: center;
  justifyContent: center;
`;

export const TitleBold = styled.Text`
  fontWeight: bold;
  color: black;
`;
export const TitleNormal = styled.Text`
  color: grey;
`;

export const TextPercentage = styled.Text<{ positive?: boolean; negative?: boolean }>`
  color: ${({ positive, negative }) => (positive ? 'green' : negative ? 'red' : 'black')};
`;

export const TextPercentageValue = styled.Text<{ positive?: boolean; negative?: boolean }>`
  color: ${({ positive, negative }) => (positive ? 'green' : negative ? 'red' : 'black')};
`;

export const Wrapper = styled.View`
  flex: 1;
  alignItems: center;
`;

export const OuterContainer = styled.View`
  flex: 1;
  alignItems: center;
  justifyContent: center;
  width: 85%;
`;