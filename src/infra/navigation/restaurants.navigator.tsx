import React from 'react';
import { Text } from 'react-native';

import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';

import { RestaurantsScreen } from '../../features/restaurants/screens/restaurants.screen';

export type StackParamList = {
  RestaurantsMain: undefined;
  RestaurantDetail: undefined;
};

export type StackNavigation = StackNavigationProp<StackParamList>;

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator screenOptions={{ headerShown: false }}>
      <RestaurantStack.Screen name="RestaurantsMain" component={RestaurantsScreen} />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={() => <Text>Restaurant Detail</Text>}
      />
    </RestaurantStack.Navigator>
  );
};
