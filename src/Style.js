import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #3c3b3b;
  align-items: center;
  justify-content: center;
  padding: 30px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#fff',
})`
  background: #a1a1a1;
  border-radius: 60px;
  padding: -10px 120px;
  height: 52px;
  font-size: 16px;
  color: #333;
`;

export const Bt = styled.Button`
  background: #df1313;
  border-radius: 4px;
  height: 52px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;
