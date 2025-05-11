import styled from 'styled-components/native';

export const StyledContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  padding: 15px;
`;

export const StyledText = styled.Text`
  font-family: 'Inter_400Regular';
`;

export const StyledTitle = styled(StyledText)`
  font-size: 32px;
`;

export const StyledView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const StyledRememberMeView = styled.View`
  flex-direction: row;
  align-items: center;
`;
