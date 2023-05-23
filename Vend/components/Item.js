import React from 'react';
import { View, Image,Text, StyleSheet } from 'react-native';
import colors from './../styles/colors';
import Constants from 'expo-constants';

function Item({header, body, path}) {
  return (
    <View>
      <View style={styles.viewContainer}>
        <Image
        style={styles.viewImage}
        source={path}
        />
        <Text style={styles.viewHeader}>{header}</Text>
        <Text style={styles.viewBody}>{body}</Text>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    height: 190,
    width: 150,
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 10,
    margin:9,
    marginHorizontal: 14,
  },
  viewImage: {

    height: 100,
    width: 130,
    borderRadius: 5,
  },
  viewHeader: {
    fontSize: 14,
    fontWeight: 600,
    marginVertical: 9,
    color: colors.slate,
  },
    viewBody: {
    fontSize: 10,
    fontWeight: 600,
    marginBottom: 18,
    color: colors.slate,
  },
});
export default Item;
//<Image source={require({imageRoute})} />
