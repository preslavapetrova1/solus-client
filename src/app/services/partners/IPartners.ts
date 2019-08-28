export interface IPartners {
  key: string;
  imgUrl: string;
  partners: Array<IPartner>;
}

export interface IPartner {
  externalUrl: string;
}
