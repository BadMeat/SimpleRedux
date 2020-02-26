import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import LibraryList from './component/LibraryList';
import ResturantList from './component/ResturantList';
import RestauranScreen from './component/RestauranScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="RestauranScreen"
          component={RestauranScreen}
          options={{ title: 'Restaurant' }} />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Beranda' }} />
        <Stack.Screen
          name="LibraryList"
          component={LibraryList}
          options={{ title: 'List' }} />
        <Stack.Screen
          name="List"
          component={ResturantList}
          options={{ title: 'List' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;