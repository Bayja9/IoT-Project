import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

export default function Home({ navigation }) {
    return (
      <View style={ styles.container }>
        <Text style={styles.text}>Tableau de bord des objets connectés</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#003f5c',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        color: "white",
        fontSize: 32,
        fontWeight: '300',
        textAlign: 'center',
        position: "absolute",
        top: 0,
      },
    
  });
  