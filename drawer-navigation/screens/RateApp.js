import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';

export default function RateApp() {
  const [defaultRating, setDefaultRating] = useState(4);
  const maxRating = 5;

  const starImgFilled = require('../assets/star_filled.png');
  const starImgCorner = require('../assets/star_corner.png');

  const CustomRatingBar = () => {
    return (
      <View style={styles.customRatingBarStyle}>
        {[...Array(maxRating)].map((_, index) => {
          const rating = index + 1;
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={rating}
              onPress={() => setDefaultRating(rating)}
            >
              <Image
                style={styles.starImgStyle}
                source={
                  rating <= defaultRating
                    ? starImgFilled
                    : starImgCorner
                }
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  const handleRating = () => {
    Alert.alert('Rating', 'Thank you for rating us ' + defaultRating + ' star/s');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textStyle}>Please Rate Us</Text>
      <CustomRatingBar />
      <Text style={styles.ratingText}>
        {defaultRating} / {maxRating}
      </Text>
      <TouchableOpacity style={styles.buttonStyle} onPress={handleRating}>
        <Text style={styles.buttonText}>Rate</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  textStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  customRatingBarStyle: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  starImgStyle: {
    width: 40,
    height: 40,
    marginHorizontal: 5,
  },
  ratingText: {
    fontSize: 20,
    marginBottom: 20,
  },
  buttonStyle: {
    backgroundColor: '#009688',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
