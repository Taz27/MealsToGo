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
  padding: ${(props: any) => props.theme.space[3]};
  color: ${(props: any) => props.theme.colors.ui.primary};
`;

const RestaurantCard = styled(Card)`
  background-color: ${(props: any) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  background-color: ${(props: any) => props.theme.colors.bg.primary};
  padding: ${(props: any) => props.theme.space[3]};
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
