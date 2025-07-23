export interface Product {
  id: number;
  name: string;
  price_old: number;
  price_new?: number;
  sale?: number;
  hot?: boolean;
}