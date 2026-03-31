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
  art: ProductArt;
  badge?: string;
  isOutOfStock?: boolean;
  isNew?: boolean;
  tags: Record<string, string>;
};

export type FilterSection = {
  id: string;
  label: string;
  options: string[];
};
