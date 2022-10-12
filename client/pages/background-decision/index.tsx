import React, { useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Header from '@/components/Header';
import styles from '@/styles/BackgroundDecision.module.css';
import TypeList from '@/components/TypeList';

const typeNames = ['단색', '그라데이션'];

const BackgroundDecision: NextPage = () => {
  const [faceImg] = useState('/images/hairImg1.png');
  const [activeType, setActiveType] = useState(0);
  return (
    <div className={styles['page-layout']}>
      <Head>
        <title>ID Photo Web</title>
        <meta name="description" content="id photo generatation service" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1.0, minimum-scale=1.0"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title="배경 결정" href="/cut-size-decision" />
      <main className={styles.main}>
        <div className={styles['face-image-container']}>
          <div className={styles['face-image']}>
            <Image src={faceImg} alt="얼굴 사진 결과물" layout="fill" />
          </div>
        </div>
        <article className={styles['select-container']}>
          <section>
            <h2 className={styles['screen-reader-only']}>배경 종류 선택</h2>
            {/* <ul aria-label="종류 목록">
              <li aria-label="type item">
                <button type="button">단색</button>
                <i>|</i>
              </li>
            </ul> */}
            <TypeList
              typeNames={typeNames}
              activeTarget={activeType}
              onClick={setActiveType}
            />
          </section>
          <section>
            <h2 className={styles['screen-reader-only']}>배경 색상 선택</h2>
            <ul aria-label="색상 목록" className={styles['color-list']}>
              <li aria-label="color item">
                <button
                  type="button"
                  className={`${styles['color-picker-checker']} ${styles['color-picker--active']}`}
                  style={{ background: '' }}
                >
                  transparent
                </button>
              </li>
              <li aria-label="color item">
                <button
                  type="button"
                  className={styles['color-picker']}
                  style={{ background: '#ffffff' }}
                >
                  #ffffff
                </button>
              </li>
              <li aria-label="color item">
                <button
                  type="button"
                  className={styles['color-picker']}
                  style={{ background: '#f5f5f5' }}
                >
                  #f5f5f5
                </button>
              </li>
              <li aria-label="color item">
                <button
                  type="button"
                  className={styles['color-picker']}
                  style={{ background: '#cecece' }}
                >
                  #cecece
                </button>
              </li>
              <li aria-label="color item">
                <button
                  type="button"
                  className={styles['color-picker']}
                  style={{ background: '#b1b1b1' }}
                >
                  #b1b1b1
                </button>
              </li>
              <li aria-label="color item">
                <button
                  type="button"
                  className={styles['color-picker-rainbow']}
                  style={{ background: '' }}
                >
                  custom color
                </button>
              </li>
            </ul>
          </section>
        </article>
      </main>
    </div>
  );
};

export default BackgroundDecision;
