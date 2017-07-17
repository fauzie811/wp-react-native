import React, { PureComponent } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Entities from 'html-entities';
import moment from 'moment';

import Touchable from './common/Touchable';
import { BodyTextMedium, CaptionText } from './common/Text';

const entities = new Entities.AllHtmlEntities();

const styles = {
  container: {
    backgroundColor: 'white',
    borderColor: '#cccccc',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 5,
    overflow: 'hidden',
  },
  thumbnail: {
    width: '100%',
    height: '100%',
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

export default class PostSliderItem extends PureComponent {
  getThumbnailUri = () => {
    const { item } = this.props;

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

    return image;
  };

  render() {
    const { item, ...props } = this.props;

    return (
      <Touchable {...props} style={styles.container}>
        <View>
          <Image 
            style={styles.thumbnail}
            source={{ uri: this.getThumbnailUri() }}
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
        </View>
      </Touchable>
    );
  }
}
