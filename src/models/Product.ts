export interface IProduct {
  id?: string;
  image_url?: string;
  stock?: number;
  productName?: string;
  price?: number;
  productDescription?: string;
  favorite?: string | number;
}

export class Product implements IProduct {
  id?: string;  
  image_url?: string;
  stock?: number;
  productName?: string;
  price?: number;
  productDescription?: string;
  favorite?: string | number;

  constructor(data?: IProduct) {
    Object.assign(this, data)
  } 
}