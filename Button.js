import React from 'react';
import { ActivityIndicator, Pressable, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import { GRAY, PRIMARY, WHITE } from '../colors';

const Button = ({ title, onPress, disabled, isLoading }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        disabled && styles.disabledButton,
        pressed && !disabled && !isLoading && styles.pressedButton,
      ]}
      onPress={onPress}
      disabled={disabled || isLoading}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color={WHITE ?? '#ffffff'} />
      ) : (
        <Text style={[styles.title, disabled && styles.disabledTitle]}>
          {title}
        </Text>
      )}
    </Pressable>
  );
};

Button.defaultProps = {
  title: 'button title',
  disabled: false,
  isLoading: false,
};

Button.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
};

const styles = StyleSheet.create({
  button: {
    height: 48,
    borderRadius: 8,
    backgroundColor: PRIMARY?.DEFAULT ?? '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    width: '100%',
  },
  pressedButton: {
    opacity: 0.8,
  },
  disabledButton: {
    backgroundColor: GRAY?.DEFAULT ?? '#d1d5db',
  },
  title: {
    color: WHITE ?? '#ffffff',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 20,
  },
  disabledTitle: {
    color: '#9ca3af',
  },
});

export default Button;
