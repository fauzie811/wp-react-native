import { observable, computed } from 'mobx';

class AuthorStore {
  @observable loading;
  @observable items;

  constructor() {
    this.loading = true;
    this.items = [];
  }

  @computed get itemsArray() {
    return this.items.peek();
  }
}

const authorStore = new AuthorStore();

export default authorStore;
export { AuthorStore };
