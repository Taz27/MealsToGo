import React from 'react';
import { CompactRestaurantInfo } from '../../../components/restaurant/compact-restaurant-info.component';
import { RestuarantTransformed } from '../../../services/restaurants/mock/types';

export const MapCallout: React.FC<{ restaurant: RestuarantTransformed }> = ({ restaurant }) => {
  return <CompactRestaurantInfo isMap restaurant={restaurant} />;
};
