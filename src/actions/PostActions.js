import postStore from '../stores/postStore';
import { getPosts } from '../api';

export const fetchPosts = (key = 'all', paged = true, params = {}) => {
  postStore.setPage(key);
  if (paged) postStore.setLoading(key, true);
  postStore.setRefreshing(key, postStore.page.get(key) === 1);
  getPosts({ page: postStore.page.get(key), ...params })
    .then(data => {
      postStore.updateItems(key, data);
      if (paged) postStore.setLoading(key, false);
      postStore.setRefreshing(key, false);
    });
};
