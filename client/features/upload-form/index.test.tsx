import React from 'react';
import { render, screen } from '@testing-library/react';
import UploadForm from './index';

describe('UploadForm', () => {
  it('renders a title', () => {
    render(<UploadForm />);
    const title = screen.getByText(/이미지를 올려서 증명사진을 생성해보세요./);
    expect(title).toBeInTheDocument();
  });

  it('renders drag drop box', () => {
    render(<UploadForm />);
    const box = screen.getByLabelText(/drag-drop-box/);
    expect(box).toContainElement(
      screen.getByRole('button', { name: /drag-drop-button/ })
    );
    expect(box).toContainElement(
      screen.getByText(/Drag & Drop 또는 클릭하여 이미지를 업로드 해주세요./)
    );
  });
});
