export {}
// global 객체를 확장하려는 경우, ambient 또는 external module을 사용해야 하는데,
// ambient module을 사용할 수 없으므로,
// export {} 를 통해 external module로 만들어줌
declare global {
  type clubs = undefined | 'vfriends' | 'tate' | 'mir' | 'aun' | 'junr' | 'default';
  
  export interface DataType {
    images: string[];
    profile: {
      name: string;
      email: string;
      description: string;
    };
    link?: string;
  }

  export interface ArtworkType {
    thumbnail: string;
    title: string;
    type: string;
    description: string;
    style?: Object;
    data: DataType;
  }

  export interface DetailStoreType {
    data: DataType;
    update?: (data: DetailType) => any;
    updateType?: (data: string) => void;
  }

  export interface ClubStoreType {
    data: Array<ArtworkType>;
    name: clubs;
    updateData: (data: Array<ArtworkType>) => void;
    updateName: (name: clubs) => void;
  }
}