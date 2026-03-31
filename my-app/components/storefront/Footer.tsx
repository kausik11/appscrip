import { InstagramIcon, LinkedInIcon } from "./icons";

const paymentBadges = ["gpay", "mastercard", "paypal", "amex", "applepay", "opay"] as const;

function PaymentBadge({ type }: { type: (typeof paymentBadges)[number] }) {
  if (type === "gpay") {
    return (
      <span className="payment-badge payment-badge-light">
        <span className="payment-g">G</span>
        <span>Pay</span>
      </span>
    );
  }

  if (type === "mastercard") {
    return (
      <span className="payment-badge payment-badge-light">
        <span className="payment-mastercard">
          <span className="payment-mastercard-left" />
          <span className="payment-mastercard-right" />
        </span>
      </span>
    );
  }

  if (type === "paypal") {
    return (
      <span className="payment-badge payment-badge-light">
        <span className="payment-paypal-mark">P</span>
        <span className="payment-paypal-word">PayPal</span>
      </span>
    );
  }

  if (type === "amex") {
    return (
      <span className="payment-badge payment-badge-amex">
        <span className="payment-amex-word">AMEX</span>
      </span>
    );
  }

  if (type === "applepay") {
    return (
      <span className="payment-badge payment-badge-light">
        <span className="payment-apple-word"> Pay</span>
      </span>
    );
  }

  return (
    <span className="payment-badge payment-badge-opay">
      <span className="payment-opay-ring" />
      <span>Pay</span>
    </span>
  );
}

export function Footer() {
  return (
    <footer
      style={{
        background: "#060606",
        color: "#fff",
        padding: "56px 0 28px",
      }}
    >
      <div className="content-shell">
        <div className="footer-top" style={{ paddingBottom: 32 }}>
          <section className="footer-newsletter">
            <h2
              className="display-font"
              style={{ margin: 0, fontSize: 18, fontWeight: 700 }}
            >
              Be The First To Know
            </h2>
            <p
              style={{
                margin: "22px 0 42px",
                fontSize: 14,
                color: "rgba(255,255,255,0.64)",
                lineHeight: 1.6,
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
                  minHeight: 58,
                  padding: "0 28px",
                  color: "#181512",
                  fontSize: 16,
                }}
              />
              <button
                className="newsletter-submit"
                type="submit"
                style={{
                  minHeight: 58,
                  minWidth: 184,
                  padding: "0 26px",
                  border: "1px solid rgba(255,255,255,0.22)",
                  background: "transparent",
                  color: "rgba(255,255,255,0.24)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  fontWeight: 700,
                }}
              >
                Subscribe
              </button>
            </form>
          </section>

          <div className="footer-contact-stack">
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
                  gap: 18,
                  marginTop: 22,
                  fontSize: 14,
                  color: "rgba(255,255,255,0.9)",
                }}
              >
                <span>+44 221 133 5360</span>
                <span>customercare@mettamuse.com</span>
              </div>
            </section>

            <section style={{ marginTop: 34 }}>
              <h2
                className="display-font"
                style={{ margin: 0, fontSize: 18, fontWeight: 700 }}
              >
                Currency
              </h2>
              <div style={{ marginTop: 18, fontSize: 13, color: "rgba(255,255,255,0.7)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: 28, lineHeight: 1 }}>🇺🇸</span>
                  <span style={{ fontSize: 10, color: "rgba(255,255,255,0.7)" }}>•</span>
                  <strong
                    className="display-font"
                    style={{ color: "#fff", fontSize: 18, letterSpacing: "0.04em" }}
                  >
                    USD
                  </strong>
                </div>
                <p style={{ margin: "18px 0 0", lineHeight: 1.7, maxWidth: 420 }}>
                  Transactions will be completed in Euros and a currency reference
                  is available on hover.
                </p>
              </div>
            </section>
          </div>
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
                  <PaymentBadge key={badge} type={badge} />
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
