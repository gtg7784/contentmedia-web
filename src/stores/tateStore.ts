import { observable, action } from 'mobx';

class TateStore implements ClubStoreType {
  @observable data: Array<ArtworkType> = [];
  @observable name: clubs = "tate";

  @action updateData = (data: Array<ArtworkType>): void => {
    this.data = data;
  }
  @action updateName = (name: clubs): void => {
    this.name = name;
  }
}

const tateStore: TateStore = new TateStore();

export default tateStore;