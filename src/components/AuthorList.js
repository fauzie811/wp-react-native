import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { FlatList } from 'react-native';

import { fetchAuthors } from '../actions';
import AuthorListItem from './AuthorListItem';
import Divider from './common/Divider';

@inject('authorStore')
@observer
class AuthorList extends Component {
  componentWillMount() {
    fetchAuthors();
  }

  render() {
    return (
      <FlatList 
        data={this.props.authorStore.itemsArray}
        renderItem={({ item }) => <AuthorListItem item={item} />}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <Divider style={{ height: 1, marginLeft: 70 }} />}
        refreshing={this.props.authorStore.loading}
        onRefresh={() => fetchAuthors()}
      />
    );
  }
}

export default AuthorList;
