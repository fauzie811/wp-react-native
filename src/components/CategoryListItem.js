import React, { Component } from 'react';
import { View, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Collapsible from './common/Collapsible';
import Touchable from './common/Touchable';
import Divider from './common/Divider';
import { SubheadingText } from './common/Text';

const styles = {
  container: {
    flexDirection: 'row',
    height: Platform.OS === 'android' ? 48 : 44,
    alignItems: 'center',
    paddingHorizontal: 16
  },
  icon: {
    marginRight: 16,
  },
  childrenContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
  }
};

class CategoryListItem extends Component {
  state = { expanded: false };

  renderDropdown = () => (
    <Touchable onPress={() => this.setState({ expanded: !this.state.expanded })}>
      <View 
        style={{ 
          flex: 1, 
          paddingHorizontal: 12, 
          alignItems: 'center', 
          justifyContent: 'center' 
        }}
      >
        <Icon size={18} color="rgba(0,0,0,0.54)" name={this.state.expanded ? 'chevron-up' : 'chevron-down'} />
      </View>
    </Touchable>
  )

  renderTitle = () => {
    const { item, onPress } = this.props;

    return (
      <Touchable onPress={onPress}>
        <View style={styles.container}>
          <Icon size={18} style={styles.icon} color="rgba(0,0,0,0.54)" name="tag-text-outline" />
          <SubheadingText>{item.name}</SubheadingText>
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
        <Divider style={{ height: 1, marginLeft: 50 }} />
        <Collapsible
          style={styles.childrenContainer}
          collapsed={!this.state.expanded}
        >{this.props.children}</Collapsible>
      </View>
    );
  }
}

export default CategoryListItem;
