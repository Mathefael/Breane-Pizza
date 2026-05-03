export interface Pizza {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  tags: string[];
}

export interface Promotion {
  id: string;
  title: string;
  description: string;
  price?: number;
  cta: string;
}

export interface Review {
  id: number;
  name: string;
  comment: string;
  rating: number;
}
