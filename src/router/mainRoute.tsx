import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREEN_NAME } from '@/constants';
import { CategoryScreen, SignUpScreen } from '@/screens';

const MainStack = createNativeStackNavigator();

const MainRoute = () => {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name={SCREEN_NAME.SIGN_UP} component={SignUpScreen} />
      <MainStack.Screen name={SCREEN_NAME.CATEGORY} component={CategoryScreen} />
    </MainStack.Navigator>
  );
};

export default MainRoute;
