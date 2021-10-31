import React from 'react';
import {WebView} from 'react-native-webview';

export default function HomeScreen() {
  return (
    <WebView source={{uri: 'file:///android_asset/local-site/index.html'}} />
  );
}
