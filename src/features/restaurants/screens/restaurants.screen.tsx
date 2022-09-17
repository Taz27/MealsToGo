import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';
import { View, SafeAreaView, StatusBar, Platform } from 'react-native';
import styled from 'styled-components/native';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';

const isAndroid: boolean = Platform.OS === 'android';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  padding-top: ${isAndroid ? StatusBar.currentHeight : 0}px;
  background-color: white;
`;

const SearchContainer = styled(View)`
  padding: 16px;
`;

const RestaurantListContainer = styled(View)`
  flex: 1;
  padding: 16px;
  background-color: blue;
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
