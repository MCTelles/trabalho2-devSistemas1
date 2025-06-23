export interface IProduct {
  _id: string;
  productName: string;
  price: number;
  productImage: string;
  category: string;
  quantity?: number;
}
