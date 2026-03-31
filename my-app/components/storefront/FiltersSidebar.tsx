"use client";

import { ChevronIcon } from "./icons";
import { useStorefront } from "./StorefrontProvider";
import type { FilterSection } from "./types";

type FiltersSidebarProps = {
  sections: FilterSection[];
};

export function FiltersSidebar({ sections }: FiltersSidebarProps) {
  const {
    customizableOnly,
    expandedSections,
    selectedFilters,
    setFilter,
    toggleCustomizable,
    toggleSection,
  } = useStorefront();

  return (
    <aside className="filters-sidebar">
      <label
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          paddingBottom: 18,
          borderBottom: "1px solid var(--line)",
          fontSize: 12,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
        }}
      >
        <input
          checked={customizableOnly}
          onChange={toggleCustomizable}
          type="checkbox"
          style={{
            width: 14,
            height: 14,
            accentColor: "var(--ink)",
          }}
        />
        Customizable
      </label>

      <div style={{ marginTop: 6 }}>
        {sections.map((section) => {
          const isOpen = expandedSections[section.id];
          const activeValue = selectedFilters[section.id];

          return (
            <section
              key={section.id}
              style={{
                borderBottom: "1px solid var(--line)",
                padding: "16px 0 14px",
              }}
            >
              <button
                className="icon-button"
                onClick={() => toggleSection(section.id)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 12,
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
                  {section.label}
                </span>
                <ChevronIcon
                  size={12}
                  style={{
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 180ms ease",
                  }}
                />
              </button>

              <div
                style={{
                  display: "grid",
                  gap: 10,
                  marginTop: 12,
                }}
              >
                <span
                  style={{
                    fontSize: 12,
                    color: "var(--muted)",
                  }}
                >
                  {activeValue}
                </span>

                {isOpen && (
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 8,
                    }}
                  >
                    {section.options.map((option) => {
                      const isSelected = option === activeValue;

                      return (
                        <button
                          key={option}
                          className="filter-option"
                          aria-pressed={isSelected}
                          onClick={() => setFilter(section.id, option)}
                          style={{
                            padding: "4px 10px",
                            borderRadius: 999,
                            fontSize: 12,
                          }}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </section>
          );
        })}
      </div>
    </aside>
  );
}
