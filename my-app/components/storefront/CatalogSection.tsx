"use client";

import { FiltersSidebar } from "./FiltersSidebar";
import { ProductCard } from "./ProductCard";
import { StorefrontProvider, useStorefront } from "./StorefrontProvider";
import type { FilterSection, Product } from "./types";

type CatalogSectionProps = {
  filterSections: FilterSection[];
  products: Product[];
};

export function CatalogSection({
  filterSections,
  products,
}: CatalogSectionProps) {
  return (
    <StorefrontProvider>
      <CatalogSectionBody filterSections={filterSections} products={products} />
    </StorefrontProvider>
  );
}

function CatalogSectionBody({
  filterSections,
  products,
}: CatalogSectionProps) {
  const { customizableOnly, favorites, selectedFilters, setSortBy, sortBy } =
    useStorefront();

  let visibleProducts = products.filter((product) => {
    if (customizableOnly && product.tags.segment !== "Accessories") {
      return false;
    }

    return filterSections.every((section) => {
      const selected = selectedFilters[section.id];
      return selected === "All" || product.tags[section.id] === selected;
    });
  });

  if (sortBy === "newest") {
    visibleProducts = [...visibleProducts].sort((a, b) =>
      Number(b.isNew) - Number(a.isNew),
    );
  }

  if (sortBy === "wishlist") {
    visibleProducts = [...visibleProducts].sort((a, b) => {
      return Number(favorites.includes(b.id)) - Number(favorites.includes(a.id));
    });
  }

  return (
    <section className="content-shell" style={{ paddingBottom: 56 }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          padding: "8px 0 18px",
          borderTop: "1px solid var(--line)",
          borderBottom: "1px solid var(--line)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            flexWrap: "wrap",
          }}
        >
          <span
            className="display-font"
            style={{
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: "0.08em",
            }}
          >
            3425 Items
          </span>
          <button
            className="icon-button body-muted"
            style={{
              fontSize: 12,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              textDecoration: "underline",
              textUnderlineOffset: 4,
            }}
          >
            Hide Filter
          </button>
        </div>

        <label
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
          }}
        >
          <span
            className="display-font"
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.08em",
            }}
          >
            Sort By
          </span>
          <span className="select-wrap">
            <select
              className="catalog-select"
              value={sortBy}
              onChange={(event) =>
                setSortBy(
                  event.target.value as "recommended" | "newest" | "wishlist",
                )
              }
            >
              <option value="recommended">Recommended</option>
              <option value="newest">Newest</option>
              <option value="wishlist">Wishlist First</option>
            </select>
          </span>
        </label>
      </div>

      <div className="catalog-shell" style={{ marginTop: 16 }}>
        <FiltersSidebar sections={filterSections} />

        <div className="product-grid">
          {visibleProducts.map((product, index) => (
            <ProductCard key={product.id} index={index} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
