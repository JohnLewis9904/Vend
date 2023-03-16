import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, Image } from 'react-native';
import Constants from 'expo-constants';
import UserInput from '../components/UserInputBox';
import SignInBar from '../components/SignInBar';
import SIB from '../../components/SIB';
import SignInSources from '../../components/SignInSources';

import Checkbox from 'expo-checkbox';
import { useState } from 'react';

// You can import from local files
import colors from '../../config/colors';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function SignIn() {
  const [isChecked, setChecked] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View>
       
        <View style={styles.header}>
          <Text style={[styles.options, { color: colors.electric }]}>
            Login
          </Text>
          <Text style={styles.options}>Register</Text>
        </View>
        <View style={styles.barArea}>
          <View
            style={[
              styles.bar,
              { marginLeft: '8%' },
              { backgroundColor: colors.electric },
              { borderTopRightRadius: 0 },
              { borderBottomRightRadius: 0 },
            ]}></View>
          <View
            style={[
              styles.bar,
              { marginRight: '8%' },
              { borderTopLeftRadius: 0 },
              { borderBottomLeftRadius: 0 },
            ]}></View>
        </View>

        <Text style={[styles.title, { fontSize: 24 }, { fontWeight: '650' }]}>
          Sign In
        </Text>
        <Text style={[styles.title, { marginBottom: '5%' }]}>
          Welcome back!
        </Text>
        <UserInput fn="Username" />
        <UserInput fn="Password" />
        <SIB title={'Login'} />
        <View style={styles.barArea}>
          <Checkbox
            style={styles.checkbox}
            color={isChecked ? colors.electric : undefined}
            value={isChecked}
            onValueChange={setChecked}
          />
          <Text
            style={[
              { color: colors.slate },
              { marginLeft: '2%' },
              { marginTop: 1 },
              { fontSize: 16 },
            ]}>
            Remember me
          </Text>
        </View>
        <Image
          source={require('../../assets/border.png')}
          style={{
            width: '82%',
            height: 20,
            marginHorizontal: '8%',
            marginTop: '9%',
          }}
        />
        <View style={styles.pagination}>
          <SignInSources
            style={styles.box}
            path={require('../../assets/google.jpg')}
          />
          <SignInSources
            style={styles.box}
            path={require('../../assets/google.jpg')}
          />
          <SignInSources
            style={styles.box}
            path={require('../../assets/google.jpg')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'top',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fbf9f9',
  },
  barArea: {
    flexDirection: 'row',
    marginTop: '1%',
  },
  splash:{
    justifyContent: "center",
    height: "20%",
    width: "40%",
  },
  bar: {
    height: 3,
    width: '42%',
    backgroundColor: colors.lightestgray,
    borderRadius: 2,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  options: {
    fontSize: 15,
    fontWeight: 500,
    paddingHorizontal: '15%',
    paddingTop: '5%',
    paddingBottom: '3%',
    color: colors.slate,
  },
  title: {
    marginLeft: '8%',
    paddingTop: '4%',
    fontSize: 16,
    color: colors.slate,
  },
  checkbox: {
    marginLeft: '8%',
    borderRadius: 5,
  },
    pagination: {
    flex: 1,
    flexDirection: 'row',

  },
});
