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
    backgroundColor: 'white',
    borderRadius: 2,
    flexDirection: 'row',
    minHeight: 80,
    overflow: 'hidden',
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

  render() {
    const { item, ...props } = this.props;

    return (
      <CardView
        cardElevation={1}
        cardMaxElevation={1}
        cornerRadius={2}
      >
        <Touchable {...props}>
          <View style={styles.container}>
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
      </CardView>
    );
  }
}
