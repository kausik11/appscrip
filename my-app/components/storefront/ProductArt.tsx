import type { CSSProperties } from "react";
import type { ProductArt as ProductArtType } from "./types";

type ProductArtProps = {
  art: ProductArtType;
};

const shadowStyle: CSSProperties = {
  position: "absolute",
  bottom: 18,
  left: "50%",
  width: "58%",
  height: 18,
  borderRadius: "50%",
  background: "rgba(82, 65, 47, 0.12)",
  transform: "translateX(-50%)",
  filter: "blur(10px)",
};

export function ProductArt({ art }: ProductArtProps) {
  const wrapperStyle: CSSProperties = {
    position: "absolute",
    inset: 0,
  };

  if (art === "backpack") {
    return (
      <div style={wrapperStyle}>
        <div style={shadowStyle} />
        <div
          style={{
            position: "absolute",
            inset: "30% 28% 16%",
            background: "linear-gradient(135deg, #73757c, #2d3034 58%, #63656b)",
            borderRadius: "16px 16px 26px 26px",
            boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "31%",
            right: "31%",
            top: "20%",
            height: "23%",
            background: "linear-gradient(180deg, #868991, #45494f)",
            borderRadius: "18px 18px 30px 30px",
            transform: "perspective(400px) rotateX(18deg)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "46%",
            top: "16%",
            width: "8%",
            height: "11%",
            border: "4px solid #35373c",
            borderBottom: 0,
            borderRadius: "18px 18px 0 0",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "34%",
            bottom: "9%",
            width: "11%",
            height: "36%",
            background: "#2b2b31",
            borderRadius: 999,
            transform: "rotate(20deg)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "34%",
            bottom: "8%",
            width: "11%",
            height: "36%",
            background: "#2b2b31",
            borderRadius: 999,
            transform: "rotate(-20deg)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "47.5%",
            top: "30%",
            width: 8,
            height: "22%",
            background: "#1d1f23",
            borderRadius: 999,
          }}
        />
      </div>
    );
  }

  if (art === "toy") {
    return (
      <div style={wrapperStyle}>
        <div style={shadowStyle} />
        <div
          style={{
            position: "absolute",
            left: "39%",
            top: "24%",
            width: "20%",
            height: "18%",
            borderRadius: "50%",
            background: "#f4cc3e",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "35%",
            top: "38%",
            width: "29%",
            height: "31%",
            borderRadius: "46% 42% 42% 44%",
            background: "#f4cc3e",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "33%",
            top: "31%",
            width: "8%",
            height: "9%",
            borderRadius: "50%",
            background: "#59c8d2",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "33%",
            top: "30%",
            width: "8%",
            height: "9%",
            borderRadius: "50%",
            background: "#59c8d2",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "31%",
            bottom: "22%",
            width: "10%",
            height: "17%",
            borderRadius: 999,
            background: "#f4cc3e",
            transform: "rotate(18deg)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "31%",
            bottom: "22%",
            width: "10%",
            height: "17%",
            borderRadius: 999,
            background: "#f4cc3e",
            transform: "rotate(-18deg)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "38%",
            bottom: "17%",
            width: "8%",
            height: "10%",
            borderRadius: 999,
            background: "#59c8d2",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "38%",
            bottom: "17%",
            width: "8%",
            height: "10%",
            borderRadius: 999,
            background: "#59c8d2",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "58%",
            bottom: "35%",
            width: "8%",
            height: "11%",
            borderRadius: 999,
            background: "#59c8d2",
          }}
        />
      </div>
    );
  }

  if (art === "strap") {
    return (
      <div style={wrapperStyle}>
        <div style={shadowStyle} />
        <div
          style={{
            position: "absolute",
            left: "26%",
            top: "24%",
            width: "38%",
            height: "38%",
            border: "7px solid #ca8b63",
            borderRadius: "50%",
            transform: "rotate(14deg)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "52%",
            top: "40%",
            width: "16%",
            height: "8%",
            borderRadius: 999,
            background: "#cb8e65",
            transform: "rotate(-32deg)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "23%",
            top: "33%",
            width: "18%",
            height: "38%",
            borderRadius: "12px",
            background: "linear-gradient(180deg, #efc59f, #d59768)",
            border: "2px solid rgba(120, 70, 38, 0.28)",
            transform: "rotate(11deg)",
          }}
        />
      </div>
    );
  }

  if (art === "cap") {
    return (
      <div style={wrapperStyle}>
        <div style={shadowStyle} />
        <div
          style={{
            position: "absolute",
            left: "20%",
            right: "18%",
            top: "40%",
            bottom: "23%",
            borderRadius: "46% 48% 40% 42%",
            background: "linear-gradient(180deg, #f8f7f4, #d7d5cf)",
            transform: "rotate(-8deg)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "18%",
            bottom: "24%",
            width: "26%",
            height: "11%",
            background: "linear-gradient(180deg, #efede7, #c9c7c1)",
            borderRadius: "0 30px 30px 0",
            transform: "rotate(-18deg)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "39%",
            top: "37%",
            width: "7%",
            height: "18%",
            background: "rgba(228, 214, 112, 0.8)",
            borderRadius: 999,
            transform: "rotate(-12deg)",
          }}
        />
      </div>
    );
  }

  if (art === "woven") {
    return (
      <div style={wrapperStyle}>
        <div style={shadowStyle} />
        <div
          style={{
            position: "absolute",
            left: "24%",
            right: "24%",
            top: "37%",
            bottom: "26%",
            borderRadius: "16px 16px 18px 18px",
            background:
              "linear-gradient(180deg, #111 0 10%, #f8f5ef 10% 20%, #111 20% 28%, #ece7db 28% 38%, #111 38% 46%, #e8e1d5 46% 56%, #111 56% 64%, #f6f2ea 64% 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "28%",
            top: "33%",
            width: "44%",
            height: "8%",
            borderRadius: 999,
            background: "#202020",
          }}
        />
      </div>
    );
  }

  if (art === "satchel") {
    return (
      <div style={wrapperStyle}>
        <div style={shadowStyle} />
        <div
          style={{
            position: "absolute",
            left: "24%",
            right: "24%",
            top: "34%",
            bottom: "20%",
            borderRadius: "24px",
            background:
              "linear-gradient(135deg, #e4b47a, #c9894e 42%, #e5b27a 42%, #e5b27a 46%, #c9894e 46%, #c9894e 52%, #e5b27a 52%, #e5b27a 58%, #c9894e 58%, #c9894e 64%, #e5b27a 64%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "26%",
            top: "28%",
            width: "48%",
            height: "16%",
            borderRadius: "24px 24px 18px 18px",
            border: "5px solid #c9874d",
            borderBottom: 0,
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "22%",
            bottom: "20%",
            width: "8%",
            height: "25%",
            borderRadius: 999,
            background: "#b07044",
            transform: "rotate(24deg)",
          }}
        />
      </div>
    );
  }

  return (
    <div style={wrapperStyle}>
      <div style={shadowStyle} />
      <div
        style={{
          position: "absolute",
          left: "20%",
          right: "20%",
          bottom: "24%",
          height: "20%",
          borderRadius: "999px",
          background: "linear-gradient(180deg, #82858c, #44474d)",
          transform: "rotate(-8deg)",
        }}
      />
    </div>
  );
}
