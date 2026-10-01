import React from 'react';
import { Image, StyleSheet, View, TextInput } from 'react-native';
import { ReturnKeyTypes } from './components/Input';

const SignInScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/icon.png')}
        style={{ width: 200, height: 200 }}
      />
      <TextInput
        placeholder="이메일"
        keyboardType="email-address"
        style={styles.input}
      />
      <TextInput
        placeholder="비밀번호"
        returnKeyType={ReturnKeyTypes.DONE}
        secureTextEntry
        keyboardAppearance="light"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  input: {
    width: '80%',
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 15,
    paddingHorizontal: 10,
    fontSize: 16,
  },
});

export default SignInScreen;
