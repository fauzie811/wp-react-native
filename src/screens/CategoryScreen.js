import React from 'react';

import Container from '../components/common/Container';
import PostList from '../components/PostList';

const CategoryScreen = ({ navigation }) => {
  const { item } = navigation.state.params;

  return (
    <Container style={{ backgroundColor: '#eeeeee' }}>
      <PostList 
        navigation={navigation}
        storeKey={item.slug}
        queryString={{ categories: `${item.id}` }}
      />
    </Container>
  );
};

CategoryScreen.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params.item.name,
});

export default CategoryScreen;
