import categoryStore from '../stores/categoryStore';
import { getCategories } from '../api';

export const fetchCategories = () => {
  categoryStore.loading = true;
  getCategories()
    .then(data => {
      categoryStore.items = data;
      categoryStore.loading = false;
    });
};
