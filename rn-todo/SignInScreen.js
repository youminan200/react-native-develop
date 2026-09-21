import { Image, StyleSheet, View } from 'react-native';
import { useState } from 'react';
import Input, { KeyboardTypes, ReturnKeyTypes } from './components/Input';
import SafeInputView from './components/SafeInputView';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeInputView>
      <View style={styles.container}>
        {/* 이미지 경로도 루트 기준이므로 ./assets/icon.png 입니다 */}
        <Image source={require('./assets/icon.png')} style={styles.image} />

        <Input
          title={'이메일'}
          placeholder="your@email.com"
          keyboardType={KeyboardTypes.EMAIL}
          returnKeyType={ReturnKeyTypes.NEXT}
          value={email}
          onChangeText={(text) => setEmail(text.trim())}
        />
        <Input
          title={'비밀번호'}
          returnKeyType={ReturnKeyTypes.DONE}
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text.trim())}
        />
      </View>
    </SafeInputView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
});

export default SignInScreen;
