import { extendObservable } from 'mobx';

import postStore from '../stores/postStore';
import { getPosts } from '../api';

export const fetchPosts = (key = 'all', paged = true, params = {}) => {
  postStore.setPage(key);
  if (paged) postStore.setLoading(key, true);
  postStore.setRefreshing(key, postStore.page[key] === 1);
  getPosts({ page: postStore.page[key], ...params })
    .then(data => {
      if (postStore.items[key]) {
        postStore.items[key] = 
          postStore.page[key] === 1 ? data : [...postStore.items[key], ...data];
      } else {
        extendObservable(postStore.items, { [key]: data });
      }
      if (paged) postStore.setLoading(key, false);
      postStore.setRefreshing(key, false);
    });
};
