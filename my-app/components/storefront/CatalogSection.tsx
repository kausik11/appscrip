"use client";

import { useEffect, useRef, useState } from "react";
import { FiltersSidebar } from "./FiltersSidebar";
import { ProductCard } from "./ProductCard";
import { StorefrontProvider, useStorefront } from "./StorefrontProvider";
import type { FilterSection, Product } from "./types";

type CatalogSectionProps = {
  filterSections: FilterSection[];
  products: Product[];
};

const sortOptions = [
  { value: "recommended", label: "Recommended" },
  { value: "newest", label: "Newest First" },
  { value: "popular", label: "Popular" },
  { value: "priceHighToLow", label: "Price : High To Low" },
  { value: "priceLowToHigh", label: "Price : Low To High" },
  { value: "wishlist", label: "Wishlist First" },
] as const;

export function CatalogSection({
  filterSections,
  products,
}: CatalogSectionProps) {
  const providerKey = filterSections
    .map((section) => `${section.id}:${section.options.join("|")}`)
    .join(";");

  return (
    <StorefrontProvider key={providerKey} filterSections={filterSections}>
      <CatalogSectionBody filterSections={filterSections} products={products} />
    </StorefrontProvider>
  );
}

function CatalogSectionBody({
  filterSections,
  products,
}: CatalogSectionProps) {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const sortMenuRef = useRef<HTMLDivElement | null>(null);
  const {
    customizableOnly,
    favorites,
    filtersVisible,
    selectedFilters,
    setSortBy,
    sortBy,
    toggleFiltersVisible,
  } = useStorefront();

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (!sortMenuRef.current?.contains(event.target as Node)) {
        setIsSortOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, []);

  let visibleProducts = products.filter((product) => {
    if (customizableOnly && product.isOutOfStock) {
      return false;
    }

    return filterSections.every((section) => {
      const selected = selectedFilters[section.id];
      const value = product.tags[section.id];

      if (selected === "All") {
        return true;
      }

      if (Array.isArray(value)) {
        return value.includes(selected);
      }

      return value === selected;
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

  if (sortBy === "popular") {
    visibleProducts = [...visibleProducts].sort(
      (a, b) => (b.rating ?? 0) - (a.rating ?? 0),
    );
  }

  if (sortBy === "priceHighToLow") {
    visibleProducts = [...visibleProducts].sort(
      (a, b) => (b.price ?? 0) - (a.price ?? 0),
    );
  }

  if (sortBy === "priceLowToHigh") {
    visibleProducts = [...visibleProducts].sort(
      (a, b) => (a.price ?? 0) - (b.price ?? 0),
    );
  }

  const activeSort =
    sortOptions.find((option) => option.value === sortBy) ?? sortOptions[0];

  return (
    <section className="content-shell" style={{ paddingBottom: 56 }}>
      <div
        className="catalog-toolbar"
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
          className="catalog-toolbar-meta"
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
            {products.length} Items
          </span>
          <button
            type="button"
            className="icon-button body-muted"
            aria-pressed={!filtersVisible}
            onClick={toggleFiltersVisible}
            style={{
              fontSize: 12,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              textDecoration: "underline",
              textUnderlineOffset: 4,
            }}
          >
            {filtersVisible ? "Hide Filter" : "Show Filter"}
          </button>
        </div>

        <div
          className="catalog-toolbar-sort"
          ref={sortMenuRef}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            position: "relative",
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
          <div className="sort-menu-shell">
            <button
              type="button"
              className="catalog-sort-trigger"
              aria-expanded={isSortOpen}
              aria-haspopup="menu"
              onClick={() => setIsSortOpen((current) => !current)}
            >
              <span className="display-font">{activeSort.label}</span>
              <span
                className="catalog-sort-chevron"
                aria-hidden="true"
                data-open={isSortOpen}
              />
            </button>

            {isSortOpen && (
              <div className="catalog-sort-menu" role="menu">
                {sortOptions.map((option) => {
                  const isActive = option.value === sortBy;

                  return (
                    <button
                      key={option.value}
                      type="button"
                      role="menuitemradio"
                      aria-checked={isActive}
                      className="catalog-sort-option"
                      data-active={isActive}
                      onClick={() => {
                        setSortBy(option.value);
                        setIsSortOpen(false);
                      }}
                    >
                      <span className="catalog-sort-check" aria-hidden="true">
                        {isActive ? "✓" : ""}
                      </span>
                      <span className="display-font">{option.label}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      <div
        className={`catalog-shell${filtersVisible ? "" : " catalog-shell-full"}`}
        style={{ marginTop: 16 }}
      >
        {filtersVisible && <FiltersSidebar sections={filterSections} />}

        <div className="product-grid">
          {visibleProducts.map((product, index) => (
            <ProductCard key={product.id} index={index} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
