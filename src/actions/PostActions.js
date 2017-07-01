import postStore from '../stores/postStore';
import { getLatestPosts } from '../api';

export const fetchPosts = () => {
  postStore.loading = true;
  postStore.refreshing = postStore.page === 1;
  getLatestPosts(postStore.page)
    .then(data => {
      postStore.items = postStore.page === 1 ? data : [...postStore.items, ...data];
      postStore.loading = false;
      postStore.refreshing = false;
    });
};
