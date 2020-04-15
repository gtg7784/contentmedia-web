export {}
// global 객체를 확장하려는 경우, ambient 또는 external module을 사용해야 하는데,
// ambient module을 사용할 수 없으므로,
// export {} 를 통해 external module로 만들어줌
declare global {
  export interface DetailType {
    images: string[];
    profile: {
      name: string;
      email: string;
      description: string;
    };
    link?: string;
  }

  export interface DetailStoreType {
    data: DetailType;
    update?: (data: DetailType) => any;
    updateType?: (data: string) => void;
  }
}