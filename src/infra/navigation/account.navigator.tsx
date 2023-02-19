import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';

import { AccountScreen } from '../../features/account/screens/account.screen';
import { LoginScreen } from '../../features/account/screens/login.screen';
import { RegisterScreen } from '../../features/account/screens/register.screen';

const Stack = createStackNavigator();

export type StackParamList = {
  Main: undefined;
  Login: undefined;
  Register: undefined;
};

export type StackNavigation = StackNavigationProp<StackParamList>;

export const AccountNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={AccountScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};
