import * as React from 'react';
import {View, StyleSheet, } from 'react-native';
import colors from './../../styles/colors';

// use () because this component doesn't have props
function ListItemSeparator() {
  return (
     <View style={styles.itemSeparator}></View>
  );
}

const styles = StyleSheet.create({
  itemSeparator: {
    backgroundColor: colors.slate,
    width: '100%',
    height: 5,
  },
})

export default ListItemSeparator;