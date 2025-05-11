import { StyleProp, TextStyle } from 'react-native';
import { StyledTextInput } from './styles';
import { TextInput } from 'react-native-paper';
import { useState } from 'react';

type Props = {
  value: string | undefined;
  onChange: ((text: any) => void) | undefined;
  placeholder?: string;
  label?: string;
  style?: StyleProp<TextStyle>;
  allowShowPassword?: boolean;
};

export default function Input(props: Props) {
  const [showPassword, setShowPassword] = useState(false);

  return (
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
    />
  );
}
