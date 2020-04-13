import { observable } from 'mobx';

export interface DetailType {
  images: Array<string>;
  profile: {
    name: string;
    email: string;
    description: string;
  };
  type: string;
}

export interface DetailStoreType {
  data?: DetailType;
}

class DetailStore implements DetailStoreType{
  @observable data?: DetailType;
}

const detailStore: DetailStore = new DetailStore();


export default detailStore;