import React, { Component } from 'react';
import { View } from 'react-native';
import Collapsible from 'react-native-collapsible';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Touchable from './common/Touchable';
import Divider from './common/Divider';
import { BodyTextMedium } from './common/Text';

const styles = {
  container: {
    flexDirection: 'row',
    height: 48,
    alignItems: 'center',
    paddingHorizontal: 12
  },
  icon: {
    marginRight: 12,
  },
  childrenContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
  }
};

class CategoryListItem extends Component {
  state = { expanded: false };

  renderDropdown = () => (
    <Touchable onPress={() => this.setState({ expanded: !this.state.expanded })}>
      <View style={{ padding: 12, alignItems: 'center', justifyContent: 'center' }}>
        <Icon size={24} color="rgba(0,0,0,0.54)" name={this.state.expanded ? 'chevron-up' : 'chevron-down'} />
      </View>
    </Touchable>
  )

  renderTitle = () => {
    const { item, onPress } = this.props;

    return (
      <Touchable onPress={onPress}>
        <View style={styles.container}>
          <Icon size={18} style={styles.icon} color="rgba(0,0,0,0.54)" name="tag" />
          <BodyTextMedium>{item.name}</BodyTextMedium>
        </View>
      </Touchable>
    );
  }

  renderItem = () => {
    if (!this.props.children.length) return this.renderTitle();
    
    return (
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 1 }}>{this.renderTitle()}</View>
        <Divider style={{ width: 1 }} />
        {this.renderDropdown()}
      </View>
    );
  }

  render() {
    return (
      <View>
        {this.renderItem()}
        <Divider style={{ height: 1 }} />
        <Collapsible
          style={styles.childrenContainer}
          collapsed={!this.state.expanded}
        >{this.props.children}</Collapsible>
      </View>
    );
  }
}

export default CategoryListItem;
