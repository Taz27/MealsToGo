import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Platform } from 'react-native';

const isAndroid: boolean = Platform.OS === 'android';

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <Text>Search</Text>
        </View>
        <View style={styles.content}>
            <Text>List</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style='auto' />
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: isAndroid ? StatusBar.currentHeight : 0,
    backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  header: { 
    padding: 16, 
    backgroundColor: 'green', 
  },
  content: { 
    flex: 1, 
    padding: 16, 
    backgroundColor: 'blue', 
  }
});
