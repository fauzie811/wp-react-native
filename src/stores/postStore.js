import { observable } from 'mobx';

class PostStore {
  @observable loading;
  @observable refreshing;
  @observable page;
  @observable items;

  constructor() {
    this.loading = { all: true };
    this.refreshing = { all: true, slider: true };
    this.page = { all: 1 };
    this.items = {
      all: [],
      slider: [],
    };
  }

  getItemsArray(key = 'all') {
    return this.items[key].peek();
  }
}

const postStore = new PostStore();

export default postStore;
export { PostStore };
