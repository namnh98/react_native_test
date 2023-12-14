import { Text, TextInput, LogBox } from 'react-native';
import React from 'react';
import MainRoute from '@/router/mainRoute';
import { NavigationContainer } from '@react-navigation/native';

interface TextWithDefaultProps extends Text {
  defaultProps?: { allowFontScaling?: boolean };
}
interface TextInputWithDefaultProps extends TextInput {
  defaultProps?: { allowFontScaling?: boolean };
}

(Text as unknown as TextWithDefaultProps).defaultProps =
  (Text as unknown as TextWithDefaultProps).defaultProps || {};
(Text as unknown as TextWithDefaultProps).defaultProps!.allowFontScaling = false;

(TextInput as unknown as TextInputWithDefaultProps).defaultProps =
  (TextInput as unknown as TextInputWithDefaultProps).defaultProps || {};
(TextInput as unknown as TextInputWithDefaultProps).defaultProps!.allowFontScaling = false;

LogBox.ignoreAllLogs();
if (__DEV__) {
  if (!console.assert) {
    console.assert = (condition, message) => {
      if (!condition) {
        throw new Error(
          typeof message === 'string'
            ? `Assertion failed: ${message}`
            : 'Assertion failed: console.assert'
        );
      }
    };
  }
}

const App = () => {
  return (
    <NavigationContainer>
      <MainRoute />
    </NavigationContainer>
  );
};

export default App;
