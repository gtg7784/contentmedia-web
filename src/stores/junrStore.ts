import { observable, action } from 'mobx';

class JunrStore implements ClubStoreType {
  @observable data: Array<ArtworkType> = [];
  @observable name: clubs = "junr";

  @action updateData = (data: Array<ArtworkType>): void => {
    this.data = data;
  }
  @action updateName = (name: clubs): void => {
    this.name = name;
  }
}

const junrStore: JunrStore = new JunrStore();

export default junrStore;