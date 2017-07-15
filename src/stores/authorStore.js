import { observable, computed, action } from 'mobx';

class AuthorStore {
  @observable loading = false;
  @observable items = observable.array();

  @action setLoading(loading) {
    this.loading = loading;
  }

  @action updateItems(items) {
    this.items = items;
  }

  @computed get itemsArray() {
    return this.items.peek();
  }
}

const authorStore = new AuthorStore();

export default authorStore;
export { AuthorStore };
