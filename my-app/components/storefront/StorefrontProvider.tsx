"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { filterSections } from "./data";

type SortOption = "recommended" | "newest" | "wishlist";

type StorefrontContextValue = {
  customizableOnly: boolean;
  expandedSections: Record<string, boolean>;
  favorites: string[];
  selectedFilters: Record<string, string>;
  sortBy: SortOption;
  setFilter: (sectionId: string, value: string) => void;
  setSortBy: (value: SortOption) => void;
  toggleCustomizable: () => void;
  toggleFavorite: (productId: string) => void;
  toggleSection: (sectionId: string) => void;
};

const initialFilters = Object.fromEntries(
  filterSections.map((section) => [section.id, "All"]),
);

const initialExpanded = Object.fromEntries(
  filterSections.map((section, index) => [section.id, index < 4]),
);

const StorefrontContext = createContext<StorefrontContextValue | null>(null);

export function StorefrontProvider({ children }: { children: ReactNode }) {
  const [sortBy, setSortBy] = useState<SortOption>("recommended");
  const [favorites, setFavorites] = useState<string[]>(["loop-strap"]);
  const [customizableOnly, setCustomizableOnly] = useState(false);
  const [selectedFilters, setSelectedFilters] =
    useState<Record<string, string>>(initialFilters);
  const [expandedSections, setExpandedSections] =
    useState<Record<string, boolean>>(initialExpanded);

  const value: StorefrontContextValue = {
    customizableOnly,
    expandedSections,
    favorites,
    selectedFilters,
    sortBy,
    setFilter: (sectionId, value) =>
      setSelectedFilters((current) => ({ ...current, [sectionId]: value })),
    setSortBy,
    toggleCustomizable: () => setCustomizableOnly((current) => !current),
    toggleFavorite: (productId) =>
      setFavorites((current) =>
        current.includes(productId)
          ? current.filter((id) => id !== productId)
          : [...current, productId],
      ),
    toggleSection: (sectionId) =>
      setExpandedSections((current) => ({
        ...current,
        [sectionId]: !current[sectionId],
      })),
  };

  return (
    <StorefrontContext.Provider value={value}>
      {children}
    </StorefrontContext.Provider>
  );
}

export function useStorefront() {
  const context = useContext(StorefrontContext);

  if (!context) {
    throw new Error("useStorefront must be used within StorefrontProvider");
  }

  return context;
}
