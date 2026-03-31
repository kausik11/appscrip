type TopStripProps = {
  items: string[];
};

export function TopStrip({ items }: TopStripProps) {
  return (
    <div
      style={{
        background: "#111",
        color: "#de7b8c",
        padding: "8px 0 9px",
      }}
    >
      <div
        className="content-shell"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: 16,
          textAlign: "center",
          fontSize: 9,
          letterSpacing: "0.28em",
          textTransform: "uppercase",
        }}
      >
        {items.map((item, index) => (
          <span key={`${item}-${index}`}>{item}</span>
        ))}
      </div>
    </div>
  );
}
