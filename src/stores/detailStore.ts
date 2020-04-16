import { observable, action } from 'mobx';

class DetailStore implements DetailStoreType{
  @observable data: DataType = {
    images: [""],
    profile: {
      name: "",
      email: "",
      description: ""
    },
    link: undefined
  };

  @action update(data: DataType) {
    this.data = data;
  }
}

const detailStore: DetailStore = new DetailStore();

export default detailStore;