import { BagIcon, ChevronIcon, GlobeIcon, HeartIcon, SearchIcon, UserIcon } from "./icons";

type HeaderProps = {
  navItems: string[];
};

export function Header({ navItems }: HeaderProps) {
  return (
    <header>
      <div
        className="content-shell"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 20,
          padding: "18px 0 22px",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            width: 18,
            height: 18,
            border: "1px solid var(--ink)",
            position: "relative",
            transform: "rotate(45deg)",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 3,
              border: "1px solid var(--ink)",
            }}
          />
        </div>

        <div
          className="display-font"
          style={{
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: "0.06em",
          }}
        >
          Logo
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 12,
          }}
        >
          <button className="icon-button" aria-label="Search">
            <SearchIcon />
          </button>
          <button className="icon-button" aria-label="Wishlist">
            <HeartIcon />
          </button>
          <button className="icon-button" aria-label="Bag">
            <BagIcon />
          </button>
          <button className="icon-button" aria-label="Account">
            <UserIcon />
          </button>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <GlobeIcon size={16} />
            <span className="display-font" style={{ fontSize: 11, letterSpacing: "0.08em" }}>
              Eng
            </span>
            <ChevronIcon size={12} strokeWidth={1.4} style={{ transform: "rotate(180deg)" }} />
          </div>
        </div>
      </div>

      <nav
        className="content-shell"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 34,
          paddingBottom: 16,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          fontSize: 13,
          fontWeight: 700,
        }}
      >
        {navItems.map((item) => (
          <a key={item} href="#">
            {item}
          </a>
        ))}
      </nav>

      <hr className="thin-rule" />
    </header>
  );
}
