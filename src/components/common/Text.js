import React from 'react';
import { Text } from 'react-native';

const colorTextPrimary = 'rgba(0,0,0,0.87)';
const colorTextSecondary = 'rgba(0,0,0,0.54)';
const colorTextDisabled = 'rgba(0,0,0,0.38)';

export const styles = {
  bodyText: {
    fontSize: 14,
  },
  bodyTextMedium: {
    fontSize: 14,
    fontWeight: '500',
  },
  captionText: {
    fontSize: 12,
  },
  subheadingText: {
    fontSize: 16,
  },
  titleText: {
    fontSize: 20,
    fontWeight: '500',
  }
};

const getColor = (props) => {
  if (props.color) return props.color;
  if (props.secondary) return colorTextSecondary;
  if (props.disabled) return colorTextDisabled;

  return colorTextPrimary;
};

export const BodyText = (props) => (
  <Text {...props} style={{ ...styles.bodyText, color: getColor(props), ...props.style }} />
);

export const BodyTextMedium = (props) => (
  <Text {...props} style={{ ...styles.bodyTextMedium, color: getColor(props), ...props.style }} />
);

export const CaptionText = (props) => (
  <Text {...props} style={{ ...styles.captionText, color: getColor(props), ...props.style }} />
);

export const SubheadingText = (props) => (
  <Text {...props} style={{ ...styles.subheadingText, color: getColor(props), ...props.style }} />
);

export const TitleText = (props) => (
  <Text {...props} style={{ ...styles.titleText, color: getColor(props), ...props.style }} />
);
