import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { observer, inject } from 'mobx-react';

import PostListItem from './PostListItem';

const styles = {
  listItem: {
    marginHorizontal: 8,
    marginVertical: 4,
  }
};

@inject('savedStore')
@observer
class SavedPostList extends Component {
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
        data={this.props.savedStore.itemsArray}
        renderItem={this.renderItem}
        keyExtractor={item => item.id}
        ListHeaderComponent={this.props.ListHeaderComponent || <View style={{ height: 4 }} />}
        removeClippedSubviews={false}
      />
    );
  }
}

export default SavedPostList;
