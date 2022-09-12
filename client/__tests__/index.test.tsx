import React from 'react';
import { render, screen } from '@testing-library/react';
import Index from '../pages/index';

describe('Home', () => {
  it('renders a header', () => {
    render(<Index />);

    const logo = screen.getByAltText(/logoImage/);
    expect(logo).toBeInTheDocument();

    const usecase = screen.getByRole('link', { name: /사용 사례/ });
    expect(usecase).toBeInTheDocument();

    const faq = screen.getByRole('link', { name: /자주 묻는 질문/ });
    expect(faq).toBeInTheDocument();

    const contact = screen.getByRole('link', { name: /문의하기/ });
    expect(contact).toBeInTheDocument();

    const languages = screen.getByRole('combobox', { name: /languages/ });
    expect(languages).toBeInTheDocument();

    const loginButton = screen.getByRole('button', { name: /로그인/ });
    expect(loginButton).toBeInTheDocument();
  });
});
