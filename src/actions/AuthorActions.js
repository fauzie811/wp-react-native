import authorStore from '../stores/authorStore';
import { getAuthors } from '../api';

export const fetchAuthors = () => {
  authorStore.loading = true;
  getAuthors()
    .then(data => {
      authorStore.items = data;
      authorStore.loading = false;
    });
};
