import postStore from '../stores/postStore';
import { getPosts } from '../api';

export const fetchPosts = (key = 'all', paged = true, params = {}) => {
  const page = paged ? postStore.page[key] : 1;
  if (paged) postStore.loading[key] = true;
  postStore.refreshing[key] = page === 1;
  getPosts({ page, ...params })
    .then(data => {
      postStore.items[key] = page === 1 ? data : [...postStore.items[key], ...data];
      if (paged) postStore.loading[key] = false;
      postStore.refreshing[key] = false;
    });
};
