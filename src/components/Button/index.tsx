import {
  GestureResponderEvent,
  PressableStateCallbackType,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { StyledButton, StyledText } from './styles';

type Props = {
  onPress: ((e: GestureResponderEvent) => void) | null | undefined;
  style?:
    | StyleProp<ViewStyle>
    | ((state: PressableStateCallbackType) => StyleProp<ViewStyle>);
};

export default function Button(props: Props) {
  return (
    <StyledButton
      onPress={(e) => props.onPress && props.onPress(e)}
      style={props.style}
    >
      <StyledText>Entrar</StyledText>
    </StyledButton>
  );
}
