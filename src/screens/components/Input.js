import React, { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import { BLACK, GRAY, PRIMARY } from '../colors';

export const IconNames = {
  EMAIL: 'email',
  PASSWORD: 'lock',
};

export const KeyboardTypes = {
  DEFAULT: 'default',
  EMAIL: 'email-address',
};

export const ReturnKeyTypes = {
  DONE: 'done',
  NEXT: 'next',
};

const Input = ({
  title,
  placeholder,
  value,
  iconName,
  keyboardType,
  returnKeyType,
  secureTextEntry,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.title,
          value && styles.hasValueTitle,
          isFocused && styles.focusedTitle,
        ]}
      >
        {title}
      </Text>

      <View>
        <TextInput
          {...props}
          value={value}
          style={[
            styles.input,
            value && styles.hasValueInput,
            isFocused && styles.focusedInput,
            iconName && styles.inputWithIcon,
          ]}
          placeholder={placeholder ?? title}
          placeholderTextColor={GRAY?.DEFAULT ?? '#a6a6a6'}
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="none"
          keyboardType={keyboardType}
          returnKeyType={returnKeyType}
          secureTextEntry={secureTextEntry}
          keyboardAppearance="light"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />

        {iconName && (
          <View style={styles.icon}>
            <MaterialCommunityIcons
              name={iconName}
              size={20}
              color={(() => {
                switch (true) {
                  case isFocused:
                    return PRIMARY?.DEFAULT ?? '#007AFF';
                  case !!value:
                    return BLACK ?? '#000000';
                  default:
                    return GRAY?.DEFAULT ?? '#a6a6a6';
                }
              })()}
            />
          </View>
        )}
      </View>
    </View>
  );
};

Input.defaultProps = {
  keyboardType: KeyboardTypes.DEFAULT,
  returnKeyType: ReturnKeyTypes.DONE,
  secureTextEntry: false,
};

Input.propTypes = {
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  iconName: PropTypes.oneOf(Object.values(IconNames)), // 대문자 Object
  keyboardType: PropTypes.oneOf(Object.values(KeyboardTypes)),
  returnKeyType: PropTypes.oneOf(Object.values(ReturnKeyTypes)),
  secureTextEntry: PropTypes.bool,
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
    color: GRAY?.DEFAULT ?? '#a6a6a6',
  },
  hasValueTitle: {
    color: BLACK ?? '#000000',
  },
  focusedTitle: {
    fontWeight: '600',
    color: PRIMARY?.DEFAULT ?? '#007AFF',
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 44,
    borderColor: GRAY?.DEFAULT ?? '#a6a6a6',
    fontSize: 15,
  },
  inputWithIcon: {
    paddingLeft: 38,
  },
  hasValueInput: {
    borderColor: BLACK ?? '#000000',
    color: BLACK ?? '#000000',
  },
  focusedInput: {
    borderColor: PRIMARY?.DEFAULT ?? '#007AFF',
    color: PRIMARY?.DEFAULT ?? '#007AFF',
  },
  icon: {
    position: 'absolute',
    left: 8,
    height: '100%',
    justifyContent: 'center',
  },
});

export default Input;
