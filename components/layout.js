import Image from 'next/image';
import styles from '../styles/Layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Logo from './logo';

const name = 'DJ Simpson';
export const siteTitle = 'Beauty by Lishelle Anne';

export default function Layout({ children, home }) {
  var headerLeft = (<>
    <Logo />
    <h1 className={utilStyles.headingXl}>{siteTitle}</h1>
  </>);

  return (
    <>
      <header className={`${styles.header} primary`}>
        {home ? (
          <div>
            {headerLeft}
          </div>
        ) : (
          <Link href="/">
            <a>
              {headerLeft}
            </a>
          </Link>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <footer className={`${styles.footer} secondary`}>
        <div>
          Powered by <strong>Simpson Solutions LLC</strong>
        </div>
      </footer>
    </>
  );
}