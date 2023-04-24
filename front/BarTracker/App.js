import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './components/homescreen';
import Announcements from './components/announcement';
import Login from './components/login';
import About from './components/about';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Go Home" component={HomeScreen} />
        <Tab.Screen name="About" component={About} />
        <Tab.Screen name="Contact" component={Announcements} />
        <Tab.Screen name="Login" component={Login}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
    // <View style={styles.container}>
    //   <Text>Hello!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
