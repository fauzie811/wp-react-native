import postStore from '../stores/postStore';
import { getPosts } from '../api';

export const fetchPosts = (key = 'all', paged = true, params = {}) => {
  if (!postStore.page.get(key)) postStore.setPage(key, 1);
  if (paged) postStore.setLoading(key, true);
  postStore.setRefreshing(key, postStore.page.get(key) === 1);
  getPosts({ page: postStore.page.get(key), ...params })
    .then(data => {
      postStore.updateItems(key, data);
      if (paged) postStore.setLoading(key, false);
      postStore.setRefreshing(key, false);
    });
};
