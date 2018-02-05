import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import { Ionicons as Icon } from '@expo/vector-icons'

import Touchable from './common/Touchable'
import Collapsible from './common/Collapsible'

export default class CategoriesListItem extends PureComponent {
  state = { expanded: false };

  _renderDropdown = () => {
    return (
      <Touchable onPress={() => this.setState({ expanded: !this.state.expanded })}>
        <View style={styles.dropdownContainer}>
          <Icon
            size={18}
            color='#aaa'
            name={`ios-arrow-${this.state.expanded ? 'up' : 'down'}`}
          />
        </View>
      </Touchable>
    )
  };

  _renderTitle = () => {
    const { category, onPress } = this.props

    return (
      <Touchable onPress={onPress}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{category.name}</Text>
          {category.description ? <Text style={styles.description}>{category.description}</Text> : null}
        </View>
      </Touchable>
    )
  };

  _renderChildren = () => {
    if (!this.props.children.length) return null

    return (
      <Collapsible
        style={styles.childrenContainer}
        collapsed={!this.state.expanded}
      >{this.props.children}</Collapsible>
    )
  };

  _renderItem = () => {
    if (!this.props.children.length) return this._renderTitle()

    return (
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 1 }}>{this._renderTitle()}</View>
        {this._renderDropdown()}
      </View>
    )
  };

  render () {
    const { category } = this.props

    return (
      <View style={category.parent === 0 && styles.container}>
        {this._renderItem()}
        {this._renderChildren()}
      </View>
    )
  }
}

const styles = {
  container: {
    backgroundColor: 'white',
    marginHorizontal: 2,
    marginVertical: 1
  },
  titleContainer: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    minHeight: 48,
    justifyContent: 'center'
  },
  childrenContainer: {
    // backgroundColor: 'rgba(0,0,0,0.01)',
    borderTopColor: '#eee',
    borderTopWidth: StyleSheet.hairlineWidth,
    marginLeft: 10
  },
  dropdownContainer: {
    flex: Platform.OS === 'ios' ? 1 : 0, // weird android bug
    borderLeftColor: '#eee',
    borderLeftWidth: StyleSheet.hairlineWidth,
    alignItems: 'center',
    justifyContent: 'center',
    width: 48
  },
  title: {
    color: 'rgba(0,0,0,0.87)',
    fontSize: 14,
    fontFamily: 'roboto-slab-regular'
  },
  description: {
    color: 'rgba(0,0,0,0.38)',
    fontSize: 12,
    marginTop: 4
  }
}
