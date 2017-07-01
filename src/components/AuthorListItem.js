import React from 'react';
import { View, Image } from 'react-native';

import Touchable from './common/Touchable';
import { BodyTextMedium } from './common/Text';

const styles = {
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  avatar: {
    backgroundColor: '#e5e5e5',
    borderRadius: 16,
    height: 32,
    width: 32,
    marginRight: 12,
  },
};

export default ({ item, onPress }) => (
  <Touchable onPress={onPress}>
    <View style={styles.container}>
      <Image style={styles.avatar} source={{ uri: item.avatar_urls['96'] }} />
      <BodyTextMedium>{item.name}</BodyTextMedium>
    </View>
  </Touchable>
);
