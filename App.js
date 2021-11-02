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
  StatusBar,
  StyleSheet,
  Text,
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

          <View style={styles.footer}>
            <Text style={styles.footerText}>Performed by Vincent Pacul</Text>
          </View>
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

  footer: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'flex-end'
  },

  footerText: {
    fontSize: 12,
    fontWeight: '200',
    textAlign: 'center',
  }

});

export default App;
