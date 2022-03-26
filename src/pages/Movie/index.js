import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native';

function MovieScreen(props) {
  const {
    navigation: { navigate }
  } = props

  const handleNavigation = () => {
    navigate('Session')
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Movie Screen</Text>
      <TouchableOpacity onPress={handleNavigation}>
        <Text>Go To Session</Text>
      </TouchableOpacity>
    </View>
  );
}

export default MovieScreen;