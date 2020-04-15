import { observable, action } from 'mobx';

class DetailStore implements DetailStoreType{
  @observable data: DetailType = {
    images: [""],
    profile: {
      name: "",
      email: "",
      description: ""
    },
    type: ""
  };

  @action update(data: DetailType) {
    this.data = data;
  }
}

const detailStore: DetailStore = new DetailStore();

export default detailStore;