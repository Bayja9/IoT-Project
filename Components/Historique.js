import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DataTable } from 'react-native-paper';


export default function Historique({ navigation }) {
    return (
      <View style={ styles.container }>
 <DataTable>
        <DataTable.Header>
          <DataTable.Title>Nom</DataTable.Title>
          <DataTable.Title>Status</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell>object.nom</DataTable.Cell>
          <DataTable.Cell >connecté</DataTable.Cell>
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
  