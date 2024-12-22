export interface Collection {
 title: string;
  quantityAvailable: number;
  priceRange: {
    min: number;
    max: number;
    currency: string;
  };
  description: string;
  artist: {
    name: string;
  };
  }