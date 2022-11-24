import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
} from 'react-native';
import React from 'react';
import bg from '../../../assets/images/ios_bg.png';
import { Ionicons, Entypo, Feather } from '@expo/vector-icons';
const IncomingScreen = () => {
  return (
    <ImageBackground style={styles.container} source={bg}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.name}>İrmüş Kedi ♥️</Text>
        <Text style={styles.text}>WhatsApp Video...</Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.row}>
          <View style={{ alignItems: 'center' }}>
            <Ionicons name="alarm" size={32} color="#fdfdfd" />
            <Text style={styles.footerText}>Remind Me</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Ionicons name="chatbubble-sharp" size={32} color="white" />
            <Text style={styles.footerText}>Message</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View alignItems="center">
            <View
              style={[
                styles.iconContainer,
                {
                  backgroundColor: '#f03e3e',
                },
              ]}
            >
              <Feather name="x" size={32} color="#fdfdfd" />
            </View>
            <Text style={styles.footerText}>Decline</Text>
          </View>
          <View alignItems="center">
            <View
              style={[
                styles.iconContainer,
                {
                  backgroundColor: '#34c759',
                },
              ]}
            >
              <Feather name="check" size={32} color="#fdfdfd" />
            </View>
            <Text style={styles.footerText}>Accept</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  header: {
    flex: 1,
    marginTop: 50,
    alignItems: 'center',
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fdfdfd',
    marginBottom: 10,
    textAlign: 'center',
  },
  text: {
    fontSize: 20,
    color: '#fdfdfd',
    letterSpacing: 1.4,
  },
  footer: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 30,
  },
  footerText: {
    fontSize: 20,
    color: '#fdfdfd',
    marginTop: 10,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default IncomingScreen;
