"use client";

import { FilledHeartIcon, HeartIcon } from "./icons";
import { ProductArt } from "./ProductArt";
import { useStorefront } from "./StorefrontProvider";
import type { Product } from "./types";

type ProductCardProps = {
  index: number;
  product: Product;
};

export function ProductCard({ index, product }: ProductCardProps) {
  const { favorites, toggleFavorite } = useStorefront();
  const isFavorite = favorites.includes(product.id);

  return (
    <article
      className="product-card stagger-enter"
      data-delay={Math.min(index % 5, 4)}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <div className="product-visual">
        {(product.isNew || product.badge) && (
          <div
            className="display-font"
            style={{
              position: "absolute",
              top: 12,
              left: 12,
              zIndex: 2,
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.09em",
            }}
          >
            {product.isNew ? "New Product" : product.badge}
          </div>
        )}

        {product.isOutOfStock && (
          <div
            className="display-font"
            style={{
              position: "absolute",
              inset: 0,
              display: "grid",
              placeItems: "center",
              zIndex: 2,
              fontSize: 24,
              fontWeight: 600,
              background: "rgba(255, 255, 255, 0.2)",
            }}
          >
            Out of Stock
          </div>
        )}

        <ProductArt art={product.art} />
      </div>

      <div>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: 12,
          }}
        >
          <div style={{ minWidth: 0 }}>
            <h3
              className="display-font"
              style={{
                margin: 0,
                fontSize: 18,
                letterSpacing: "0.04em",
                fontWeight: 700,
                lineHeight: 1,
              }}
            >
              {product.name}
            </h3>
            <div
              style={{
                marginTop: 6,
                fontSize: 11,
                color: "var(--muted)",
                lineHeight: 1.6,
              }}
            >
              {product.subtitle}
            </div>
          </div>

          <button
            className="icon-button"
            aria-label={isFavorite ? "Remove from wishlist" : "Add to wishlist"}
            onClick={() => toggleFavorite(product.id)}
            style={{ marginTop: 2, flexShrink: 0 }}
          >
            {isFavorite ? <FilledHeartIcon /> : <HeartIcon />}
          </button>
        </div>
      </div>
    </article>
  );
}
