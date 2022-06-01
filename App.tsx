import React, { useState } from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { Searchbar } from 'react-native-paper';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Platform } from 'react-native';

const isAndroid: boolean = Platform.OS === 'android';

export default function App() {
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Searchbar placeholder="Search" onChangeText={setSearchQuery} value={searchQuery} />
        </View>
        <View style={styles.content}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

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
