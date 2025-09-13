export type RestaurantsType = Array<RestaurantType>;

export type RestaurantType = {
  objectId: string,
  name: string,
  address1: string,
  suburb: string,
  cuisines: Array<string>,
  imageLink: string,
  open: string,
  close: string,
  deals: Array<DealType>,
}

export type DealType = {
  objectId: string,
  discount: string,
  dineIn: string,
  lightning: string,
  open?: string,
  close?: string,
  start?: string,
  end?: string,
  qtyLeft: string,
}
