import React from 'react';
import { View } from 'react-native';
import Image from 'react-native-cacheable-image';
import Entities from 'html-entities';
import moment from 'moment';

import Touchable from './common/Touchable';
import { BodyTextMedium, CaptionText } from './common/Text';

const entities = new Entities.AllHtmlEntities();

const styles = {
  container: {
    flexDirection: 'row',
    minHeight: 64,
    padding: 12,
  },
  thumbnailWrap: {
    backgroundColor: '#e5e5e5',
    height: 56,
    width: 56,
    marginRight: 12,
  },
  thumbnail: {
    flex: 1,
  },
  details: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
  },
  metaWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
};

const renderThumbnail = (item) => {
  if (item.featured_media === 0) return null;

  let image = item.featured_media_url;
  if (!image) image = item._embedded['wp:featuredmedia'][0].source_url;
  if (!image) {
    image = item._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url;
  }

  return (
    <Image 
      style={styles.thumbnail} 
      source={{ uri: image }}
    />
  );
};

export default ({ item, onPress }) => (
  <Touchable onPress={onPress}>
    <View style={styles.container}>
      <View style={styles.thumbnailWrap}>
        {renderThumbnail(item)}
      </View>
      <View style={styles.details}>
        <BodyTextMedium 
          style={styles.title} 
          numberOfLines={2}
        >
          {entities.decode(item.title.rendered)}
        </BodyTextMedium>
        <View style={styles.metaWrap}>
          <CaptionText secondary>{item._embedded['wp:term'][0][0].name}</CaptionText>
          <CaptionText disabled>{moment(item.date).fromNow()}</CaptionText>
        </View>
      </View>
    </View>
  </Touchable>
);
