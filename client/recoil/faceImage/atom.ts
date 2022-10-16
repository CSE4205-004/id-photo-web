import { atom } from 'recoil';

// 새로고침해도 상태 유지가 필요하다면 recoil-persist 모듈 설치 필요
const faceImageState = atom<File | null>({
  key: 'faceImageState',
  default: null,
});

export default faceImageState;
