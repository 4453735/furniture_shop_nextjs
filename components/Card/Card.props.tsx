export interface CardProps {
  title: string;
  category: string;
  price: number;
  imageUrl: string;
  sizes: {
    width: number;
    height: number;
    depth: number;
  };
}
