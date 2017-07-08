import React from 'react';
import { View, TouchableNativeFeedback, TouchableOpacity, Platform } from 'react-native';

const Touchable = (props) => {
  if (Platform.OS === 'android') {
    const background = Platform.Version >= 21 ? 
      TouchableNativeFeedback.SelectableBackgroundBorderless() :
      TouchableNativeFeedback.SelectableBackground();
    
    return <TouchableNativeFeedback {...props} background={background} />;
  }

  return (
    <TouchableOpacity {...props} />
  );
};

const styles = {
  buttonBaseStyle: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonStyle: Platform.OS === 'android' ? {
    height: 48,
    width: 48
  } : {
    flex: 1,
    aspectRatio: 1,
  }
};

export default ({ icon, onPress }) => (
  <Touchable onPress={onPress}>
    <View style={[styles.buttonBaseStyle, styles.buttonStyle]}>
      {icon}
    </View>
  </Touchable>
);
