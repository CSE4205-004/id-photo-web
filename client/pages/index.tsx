import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => (
  <div className={styles.container}>
    <Head>
      <title>ID Photo Web</title>
      <meta name="description" content="id photo generatation service" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <header>
      <Image src="/vercel.svg" alt="logoImage" width={130} height={36} />
      <Link href="#1" passHref>
        <a href="#1">사용 사례</a>
      </Link>
      <Link href="#2" passHref>
        <a href="#2">자주 묻는 질문</a>
      </Link>
      <Link href="#3" passHref>
        <a href="#3">문의하기</a>
      </Link>
      <select name="lang" id="lang" defaultValue="kor" aria-label="languages">
        <option value="kor">한국어</option>
        <option value="eng">English</option>
      </select>
      <button type="button">로그인</button>
    </header>
    <div aria-label="banner">
      <Image src="/vercel.svg" alt="bannerImage" layout="fill" />
    </div>
    <main className={styles.main}>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>

      <p className={styles.description}>
        Get started by editing{' '}
        <code className={styles.code}>pages/index.tsx</code>
      </p>

      <div className={styles.grid}>
        <a href="https://nextjs.org/docs" className={styles.card}>
          <h2>Documentation &rarr;</h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a href="https://nextjs.org/learn" className={styles.card}>
          <h2>Learn &rarr;</h2>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a>

        <a
          href="https://github.com/vercel/next.js/tree/canary/examples"
          className={styles.card}
        >
          <h2>Examples &rarr;</h2>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className={styles.card}
        >
          <h2>Deploy &rarr;</h2>
          <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
        </a>
      </div>
    </main>

    <footer className={styles.footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <span className={styles.logo}>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>
    </footer>
  </div>
);

export default Home;
