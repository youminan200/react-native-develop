import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

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
      <Text style={[styles.title, isFocused && styles.focusedTitle]}>
        {title}
      </Text>
      <View style={styles.inputContainer}>
        {iconName && (
          <View style={styles.icon}>
            <MaterialCommunityIcons
              name={iconName}
              size={20}
              color={isFocused ? '#007AFF' : value ? '#000' : '#a6a6a6'}
            />
          </View>
        )}
        <TextInput
          {...props}
          value={value}
          style={[
            styles.input,
            iconName && { paddingLeft: 38 },
            isFocused && styles.focusedInput,
          ]}
          placeholder={placeholder ?? title}
          placeholderTextColor="#a6a6a6"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType={keyboardType}
          returnKeyType={returnKeyType}
          secureTextEntry={secureTextEntry}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
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
  iconName: PropTypes.string,
  keyboardType: PropTypes.oneOf(Object.values(KeyboardTypes)),
  returnKeyType: PropTypes.oneOf(Object.values(ReturnKeyTypes)),
  secureTextEntry: PropTypes.bool,
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 16,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#666',
  },
  focusedTitle: {
    color: '#007AFF',
  },
  inputContainer: {
    position: 'relative',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    height: 46,
    paddingHorizontal: 12,
    fontSize: 15,
  },
  focusedInput: {
    borderColor: '#007AFF',
  },
  icon: {
    position: 'absolute',
    left: 10,
    zIndex: 1,
  },
});

export default Input;
