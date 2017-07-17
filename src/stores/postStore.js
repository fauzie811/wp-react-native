import { observable, action } from 'mobx';

class PostStore {
  @observable loading = observable.map();
  @observable refreshing = observable.map();
  @observable page = observable.map();
  @observable items = observable.map();

  getItemsArray(key = 'all') {
    return this.items.has(key) ? this.items.get(key).peek() : [];
  }

  @action setLoading(key, loading) {
    this.loading.set(key, loading);
  }

  @action setRefreshing(key, refreshing) {
    this.refreshing.set(key, refreshing);
  }

  @action setPage(key, page) {
    this.page.set(key, page);
  }

  @action nextPage(key) {
    this.page.set(key, this.page.get(key) + 1);
  }

  @action updateItems(key, items) {
    const add = this.page.get(key) > 1;
    if (this.items.has(key)) {
      this.items.set(key, add ? [...this.items.get(key), ...items] : items);
    } else {
      this.items.set(key, items);
    }
  }
}

const postStore = new PostStore();

export default postStore;
export { PostStore };
