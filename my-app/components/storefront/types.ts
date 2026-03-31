export type ProductArt =
  | "backpack"
  | "toy"
  | "strap"
  | "cap"
  | "roll"
  | "woven"
  | "satchel";

export type Product = {
  id: string;
  name: string;
  subtitle: string;
  priceHint: string;
  price?: number;
  discountPercentage?: number;
  rating?: number;
  brand?: string;
  category?: string;
  imageAlt?: string;
  art: ProductArt;
  image?: string;
  badge?: string;
  isOutOfStock?: boolean;
  isNew?: boolean;
  tags: Record<string, string | string[]>;
};

export type FilterSection = {
  id: string;
  label: string;
  options: string[];
};
