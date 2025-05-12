import { useState } from 'react';
import { StyledTextInput } from './styles';
import { HelperText, TextInput } from 'react-native-paper';
import {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  StyleProp,
  TextInputFocusEventData,
  TextStyle,
} from 'react-native';

type Props = {
  value: string | undefined;
  onChange: (((text: string) => void) & Function) | undefined;
  placeholder?: string;
  label?: string;
  style?: StyleProp<TextStyle>;
  allowShowPassword?: boolean;
  onBlur?: ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void) &
    ((args: any) => void);
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  error?: boolean;
  errorText?: string | null;
  keyboardType?: KeyboardTypeOptions;
};

export default function Input(props: Props) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <StyledTextInput
        value={props.value}
        onChangeText={(text) => props.onChange && props.onChange(text)}
        placeholder={props.placeholder}
        mode='outlined'
        activeOutlineColor='#ec6724'
        outlineColor='#D9D9D9'
        label={props.label}
        placeholderTextColor={'#AAAAAA'}
        style={props.style}
        contentStyle={{
          fontFamily: 'Inter_400Regular',
          paddingLeft: 12,
        }}
        onBlur={props.onBlur}
        autoCapitalize={props.autoCapitalize}
        keyboardType={props.keyboardType}
        theme={{
          colors: {
            onSurfaceVariant: '#AAAAAA',
          },
        }}
        right={
          props.allowShowPassword && (
            <TextInput.Icon
              icon={showPassword ? 'eye-off' : 'eye'}
              onPress={() => setShowPassword(!showPassword)}
            />
          )
        }
        secureTextEntry={props.allowShowPassword ? !showPassword : false}
        error={!!props.error}
      />
      {!!props.error && (
        <HelperText type='error' visible={!!props.error}>
          {props.errorText}
        </HelperText>
      )}
    </>
  );
}
