"use client";

import Image from "next/image";
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

        {product.image ? (
          <Image
            src={product.image}
            alt={product.imageAlt ?? product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 820px) 50vw, 33vw"
            style={{ objectFit: "contain", padding: 20 }}
          />
        ) : (
          <ProductArt art={product.art} />
        )}
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
              className="product-pricing"
              style={{
                marginTop: 8,
                display: "flex",
                flexWrap: "wrap",
                gap: 10,
                alignItems: "center",
                fontSize: 12,
                lineHeight: 1.5,
              }}
            >
              {product.price !== undefined && (
                <span
                  className="display-font"
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    letterSpacing: "0.03em",
                    color: "var(--ink)",
                  }}
                >
                  ${product.price.toFixed(2)}
                </span>
              )}
              {product.discountPercentage !== undefined && (
                <span style={{ color: "var(--accent)" }}>
                  {product.discountPercentage.toFixed(2)}% off
                </span>
              )}
              {product.rating !== undefined && (
                <span style={{ color: "var(--muted)" }}>
                  Rating {product.rating.toFixed(1)}
                </span>
              )}
            </div>
            <div
              className="product-subtitle"
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
