import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const BottomTabNavigator = () => {
  const iconSize = 24; // Set a fixed size for the icons
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleIconPress = (iconName) => {
    setSelectedIcon(iconName);
  };

  const getIconColor = (iconName) => {
    return selectedIcon === iconName ? 'rgba(64, 64, 64, 0.6)' : 'rgba(64, 64, 64, 1)';
  };

  return (
    <View style={styles.frame}>
      <TouchableOpacity onPress={() => handleIconPress('home')} style={styles.div}>
        <Icon name="home" size={iconSize} color={getIconColor('home')} />
        <Text style={styles.textWrapper2}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleIconPress('stats')} style={styles.div}>
        <Icon name="line-chart" size={iconSize} color={getIconColor('stats')} />
        <Text style={styles.textWrapper2}>Stats</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleIconPress('trophy')} style={styles.div}>
        <Icon name="trophy" size={iconSize} color={getIconColor('trophy')} />
        <Text style={styles.textWrapper2}>Leaderboard</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleIconPress('user')} style={styles.div}>
        <Icon name="user" size={iconSize} color={getIconColor('user')} />
        <Text style={styles.textWrapper2}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  frame: {
    alignItems: 'center',
    backgroundColor: 'rgba(128, 128, 128, 0.2)',
    borderBottomWidth: 1,
    borderColor: 'grey',
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    position: 'relative',
    width: 342,
  },
  div: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'relative',
  },
  textWrapper2: {
    color: '#909090',
    fontSize: 12,
    fontWeight: '400',
    letterSpacing: 0,
    textAlign: 'center',
    width: 60,
  },
};

export default BottomTabNavigator;
