import { observable } from 'mobx';

class TateStore implements ClubStoreType {
  @observable data: Array<ArtworkType> = [];
  @observable name: string = "";
}

const tateStore: TateStore = new TateStore();

export default tateStore;