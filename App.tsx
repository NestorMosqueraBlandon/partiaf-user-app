import {LogBox} from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
// import 'react-native-gesture-handler';

export default function App() {
  LogBox.ignoreLogs(['Remote debugger']);
  return (
      <AppNavigator />
    );
}

