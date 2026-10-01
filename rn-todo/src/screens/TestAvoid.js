import {
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  useWindowDimensions,
  View,
} from 'react-native';

const TestAvoid = () => {
  const height = useWindowDimensions().height;

  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
      }}
      behavior={Platform.select({ ios: 'position' })}
      contentContainerStyle={{ flex: 1 }}
    >
      <View style={{ flex: 1 }}>
        <View style={[styles.box, { backgroundColor: '#737373' }]}>
          <Image
            source={require('../../assets/icon.png')}
            style={{ width: 200, height: 200 }}
          />
        </View>

        {/* 소괄호 ()를 중괄호 {}로 수정 및 styles.box 참조 */}
        <View style={[styles.box, { backgroundColor: '#818cf8' }]}>
          <TextInput
            style={styles.input}
            placeholder="padding"
            placeholderTextColor={'#000000'}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    justifyContent: 'center', // justyfyContent -> justifyContent
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    backgroundColor: '#ffffff',
    height: 40,
    width: '100%',
  },
});

export default TestAvoid;
