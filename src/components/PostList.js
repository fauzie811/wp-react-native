import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { FlatList } from 'react-native';

import { fetchPosts } from '../actions';
import postStore from '../stores/postStore';
import ListItemLoading from './ListItemLoading';
import PostListItem from './PostListItem';
import Divider from './common/Divider';

@observer
class PostList extends Component {
  componentWillMount() {
    this.key = this.props.storeKey || 'all';
    fetchPosts();
  }

  handleRefresh = () => {
    postStore.page[this.key] = 1;
    fetchPosts();
  }

  handleLoadMore = () => {
    if (postStore.loading[this.key]) return;

    postStore.page[this.key]++;
    fetchPosts();
  }

  renderFooter = () => {
    if (postStore.refreshing[this.key]) return null;

    return <ListItemLoading />;
  }

  renderItem = ({ item }) => {
    return (
      <PostListItem
        item={item}
        onPress={() => {
          this.props.navigation.navigate('Detail', { item });
        }}
      />
    );
  }

  render() {
    return (
      <FlatList 
        data={postStore.getItemsArray(this.key)}
        renderItem={this.renderItem}
        keyExtractor={item => item.id}
        ListHeaderComponent={this.props.ListHeaderComponent}
        ItemSeparatorComponent={() => <Divider style={{ height: 1 }} />}
        refreshing={postStore.refreshing[this.key]}
        onRefresh={this.handleRefresh}
        onEndReached={this.handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={this.renderFooter}
        removeClippedSubviews={false}
      />
    );
  }
}

export default PostList;
