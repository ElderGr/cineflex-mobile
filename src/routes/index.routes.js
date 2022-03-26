import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../pages/Home';
import MovieScreen from '../pages/Movie';
import SessionScreen from '../pages/Session';
import SuccessScreen from '../pages/Success';

const Stack = createNativeStackNavigator();

const defaultHeaderConfig = {
  title: `Cineflex`,
  headerTitleAlign: `center`,
  headerTintColor: `#E8833A`,
  headerTitleStyle:{
    fontSize: 30
  },
  headerStyle: {
    backgroundColor: `#C3CFD9`,
  },
  
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={defaultHeaderConfig}
        />
        <Stack.Screen 
          name="Movie" 
          component={MovieScreen} 
          options={defaultHeaderConfig}
        />
        <Stack.Screen 
          name="Session" 
          component={SessionScreen} 
          options={defaultHeaderConfig}
        />
        <Stack.Screen 
          name="Success" 
          component={SuccessScreen} 
          options={defaultHeaderConfig}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;