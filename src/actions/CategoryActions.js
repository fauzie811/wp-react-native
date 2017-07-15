import categoryStore from '../stores/categoryStore';
import { getCategories } from '../api';

export const fetchCategories = () => {
  categoryStore.setLoading(true);
  getCategories()
    .then(data => {
      categoryStore.updateItems(data);
      categoryStore.setLoading(false);
    });
};
