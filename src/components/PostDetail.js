import React from 'react';
import { View, Dimensions } from 'react-native';
import HTML from 'react-native-render-html';
import Image from 'react-native-cacheable-image';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import moment from 'moment';

import config from '../config';
import { styles as textStyles } from '../components/common/Text';

const window = Dimensions.get('window');

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
    },
    p: {
      marginHorizontal: 16,
      marginTop: 8,
      marginBottom: 8,
    },
  }
};

const renderFeaturedImage = (item) => {
  if (item.featured_media === 0) return null;

  let image = item.featured_media_url;
  if (!image) image = item._embedded['wp:featuredmedia'][0].source_url;
  if (!image) {
    image = item._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url;
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
