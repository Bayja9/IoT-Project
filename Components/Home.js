import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import { DataTable } from 'react-native-paper';


export default function Home({ navigation }) {


  const objet = []

  // for (let object of objects) {
  //   objet.push(
  //       <DataTable.Row>
  //         <DataTable.Cell>object.nom</DataTable.Cell>
  //         <DataTable.Cell >object.isConnected</DataTable.Cell>
  //         <DataTable.Cell style={ styles.cell } onPress={() => navigation.navigate('Historique')} >voir</DataTable.Cell>
  //       </DataTable.Row>);
  // }

    return (
      <View style={ styles.container }>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Nom</DataTable.Title>
          <DataTable.Title>Status</DataTable.Title>
          <DataTable.Title>Historique</DataTable.Title>
        </DataTable.Header>
        <DataTable.Row>
          <DataTable.Cell>object.nom</DataTable.Cell>
          <DataTable.Cell >object.isConnected</DataTable.Cell>
          <DataTable.Cell style={ styles.cell } onPress={() => navigation.navigate('Historique')} >voir</DataTable.Cell>
        </DataTable.Row>
        {/* {objet} */}

        <DataTable.Row>
          <DataTable.Cell>objet2</DataTable.Cell>
          <DataTable.Cell>non connecté</DataTable.Cell>
          <DataTable.Cell style={ styles.cell } onPress={() => navigation.navigate('')} >voir</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>objet3</DataTable.Cell>
          <DataTable.Cell>connecté</DataTable.Cell>
          <DataTable.Cell style={ styles.cell } onPress={() => navigation.navigate('')} >voir</DataTable.Cell>
        </DataTable.Row>

      </DataTable>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    cell: {
        color: "blue",
    }
    
  });
  