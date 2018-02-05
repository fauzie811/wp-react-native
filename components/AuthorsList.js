import React, { Component } from 'react'
import { FlatList, View } from 'react-native'
import { connect } from 'react-redux'

import { fetchAuthors } from '../actions/authorActions'
import AuthorsListItem from './AuthorsListItem'

class AuthorsList extends Component {
  componentWillMount () {
    this.props.fetchAuthors()
  }

  _handleRefresh = () => {
    this.props.fetchAuthors()
  }

  _renderItem = ({ item }) => {
    return <AuthorsListItem author={item} />
  }

  render () {
    return (
      <FlatList
        data={this.props.authors}
        renderItem={this._renderItem}
        keyExtractor={author => author.id}
        refreshing={!this.props.authors}
        onRefresh={this._handleRefresh}
        ListHeaderComponent={<View style={{ height: 1 }} />}
        ListFooterComponent={<View style={{ height: 1 }} />}
        removeClippedSubviews={false}
      />
    )
  }
}

const mapStateToProps = ({ authors }) => {
  return { authors }
}

export default connect(mapStateToProps, { fetchAuthors })(AuthorsList)
