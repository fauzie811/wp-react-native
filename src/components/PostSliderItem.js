import React from 'react';
import { View, Dimensions } from 'react-native';
import Image from 'react-native-cacheable-image';
import Entities from 'html-entities';
import moment from 'moment';

import Touchable from './common/Touchable';
import { BodyTextMedium, CaptionText } from './common/Text';

const entities = new Entities.AllHtmlEntities();
const window = Dimensions.get('window');

const styles = {
  thumbnail: {
    width: window.width,
    aspectRatio: 1.78,
  },
  details: {
    backgroundColor: 'rgba(0,0,0,0.75)',
    paddingHorizontal: 12,
    paddingVertical: 8,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  title: {
    marginBottom: 6,
  }
};

const getThumbnailUri = (item) => {
  if (item.featured_media === 0) return null;

  let image = item.featured_media_url;
  if (!image) image = item._embedded['wp:featuredmedia'][0].source_url;
  if (!image) {
    image = item._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url;
  }

  return image;
};

export default ({ item, onPress }) => (
  <Touchable onPress={onPress}>
    <Image 
      style={styles.thumbnail}
      source={{ uri: getThumbnailUri(item) }}
    >
      <View style={styles.details}>
        <BodyTextMedium 
          inverted
          style={styles.title} 
          numberOfLines={2}
        >
          {entities.decode(item.title.rendered)}
        </BodyTextMedium>
        <CaptionText inverted secondary>{moment(item.date).fromNow()}</CaptionText>
      </View>
    </Image>
  </Touchable>
);
