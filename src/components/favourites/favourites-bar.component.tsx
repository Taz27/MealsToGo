import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Spacer } from '../spacer/spacer.component';
import { CompactRestaurantInfo } from '../restaurant/compact-restaurant-info.component';
import { Text } from '../typography/text.component';
import { RestuarantTransformed } from '../../services/restaurants/mock/types';

const FavouritesWrapper = styled.View`
  padding: 10px;
`;

interface ComponentProps {
  favourites: RestuarantTransformed[];
  onNavigate: (c: string, item: { restaurant: RestuarantTransformed }) => void;
}

export const FavouritesBar: React.FC<ComponentProps> = ({ favourites, onNavigate }) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <FavouritesWrapper>
      <Spacer position="left" size="large">
        <Text variant="caption">Favourites</Text>
      </Spacer>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map(restaurant => {
          const key = restaurant.name;
          return (
            <Spacer key={key} position="left" size="medium">
              <TouchableOpacity
                onPress={() =>
                  onNavigate('RestaurantDetail', {
                    restaurant,
                  })
                }
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};
