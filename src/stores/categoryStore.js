import { observable, action } from 'mobx';

class CategoryStore {
  @observable loading = true;
  @observable items = observable.array();

  @action setLoading(loading) {
    this.loading = loading;
  }

  @action updateItems(items) {
    this.items = items;
  }
}

const categoryStore = new CategoryStore();

export default categoryStore;
export { CategoryStore };
