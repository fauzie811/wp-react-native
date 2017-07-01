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

  renderChildren = (parent) => {
    return categoryStore.items
      .filter(item => item.parent === parent.id)
      .map(item => {
        return (
          <CategoryListItem key={item.id} item={item}>
            {this.renderChildren(item)}
          </CategoryListItem>
        );
      });
  }

  renderItems = () => {
    return categoryStore.items
      .filter(item => item.parent === 0)
      .map(item => {
        return (
          <CategoryListItem key={item.id} item={item}>
            {this.renderChildren(item)}
          </CategoryListItem>
        );
      });
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
