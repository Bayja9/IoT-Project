import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Connexion from './Components/Connexion';
import Home from './Components/Home'
import Inscription from './Components/Inscription'
import Historique from './Components/Historique'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Connexion"
          component={Connexion}
        />
        <Stack.Screen
          name="Inscription"
          component={Inscription}
        />
        <Stack.Screen
          name="Accueil"
          component={Home}
          options={{ title: 'Tableau de bord des objets connectés' }}
        />
        <Stack.Screen
          name="Historique"
          component={Historique}
          options={{ title: 'Historique de {object.nom}' }}
        />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}
