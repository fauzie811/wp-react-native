import React from 'react';
import { View, Image, Platform } from 'react-native';

import Touchable from './common/Touchable';
import { SubheadingText } from './common/Text';

const styles = {
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: Platform.OS === 'android' ? 56 : 54,
    paddingHorizontal: 16,
  },
  avatar: {
    borderRadius: 20,
    height: 40,
    width: 40,
    marginRight: 16,
  },
};

export default ({ item, onPress }) => (
  <Touchable onPress={onPress}>
    <View style={styles.container}>
      <Image style={styles.avatar} source={{ uri: item.avatar_urls['96'] }} />
      <SubheadingText>{item.name}</SubheadingText>
    </View>
  </Touchable>
);
