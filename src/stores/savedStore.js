import { AsyncStorage } from 'react-native';
import { observable, computed, action } from 'mobx';
import { create, persist } from 'mobx-persist';

class SavedStore {
  @persist('list') @observable items = observable.array();

  @computed get itemsArray() {
    return this.items.peek();
  }

  isSaved(item) {
    return this.items.filter(i => i.id === item.id).length > 0;
  }

  @action add(item) {
    if (this.isSaved(item)) return;

    this.items.push(item);
  }

  @action remove(item) {
    this.items.forEach(i => {
      if (i.id === item.id) {
        this.items.remove(i);
      }
    });
  }
}

const hydrate = create({
  storage: AsyncStorage,
  jsonify: true,
});

const savedStore = new SavedStore();

hydrate('saved_posts', savedStore);

export default savedStore;
export { SavedStore };
