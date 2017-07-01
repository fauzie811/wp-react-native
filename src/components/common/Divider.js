import React from 'react';
import { View } from 'react-native';

const styleCommon = {
  backgroundColor: 'rgba(0,0,0,0.1)',
};

export default ({ style }) => (
  <View style={{ ...style, ...styleCommon }} />
);
