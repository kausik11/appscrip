import type { FilterSection, Product } from "./types";

export const utilityLinks = [
  "Free shipping on orders over $50",
  "30-day returns",
  "Support available 24/7",
];

export const navItems = [
  "Shop",
  "Skills",
  "Stories",
  "About",
  "Contact Us",
];

type DummyJsonProduct = {
  id: number;
  title: string;
  category: string;
  price: number;
  rating?: number;
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

function mapDummyProduct(product: DummyJsonProduct, index: number): Product {
  return {
    id: String(product.id),
    name: product.title,
    subtitle: `${product.brand ?? "DummyJSON"} · $${product.price.toFixed(2)}`,
    priceHint:
      product.discountPercentage && product.discountPercentage > 0
        ? `${product.discountPercentage.toFixed(0)}% off`
        : "Recommended",
    price: product.price,
    discountPercentage: product.discountPercentage,
    rating: product.rating,
    brand: product.brand ?? "Unbranded",
    category: product.category,
    imageAlt: `${product.title} in ${product.category}${product.brand ? ` by ${product.brand}` : ""}`,
    art: productArtSequence[index % productArtSequence.length],
    image: product.thumbnail ?? product.images?.[0],
    badge: product.stock === 0 ? "Out of stock" : undefined,
    isOutOfStock: product.stock === 0,
    isNew: index < 4,
    tags: {
      category: product.category,
      brand: product.brand ?? "Unbranded",
      availability: product.availabilityStatus ?? (product.stock > 0 ? "In Stock" : "Out of Stock"),
      tags: product.tags ?? [],
    },
  };
}

export function buildFilterSections(products: Product[]): FilterSection[] {
  const sectionConfig = [
    { id: "category", label: "Category" },
    { id: "brand", label: "Brand" },
    { id: "availability", label: "Availability" },
    { id: "tags", label: "Tags" },
  ] as const;

  return sectionConfig.map(({ id, label }) => {
    const values = new Set<string>();

    for (const product of products) {
      const value = product.tags[id];

      if (Array.isArray(value)) {
        for (const item of value) {
          if (item) {
            values.add(item);
          }
        }
      } else if (value) {
        values.add(value);
      }
    }

    return {
      id,
      label,
      options: ["All", ...Array.from(values).sort((a, b) => a.localeCompare(b))],
    };
  });
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
