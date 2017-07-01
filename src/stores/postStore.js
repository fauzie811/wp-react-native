import { observable, computed } from 'mobx';

class PostStore {
  @observable loading;
  @observable refreshing;
  @observable page;
  @observable items;

  constructor() {
    this.loading = true;
    this.refreshing = true;
    this.page = 1;
    this.items = [];
  }

  @computed get itemsArray() {
    return this.items.peek();
  }
}

const postStore = new PostStore();

export default postStore;
export { PostStore };
