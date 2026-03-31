import Image from "next/image";
import {
  HiBars3,
  HiMiniChevronUp,
  HiOutlineHeart,
  HiOutlineMagnifyingGlass,
  HiOutlineUser,
} from "react-icons/hi2";
import { IoBagOutline } from "react-icons/io5";
import { LuGlobe } from "react-icons/lu";

type HeaderProps = {
  navItems: string[];
};

export function Header({ navItems }: HeaderProps) {
  return (
    <header>
      <div
        className="content-shell header-bar"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 20,
          padding: "18px 0 22px",
        }}
      >
        <button type="button" className="icon-button header-menu-button" aria-label="Open menu">
          <HiBars3 size={21} />
        </button>

        <div className="header-logo" style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <Image
            src="/logo.jpg"
            alt="Store logo"
            width={110}
            height={42}
            priority
            style={{ width: "auto", height: 42, objectFit: "contain" }}
          />
        </div>

        <div
          className="header-actions"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 12,
          }}
        >
          <button className="icon-button" aria-label="Search">
            <HiOutlineMagnifyingGlass size={19} />
          </button>
          <button className="icon-button" aria-label="Wishlist">
            <HiOutlineHeart size={19} />
          </button>
          <button className="icon-button" aria-label="Bag">
            <IoBagOutline size={18} />
          </button>
          <button className="icon-button header-account-button" aria-label="Account">
            <HiOutlineUser size={19} />
          </button>
          <div className="header-language" style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <LuGlobe size={16} />
            <span className="display-font" style={{ fontSize: 11, letterSpacing: "0.08em" }}>
              Eng
            </span>
            <HiMiniChevronUp size={12} />
          </div>
        </div>
      </div>

      <nav
        className="content-shell header-nav"
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

      <div className="content-shell mobile-breadcrumb">
        <span>Home</span>
        <span className="mobile-breadcrumb-sep">|</span>
        <span style={{ color: "var(--ink)" }}>Shop</span>
      </div>
    </header>
  );
}
