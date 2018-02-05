import React, { Component } from 'react'
import { StatusBar, View } from 'react-native'
import { AppLoading, Asset, Font } from 'expo'
import { Ionicons } from '@expo/vector-icons'
import { Provider } from 'react-redux'

import store from './store'
import RootNavigation from './navigation/RootNavigation'

export default class App extends Component {
  state = {
    assetsAreLoaded: false
  }

  componentWillMount () {
    this._loadAssetsAsync()
  }

  render () {
    if (!this.state.assetsAreLoaded && !this.props.skipLoadingScreen) {
      return <AppLoading />
    } else {
      return (
        <Provider store={store}>
          <View style={styles.container}>
            <StatusBar barStyle='light-content' />
            <RootNavigation />
          </View>
        </Provider>
      )
    }
  }

  async _loadAssetsAsync () {
    try {
      await Promise.all([
        Asset.loadAsync([
          require('./assets/images/robot-dev.png'),
          require('./assets/images/robot-prod.png')
        ]),
        Font.loadAsync({
          ...Ionicons.font,
          'roboto-slab-regular': require('./assets/fonts/RobotoSlab-Regular.ttf'),
          'droid-serif-italic': require('./assets/fonts/DroidSerif-Italic.ttf')
        })
      ])
    } catch (e) {
      // In this case, you might want to report the error to your error
      // reporting service, for example Sentry
      console.warn(
        'There was an error caching assets (see: App.js), perhaps due to a ' +
          'network timeout, so we skipped caching. Reload the app to try again.'
      )
      console.log(e)
    } finally {
      this.setState({ assetsAreLoaded: true })
    }
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
}
