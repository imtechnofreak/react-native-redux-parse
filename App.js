import React, { Component } from 'react'
import { View, AppRegistry, StatusBar, UIManager, Platform} from 'react-native'
import AppNavigation from './src/components/AppNavigation'


export default class App extends Component {

  constructor(props) {
    super(props);
  
    this.state = {};

    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true)
    }
  }

  render() {

    return (
      <View style={{flex: 1}}>
        <StatusBar translucent={true} barStyle="light-content" animated={true}/>
        <AppNavigation />
      </View>
    )
  }
}


AppRegistry.registerComponent('SafeSnap', () => App);