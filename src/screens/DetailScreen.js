import React from 'react';

import Container from '../components/common/Container';
import PostDetail from '../components/PostDetail';

const DetailScreen = ({ navigation }) => {
  const { item } = navigation.state.params;

  return (
    <Container>
      <PostDetail item={item} navigation={navigation} />
    </Container>
  );
};

// DetailScreen.navigationOptions = {
// };

export default DetailScreen;
