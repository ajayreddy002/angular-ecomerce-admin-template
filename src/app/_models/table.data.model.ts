export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
export interface ITableModel {
  details: any;
  status: string;
  items: number;
  total: number;
}
export interface IProductDataModel {
  images: string;
  name: string;
  price: number;
  rating: number;
  quantity: number;
}
export interface IProductDataModel2 {
  product_name: string;
  product_rating: number;
  product_price: number;
  product_quantity: number;
  product_category: any;
  stock_avilability: string;
  ProductImages: Array<any>;
  product_img_path: string;
}
