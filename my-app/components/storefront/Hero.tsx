export function Hero() {
  return (
    <section className="content-shell hero-section" style={{ padding: "54px 0 34px" }}>
      <div
        className="hero-copy"
        style={{
          maxWidth: 720,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h1
          className="hero-title"
          style={{
            margin: 0,
          }}
        >
          Discover Our Products
        </h1>
        <p
          className="hero-description"
          style={{
            margin: "18px auto 0",
            maxWidth: 620,
            fontSize: 15,
            lineHeight: 1.8,
            color: "var(--muted)",
          }}
        >
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
        </p>
      </div>
    </section>
  );
}
