import styled from 'styled-components/native';

type ButtonProps = {
  buttonTextSize?: number;
  buttonTextColor?: string;
};

export const StyledButton = styled.Pressable`
  background-color: #ec6724;
  width: 100%;
  height: 60;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

export const StyledText = styled.Text<ButtonProps>`
  font-family: 'Inter_700Bold';
  color: ${({ buttonTextColor }) => buttonTextColor ?? '#fff'};
  font-size: ${({ buttonTextSize }) =>
    buttonTextSize ? `${buttonTextSize}px` : '16px'};
`;
