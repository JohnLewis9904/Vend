import React, { useState } from 'react';
import { Text, View, StyleSheet, CheckBox } from 'react-native';
import colors from '../styles/colors';
import Constants from 'expo-constants';

function Check() {
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Remember me</Text>
      </View>
      <Text>Is CheckBox selected: {isSelected ? '👍' : '👎'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginleft: "8%",
    alignItems: 'left',
    justifyContent: 'left',
  },
  checkboxContainer: {
    flexDirection: 'row',
  },
  label: {
    margin: 8,
  },
});
export default Check;
