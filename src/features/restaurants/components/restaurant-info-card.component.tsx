import React from 'react';
import styled from 'styled-components/native';
import { Card } from 'react-native-paper';

type Restaurant = {
  name: string;
  icon: string;
  photos: string[];
  address: string;
  isOpenNow: boolean;
  rating: number;
  isClosedTemporarily: boolean;
};

interface RestaurantProps {
  restaurant: Restaurant;
}

const Title = styled.Text`
  padding: 16px;
  color: ${(props: any) => props.theme.colors.ui.primary};
`;

const RestaurantCard = styled(Card)`
  background-color: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
  background-color: white;
  padding: 20px;
`;

export const RestaurantInfoCard: React.FC<RestaurantProps> = ({ restaurant = {} }) => {
  const {
    name = 'Some Restaurant',
    icon,
    photos = [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
    ],
    address = '100 some random street',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};
