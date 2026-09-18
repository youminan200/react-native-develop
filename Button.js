import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';
import PropTypes from 'prop-types';

// 여기서만 딱 한 번 export
export const ButtonTypes = {
  NUMBER: 'NUMBER',
  OPERATOR: 'OPERATOR',
};

const Button = ({
  title,
  onPress,
  buttonStyle,
  buttonType = ButtonTypes.NUMBER,
}) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        buttonType === ButtonTypes.OPERATOR ? styles.operator : styles.number,
        pressed && styles.pressed,
        buttonStyle,
      ]}
      onPress={onPress}
    >
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  buttonStyle: PropTypes.object,
  buttonType: PropTypes.oneOf(Object.values(ButtonTypes)),
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    color: '#ffffff',
  },
  number: {
    backgroundColor: '#71717a',
  },
  operator: {
    backgroundColor: '#f97316',
  },
  pressed: {
    opacity: 0.7,
  },
});

// 맨 밑에는 default Button 딱 하나만 남겨야 해!
export default Button;
