import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'
import HTML from 'react-native-render-html'
import { connect } from 'react-redux'
import sanitizeHtml from 'sanitize-html'

import Config from '../Config'
import { fetchAboutPage } from '../actions/aboutActions'

class About extends Component {
  componentWillMount () {
    this.props.fetchAboutPage()
  }

  _renderContent = () => {
    if (!this.props.about.id) return null

    const { about } = this.props

    const html = `<h1>${about.title.rendered}</h1>${about.content.rendered}`

    return (
      <View style={{ paddingHorizontal: 16 }}>
        <HTML htmlStyles={Config.htmlStyles} html={sanitizeHtml(html, Config.sanitizeOptions)} />
      </View>
    )
  }

  render () {
    return (
      <ScrollView>
        {this._renderContent()}
      </ScrollView>
    )
  }
}

const mapStateToProps = ({ about }) => {
  return { about }
}

export default connect(mapStateToProps, { fetchAboutPage })(About)
