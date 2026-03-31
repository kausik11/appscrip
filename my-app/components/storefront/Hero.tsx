type HeroProps = {
  stats: string[];
};

export function Hero({ stats }: HeroProps) {
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

      <div
        className="hero-stats"
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 16,
          marginTop: 40,
          paddingTop: 22,
          borderTop: "1px solid var(--line)",
          color: "var(--muted)",
          fontSize: 11,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
        }}
      >
        {stats.map((stat) => (
          <span key={stat}>{stat}</span>
        ))}
      </div>
    </section>
  );
}
