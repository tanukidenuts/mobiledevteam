import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('Anthony De Quak');
  const [location, setLocation] = useState('Jungle');
  const [occupation, setOccupation] = useState('Software Developer');
  const [bio, setBio] = useState('Taga Kain ng Saging');
  const [age, setAge] = useState('30');

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleSaveProfile = () => {
    setIsEditing(false);
    console.log('Save profile');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/user.png')}
        style={styles.profileImage}
      />
      {isEditing ? (
        <TextInput
          style={styles.editInput}
          value={name}
          onChangeText={setName}
        />
      ) : (
        <Text style={styles.name}>{name}</Text>
      )}
      <Text style={styles.bio}>{bio}</Text>
      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Age</Text>
          {isEditing ? (
            <TextInput
              style={styles.editInput}
              value={age}
              onChangeText={setAge}
              keyboardType="numeric"
            />
          ) : (
            <Text style={styles.infoText}>{parseInt(age) || ''}</Text>
          )}
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Location</Text>
          {isEditing ? (
            <TextInput
              style={styles.editInput}
              value={location}
              onChangeText={setLocation}
            />
          ) : (
            <Text style={styles.infoText}>{location}</Text>
          )}
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Occupation</Text>
          {isEditing ? (
            <TextInput
              style={styles.editInput}
              value={occupation}
              onChangeText={setOccupation}
            />
          ) : (
            <Text style={styles.infoText}>{occupation}</Text>
          )}
        </View>
      </View>
      {isEditing ? (
        <TouchableOpacity style={styles.button} onPress={handleSaveProfile}>
          <Text style={styles.buttonText}>Save Profile</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.button} onPress={handleEditProfile}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  infoItem: {
    alignItems: 'center',
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  infoText: {
    fontSize: 16,
  },
  editInput: {
    fontSize: 16,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: 100,  // Adjust the width as desired
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#009688',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Profile;
