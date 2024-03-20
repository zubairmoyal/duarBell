import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigator from './Navigation/Navigator';
import {ThemeProvider} from '@shopify/restyle';
import theme from './Theme/theme';
import {Provider} from 'react-redux';
import store from './Store/Store';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <SafeAreaProvider>
      <Provider store={store}>
      <Navigator />
      </Provider>
    </SafeAreaProvider>
     </ThemeProvider>
  );
};
export default App;
