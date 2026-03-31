import type { FilterSection, Product } from "./types";

export const utilityLinks = [
  "lorem ipsum dolor",
  "lorem ipsum dolor",
  "lorem ipsum dolor",
];

export const navItems = [
  "Shop",
  "Skills",
  "Stories",
  "About",
  "Contact Us",
];

export const featuredStats = [
  "3425 items",
  "Hand-finished details",
  "Worldwide delivery",
];

export const filterSections: FilterSection[] = [
  {
    id: "idealFor",
    label: "Ideal For",
    options: ["All", "Travel", "Work", "Weekend", "Gift"],
  },
  {
    id: "occasion",
    label: "Occasion",
    options: ["All", "Daily", "Office", "Getaway", "Celebration"],
  },
  {
    id: "work",
    label: "Work",
    options: ["All", "Creative", "Studio", "Hybrid", "Commute"],
  },
  {
    id: "fabric",
    label: "Fabric",
    options: ["All", "Canvas", "Crochet", "Leather", "Mixed"],
  },
  {
    id: "segment",
    label: "Segment",
    options: ["All", "Bags", "Small Goods", "Soft Toys", "Accessories"],
  },
  {
    id: "suitableFor",
    label: "Suitable For",
    options: ["All", "Women", "Men", "Kids", "Unisex"],
  },
  {
    id: "rawMaterials",
    label: "Raw Materials",
    options: ["All", "Natural Fiber", "Leather", "Cotton", "Recycled"],
  },
  {
    id: "pattern",
    label: "Pattern",
    options: ["All", "Solid", "Marled", "Striped", "Woven"],
  },
];

export const products: Product[] = [
  {
    id: "milkyway-backpack",
    name: "PPXOC Milkyway Dress In...",
    subtitle: "Sign in or Create an account to see pricing",
    priceHint: "New Product",
    art: "backpack",
    isNew: true,
    tags: {
      idealFor: "Travel",
      occasion: "Daily",
      work: "Hybrid",
      fabric: "Canvas",
      segment: "Bags",
      suitableFor: "Unisex",
      rawMaterials: "Recycled",
      pattern: "Marled",
    },
  },
  {
    id: "sunny-dino",
    name: "PPXOC Milkyway Dress In...",
    subtitle: "Sign in or Create an account to see pricing",
    priceHint: "Out of Stock",
    art: "toy",
    badge: "Out of stock",
    isOutOfStock: true,
    tags: {
      idealFor: "Gift",
      occasion: "Celebration",
      work: "Creative",
      fabric: "Crochet",
      segment: "Soft Toys",
      suitableFor: "Kids",
      rawMaterials: "Cotton",
      pattern: "Solid",
    },
  },
  {
    id: "loop-strap",
    name: "Product Name",
    subtitle: "Sign in or Create an account to see pricing",
    priceHint: "Recommended",
    art: "strap",
    tags: {
      idealFor: "Weekend",
      occasion: "Celebration",
      work: "Studio",
      fabric: "Leather",
      segment: "Accessories",
      suitableFor: "Women",
      rawMaterials: "Leather",
      pattern: "Solid",
    },
  },
  {
    id: "linen-cap",
    name: "Product Name",
    subtitle: "Sign in or Create an account to see pricing",
    priceHint: "Limited",
    art: "cap",
    tags: {
      idealFor: "Weekend",
      occasion: "Getaway",
      work: "Creative",
      fabric: "Canvas",
      segment: "Accessories",
      suitableFor: "Unisex",
      rawMaterials: "Natural Fiber",
      pattern: "Solid",
    },
  },
  {
    id: "city-backpack",
    name: "Product Name",
    subtitle: "Sign in or Create an account to see pricing",
    priceHint: "Best Seller",
    art: "backpack",
    tags: {
      idealFor: "Work",
      occasion: "Office",
      work: "Commute",
      fabric: "Canvas",
      segment: "Bags",
      suitableFor: "Unisex",
      rawMaterials: "Recycled",
      pattern: "Marled",
    },
  },
  {
    id: "soft-dino",
    name: "Product Name",
    subtitle: "Sign in or Create an account to see pricing",
    priceHint: "Handmade",
    art: "toy",
    tags: {
      idealFor: "Gift",
      occasion: "Celebration",
      work: "Creative",
      fabric: "Crochet",
      segment: "Soft Toys",
      suitableFor: "Kids",
      rawMaterials: "Cotton",
      pattern: "Solid",
    },
  },
  {
    id: "rolled-leather",
    name: "Product Name",
    subtitle: "Sign in or Create an account to see pricing",
    priceHint: "Archive",
    art: "roll",
    tags: {
      idealFor: "Travel",
      occasion: "Getaway",
      work: "Studio",
      fabric: "Leather",
      segment: "Accessories",
      suitableFor: "Women",
      rawMaterials: "Leather",
      pattern: "Woven",
    },
  },
  {
    id: "roll-clutch",
    name: "Product Name",
    subtitle: "Sign in or Create an account to see pricing",
    priceHint: "Limited",
    art: "roll",
    tags: {
      idealFor: "Travel",
      occasion: "Daily",
      work: "Hybrid",
      fabric: "Canvas",
      segment: "Small Goods",
      suitableFor: "Unisex",
      rawMaterials: "Recycled",
      pattern: "Marled",
    },
  },
  {
    id: "folded-pack",
    name: "Product Name",
    subtitle: "Sign in or Create an account to see pricing",
    priceHint: "Recommended",
    art: "backpack",
    tags: {
      idealFor: "Work",
      occasion: "Office",
      work: "Commute",
      fabric: "Canvas",
      segment: "Bags",
      suitableFor: "Unisex",
      rawMaterials: "Recycled",
      pattern: "Marled",
    },
  },
  {
    id: "mono-pouch",
    name: "Product Name",
    subtitle: "Sign in or Create an account to see pricing",
    priceHint: "Small Batch",
    art: "woven",
    tags: {
      idealFor: "Daily",
      occasion: "Daily",
      work: "Creative",
      fabric: "Mixed",
      segment: "Small Goods",
      suitableFor: "Women",
      rawMaterials: "Cotton",
      pattern: "Striped",
    },
  },
  {
    id: "woven-zip",
    name: "Product Name",
    subtitle: "Sign in or Create an account to see pricing",
    priceHint: "Artisan",
    art: "woven",
    tags: {
      idealFor: "Daily",
      occasion: "Getaway",
      work: "Studio",
      fabric: "Mixed",
      segment: "Small Goods",
      suitableFor: "Unisex",
      rawMaterials: "Cotton",
      pattern: "Woven",
    },
  },
  {
    id: "amber-satchel",
    name: "Product Name",
    subtitle: "Sign in or Create an account to see pricing",
    priceHint: "Featured",
    art: "satchel",
    tags: {
      idealFor: "Work",
      occasion: "Office",
      work: "Hybrid",
      fabric: "Leather",
      segment: "Bags",
      suitableFor: "Women",
      rawMaterials: "Leather",
      pattern: "Woven",
    },
  },
  {
    id: "tan-loop",
    name: "Product Name",
    subtitle: "Sign in or Create an account to see pricing",
    priceHint: "Featured",
    art: "strap",
    tags: {
      idealFor: "Weekend",
      occasion: "Celebration",
      work: "Studio",
      fabric: "Leather",
      segment: "Accessories",
      suitableFor: "Women",
      rawMaterials: "Leather",
      pattern: "Solid",
    },
  },
  {
    id: "play-dino",
    name: "Product Name",
    subtitle: "Sign in or Create an account to see pricing",
    priceHint: "Gift Pick",
    art: "toy",
    tags: {
      idealFor: "Gift",
      occasion: "Celebration",
      work: "Creative",
      fabric: "Crochet",
      segment: "Soft Toys",
      suitableFor: "Kids",
      rawMaterials: "Cotton",
      pattern: "Solid",
    },
  },
  {
    id: "chalk-cap",
    name: "Product Name",
    subtitle: "Sign in or Create an account to see pricing",
    priceHint: "Essential",
    art: "cap",
    tags: {
      idealFor: "Weekend",
      occasion: "Getaway",
      work: "Creative",
      fabric: "Canvas",
      segment: "Accessories",
      suitableFor: "Unisex",
      rawMaterials: "Natural Fiber",
      pattern: "Solid",
    },
  },
  {
    id: "fold-pack",
    name: "Product Name",
    subtitle: "Sign in or Create an account to see pricing",
    priceHint: "Best Seller",
    art: "backpack",
    tags: {
      idealFor: "Travel",
      occasion: "Daily",
      work: "Hybrid",
      fabric: "Canvas",
      segment: "Bags",
      suitableFor: "Unisex",
      rawMaterials: "Recycled",
      pattern: "Marled",
    },
  },
  {
    id: "graphite-pack",
    name: "Product Name",
    subtitle: "Sign in or Create an account to see pricing",
    priceHint: "New Arrival",
    art: "backpack",
    tags: {
      idealFor: "Work",
      occasion: "Office",
      work: "Commute",
      fabric: "Canvas",
      segment: "Bags",
      suitableFor: "Unisex",
      rawMaterials: "Recycled",
      pattern: "Marled",
    },
  },
  {
    id: "woven-amber",
    name: "Product Name",
    subtitle: "Sign in or Create an account to see pricing",
    priceHint: "Handwoven",
    art: "satchel",
    tags: {
      idealFor: "Weekend",
      occasion: "Getaway",
      work: "Studio",
      fabric: "Leather",
      segment: "Bags",
      suitableFor: "Women",
      rawMaterials: "Leather",
      pattern: "Woven",
    },
  },
];

type DummyJsonProduct = {
  id: number;
  title: string;
  category: string;
  price: number;
  thumbnail?: string;
  images?: string[];
  availabilityStatus?: string;
  brand?: string;
  discountPercentage?: number;
  stock: number;
  tags?: string[];
};

type DummyJsonProductsResponse = {
  products: DummyJsonProduct[];
};

const productArtSequence: Product["art"][] = [
  "backpack",
  "toy",
  "strap",
  "cap",
  "roll",
  "woven",
  "satchel",
];

function mapCategoryToSegment(category: string) {
  const value = category.toLowerCase();

  if (value.includes("bag")) return "Bags";
  if (value.includes("shoe") || value.includes("watch") || value.includes("access")) {
    return "Accessories";
  }
  if (value.includes("shirt") || value.includes("dress") || value.includes("top")) {
    return "Soft Toys";
  }

  return "Small Goods";
}

function mapDummyProduct(product: DummyJsonProduct, index: number): Product {
  const segment = mapCategoryToSegment(product.category);

  return {
    id: String(product.id),
    name: product.title,
    subtitle: `${product.brand ?? "DummyJSON"} · $${product.price.toFixed(2)}`,
    priceHint:
      product.discountPercentage && product.discountPercentage > 0
        ? `${product.discountPercentage.toFixed(0)}% off`
        : "Recommended",
    art: productArtSequence[index % productArtSequence.length],
    image: product.thumbnail ?? product.images?.[0],
    badge: product.stock === 0 ? "Out of stock" : undefined,
    isOutOfStock: product.stock === 0,
    isNew: index < 4,
    tags: {
      idealFor: index % 3 === 0 ? "Travel" : index % 3 === 1 ? "Work" : "Weekend",
      occasion: index % 2 === 0 ? "Daily" : "Office",
      work: index % 2 === 0 ? "Hybrid" : "Creative",
      fabric: segment === "Accessories" ? "Leather" : "Canvas",
      segment,
      suitableFor: "Unisex",
      rawMaterials: segment === "Accessories" ? "Leather" : "Recycled",
      pattern: product.tags?.includes("fragrance") ? "Woven" : "Solid",
    },
  };
}

export async function getProducts(): Promise<Product[]> {
  const response = await fetch("https://dummyjson.com/products", {
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.status}`);
  }

  const data = (await response.json()) as DummyJsonProductsResponse;

  return data.products.map(mapDummyProduct);
}
