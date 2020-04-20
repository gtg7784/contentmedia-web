import { observable, action } from 'mobx';

class AunStore implements ClubStoreType {
  @observable data: Array<ArtworkType> = [];

  @observable name: clubs = 'aun';

  @action updateData = (data: Array<ArtworkType>): void => {
    this.data = data;
  }

  @action updateName = (name: clubs): void => {
    this.name = name;
  }
}

const aunStore: AunStore = new AunStore();

export default aunStore;
