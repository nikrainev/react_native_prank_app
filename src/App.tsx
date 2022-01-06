import React from 'react';
import {
    SafeAreaView,
    Text,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { IconButton, Colors } from 'react-native-paper';
import { AppContextProvider } from './components/Providers';
import { MainPage } from './container/MainPage';
import { AboutScreen } from './container/AboutScreen';
import { PranksManagementScreen } from './container/PranksManagementScreen';
import { Screen } from './const/routing/SCREENS';


const Tab = createBottomTabNavigator();

const App = () => {

  return (
      <NavigationContainer>
          <AppContextProvider>
              <Tab.Navigator
                  screenOptions={({ route }) => ({
                      tabBarIcon: ({ focused, color, size }) => {
                          let iconName = '';

                          if (route.name === Screen.Main) {
                              iconName = 'camera'
                          } else if (route.name === Screen.About) {
                              iconName = 'information-outline';
                          } else if (route.name === Screen.PrankManagement) {
                              iconName = 'view-list'
                          }

                          // You can return any component that you like here!
                          return (
                              <IconButton
                                 icon={iconName}
                                 size={20}
                                 disabled={true}
                            />
                          )
                      },
                      tabBarActiveTintColor: 'tomato',
                      tabBarInactiveTintColor: 'gray',
                  })}
              >
                  <Tab.Screen name={Screen.Main} component={MainPage} />
                  <Tab.Screen name={Screen.About} component={AboutScreen} />
                  <Tab.Screen name={Screen.PrankManagement} component={PranksManagementScreen} />
              </Tab.Navigator>
          </AppContextProvider>
      </NavigationContainer>
  );
};

export default App;
