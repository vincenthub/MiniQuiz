/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { AccountBlock } from './Components/AccountBlock';

import { AccountOverview }  from './Components/AccountOverview'

const App: () => Node = () => {

  return (
    <SafeAreaView style={{ flex:1, backgroundColor: "white"}}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.container}>
          <Text style={styles.infoTitleText}> Mini Quiz Cryptocurrency </Text>

          <AccountOverview />

          <AccountBlock />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.05)',
    padding: 20
  },

  infoTitleText: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20
  },

  infoTitleMediumText: {
    fontSize: 14,
    fontWeight: 'bold'
  },

  infoDetailsTextDark: {
    fontSize: 12,
    fontWeight: 'normal',
    color: 'black',
  },

  infoDetailsText: {
    width: 210,
    fontSize: 12,
    fontWeight: 'normal',
    textAlign: 'right',
    color: 'rgba(0,0,0,0.5)',
  },

  //divider
  divider: {
    alignSelf: 'stretch',
    height: 0.5,
    backgroundColor: "rgba(0,0,0,0.2)"
  },

  //info
  contentInfo: {
    marginTop: 20
  },

  overviewContent: {
    backgroundColor: 'white',
    marginTop: 10,
  },

  overviewTitle: {
    padding: 12
  },

  overviewListRow: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
  }

});

export default App;
