import Link from "next/link";
import styles from "../page.module.css";

export default function About() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.logo}>Aster</div>
        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/">Contact</Link>
        </nav>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroText}>
          <span className={styles.badge}>About us</span>
          <h1>We build calm, clear digital experiences.</h1>
          <p>
            Aster is a small creative studio focused on helping businesses present
            themselves beautifully, simply, and confidently online.
          </p>
          <div className={styles.actions}>
            <Link href="/" className={styles.primaryBtn}>
              Back Home
            </Link>
          </div>
        </div>

        <div className={styles.heroCard}>
          <div className={styles.cardTop}>
            <span className={styles.dot} />
            <span>Our process</span>
          </div>
          <h2>Thoughtful design from idea to launch.</h2>
          <ul>
            <li>Discovery and planning</li>
            <li>Visual direction and layout</li>
            <li>Modern, responsive execution</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
