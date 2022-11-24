import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
const CallingScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cameraPreview}>
        <Text style={styles.name}>Can</Text>
        <Text style={styles.phoneNumber}>ringing +90 111 111 00 00</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Ionicons name="ios-camera-reverse" size={32} color="#74c0fc" />
        </View>
        <View style={styles.button}>
          <MaterialCommunityIcons name="camera-off" size={32} color="#74c0fc" />
        </View>
        <View style={styles.button}>
          <Ionicons name="mic-off" size={32} color="#74c0fc" />
        </View>
        <View
          style={[
            styles.button,
            {
              backgroundColor: '#74c0fc',
            },
          ]}
        >
          <MaterialCommunityIcons
            name="phone-hangup"
            size={32}
            color="#f8f9fa"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#74c0fc',
    paddingTop: 50,
  },
  cameraPreview: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fdfdfd',
  },
  phoneNumber: {
    fontSize: 20,
    color: '#fdfdfd',
    marginTop: 10,
  },
  buttonContainer: {
    backgroundColor: '#f8f9fa',
    width: '100%',
    padding: 20,
    paddingBottom: 60,
    paddingTop: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    backgroundColor: '#f1f3f5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 50,
  },
});
export default CallingScreen;
