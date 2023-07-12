import * as React from 'react';
import {LogBox, Platform, StatusBar, View} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {COLORS} from './src/constants';
import MainNavigation from './src/navigation/MainNavigation';



function App() {
 
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: COLORS.black,
        }}
        edges={['top']}>
        <View style={{flex: 1}}>
              <MainNavigation />
              <FlashMessage
                position={'bottom'}
                backgroundColor={COLORS.secondary}
              />
          
    
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;