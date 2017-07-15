import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { ScrollView, RefreshControl } from 'react-native';

import { fetchCategories } from '../actions';
import CategoryListItem from './CategoryListItem';

@inject('categoryStore')
@observer
class CategoryList extends Component {
  componentWillMount() {
    fetchCategories();
  }

  renderChildren = (parentId) => {
    return this.props.categoryStore.items
      .filter(item => item.parent === parentId)
      .map(item => {
        return (
          <CategoryListItem 
            key={item.id} 
            item={item}
            onPress={() => {
              this.props.navigation.navigate('Category', { item });
            }}
          >
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
            refreshing={this.props.categoryStore.loading}
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
