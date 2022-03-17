/**
 * @format
 * @flow strict-local
 */

import React from 'react';

import {SafeAreaView, StatusBar} from 'react-native';

import {WebView} from 'react-native-webview';

const App = () => {
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={'light-content'} />
      <WebView
        source={{uri: process.env.URL}}
        style={{marginTop: 40}}
        allowFileAccess={false}
        allowsBackForwardNavigationGestures={true}
      />
    </SafeAreaView>
  );
};

export default App;
