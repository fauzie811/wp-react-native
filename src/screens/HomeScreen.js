import React, { Component } from 'react';
import { View, Dimensions, Platform } from 'react-native';
import { observer } from 'mobx-react';
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';

import config from '../config';
import { fetchPosts } from '../actions';
import postStore from '../stores/postStore';
import Container from '../components/common/Container';
import PostList from '../components/PostList';
import PostSliderItem from '../components/PostSliderItem';
import ToolbarButton from '../components/common/ToolbarButton';

const window = Dimensions.get('window');

const dotStyle = {
  borderRadius: 3,
  height: 6,
  width: 6,
  marginLeft: 2,
  marginRight: 2,
  marginTop: 0,
  marginBottom: 0,
};
const styles = {
  sliderItem: {
    flex: 1, 
    margin: 8,
    marginBottom: 24,
  },
  dotStyle: {
    ...dotStyle,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  activeDotStyle: {
    ...dotStyle,
    backgroundColor: config.COLOR_PRIMARY,
  },
};

@observer
class HomeScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused, tintColor }) => (
      Platform.OS === 'android' ?
      <Icon size={24} color={tintColor} name="md-home" /> :
      <Icon size={25} color={tintColor} name={focused ? 'ios-home' : 'ios-home-outline'} />
    ),
    headerRight: (
      <ToolbarButton
        icon={
          Platform.OS === 'android' ?
          <Icon size={24} color="white" name="md-search" /> :
          <Icon size={22} color="white" name="ios-search" />
        }
        onPress={() => {}}
      />
    )
  };

  componentWillMount() {
    fetchPosts('slider', false, { per_page: 6 });
  }

  renderSlider = () => {
    if (postStore.items.slider.length === 0) return;

    return (
      <Swiper
        width={window.width}
        height={(window.width * (9 / 16)) + 16}
        showsPagination
        paginationStyle={{ bottom: 10 }}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
      >
        {this.renderSliderItems()}
      </Swiper>
    );
  };

  renderSliderItems = () => postStore.getItemsArray('slider').map((item, index) => (
    <View 
      key={index} 
      style={styles.sliderItem}
    >
      <PostSliderItem 
        item={item} 
        onPress={() => {
          this.props.navigation.navigate('Detail', { item });
        }}
        style={{ flex: 1 }}
      /> 
    </View>
  ));

  render() {
    const { navigation } = this.props;

    return (
      <Container style={{ backgroundColor: '#eeeeee' }}>
        <PostList navigation={navigation} ListHeaderComponent={this.renderSlider()} />
      </Container>
    );
  }
}

export default HomeScreen;
