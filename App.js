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

// 연산자 상수 정의 (Button 파일에서 가져오거나 직접 정의)
export const Operators = {
  CLEAR: 'C',
  MINUS: '-',
  PLUS: '+',
  EQUAL: '=',
};

const App = () => {
  const [result, setResult] = useState(0);
  const [formula, setFormula] = useState([]);

  const windowWidth = useWindowDimensions().width;
  const width = (windowWidth - 5) / 4;

  const onPressNumber = (number) => {
    const last = formula[formula.length - 1]; // lenngth -> length 오타 수정
    if (isNaN(last)) {
      setResult(number);
      setFormula((prev) => [...prev, number]);
    } else {
      const newNumber = (last ?? 0) * 10 + number;
      setResult(newNumber);
      setFormula((prev) => {
        // setFormulamula -> setFormula 오타 수정
        prev.pop();
        return [...prev, newNumber];
      });
    }
  };

  // return문 위쪽으로 이동 및 문법 오타 정리
  const onPressOperator = (operator) => {
    switch (operator) {
      case Operators.CLEAR:
        setFormula([]);
        setResult(0);
        return;

      case Operators.EQUAL:
        return;

      default: {
        const last = formula[formula.length - 1];
        if ([Operators.PLUS, Operators.MINUS].includes(last)) {
          setFormula((prev) => {
            prev.pop();
            return [...prev, operator]; // perator -> operator 오타 수정
          });
        } else {
          setFormula((prev) => [...prev, operator]);
        }
        return;
      }
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />

      <View style={styles.container}>
        {/* 결과 표시 영역 */}
        <View style={styles.resultContainer}>
          <Text style={styles.text}>{result.toLocaleString()}</Text>
        </View>

        {/* 하단 전체 버튼 컨테이너 */}
        <View style={styles.buttonContainer}>
          {/* 왼쪽 패드 영역 (숫자 및 0) */}
          <View style={styles.leftPad}>
            <View style={styles.number}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                <Button
                  key={num}
                  title={num.toString()}
                  onPress={() => onPressNumber(num)}
                  buttonStyle={{ width, height: width, marginBottom: 1 }}
                />
              ))}
            </View>
            <View style={styles.bottom}>
              <Button
                title="0"
                onPress={() => onPressNumber(0)}
                buttonType={ButtonTypes.NUMBER}
                buttonStyle={{
                  width: width * 2,
                  height: width,
                  marginTop: 1,
                }}
              />
            </View>
          </View>

          {/* 오른쪽 패드 영역 (연산 버튼) */}
          <View>
            <Button
              title="C"
              buttonType={ButtonTypes.OPERATOR}
              buttonStyle={{ width, height: width, marginTop: 1 }}
              onPress={() => onPressOperator(Operators.CLEAR)}
            />
            <Button
              title="-"
              buttonType={ButtonTypes.OPERATOR}
              buttonStyle={{ width, height: width, marginTop: 1 }}
              onPress={() => onPressOperator(Operators.MINUS)}
            />
            <Button
              title="="
              buttonType={ButtonTypes.OPERATOR}
              buttonStyle={{ width, height: width, marginTop: 1 }}
              onPress={() => onPressOperator(Operators.EQUAL)}
            />
            <Button
              title="+"
              buttonType={ButtonTypes.OPERATOR}
              buttonStyle={{
                width: width,
                height: width * 2 + 1,
                marginTop: 1,
              }}
              onPress={() => onPressOperator(Operators.PLUS)}
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
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default App;
