import { observable, action } from 'mobx';

class MirStore implements ClubStoreType {
  @observable data: Array<ArtworkType> = [];

  @observable name: clubs = 'mir';

  @action updateData = (data: Array<ArtworkType>): void => {
    this.data = data;
  }

  @action updateName = (name: clubs): void => {
    this.name = name;
  }
}

const mirStore: MirStore = new MirStore();

export default mirStore;
