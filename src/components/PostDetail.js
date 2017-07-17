import React from 'react';
import { View, Dimensions, Image } from 'react-native';
import HTML from 'react-native-render-html';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import moment from 'moment';

import config from '../config';
import { styles as textStyles } from '../components/common/Text';

const window = Dimensions.get('window');

const textColor = 'rgba(0,0,0,0.87)';
const styles = {
  featuredImageWrap: {
    aspectRatio: 1.78,
  },
  featuredImage: {
    width: window.width,
    height: 256,
  },
  html: {
    h1: {
      ...textStyles.titleText,
      marginHorizontal: 16,
      marginTop: 8,
      marginBottom: 8,
      color: textColor,
    },
    h2: { color: textColor },
    h3: { color: textColor },
    h4: { color: textColor },
    h5: { color: textColor },
    h6: { color: textColor },
    p: {
      marginHorizontal: 16,
      marginTop: 8,
      marginBottom: 8,
      color: textColor,
    },
  }
};

const renderFeaturedImage = (item) => {
  if (item.featured_media === 0) return null;

  let image = item.featured_media_url;
  const featuredMedia = item._embedded['wp:featuredmedia'][0];
  if (!image && featuredMedia.media_details.sizes.medium) {
    image = featuredMedia.media_details.sizes.medium.source_url;
  }
  if (!image) image = featuredMedia.source_url;
  if (!image) {
    image = featuredMedia.media_details.sizes.full.source_url;
  }

  return (
    <Image 
      style={styles.featuredImage} 
      source={{ uri: image }}
    />
  );
};

const css = {
  title: 'margin-top: 16px;',
  meta: 'color: rgba(0,0,0,0.38); font-size: 12px; margin-top: 0px;',
};

const getHtml = (item) => {
  return `
    <h1 style="${css.title}">${item.title.rendered}</h1>
    <p style="${css.meta}">${moment(item.date).format('LLL')}</p>
    ${item.content.rendered}
  `;
};

export default ({ item }) => {
  return (
    <ParallaxScrollView
      backgroundColor={config.COLOR_PRIMARY}
      parallaxHeaderHeight={window.width * (9 / 16)}
      renderBackground={() => renderFeaturedImage(item)}
    >
      <View>
        <HTML htmlStyles={styles.html} html={getHtml(item)} />
      </View>
    </ParallaxScrollView>
  );
};
