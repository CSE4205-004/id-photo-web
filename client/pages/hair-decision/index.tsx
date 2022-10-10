import React, { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Crop from '@/components/Crop';
import Header from '@/components/Header';
import styles from '@/styles/HairDecision.module.css';
import TypeList from '@/components/TypeList';

const HairDecision: NextPage = () => {
  const typeNames = ['롱', '미디움', '단발', '숏컷'];
  const [activeType, setActiveType] = useState(0);

  return (
    <div className={styles.page}>
      <Head>
        <title>ID Photo Web</title>
        <meta name="description" content="id photo generatation service" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1.0, minimum-scale=1.0"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title="헤어 결정" href="/" />
      <main className={styles.main}>
        <article>
          <h2 className={styles['screen-reader-only']}>사진 조정</h2>
          <Crop />
        </article>
        <article className={styles['select-container']}>
          <section>
            <h2 className={styles['screen-reader-only']}>
              헤어 스타일 종류 선택
            </h2>
            <TypeList
              typeNames={typeNames}
              activeTarget={activeType}
              onClick={setActiveType}
            />
            {/* <ul aria-label="종류 목록" className={styles['type-select']}>
            <li aria-label="type item" className={styles['type-select__item']}>
              <button
                type="button"
                className={[
                  styles['type-select__btn'],
                  styles['type-select__btn--active'],
                ].join(' ')}
              >
                롱
              </button>
              <i className={styles['type-select__bar']}>|</i>
            </li>
            <li aria-label="type item" className={styles['type-select__item']}>
              <button type="button" className={styles['type-select__btn']}>
                미디움
              </button>
              <i className={styles['type-select__bar']}>|</i>
            </li>
            <li aria-label="type item" className={styles['type-select__item']}>
              <button type="button" className={styles['type-select__btn']}>
                단발
              </button>
              <i className={styles['type-select__bar']}>|</i>
            </li>
            <li aria-label="type item" className={styles['type-select__item']}>
              <button type="button" className={styles['type-select__btn']}>
                숏컷
              </button>
            </li>
          </ul> */}
          </section>
          <section className={styles['hair-style-container']}>
            <h2 className={styles['screen-reader-only']}>헤어 스타일 선택</h2>
            <ul
              aria-label="스타일 목록"
              className={styles['hair-style-select']}
            >
              <li
                aria-label="style item"
                className={styles['hair-style-select__item']}
              >
                <Image
                  src="/images/hairImg1.png"
                  alt="헤어 스타일 이미지"
                  layout="fill"
                />
              </li>
              <li
                aria-label="style item"
                className={styles['hair-style-select__item']}
              >
                <Image
                  src="/images/hairImg1.png"
                  alt="헤어 스타일 이미지"
                  layout="fill"
                />
              </li>
              <li
                aria-label="style item"
                className={styles['hair-style-select__item']}
              >
                <Image
                  src="/images/hairImg1.png"
                  alt="헤어 스타일 이미지"
                  layout="fill"
                />
              </li>
              <li
                aria-label="style item"
                className={styles['hair-style-select__item']}
              >
                <Image
                  src="/images/hairImg1.png"
                  alt="헤어 스타일 이미지"
                  layout="fill"
                />
              </li>
            </ul>
          </section>
        </article>
      </main>
    </div>
  );
};
export default HairDecision;
