import React, { Component } from 'react';
import { Platform } from 'react-native';
import { observer, inject } from 'mobx-react';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

import Container from '../components/common/Container';
import ToolbarButton from '../components/common/ToolbarButton';
import PostDetail from '../components/PostDetail';

@inject('savedStore')
@observer
class DetailScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    
    return {
      headerRight: (
        <ToolbarButton
          icon={
            Platform.OS === 'android' ?
            <Icon2
              size={24} 
              color="white" 
              name={
                params.saved ? 'bookmark' : 'bookmark-outline'
              } 
            />
            :
            <Icon 
              size={22} 
              color="white" 
              name={
                params.saved ? 'ios-bookmark' : 'ios-bookmark-outline'
              } 
            />
          }
          onPress={() => params.handleSaveButton()}
        />
      )
    };
  }

  componentWillMount() {
    const { savedStore } = this.props;
    const { item } = this.props.navigation.state.params;

    this.props.navigation.setParams({ 
      handleSaveButton: this.handleSaveButton,
      saved: savedStore.isSaved(item),
    });
  }

  handleSaveButton = () => {
    const { savedStore } = this.props;
    const { item } = this.props.navigation.state.params;

    if (savedStore.isSaved(item)) {
      savedStore.remove(item);
    } else {
      savedStore.add(item);
    }
    this.props.navigation.setParams({ saved: savedStore.isSaved(item) });
  }

  render() {
    const { navigation } = this.props;
    const { item } = navigation.state.params;

    return (
      <Container>
        <PostDetail item={item} navigation={navigation} />
      </Container>
    );
  }
}

export default DetailScreen;
