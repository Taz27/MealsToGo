import React from 'react';
import styled from 'styled-components/native';
import { RestuarantTransformed } from '../../../services/restaurants/mock/types';

const MyText = styled.Text``;
export const MapCallout: React.FC<{ restaurant: RestuarantTransformed }> = ({ restaurant }) => (
  <MyText>{restaurant.name}</MyText>
);
