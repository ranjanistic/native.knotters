import {WebView} from 'react-native-webview';

export default App = () => (
  <WebView
    source={{uri: process.env.URL}}
    style={{marginTop: 40}}
    allowFileAccess={false}
    allowsBackForwardNavigationGestures={true}
  />
);
