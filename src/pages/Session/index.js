import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native';

function SessionScreen(props) {
  const {
    navigation: { navigate }
  } = props

  const handleNavigation = () => {
    navigate('Success')
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Session Screen</Text>
      <TouchableOpacity onPress={handleNavigation}>
        <Text>Go To Success</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SessionScreen;