import { observable, action } from 'mobx';

class VfriendsStore implements ClubStoreType {
  @observable data: Array<ArtworkType> = [];

  @observable name: clubs = 'vfriends';

  @action updateData = (data: Array<ArtworkType>): void => {
    this.data = data;
  }

  @action updateName = (name: clubs): void => {
    this.name = name;
  }
}

const vfriendsStore: VfriendsStore = new VfriendsStore();

export default vfriendsStore;
