import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet ,Image} from 'react-native';

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);

  const handleFeedbackSubmit = () => {
    if (feedback.trim() === '') {
      Alert.alert('Error', 'Please provide your feedback.');
    } else {
      Alert.alert('Feedback Submitted', `Thank you for your valuable feedback  `);
      setFeedback('');
    }
  };

  const handleRatingChange = (selectedRating) => {
    setRating(selectedRating);
  };

  return (
    <View style={styles.container}>
      <StarRating onRatingChange={handleRatingChange} />

      <View style={styles.feedbackContainer}>
        <Text style={styles.formTitle}>Please drop your feedback down here....</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Type your feedback here"
          multiline
          value={feedback}
          onChangeText={(text) => setFeedback(text)}
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleFeedbackSubmit}
        >
          <Text style={styles.submitButtonText}>Submit Feedback</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const StarRating = ({ onRatingChange }) => {
  const [rating, setRating] = useState(0);

  const handleRating = (selectedRating) => {
    setRating(selectedRating);
    onRatingChange(selectedRating);
  };

  return (
    <View style={styles.starContainer}>
      <Image
         source={{uri:'https://res.cloudinary.com/ddsoklh6s/image/upload/v1707319749/IMG_20240207_205516_qdbpsc.jpg'}}
         style={styles.image}
         />
      <Text style={styles.title}>How likely are you interested to help us improve?</Text>
      <View style={styles.starsContainer}>
        {[1, 2, 3, 4, 5].map((star) => (
          <TouchableOpacity
            key={star}
            onPress={() => handleRating(star)}
            style={[styles.star, { color: star <= rating ? 'yellow' : 'white' }]}
          >
            <Text style={{ fontSize: 30 }}>{star <= rating ? '\u2b50' : '\u2606'}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {/* <Text style={styles.selectedRating}>Selected Rating: {rating}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 50,
  },
  starContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  starsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  star: {
    marginRight: 5,
    marginBottom:-20,
    marginTop:5,
  },
  // selectedRating: {
  //   fontSize: 16,
  //   color: 'green',
  // },
  feedbackContainer: {
    width: '80%',
  },
  formTitle: {
    fontSize: 18,
    alignItems: 'center',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  textInput: {
    height: 170,
    width: 275,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius:10,
    marginBottom: 10,
    padding: 10,
  },
  submitButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  submitButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  image:{
    width:300,
    height:180,
    marginBottom:20,
  },
});

export default FeedbackForm;
