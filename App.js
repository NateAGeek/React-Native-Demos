import React from 'react';
import { Text, View, ScrollView, StatusBar } from 'react-native';
import LaunchDemoAppComponent from './src/components/LaunchDemoAppComponent.js';
import {DemoAppsConfig} from './DemoAppsConfig.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{
        flex: 1,
        paddingTop: 20, //@TODO: Gonna need to figure the status bar hight 20 ios, 45 X, StatusBar.currentHeight android
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <View style={{
         alignItems: 'center',
         margin: 32
        }}>
          <Text style={{
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 24
          }}>NateAGeek's Native Demos</Text>
          <Text>
            These are a series of demos that I am working on for React Native. You can view the source code on my GitHub.
            Hope you enjoy these little demo apps and have fun with them 😊
          </Text>
        </View>
        <ScrollView contentContainerStyle={{
          justifyContent: 'center',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
        style={{
          flexGrow: 1,
        }}>
          {DemoAppsConfig.map((appConfig) => {
            return(
              <LaunchDemoAppComponent
                demoName={appConfig.demoName}
                appIcon={appConfig.appIcon}/>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}