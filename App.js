import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  SafeAreaView,
} from 'react-native';
import Button, { ButtonTypes } from './Button';
import { useState } from 'react';

const App = () => {
  const [result, setResult] = useState(0);

  const windowWidth = useWindowDimensions().width;
  const width = (windowWidth - 5) / 4;

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />

      <View style={styles.container}>
        <View style={styles.resultContainer}>
          <Text style={styles.text}>{result}</Text>
        </View>

        {/* 하단 버튼 영역 */}
        <View style={styles.buttonContainer}>
          <View style={styles.leftPad}>
            <View style={styles.number}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                <Button
                  key={num}
                  title={num.toString()}
                  onPress={() => {}}
                  buttonStyle={{ width, height: width, marginTop: 1 }}
                />
              ))}
            </View>
            <View style={styles.bottom}>
              {/* 0 버튼 */}
              <Button
                title="0"
                buttonType={ButtonTypes.NUMBER}
                buttonStyle={{ width, height: width, marginTop: 1 }}
                onPress={() => {}}
              />
            </View>
          </View>

          {/* 연산 버튼 영역 */}
          <View>
            <Button
              title="="
              buttonType={ButtonTypes.OPERATOR}
              buttonStyle={{ width, height: width, marginTop: 1 }}
              onPress={() => {}}
            />
            <Button
              title="C"
              buttonType={ButtonTypes.OPERATOR}
              buttonStyle={{ width, height: width, marginTop: 1 }}
              onPress={() => {}}
            />
            <Button
              title="-"
              buttonType={ButtonTypes.OPERATOR}
              buttonStyle={{ width, height: width, marginTop: 1 }}
              onPress={() => {}}
            />
            <Button
              title="+"
              buttonType={ButtonTypes.OPERATOR}
              buttonStyle={{ width, height: width * 2 + 1, marginTop: 1 }}
              onPress={() => {}}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000000',
  },
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  resultContainer: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  text: {
    fontSize: 60,
    fontWeight: '700',
    color: '#ffffff',
    padding: 30,
  },
  buttonContainer: {
    backgroundColor: '#000000',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  leftPad: {
    width: '75%',
  },
  number: {
    flexWrap: 'wrap-reverse',
    flexDirection: 'row', // floexDirection 오타 수정
    justifyContent: 'space-evenly',
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default App;
