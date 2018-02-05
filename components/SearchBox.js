import React, { Component } from 'react'
import { View, TextInput } from 'react-native'
import { Ionicons as Icon } from '@expo/vector-icons'
import { connect } from 'react-redux'

import { updateParams, fetchPosts } from '../actions/postActions'
import Touchable from './common/Touchable'

class SearchBox extends Component {
  state = {
    search: null
  };

  componentWillMount () {
    this.setState({ search: this.props.posts.params.search })
  }

  _handleSearch = () => {
    this.props.updateParams({ ...this.props.posts.params, search: this.state.search })
    this.props.fetchPosts()
  };

  _handleClear = () => {
    this.setState({ search: null }, () => {
      this._handleSearch()
    })
  }

  _renderClearIcon = () => {
    if (this.props.posts.params.search) {
      return (
        <Touchable onPress={this._handleClear}>
          <Icon style={styles.iconClear} size={18} name='ios-close-circle' />
        </Touchable>
      )
    }

    return null
  }

  render () {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <Icon style={styles.icon} size={18} name='ios-search-outline' />
          <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            blurOnSubmit
            underlineColorAndroid='transparent'
            style={styles.input}
            placeholder='Search'
            placeholderTextColor='rgba(255,255,255,0.45)'
            returnKeyType='search'
            value={this.state.search}
            onChangeText={search => this.setState({ search })}
            onSubmitEditing={this._handleSearch}
          />
          {this._renderClearIcon()}
        </View>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    flexDirection: 'row',
    margin: 8,
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 4,
    alignItems: 'center'
  },
  icon: {
    color: 'white',
    paddingLeft: 10
  },
  input: {
    color: 'white',
    flex: 1,
    fontSize: 14,
    paddingHorizontal: 8
  },
  iconClear: {
    color: 'white',
    paddingHorizontal: 10
  }
}

const mapStateToProps = ({ posts }) => {
  return { posts }
}

export default connect(mapStateToProps, { updateParams, fetchPosts })(SearchBox)
