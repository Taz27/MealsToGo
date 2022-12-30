import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';
import { View, SafeAreaView, StatusBar, Platform } from 'react-native';
import styled from 'styled-components/native';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import { Theme } from '../../../infra/theme/types';

interface ThemeProps {
  theme: Theme;
}

const isAndroid: boolean = Platform.OS === 'android';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  padding-top: ${isAndroid ? StatusBar.currentHeight : 0}px;
  background-color: white;
`;

const SearchContainer = styled(View)`
  padding: ${(props: ThemeProps) => props.theme.space[3]};
`;

const RestaurantListContainer = styled(View)`
  flex: 1;
  padding: ${(props: ThemeProps) => props.theme.space[3]};
`;

export const RestaurantsScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar placeholder="Search" onChangeText={setSearchQuery} value={searchQuery} />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantInfoCard />
      </RestaurantListContainer>
    </SafeArea>
  );
};
