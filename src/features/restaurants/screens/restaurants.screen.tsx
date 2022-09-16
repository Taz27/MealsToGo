import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';
import { StyleSheet, View, SafeAreaView, StatusBar, Platform } from 'react-native';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';

const isAndroid: boolean = Platform.OS === 'android';

export const RestaurantsScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar placeholder="Search" onChangeText={setSearchQuery} value={searchQuery} />
      </View>
      <View style={styles.content}>
        <RestaurantInfoCard />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: isAndroid ? StatusBar.currentHeight : 0,
    backgroundColor: 'white',
  },
  search: {
    padding: 16,
  },
  content: {
    flex: 1,
    padding: 16,
    backgroundColor: 'blue',
  },
});
