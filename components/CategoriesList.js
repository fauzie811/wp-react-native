import React, { Component } from 'react'
import { ScrollView, RefreshControl, View } from 'react-native'
import { connect } from 'react-redux'

import { fetchCategories } from '../actions/categoryActions'
import CategoriesListItem from './CategoriesListItem'

class CategoriesList extends Component {
  componentWillMount () {
    this.props.fetchCategories()
  }

  _handleRefresh = () => {
    this.props.fetchCategories()
  }

  _renderItem = (parent) => {
    // return <CategoriesListItem category={item} />;
    return this.props.categories
      .filter(item => item.parent === parent)
      .map(item => {
        return (
          <CategoriesListItem
            key={item.id}
            category={item}
            onPress={() => {
              // this.props.navigation.navigate('Category', { item });
            }}
          >
            {this._renderItem(item.id)}
          </CategoriesListItem>
        )
      })
  }

  render () {
    return (
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={!this.props.categories.length}
            onRefresh={this._handleRefresh}
          />
        }
      >
        <View style={{ height: 1 }} />
        {this._renderItem(0)}
        <View style={{ height: 1 }} />
      </ScrollView>
    )
  }
}

const mapStateToProps = ({ categories }) => {
  return { categories }
}

export default connect(mapStateToProps, { fetchCategories })(CategoriesList)
