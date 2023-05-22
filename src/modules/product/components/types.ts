export interface IProductImage {
  id: string
  url: string
}

export interface IProductCategory {
  id: string
  name: string
}

export interface IProductAttribute {
  id: string
  name: string
  value: string
}

export interface IProduct {
  id: string
  name: string
  description: string
  brand: string
  price: number
  priceSale?: number
  isAvaible: boolean
  isDiscounted: boolean
  images: IProductImage[]
  categories?: IProductCategory[]
  attributes?: IProductAttribute[]
}
