import React from 'react';
import { RouteProp } from '@react-navigation/native';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import { SafeArea } from '../../../components/utils/safearea.component';
import { RestuarantTransformed } from '../../../services/restaurants/mock/types';

export const RestaurantDetailScreen: React.FC<{
  route: RouteProp<{ params: { restaurant: RestuarantTransformed } }, 'params'>;
}> = ({ route }) => {
  const { restaurant } = route.params;

  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
    </SafeArea>
  );
};
