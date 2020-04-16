import { observable } from 'mobx';

class JunrStore implements ClubStoreType {
  @observable data: Array<ArtworkType> = [];
  @observable name: string = "";
}

const junrStore: JunrStore = new JunrStore();

export default junrStore;