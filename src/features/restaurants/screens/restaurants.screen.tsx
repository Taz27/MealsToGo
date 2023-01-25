import React, { useContext } from 'react';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import { View, FlatList, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import { Search } from '../components/search.component';
import { Theme } from '../../../infra/theme/types';
import { Spacer } from '../../../components/spacer/spacer.component';
import { SafeArea } from '../../../components/utils/safearea.component';
import { RestuarantsContext } from '../../../services/restaurants/restaurants.context';
import { RestuarantTransformed } from '../../../services/restaurants/mock/types';
import { StackNavigation } from '../../../infra/navigation/restaurants.navigator';

interface ThemeProps {
  theme: Theme;
}

export type StackNavigationProps = {
  navigation: StackNavigation;
};

const RestaurantListContainer = styled(View)`
  flex: 1;
  padding: ${(props: ThemeProps) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen: React.FC<StackNavigationProps> = ({ navigation }) => {
  const { restaurants, isLoading } = useContext(RestuarantsContext);

  if (isLoading) {
    return (
      <SafeArea style={{ justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator animating={true} color={MD2Colors.red800} size="large" />
      </SafeArea>
    );
  }

  return (
    <SafeArea>
      <Search />
      <RestaurantListContainer>
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('RestaurantDetail')}>
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item as RestuarantTransformed} />
              </Spacer>
            </TouchableOpacity>
          )}
          keyExtractor={(item: any) => (item.name as string)?.toString()}
        />
      </RestaurantListContainer>
    </SafeArea>
  );
};
