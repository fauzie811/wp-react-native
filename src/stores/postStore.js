import { observable, action, extendObservable } from 'mobx';

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
    return this.items[key] ? this.items[key].peek() : [];
  }

  @action setLoading(key, loading) {
    if (!(key in this.loading)) {
      extendObservable(this.loading, { [key]: loading });
    } else {
      this.loading[key] = loading;
    }
  }

  @action setRefreshing(key, refreshing) {
    if (!(key in this.refreshing)) {
      extendObservable(this.refreshing, { [key]: refreshing });
    } else {
      this.refreshing[key] = refreshing;
    }
  }

  @action setPage(key, page = 0) {
    if (!(key in this.page)) {
      extendObservable(this.page, { [key]: 1 });
    } else {
      this.page[key] = page > 0 ? page : this.page[key];
    }
  }
}

const postStore = new PostStore();

export default postStore;
export { PostStore };
