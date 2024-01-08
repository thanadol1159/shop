import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Script from 'next/script';
import utilStyles from '../../styles/utils.module.css';
import Layout from './layout';
export default function Home() {
  return (
    <Layout home>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        <Image
          src="/images/aa.jpg"
          width={400}
          height={400}
          alt="Picture of the author"
        />
      </section>
    </Layout>
  );
}