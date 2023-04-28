import * as React from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Constants from 'expo-constants';

import colors from './../../styles/colors';

function ListItem({ username, password, pin ,renderRightAction}) {
  return (
        <Swipeable renderRightActions={renderRightAction}>

    <TouchableHighlight style={styles.click} underlayColor="white">
      <View style={styles.container}>
        <Text style={styles.text}>
          {username}, {pin}
          {'\n'}
          {password}
        </Text>
      </View>
    </TouchableHighlight>
        </Swipeable>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGrey,
    padding: 10,
    borderRadius: 8,
        marginHorizontal: 10,

    marginVertical: 5,
    width: Constants.statusBarWidth,
  },
  text: {
    color: colors.slate,
  },
});

export default ListItem;
