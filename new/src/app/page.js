import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.logo}>Aster</div>
        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/about">Contact</Link>
        </nav>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroText}>
          <span className={styles.badge}>Small modern studio</span>
          <h1>Clean design for your next big idea.</h1>
          <p>
            We help brands and businesses create simple, elegant digital experiences
            that feel personal and professional.
          </p>
          <div className={styles.actions}>
            <Link href="/about" className={styles.primaryBtn}>
              Learn More
            </Link>
            <Link href="/" className={styles.secondaryBtn}>
              View Work
            </Link>
          </div>
        </div>

        <div className={styles.heroCard}>
          <div className={styles.cardTop}>
            <span className={styles.dot} />
            <span>Brand Launch</span>
          </div>
          <h2>Minimal style, maximum impact.</h2>
          <ul>
            <li>Simple layouts</li>
            <li>Warm and friendly colors</li>
            <li>Fast and clear messaging</li>
          </ul>
        </div>
      </section>

      <section className={styles.features}>
        <article className={styles.featureCard}>
          <span>01</span>
          <h3>Strategy</h3>
          <p>Thoughtful planning for small, focused business growth.</p>
        </article>
        <article className={styles.featureCard}>
          <span>02</span>
          <h3>Design</h3>
          <p>Clean visuals built with white, cream, and soft contrast.</p>
        </article>
        <article className={styles.featureCard}>
          <span>03</span>
          <h3>Launch</h3>
          <p>Simple tools and polished presentation for your audience.</p>
        </article>
      </section>
    </main>
  );
}
