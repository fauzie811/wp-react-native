import React, { PureComponent } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Entities from 'html-entities';
import moment from 'moment';

import Touchable from './common/Touchable';
import { BodyTextMedium, CaptionText } from './common/Text';

const entities = new Entities.AllHtmlEntities();

const styles = {
  container: {
    borderColor: '#cccccc',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 5,
    minHeight: 80,
    overflow: 'hidden',
  },
  innerContainer: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  thumbnailWrap: {
    backgroundColor: '#e5e5e5',
    height: 80,
    width: 80,
  },
  thumbnail: {
    flex: 1,
  },
  details: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 12,
  },
  title: {
  },
  metaWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
};

export default class PostListItem extends PureComponent {
  renderThumbnail = () => {
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

    return (
      <Image 
        style={styles.thumbnail} 
        source={{ uri: image }}
      />
    );
  };

  render() {
    const { item, ...props } = this.props;

    return (
      <Touchable {...props} style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={styles.thumbnailWrap}>
            {this.renderThumbnail()}
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
  }
}
