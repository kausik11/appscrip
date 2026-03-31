import { InstagramIcon, LinkedInIcon } from "./icons";

const paymentBadges = [
  { name: "G Pay", background: "#fff", color: "#222" },
  { name: "MC", background: "#ffd167", color: "#222" },
  { name: "PP", background: "#f0f4ff", color: "#124f9e" },
  { name: "Amex", background: "#2a6ad8", color: "#fff" },
  { name: "Apple Pay", background: "#111", color: "#fff" },
  { name: "D Pay", background: "#7347ff", color: "#fff" },
];

export function Footer() {
  return (
    <footer
      style={{
        background: "#060606",
        color: "#fff",
        padding: "42px 0 28px",
      }}
    >
      <div className="content-shell">
        <div className="footer-grid" style={{ paddingBottom: 32 }}>
          <section>
            <h2
              className="display-font"
              style={{ margin: 0, fontSize: 18, fontWeight: 700 }}
            >
              Be The First To Know
            </h2>
            <p
              style={{
                margin: "12px 0 22px",
                fontSize: 13,
                color: "rgba(255,255,255,0.64)",
                lineHeight: 1.7,
              }}
            >
              Sign up for updates from metta muse.
            </p>

            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your e-mail..."
                style={{
                  background: "#f3f3f3",
                  border: 0,
                  minHeight: 44,
                  padding: "0 14px",
                  color: "#181512",
                }}
              />
              <button
                className="newsletter-submit"
                type="submit"
                style={{
                  minHeight: 44,
                  padding: "0 26px",
                  border: "1px solid rgba(255,255,255,0.22)",
                  background: "transparent",
                  color: "rgba(255,255,255,0.75)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                Subscribe
              </button>
            </form>
          </section>

          <section>
            <h2
              className="display-font"
              style={{ margin: 0, fontSize: 18, fontWeight: 700 }}
            >
              Contact Us
            </h2>
            <div
              style={{
                display: "grid",
                gap: 8,
                marginTop: 12,
                fontSize: 13,
                color: "rgba(255,255,255,0.7)",
              }}
            >
              <span>8013559045</span>
              <span>kkausik11@gmail.com</span>
            </div>
          </section>

          <section>
            <h2
              className="display-font"
              style={{ margin: 0, fontSize: 18, fontWeight: 700 }}
            >
              Currency
            </h2>
            <div style={{ marginTop: 12, fontSize: 13, color: "rgba(255,255,255,0.7)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 16 }}>🇺🇸</span>
                <strong style={{ color: "#fff" }}>USD</strong>
              </div>
              <p style={{ margin: "12px 0 0", lineHeight: 1.7 }}>
                Transactions will be completed in Euros and a currency reference
                is available on hover.
              </p>
            </div>
          </section>
        </div>

        <hr
          style={{
            border: 0,
            borderTop: "1px solid rgba(255,255,255,0.15)",
            margin: "0 0 30px",
          }}
        />

        <div className="footer-links">
          <section>
            <h3
              style={{
                margin: 0,
                fontSize: 24,
                fontWeight: 700,
                letterSpacing: "-0.03em",
              }}
            >
              metta muse
            </h3>
            <div
              style={{
                display: "grid",
                gap: 10,
                marginTop: 20,
                fontSize: 13,
                color: "rgba(255,255,255,0.74)",
              }}
            >
              <a href="#">About Us</a>
              <a href="#">Stories</a>
              <a href="#">Artisans</a>
              <a href="#">Boutiques</a>
              <a href="#">Contact Us</a>
              <a href="#">EU Compliances Docs</a>
            </div>
          </section>

          <section>
            <h3
              className="display-font"
              style={{ margin: 0, fontSize: 18, fontWeight: 700 }}
            >
              Quick Links
            </h3>
            <div
              style={{
                display: "grid",
                gap: 10,
                marginTop: 20,
                fontSize: 13,
                color: "rgba(255,255,255,0.74)",
              }}
            >
              <a href="#">Orders &amp; Shipping</a>
              <a href="#">Join/Login as a Seller</a>
              <a href="#">Payment &amp; Pricing</a>
              <a href="#">Return &amp; Refunds</a>
              <a href="#">FAQs</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms &amp; Conditions</a>
            </div>
          </section>

          <section>
            <h3
              className="display-font"
              style={{ margin: 0, fontSize: 18, fontWeight: 700 }}
            >
              Follow Us
            </h3>
            <div style={{ display: "flex", gap: 10, marginTop: 18 }}>
              <button
                className="icon-button"
                aria-label="Instagram"
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.25)",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <InstagramIcon />
              </button>
              <button
                className="icon-button"
                aria-label="LinkedIn"
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.25)",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <LinkedInIcon />
              </button>
            </div>

            <div style={{ marginTop: 28 }}>
              <h4
                className="display-font"
                style={{ margin: 0, fontSize: 16, fontWeight: 700 }}
              >
                metta muse Accepts
              </h4>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 8,
                  marginTop: 14,
                }}
              >
                {paymentBadges.map((badge) => (
                  <span
                    key={badge.name}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      minWidth: 32,
                      height: 22,
                      padding: "0 8px",
                      borderRadius: 4,
                      background: badge.background,
                      color: badge.color,
                      fontSize: 10,
                      fontWeight: 700,
                    }}
                  >
                    {badge.name}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </div>

        <p
          style={{
            margin: "28px 0 0",
            textAlign: "center",
            fontSize: 11,
            color: "rgba(255,255,255,0.55)",
          }}
        >
          Copyright © 2026 mettamuse. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
