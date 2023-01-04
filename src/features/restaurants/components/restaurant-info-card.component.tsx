import React from 'react';
import { Text, Image } from 'react-native';
import styled from 'styled-components/native';
import { Card } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import { Theme } from '../../../infra/theme/types';
import star from '../../../../assets/star';
import open from '../../../../assets/open';
import { Spacer } from '../../../components/spacer/spacer.component';

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

const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const RestaurantInfoCard: React.FC<RestaurantProps> = ({ restaurant = {} }) => {
  const {
    name = 'Some Restaurant',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
    ],
    address = '100 some random street',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = new Array(Math.floor(rating)).fill(null);

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Section>
          <Rating>
            {ratingArray.map((_rating, index) => (
              <SvgXml key={index} xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text style={{ color: 'red', fontSize: 12 }}>CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Image source={{ uri: icon }} style={{ width: 15, height: 15 }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
