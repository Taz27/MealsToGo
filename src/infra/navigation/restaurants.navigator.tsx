import React from 'react';
import { RestaurantDetailScreen } from '../../features/restaurants/screens/restaurant-detail.screen';

import {
  createStackNavigator,
  StackNavigationProp,
  TransitionPresets,
} from '@react-navigation/stack';

import { RestaurantsScreen } from '../../features/restaurants/screens/restaurants.screen';

export type StackParamList = {
  RestaurantsMain: undefined;
  RestaurantDetail: undefined;
};

export type StackNavigation = StackNavigationProp<StackParamList>;

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{ ...TransitionPresets.ModalPresentationIOS, headerShown: false }}
    >
      <RestaurantStack.Screen name="RestaurantsMain" component={RestaurantsScreen} />
      <RestaurantStack.Screen name="RestaurantDetail" component={RestaurantDetailScreen as any} />
    </RestaurantStack.Navigator>
  );
};
