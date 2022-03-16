import { WebView } from 'react-native-webview';

console.log(process.env.URL)

export default function App() {
  return (
    <WebView
      source={{ uri: process.env.URL }}
      style={{ marginTop: 40 }}
      allowFileAccess={false}
      allowsBackForwardNavigationGestures={true}
    />
  );
}
