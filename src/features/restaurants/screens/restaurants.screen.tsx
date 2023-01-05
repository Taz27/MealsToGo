import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';
import { View, FlatList } from 'react-native';
import styled from 'styled-components/native';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import { Theme } from '../../../infra/theme/types';
import { Spacer } from '../../../components/spacer/spacer.component';
import { SafeArea } from '../../../components/utils/safearea.component';

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

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar placeholder="Search" onChangeText={setSearchQuery} value={searchQuery} />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantList
          data={[
            { name: 1 },
            { name: 2 },
            { name: 3 },
            { name: 4 },
            { name: 5 },
            { name: 6 },
            { name: 7 },
            { name: 8 },
            { name: 9 },
            { name: 10 },
            { name: 11 },
            { name: 12 },
            { name: 13 },
            { name: 14 },
          ]}
          renderItem={() => (
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard />
            </Spacer>
          )}
          keyExtractor={(item: any) => (item.name as string)?.toString()}
        />
      </RestaurantListContainer>
    </SafeArea>
  );
};
