export type ProductsType = Product[];

export interface Product {
  id: number
  slug: string
  name: string
  image: Images
  category: string
  categoryImage: CategoryImage
  new: boolean
  price: number
  description: string
  features: string
  includes: Include[]
  gallery: Gallery
  others: Other[]
}

export interface Images {
  mobile: string
  tablet: string
  desktop: string
}

export interface CategoryImage {
  mobile: string
  tablet: string
  desktop: string
}

export interface Include {
  quantity: number
  item: string
}

export interface Gallery {
  first: First
  second: Second
  third: Third
}

export interface First {
  mobile: string
  tablet: string
  desktop: string
}

export interface Second {
  mobile: string
  tablet: string
  desktop: string
}

export interface Third {
  mobile: string
  tablet: string
  desktop: string
}

export interface Other {
  slug: string
  name: string
  image: Image2
}

export interface Image2 {
  mobile: string
  tablet: string
  desktop: string
}

export interface Device {
    images: {
        mobile: string;
        tablet: string;
        desktop: string;
    };
    name: string;
    description: string;
    category: string;
    newDevice: boolean;
    isDescription?: boolean;

}

export interface CartProduct {
  slug: string;
  name: string;
  image: string;
  count: number;
  price: number;
  priceOriginal: number;
}