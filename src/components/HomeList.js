import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Text, FlatList } from 'react-native';

import { fetchPosts } from '../actions';
import postStore from '../stores/postStore';
import ListItemLoading from './ListItemLoading';
import PostListItem from './PostListItem';
import Divider from './common/Divider';

@observer
class HomeList extends Component {
  componentWillMount() {
    fetchPosts();
  }

  handleRefresh = () => {
    postStore.page = 1;
    fetchPosts();
  }

  handleLoadMore = () => {
    if (postStore.loading) return;

    postStore.page++;
    fetchPosts();
  }

  renderFooter = () => {
    if (postStore.refreshing) return null;

    return <ListItemLoading />;
  }

  render() {
    return (
      <FlatList 
        data={postStore.itemsArray}
        renderItem={({ item }) => <PostListItem item={item} />}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <Divider style={{ height: 1 }} />}
        refreshing={postStore.refreshing}
        onRefresh={this.handleRefresh}
        onEndReached={this.handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={this.renderFooter}
      />
    );
  }
}

export default HomeList;
