import type { Metadata } from "next";
import { CatalogSection } from "@/components/storefront/CatalogSection";
import { Footer } from "@/components/storefront/Footer";
import { Header } from "@/components/storefront/Header";
import { Hero } from "@/components/storefront/Hero";
import { TopStrip } from "@/components/storefront/TopStrip";
import {
  buildFilterSections,
  getProducts,
  navItems,
  utilityLinks,
} from "@/components/storefront/data";

export const metadata: Metadata = {
  title: "Discover Our Products",
  description:
    "Shop the Metta Muse collection with category, brand, availability, and tag filters across live products.",
};

export default async function Home() {
  const products = await getProducts();
  const derivedFilterSections = buildFilterSections(products);
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: "Discover Our Products",
        description:
          "Shop the Metta Muse collection with live products and filterable categories.",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Shop",
            item: "/",
          },
        ],
      },
      {
        "@type": "ItemList",
        name: "Metta Muse Product Catalog",
        itemListElement: products.slice(0, 12).map((product, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "Product",
            name: product.name,
            image: product.image,
            description: product.subtitle,
            category: product.category,
            brand: product.brand
              ? {
                  "@type": "Brand",
                  name: product.brand,
                }
              : undefined,
            offers: product.price
              ? {
                  "@type": "Offer",
                  price: product.price.toFixed(2),
                  priceCurrency: "USD",
                  availability: product.isOutOfStock
                    ? "https://schema.org/OutOfStock"
                    : "https://schema.org/InStock",
                }
              : undefined,
            aggregateRating: product.rating
              ? {
                  "@type": "AggregateRating",
                  ratingValue: product.rating.toFixed(1),
                  reviewCount: "1",
                }
              : undefined,
          },
        })),
      },
    ],
  };

  return (
    <main className="page-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <TopStrip items={utilityLinks} />
      <Header navItems={navItems} />
      <Hero />
      <CatalogSection products={products} filterSections={derivedFilterSections} />
      <Footer />
    </main>
  );
}
