import React from 'react';
import styled from 'styled-components/native';
import { Card } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import { Theme } from '../../../infra/theme/types';
import star from '../../../../assets/star';

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

interface ThemeProps {
  theme: Theme;
}

const Title = styled.Text`
  font-family: ${(props: ThemeProps) => props.theme.fonts.heading};
  font-size: ${(props: ThemeProps) => props.theme.fontSizes.body};
  color: ${(props: ThemeProps) => props.theme.colors.ui.primary};
`;

const Address = styled.Text`
  font-family: ${(props: ThemeProps) => props.theme.fonts.body};
  font-size: ${(props: ThemeProps) => props.theme.fontSizes.caption};
`;

const RestaurantCard = styled(Card)`
  background-color: ${(props: ThemeProps) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  background-color: ${(props: ThemeProps) => props.theme.colors.bg.primary};
  padding: ${(props: ThemeProps) => props.theme.space[3]};
`;

const Info = styled.View`
  padding: ${(props: ThemeProps) => props.theme.space[3]};
`;

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props: ThemeProps) => props.theme.space[2]};
  padding-bottom: ${(props: ThemeProps) => props.theme.space[2]};
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

  const ratingArray = new Array(Math.floor(rating)).fill(null);

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Rating>
          {ratingArray.map((_rating, index) => (
            <SvgXml key={index} xml={star} width={20} height={20} />
          ))}
        </Rating>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
