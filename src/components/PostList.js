import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { View, FlatList } from 'react-native';

import { fetchPosts } from '../actions';
import postStore from '../stores/postStore';
import ListItemLoading from './ListItemLoading';
import PostListItem from './PostListItem';

const styles = {
  listItem: {
    marginHorizontal: 8,
    marginVertical: 4,
  }
};

@observer
class PostList extends Component {
  componentWillMount() {
    this.key = this.props.storeKey || 'all';
    this.qs = this.props.queryString || {};
    this._fetchPosts();
  }

  _fetchPosts = () => fetchPosts(this.key, true, this.qs);

  handleRefresh = () => {
    postStore.setPage(this.key, 1);
    this._fetchPosts();
  }

  handleLoadMore = () => {
    if (postStore.loading[this.key]) return;

    postStore.setPage(this.key, postStore.page[this.key] + 1);
    this._fetchPosts();
  }

  renderFooter = () => {
    if (postStore.refreshing[this.key]) return null;

    return <ListItemLoading />;
  }

  renderItem = ({ item }) => {
    return (
      <View style={styles.listItem}>
        <PostListItem
          item={item}
          onPress={() => {
            this.props.navigation.navigate('Detail', { item });
          }}
        />
      </View>
    );
  }

  render() {
    return (
      <FlatList 
        data={postStore.getItemsArray(this.key)}
        renderItem={this.renderItem}
        keyExtractor={item => item.id}
        ListHeaderComponent={this.props.ListHeaderComponent}
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
