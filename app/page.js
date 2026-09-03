import styles from "./page.module.css";

const envMessage =
  process.env.NEXT_PUBLIC_SITE_MESSAGE || "Environment variable is not set";

const features = [
  {
    number: "01",
    title: "Move faster",
    text: "A clean foundation designed to help you go from idea to launch without unnecessary complexity.",
  },
  {
    number: "02",
    title: "Look premium",
    text: "Thoughtful typography, spacing, motion and responsive layouts give your product a polished first impression.",
  },
  {
    number: "03",
    title: "Convert better",
    text: "Clear messaging and focused calls to action keep visitors moving toward the next step.",
  },
];

export default function Home() {
  return (
    <main>
      <nav className={styles.nav}>
        <a href="#" className={styles.logo}>
          NOVA<span>.</span>
        </a>

        <div className={styles.navLinks}>
          <a href="#features">Features</a>
          <a href="#about">Why Nova</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className={styles.navCta}>
          Get started
        </a>
      </nav>

      <section className={styles.hero}>
        <div className={styles.glow} />

        <div className={styles.heroCopy}>
          <div className={styles.eyebrow}>
            <span className={styles.dot} />
            The smarter way forward
          </div>

          <h1>
            Build what&apos;s <em>next.</em>
          </h1>

          <p className={styles.heroText}>
            Turn your boldest idea into a product people remember.
            NOVA gives ambitious teams the clarity, speed and momentum to launch.
          </p>

          {/* Environment variable output */}
          <div
            style={{
              marginTop: "20px",
              padding: "12px 16px",
              borderRadius: "10px",
              background: "rgba(0, 0, 0, 0.06)",
              fontSize: "13px",
            }}
          >
            ENV: {envMessage}
          </div>

          <div className={styles.heroActions}>
            <a href="#contact" className={styles.primaryButton}>
              Start building <span>→</span>
            </a>

            <a href="#features" className={styles.secondaryButton}>
              Explore features
            </a>
          </div>

          <div className={styles.trust}>
            <div className={styles.avatars}>
              <span>JD</span>
              <span>AM</span>
              <span>SK</span>
              <span>+</span>
            </div>

            <div>
              <strong>2,000+</strong>
              <small>teams already moving forward</small>
            </div>
          </div>
        </div>

        <div className={styles.heroVisual} aria-hidden="true">
          <div className={`${styles.orbit} ${styles.orbitOne}`} />
          <div className={`${styles.orbit} ${styles.orbitTwo}`} />

          <div className={styles.core}>
            <div className={styles.coreInner}>N</div>
          </div>

          <div className={`${styles.floatingCard} ${styles.cardTop}`}>
            <span className={styles.miniLabel}>Momentum</span>
            <strong>+84.6%</strong>

            <div className={styles.chart}>
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>

          <div className={`${styles.floatingCard} ${styles.cardBottom}`}>
            <span className={styles.check}>✓</span>

            <div>
              <strong>Ready to launch</strong>
              <small>Everything is on track.</small>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.marquee}>
        <span>DESIGNED FOR AMBITION</span>
        <b>✦</b>
        <span>BUILT FOR MOMENTUM</span>
        <b>✦</b>
        <span>MADE TO MOVE</span>
        <b>✦</b>
        <span>DESIGNED FOR AMBITION</span>
      </section>

      <section id="features" className={styles.features}>
        <div className={styles.sectionIntro}>
          <span className={styles.sectionTag}>WHY NOVA</span>

          <h2>
            Everything you need.
            <br />
            <em>Nothing you don&apos;t.</em>
          </h2>
        </div>

        <div className={styles.featureGrid}>
          {features.map((feature) => (
            <article key={feature.number} className={styles.feature}>
              <span className={styles.featureNumber}>
                {feature.number}
              </span>

              <h3>{feature.title}</h3>

              <p>{feature.text}</p>

              <span className={styles.arrow}>↗</span>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className={styles.statement}>
        <div className={styles.statementLine} />

        <p>Great products don&apos;t happen by accident.</p>

        <h2>
          Make the next
          <br />
          <em>move.</em>
        </h2>

        <a href="#contact" className={styles.primaryButton}>
          Let&apos;s talk <span>→</span>
        </a>
      </section>

      <footer id="contact" className={styles.footer}>
        <div>
          <a href="#" className={styles.logo}>
            NOVA<span>.</span>
          </a>

          <p>
            A modern landing page starter for your next big idea.
          </p>
        </div>

        <div className={styles.footerRight}>
          <span>© 2026 NOVA</span>
          <a href="mailto:hello@example.com">
            hello@example.com
          </a>
        </div>
      </footer>
    </main>
  );
} 
