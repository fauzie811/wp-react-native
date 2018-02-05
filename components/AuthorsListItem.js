import React, { PureComponent } from 'react'
import { View, Text, Image } from 'react-native'

import Touchable from './common/Touchable'

export default class AuthorsListItem extends PureComponent {
  render () {
    const { author, onPress } = this.props

    return (
      <Touchable onPress={onPress}>
        <View style={styles.container}>
          <Image style={styles.image} source={{ uri: author.avatar_urls['96'] }} />
          <View style={styles.details}>
            <Text style={styles.name}>{author.name}</Text>
            {author.description
              ? <Text style={styles.description} numberOfLines={3}>{author.description}</Text> : null
            }
          </View>
        </View>
      </Touchable>
    )
  }
}

const styles = {
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginHorizontal: 2,
    marginVertical: 1,
    padding: 10
  },
  image: {
    borderRadius: 20,
    width: 40,
    height: 40,
    marginRight: 16
  },
  details: {
    flex: 1,
    justifyContent: 'center'
  },
  name: {
    fontFamily: 'roboto-slab-regular'
  },
  description: {
    color: 'rgba(0,0,0,0.38)',
    fontSize: 12,
    marginTop: 4
  }
}
