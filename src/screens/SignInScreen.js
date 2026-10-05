import { Image, StyleSheet, View } from 'react-native';
import Input, {
  IconNames,
  KeyboardTypes,
  ReturnKeyTypes,
} from '../components/Input';
import SafeInputView from '../components/SafeInputView';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <Image
            source={require('../../assets/icon.png')}
            style={styles.image}
          />
          <TextInput
            placeholder="이메일 (your@email.com)"
            value={email}
            onChangeText={(text) => setEmail(text.trim())}
            keyboardType="email-address"
            returnKeyType="next"
            autoCapitalize="none"
            style={styles.input}
          />
          <TextInput
            placeholder="비밀번호"
            value={password}
            onChangeText={(text) => setPassword(text.trim())}
            returnKeyType="done"
            secureTextEntry
            style={styles.input}
          />
        </View>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  input: {
    width: '80%',
    height: 48,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 20,
    paddingHorizontal: 10,
    fontSize: 16,
  },
});

export default SignInScreen;
