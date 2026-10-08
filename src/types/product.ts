export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number | null;
  available: boolean | null;
  image: string;
  imageAlt: string;
}
