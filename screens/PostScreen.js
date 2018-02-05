import React, { Component } from 'react'
import { Animated, View, ScrollView, Share, Platform } from 'react-native'
import { connect } from 'react-redux'

import { toggleSavePost } from '../actions/postActions'
import Config from '../Config'
import { hexToRgba } from '../Utils'
import Header from '../components/common/Header'
import HeaderButton from '../components/common/HeaderButton'
import PostDetail from '../components/PostDetail'

class PostScreen extends Component {
  state = {
    scrollY: new Animated.Value(0),
    saved: false
  };

  _checkSaved (props) {
    const { post } = this.props.navigation.state.params

    this.setState({
      saved: props.saves.findIndex(p => (p.id === post.id)) > -1
    })
  }

  _sharePost = () => {
    const { link, title } = this.props.navigation.state.params.post

    Share.share({
      message: `${title.rendered} ${Platform.OS === 'android' ? link : ''}`,
      link
    }, {
      dialogTitle: 'Share',
      tintColor: Config.colorPrimary
    })
  }

  componentWillMount () {
    this._checkSaved(this.props)
  }

  componentWillReceiveProps (nextProps) {
    this._checkSaved(nextProps)
  }

  render () {
    const { navigation } = this.props
    const { post } = navigation.state.params

    // const headerOpacity = this.state.scrollY.interpolate({
    //   inputRange: [0, 200],
    //   outputRange: [0, 1],
    //   extrapolate: 'clamp'
    // })
    const headerBg = this.state.scrollY.interpolate({
      inputRange: [0, 200],
      outputRange: [hexToRgba(Config.colorPrimary, 0), hexToRgba(Config.colorPrimary)],
      extrapolate: 'clamp'
    })

    return (
      <View style={styles.container}>
        <Header
          style={[styles.header, { backgroundColor: headerBg }]}
          leftComponent={
            <HeaderButton iconName='ios-arrow-back' onPress={() => navigation.goBack(null)} />
          }
          rightComponent={
            <View style={{ flexDirection: 'row' }}>
              <HeaderButton
                iconName='ios-share-outline'
                onPress={this._sharePost}
              />
              <HeaderButton
                iconName={`ios-bookmark${!this.state.saved ? '-outline' : ''}`}
                onPress={() => this.props.toggleSavePost(post)}
              />
            </View>
          }
        />
        <ScrollView
          style={{ flex: 1 }}
          scrollEventThrottle={1}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }]
          )}
        >
          <PostDetail post={post} />
        </ScrollView>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    zIndex: 10
  }
}

const mapStateToProps = ({ saves }) => {
  return { saves }
}

export default connect(mapStateToProps, { toggleSavePost })(PostScreen)
