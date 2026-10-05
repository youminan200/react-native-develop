import React from 'react';
import { Pressable, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SignInScreen from '../screens/SignInScreen';
import ListScreen from '../screens/ListScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={({ navigation }) => ({
        contentStyle: { backgroundColor: '#ffffff' },
        headerTitleAlign: 'center',
        headerTintColor: '#2563eb',
        headerTitleStyle: {
          fontWeight: '700',
        },
        headerLeft: ({ canGoBack, tintColor }) => {
          if (!canGoBack) {
            return null;
          }
          return (
            <Pressable
              onPress={() => navigation.goBack()}
              hitSlop={10}
              style={{ paddingRight: 10 }}
            >
              <MaterialCommunityIcons
                name="chevron-left"
                size={32}
                color={tintColor}
              />
            </Pressable>
          );
        },
      })}
    >
      <Stack.Screen
        name="List"
        component={ListScreen}
        options={{
          title: 'TODO List',
          headerTitle: ({ children, tintColor }) => (
            <Pressable onPress={() => console.log('Title pressed')}>
              <Text
                style={{ color: tintColor, fontSize: 18, fontWeight: '700' }}
              >
                {children ?? 'TODO List'}
              </Text>
            </Pressable>
          ),
        }}
      />

      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{
          title: '로그인',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
