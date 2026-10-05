import React, { useState, useRef, useEffect } from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { signIn } from '../api/auth';

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const passwordRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  // 이메일 입력 여부에 따라 배경색 동적 변경 ('lightskyblue' 따옴표 적용)
  useEffect(() => {
    navigation.setOptions({
      contentStyle: {
        backgroundColor: email ? 'lightskyblue' : 'gainsboro',
      },
    });
  }, [email, navigation]);

  // 이메일과 비밀번호가 모두 입력되었을 때만 버튼 활성화
  useEffect(() => {
    setDisabled(!email || !password || isLoading);
  }, [email, password, isLoading]);

  const onSubmit = async () => {
    if (!isLoading && !disabled) {
      try {
        setIsLoading(true);
        Keyboard.dismiss();
        const data = await signIn(email, password);
        console.log('로그인 성공:', data);
        setIsLoading(false);
        navigation.navigate('List');
      } catch (error) {
        console.log('로그인 에러:', error);
        Alert.alert(
          '로그인 실패',
          error.message || '로그인 중 오류가 발생했습니다.',
          [{ text: '확인', onPress: () => setIsLoading(false) }],
        );
      }
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.keyboardView}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Pressable style={styles.pressable} onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <Image
            source={require('../../assets/icon.png')}
            style={styles.image}
            resizeMode="contain"
          />

          <View style={styles.form}>
            {/* 이메일 입력창 */}
            <View style={styles.inputWrapper}>
              <Text style={styles.label}>이메일</Text>
              <View style={styles.inputBox}>
                <MaterialCommunityIcons
                  name="email"
                  size={20}
                  color="#a6a6a6"
                  style={styles.icon}
                />
                <TextInput
                  placeholder="your@email.com"
                  placeholderTextColor="#a6a6a6"
                  keyboardType="email-address"
                  returnKeyType="next"
                  autoCapitalize="none"
                  value={email}
                  editable={!isLoading}
                  onChangeText={(text) => setEmail(text.trim())}
                  onSubmitEditing={() => passwordRef.current?.focus()}
                  style={styles.input}
                />
              </View>
            </View>

            {/* 비밀번호 입력창 */}
            <View style={styles.inputWrapper}>
              <Text style={styles.label}>비밀번호</Text>
              <View style={styles.inputBox}>
                <MaterialCommunityIcons
                  name="lock"
                  size={20}
                  color="#a6a6a6"
                  style={styles.icon}
                />
                <TextInput
                  ref={passwordRef}
                  placeholder="비밀번호"
                  placeholderTextColor="#a6a6a6"
                  secureTextEntry
                  returnKeyType="done"
                  value={password}
                  editable={!isLoading}
                  onChangeText={(text) => setPassword(text.trim())}
                  onSubmitEditing={onSubmit}
                  style={styles.input}
                />
              </View>
            </View>

            {/* 로그인 버튼 */}
            <TouchableOpacity
              style={[styles.button, disabled && styles.buttonDisabled]}
              onPress={onSubmit}
              disabled={disabled}
              activeOpacity={0.8}
            >
              {isLoading ? (
                <ActivityIndicator size="small" color="#ffffff" />
              ) : (
                <Text style={styles.buttonText}>로그인</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

SignInScreen.propTypes = {
  navigation: PropTypes.object,
};

const styles = StyleSheet.create({
  keyboardView: {
    flex: 1,
  },
  pressable: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: 140,
    height: 140,
    marginBottom: 30,
  },
  form: {
    width: '100%',
  },
  inputWrapper: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#666',
  },
  inputBox: {
    position: 'relative',
    justifyContent: 'center',
  },
  icon: {
    position: 'absolute',
    left: 12,
    zIndex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    height: 48,
    paddingLeft: 42,
    paddingRight: 12,
    fontSize: 15,
  },
  button: {
    height: 48,
    borderRadius: 8,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonDisabled: {
    backgroundColor: '#b0c4de',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SignInScreen;
