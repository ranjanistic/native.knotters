import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <WebView
      source={{ uri: "https://knotters.org" }}
      style={{ marginTop: 40 }}
    />
  );
}
