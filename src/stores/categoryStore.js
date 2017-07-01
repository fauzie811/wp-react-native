import { observable } from 'mobx';

class CategoryStore {
  @observable loading;
  @observable items;

  constructor() {
    this.loading = true;
    this.items = [];
  }
}

const categoryStore = new CategoryStore();

export default categoryStore;
export { CategoryStore };
