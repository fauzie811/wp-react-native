import React, { Component } from 'react'
import { FlatList, Text, View } from 'react-native'
import { connect } from 'react-redux'

import { fetchPosts, nextPage, resetPage } from '../actions/postActions'
import PostsListItem from './PostsListItem'
import EmptyState from './EmptyState'

class PostsList extends Component {
  componentWillMount () {
    this.props.fetchPosts()
  }

  _handleRefresh = () => {
    this.props.resetPage()
    this.props.fetchPosts()
  };

  _handleLoadMore = () => {
    const { loading, eol } = this.props.posts

    if (loading || eol) return

    this.props.nextPage()
    setTimeout(() => this.props.fetchPosts(), 500)
  };

  _renderHeader = () => {
    const { search, categories, author } = this.props.posts.params

    if (search || categories || author) {
      return <View style={{ height: 1 }} />
    }

    return (this.props.ListHeaderComponent || <View style={{ height: 1 }} />)
  };

  _renderFooter = () => {
    const { refreshing, eol } = this.props.posts

    if (refreshing || eol) return null

    return <Text>Loading more...</Text>
  };

  _renderItem = ({ item }) => {
    return <PostsListItem post={item} onPress={() => {
      this.props.navigation.navigate('Post', { post: item })
    }} />
  };

  render () {
    if (this.props.posts.items.length === 0 && !this.props.posts.refreshing) {
      return <EmptyState text='No posts found.' />
    }

    return (
      <FlatList
        data={this.props.posts.items}
        renderItem={this._renderItem}
        keyExtractor={post => post.id}
        refreshing={this.props.posts.refreshing}
        onRefresh={this._handleRefresh}
        onEndReached={this._handleLoadMore}
        onEndReachedThreshold={0.5}
        ListHeaderComponent={this._renderHeader}
        ListFooterComponent={this._renderFooter}
        removeClippedSubviews={false}
      />
    )
  }
}

const mapStateToProps = ({ posts }) => {
  return { posts }
}

export default connect(mapStateToProps, {
  fetchPosts, nextPage, resetPage
})(PostsList)
