import { observable } from 'mobx';

class MirStore implements ClubStoreType {
  @observable data: Array<ArtworkType> = [];
  @observable name: string = "";
}

const mirStore: MirStore = new MirStore();

export default mirStore;