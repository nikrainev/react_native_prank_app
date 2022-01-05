import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
//import { createDrawerNavigator } from '@react-navigation/drawer';
import { AppContextProvider } from './components/Providers';
import { MainPage } from './container/MainPage';

//const Drawer = createDrawerNavigator();

const App = () => {

  return (
          <AppContextProvider>
              <SafeAreaView>
                  {/*<NavigationContainer>
                      <Drawer.Navigator initialRouteName={Screen.Main}>
                          <Drawer.Screen name={Screen.Main} component={MainPage}/>
                      </Drawer.Navigator>
                  </NavigationContainer>*/}
                  <MainPage />
              </SafeAreaView>
          </AppContextProvider>
  );
};

export default App;
