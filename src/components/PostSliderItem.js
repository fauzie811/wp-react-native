import React, { PureComponent } from 'react';
import { View } from 'react-native';
import Image from 'react-native-cacheable-image';
import CardView from 'react-native-cardview';
import Entities from 'html-entities';
import moment from 'moment';

import Touchable from './common/Touchable';
import { BodyTextMedium, CaptionText } from './common/Text';

const entities = new Entities.AllHtmlEntities();

const styles = {
  container: {
    flex: 1,
  },
  thumbnail: {
    borderRadius: 4,
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
    if (!image) image = item._embedded['wp:featuredmedia'][0].source_url;
    if (!image) {
      image = item._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url;
    }

    return image;
  };

  render() {
    const { item, ...props } = this.props;

    return (
      <CardView
        cardElevation={2}
        cardMaxElevation={2}
        cornerRadius={4}
        style={styles.container}
      >
        <Touchable {...props}>
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
        </Touchable>
      </CardView>
    );
  }
}
