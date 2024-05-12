import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import BottomTabNavigator from '../components/BottomTabNavigator';

// Custom HomeScreen component
const HomeScreen = () => {
  const navigation = useNavigation();

  // State for tracking walking data
  const [startTime, setStartTime] = useState(null);
  const [distance, setDistance] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);

  // Update elapsed time every second
  useEffect(() => {
    let interval;
    if (startTime) {
      interval = setInterval(() => {
        const now = new Date().getTime();
        setElapsedTime((now - startTime) / 1000);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [startTime]);

  // Function to handle walking button press
  const handleWalkingPress = () => {
    if (!startTime) {
      // Start walking
      setStartTime(new Date().getTime());
    } else {
      // Stop walking
      setStartTime(null);
    }
  };

  // Function to calculate average pace
  const calculateAveragePace = () => {
    if (distance === 0) {
      return '0:00';
    }
    const paceInSeconds = elapsedTime / distance;
    const paceMinutes = Math.floor(paceInSeconds / 60);
    const paceSeconds = Math.floor(paceInSeconds % 60);
    return `${paceMinutes}:${String(paceSeconds).padStart(2, '0')}`;
  };

  // Function to calculate calories burnt (dummy formula, replace with actual calculation)
  const calculateCaloriesBurnt = () => {
    // Replace this formula with the actual calculation based on your requirements
    return Math.round(elapsedTime / 60); // Dummy formula: 1 calorie per minute
  };

  // Function to format time in HH:mm:ss
const formatTime = (timeInSeconds) => {
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds % 3600) / 60);
  const seconds = Math.floor(timeInSeconds % 60);

  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
};
  
  return (
    <View style={styles.container}>
      <View style={styles.upperCenterContainer}>
        <Image source={require('../images/walking.gif')} style={styles.upperMiddleImage} />
      </View>
      <View style={styles.centerContainer}>
        <Image source={require('../images/planet.png')} style={styles.middleImage} />
      </View>
      {/* Top section */}
      <View style={styles.topSection}>
        <Text style={styles.duration}>Duration</Text>
        <Text style={styles.durationTime}>{formatTime(elapsedTime)}</Text>
        <Image source={{ uri: 'https://res.cloudinary.com/dfwchdncf/image/upload/v1706271074/download-removebg-preview_sotbag.png' }} style={styles.auicon} />
        <TouchableOpacity style={styles.button} onPress={() => console.log('Walking button pressed')}>
          <Text style={styles.buttonText}>Walking</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => console.log('Cycling button pressed')}>
          <Text style={styles.buttonText}>Cycling</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button1} onPress={handleWalkingPress}>
          {/* Display different icons based on walking state */}
          {startTime ? (
            <FontAwesome5 name="stop-circle" size={74} color="rgba(64, 64, 64, 0.8)" />
          ) : (
            <FontAwesome5 name="play-circle" size={74} color="rgba(64, 64, 64, 0.8)" />
          )}
        </TouchableOpacity>
      </View>

      {/* Main content */}
      <Text style={styles.distance}>Distance</Text>
      <Text style={styles.distanceText}>{distance.toFixed(2)} km</Text>
      <Text style={styles.average}>Average Pace</Text>
      <Text style={styles.averageDist}>{calculateAveragePace()} /km</Text>
      <Text style={styles.calories}>Calories</Text>
      <Text style={styles.caloriesCount}>{calculateCaloriesBurnt()} kcal</Text>
      <BottomTabNavigator />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  upperCenterContainer: {
    alignItems: 'center',
  },
  upperMiddleImage: {
    width: 86,
    height: 106,
    bottom: -130,
  },
  centerContainer: {
    alignItems: 'center',
  },
  middleImage: {
    height: 261,
    width: 261,
    bottom: -57,
  },
  topSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 20,
  },
  button: {
    marginHorizontal: 30,
    backgroundColor: 'rgba(192, 192, 192, 0.3)',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    left: -80,
    top: -30,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'rgba(64, 64, 64, 0.8)',
  },
  button1: {
    marginHorizontal: 5,
    paddingVertical: 8,
    paddingHorizontal: 3,
    bottom: -400,
    left: -255,
  },
  duration: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#004764',
    bottom: -29,
    right: -170,
  },
  durationTime: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#004764',
    bottom: -86,
    right: -80,
  },
  icon: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
    left: -30,
    bottom: -40,
    position: 'absolute',
  },
  auicon: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
    right: -230,
    top: -30,
  },
  distance: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#004764',
    left: -120,
    bottom: -40,
  },
  distanceText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#004764',
    left: -122,
    bottom: -50,
  },
  average: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#004764',
    top: -363,
    right: -100,
  },
  averageDist: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#004764',
    top: -343,
    right: -100,
  },
  calories: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#004764',
    top: -89,
    right: -120,
  },
  caloriesCount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#004764',
    top: -79,
    right: -118,
  },
});

export default HomeScreen;
