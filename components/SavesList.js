import React, { Component } from 'react'
import { FlatList, View } from 'react-native'
import { connect } from 'react-redux'

import EmptyState from './EmptyState'
import PostsListItem from './PostsListItem'

class SavesList extends Component {
  _renderItem = ({ item }) => {
    return <PostsListItem post={item} onPress={() => {
      this.props.navigation.navigate('Post', { post: item })
    }} />
  };

  render () {
    if (this.props.saves.length === 0) {
      return <EmptyState text='No saved posts.' />
    }

    return (
      <FlatList
        data={this.props.saves}
        renderItem={this._renderItem}
        keyExtractor={post => post.id}
        ListHeaderComponent={<View style={{ height: 1 }} />}
        ListFooterComponent={<View style={{ height: 1 }} />}
        removeClippedSubviews={false}
      />
    )
  }
}

const mapStateToProps = ({ saves }) => {
  return { saves }
}

export default connect(mapStateToProps)(SavesList)
