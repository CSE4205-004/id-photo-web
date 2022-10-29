import React, { useEffect, useRef, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Crop from '@/components/Crop';
import Header from '@/components/Header';
import styles from '@/styles/HairDecision.module.css';
import TypeList from '@/components/TypeList';
import HairStyleList from '@/components/HairStyleList';
import { useRecoilState, useRecoilValue } from 'recoil';
import faceImageState, { withSrc } from 'recoil/faceImage';
import { useRouter } from 'next/router';
import { hairStyleImages, typeNames } from '../../constants/hairStyleData';

const HairDecision: NextPage = () => {
  const [activeType, setActiveType] = useState(0);
  const [selectedHair, setSelectedHair] = useState(-1);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [, setFaceImage] = useRecoilState(faceImageState);
  const faceSrc = useRecoilValue(withSrc);
  const router = useRouter();

  const toBlob = async (canvas: HTMLCanvasElement) =>
    new Promise<Blob>((resolve) => {
      canvas.toBlob((blob) => {
        resolve(blob as Blob);
      });
    });

  const handleComplete = async () => {
    if (!canvasRef.current) return;

    const croppedFace = await toBlob(canvasRef.current);
    if (faceSrc) {
      URL.revokeObjectURL(faceSrc);
    }
    setFaceImage(croppedFace);
    router.push('/cut-size-decision');
  };

  const handleSelectHair = (idx: number) => {
    if (idx === selectedHair) {
      setSelectedHair(-1);
      return;
    }
    setSelectedHair(idx);
  };

  useEffect(() => {
    if (faceSrc === '/') {
      router.push('/');
    }
  }, [faceSrc, router]);

  useEffect(() => {
    setSelectedHair(-1);
  }, [activeType]);

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
      <Header
        title="헤어 결정"
        href="/"
        onClickButton={handleComplete}
        hideButton={selectedHair === -1}
      />
      <main className={styles.main}>
        <article>
          <h2 className={styles['screen-reader-only']}>사진 조정</h2>
          <Crop faceSrc={faceSrc} ref={canvasRef} />
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
          </section>
          <section className={styles['hair-style-container']}>
            <h2 className={styles['screen-reader-only']}>헤어 스타일 선택</h2>
            <HairStyleList
              images={hairStyleImages[typeNames[activeType]]}
              checkTarget={selectedHair}
              onClick={handleSelectHair}
            />
          </section>
        </article>
      </main>
    </div>
  );
};
export default HairDecision;
