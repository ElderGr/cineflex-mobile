import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native';

function HomeScreen(props) {
  const {
    navigation: { navigate }
  } = props

  const handleNavigation = () => {
    navigate('Movie')
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={handleNavigation}>
        <Text>Go To Movie</Text>
      </TouchableOpacity>
    </View>
  );
}

export default HomeScreen;