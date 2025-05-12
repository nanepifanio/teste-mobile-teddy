import { StyledButton, StyledText } from './styles';
import {
  GestureResponderEvent,
  PressableStateCallbackType,
  StyleProp,
  ViewStyle,
} from 'react-native';

type Props = {
  onPress: ((e: GestureResponderEvent) => void) | null | undefined;
  style?:
    | StyleProp<ViewStyle>
    | ((state: PressableStateCallbackType) => StyleProp<ViewStyle>);
  buttonText: string;
  buttonTextColor?: string;
  buttonTextSize?: number;
};

export default function Button(props: Props) {
  return (
    <StyledButton
      onPress={(e) => props.onPress && props.onPress(e)}
      style={props.style}
    >
      <StyledText
        buttonTextSize={props.buttonTextSize}
        buttonTextColor={props.buttonTextColor}
      >
        {props.buttonText}
      </StyledText>
    </StyledButton>
  );
}
