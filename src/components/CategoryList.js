import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { ScrollView, RefreshControl } from 'react-native';

import categoryStore from '../stores/categoryStore';
import { fetchCategories } from '../actions';
import CategoryListItem from './CategoryListItem';

@observer
class CategoryList extends Component {
  componentWillMount() {
    fetchCategories();
  }

  renderChildren = (parentId) => {
    return categoryStore.items
      .filter(item => item.parent === parentId)
      .map(item => {
        return (
          <CategoryListItem key={item.id} item={item}>
            {this.renderChildren(item.id)}
          </CategoryListItem>
        );
      });
  }

  renderItems = () => {
    return this.renderChildren(0);
  }

  render() {
    return (
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={categoryStore.loading}
            onRefresh={() => fetchCategories()}
          />
        }
      >
        {this.renderItems()}
      </ScrollView>
    );
  }
}

export default CategoryList;
