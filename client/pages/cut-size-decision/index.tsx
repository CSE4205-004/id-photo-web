import React, { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import Header from '@/components/Header';
import router from 'next/router';
import styles from './CutSizeDecision.module.css';
import Card from '../../components/Card';
import { CardInfo, cutSizeData } from '../../constants/cutSizeData';

const CutSizeDecision: NextPage = () => {
  const [cards] = useState<CardInfo[]>(cutSizeData);
  SwiperCore.use([Navigation, Pagination, A11y]);

  return (
    <div className={styles.container}>
      <Head>
        <title>ID Photo Web</title>
        <meta name="description" content="id photo generatation service" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1.0, minimum-scale=1.0"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title="컷 사이즈" href="/hair-decision" hideButton />
      <main className={styles.main}>
        <section className={styles['card-container']}>
          <h2 className={styles['screen-reader-only']}>최종 사진 크기 선택</h2>
          <Swiper
            spaceBetween={18}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
          >
            <ul className={styles.card__list} aria-label="컷 사이즈 목록">
              {cards.map((card) => (
                <SwiperSlide key={card.id}>
                  <Card
                    card={card}
                    onClick={() => router.push('/background-decision')}
                  />
                </SwiperSlide>
              ))}
            </ul>
          </Swiper>
          <style global jsx>{`
            /* swiper custom css  */
            .swiper-pagination-bullets,
            .swiper-pagination-bullets.swiper-pagination-horizontal {
              bottom: 0;
            }

            .swiper-pagination-bullet {
              margin-top: 15px !important;
              background-color: #666 !important;
              opacity: 0.35 !important;
            }

            .swiper-pagination-bullet-active {
              margin-top: 15px !important;
              background-color: #666 !important;
              opacity: 0.9 !important;
            }

            .swiper-button-prev,
            .swiper-button-next {
              color: #666 !important;
              font-weight: bold !important;
              background-color: rgba(255, 255, 255, 0.9) !important;
              border-radius: 8px !important;
            }

            .swiper-button-prev::after,
            .swiper-button-next::after {
              font-size: 1.5rem !important;
              opacity: 0.9 !important;
            }
          `}</style>
        </section>
      </main>
    </div>
  );
};

export default CutSizeDecision;
