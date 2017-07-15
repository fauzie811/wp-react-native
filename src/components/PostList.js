import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { View, FlatList } from 'react-native';

import { fetchPosts } from '../actions';
import ListItemLoading from './ListItemLoading';
import PostListItem from './PostListItem';

const styles = {
  listItem: {
    marginHorizontal: 8,
    marginVertical: 4,
  }
};

@inject('postStore')
@observer
class PostList extends Component {
  componentWillMount() {
    this.key = this.props.storeKey || 'all';
    this.qs = this.props.queryString || {};
    this._fetchPosts();
  }

  _fetchPosts = () => fetchPosts(this.key, true, this.qs);

  handleRefresh = () => {
    this.props.postStore.setPage(this.key, 1);
    this._fetchPosts();
  }

  handleLoadMore = () => {
    const { postStore } = this.props;

    if (postStore.loading.get(this.key)) return;

    postStore.setPage(this.key, postStore.page.get(this.key) + 1);
    this._fetchPosts();
  }

  renderFooter = () => {
    if (this.props.postStore.refreshing.get(this.key)) return null;

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
    const { postStore } = this.props;

    return (
      <FlatList 
        data={postStore.getItemsArray(this.key)}
        renderItem={this.renderItem}
        keyExtractor={item => item.id}
        ListHeaderComponent={this.props.ListHeaderComponent || <View style={{ height: 4 }} />}
        refreshing={postStore.refreshing.get(this.key)}
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
