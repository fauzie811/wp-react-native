import authorStore from '../stores/authorStore';
import { getAuthors } from '../api';

export const fetchAuthors = () => {
  authorStore.setLoading(true);
  getAuthors()
    .then(data => {
      authorStore.updateItems(data);
      authorStore.setLoading(false);
    });
};
