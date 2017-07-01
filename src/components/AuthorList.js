import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { FlatList } from 'react-native';

import authorStore from '../stores/authorStore';
import { fetchAuthors } from '../actions';
import AuthorListItem from './AuthorListItem';
import Divider from './common/Divider';

@observer
class AuthorList extends Component {
  componentWillMount() {
    fetchAuthors();
  }

  render() {
    return (
      <FlatList 
        data={authorStore.itemsArray}
        renderItem={({ item }) => <AuthorListItem item={item} />}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <Divider style={{ height: 1, marginLeft: 56 }} />}
        refreshing={authorStore.loading}
        onRefresh={() => fetchAuthors()}
      />
    );
  }
}

export default AuthorList;
