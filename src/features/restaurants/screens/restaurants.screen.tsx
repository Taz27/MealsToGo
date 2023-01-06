import React, { useState, useContext } from 'react';
import { Searchbar } from 'react-native-paper';
import { View, FlatList } from 'react-native';
import styled from 'styled-components/native';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import { Theme } from '../../../infra/theme/types';
import { Spacer } from '../../../components/spacer/spacer.component';
import { SafeArea } from '../../../components/utils/safearea.component';
import { RestuarantsContext } from '../../../services/restaurants/restaurants.context';
import { RestuarantTransformed } from '../../../services/restaurants/mock/types';

interface ThemeProps {
  theme: Theme;
}

const SearchContainer = styled(View)`
  padding: ${(props: ThemeProps) => props.theme.space[3]};
`;

const RestaurantListContainer = styled(View)`
  flex: 1;
  padding: ${(props: ThemeProps) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { restaurants, isLoading, error } = useContext(RestuarantsContext);

  console.log({ error });
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar placeholder="Search" onChangeText={setSearchQuery} value={searchQuery} />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => (
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item as RestuarantTransformed} />
            </Spacer>
          )}
          keyExtractor={(item: any) => (item.name as string)?.toString()}
        />
      </RestaurantListContainer>
    </SafeArea>
  );
};
