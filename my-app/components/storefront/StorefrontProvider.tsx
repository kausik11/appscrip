"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import type { FilterSection } from "./types";

type SortOption =
  | "recommended"
  | "newest"
  | "popular"
  | "priceHighToLow"
  | "priceLowToHigh"
  | "wishlist";

type StorefrontContextValue = {
  customizableOnly: boolean;
  expandedSections: Record<string, boolean>;
  favorites: string[];
  filtersVisible: boolean;
  selectedFilters: Record<string, string>;
  sortBy: SortOption;
  setFilter: (sectionId: string, value: string) => void;
  setSortBy: (value: SortOption) => void;
  toggleCustomizable: () => void;
  toggleFavorite: (productId: string) => void;
  toggleFiltersVisible: () => void;
  toggleSection: (sectionId: string) => void;
};

const StorefrontContext = createContext<StorefrontContextValue | null>(null);

function buildInitialFilters(filterSections: FilterSection[]) {
  return Object.fromEntries(filterSections.map((section) => [section.id, "All"]));
}

function buildInitialExpanded(filterSections: FilterSection[]) {
  return Object.fromEntries(
    filterSections.map((section, index) => [section.id, index < 4]),
  );
}

export function StorefrontProvider({
  children,
  filterSections,
}: {
  children: ReactNode;
  filterSections: FilterSection[];
}) {
  const [sortBy, setSortBy] = useState<SortOption>("recommended");
  const [favorites, setFavorites] = useState<string[]>(["loop-strap"]);
  const [customizableOnly, setCustomizableOnly] = useState(false);
  const [filtersVisible, setFiltersVisible] = useState(true);
  const [selectedFilters, setSelectedFilters] =
    useState<Record<string, string>>(() => buildInitialFilters(filterSections));
  const [expandedSections, setExpandedSections] =
    useState<Record<string, boolean>>(() => buildInitialExpanded(filterSections));

  const value: StorefrontContextValue = {
    customizableOnly,
    expandedSections,
    favorites,
    filtersVisible,
    selectedFilters,
    sortBy,
    setFilter: (sectionId, value) =>
      setSelectedFilters((current) => ({ ...current, [sectionId]: value })),
    setSortBy,
    toggleCustomizable: () => setCustomizableOnly((current) => !current),
    toggleFiltersVisible: () => setFiltersVisible((current) => !current),
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
