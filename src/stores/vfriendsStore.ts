import { observable } from 'mobx';

class VfriendsStore implements ClubStoreType {
  @observable data: Array<ArtworkType> = [];
  @observable name: string = "";
}

const vfriendsStore: VfriendsStore = new VfriendsStore();

export default vfriendsStore;