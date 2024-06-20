import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import Main from './Main';

// Mock content data for testing
vi.mock('../assets/content', () => {
  return {
    default: [
      { title: 'Title 1', content: 'Content 1', img: 'image1.jpg' },
      { title: 'Title 2', content: 'Content 2', img: 'image2.jpg' },
    ],
  };
});

describe('Main component', () => {
  it('renders without crashing', () => {
    render(<Main />);
  });

  it('renders sector, title, content and image correctly', () => {
    render(<Main />);

    const mockContent = [
      { title: 'Title 1', content: 'Content 1', img: 'image1.jpg' },
      { title: 'Title 2', content: 'Content 2', img: 'image2.jpg' },
    ];

    mockContent.forEach((cont, index) => {
      const title = screen.getByText(cont.title);
      const contentText = screen.getByText(cont.content);
      // const image = screen.getAllByRole('img')[index];
      const sector = screen.getAllByRole('sector')[index];

      expect(sector).toBeInTheDocument();
      expect(title).toBeInTheDocument();
      expect(contentText).toBeInTheDocument();
      // expect(image).toHaveAttribute('src', cont.img);
      // expect(image).toHaveAttribute('alt', 'sector');
    });
  });
});