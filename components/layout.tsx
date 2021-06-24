import { FC } from 'react';
import Head from 'next/head';
import styles from './layout.module.css';
import utilStyles from '@styles/utils.module.css';
import Meta, { MetaOptions } from "@components/meta";

export const siteName = 'TEST'
export const siteTitle = `Home | ${siteName}`

const Layout: FC<{ title?: string, meta?: MetaOptions, home?: boolean, style?: React.CSSProperties, className?: string }> = ({ children, title = siteTitle, meta, home, style = { maxWidth: "36rem" }, className = "" }) => {
  return (<>
    <div className={`${styles.container} ${className}`} style={style}>
      <Head>
        <link rel="icon" href="/favicon.webp" />
        { title && (<title>{ title }</title>) }
      </Head>
      <Meta options={meta} />
      <header className={styles.header}>
        {home && (<>
          <h1 className={utilStyles.heading2Xl}>{siteName}</h1>
        </>)}
      </header>
      <main>{children}</main>
    </div>
    <Footer/>
  </>);
}

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <p className={styles.title}>
          Mitchell Lee
        </p>
        <hr/>
        <p className={styles.body}>
          P: <a href="tel:+612-9196-8872">9196 8872</a>
          <br/>
          E: <a href="mailto:mitch@hsw.com.au">mitch@hsw.com.au</a>
        </p>
      </div>
    </footer>
  )
}

export default Layout;