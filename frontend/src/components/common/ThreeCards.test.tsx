import React from 'react';
import { describe, it, expect } from "vitest";
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ThreeCards from './ThreeCards';

describe('ThreeCards', () => {
  it('renders three cards with correct content and buttons', () => {
    render(
      <MemoryRouter>
        <ThreeCards />
      </MemoryRouter>
    );
  
    const cardTitles = screen.getAllByRole('heading', { level: 1 });
    expect(cardTitles).toHaveLength(3);
    expect(cardTitles[0]).toHaveTextContent('PLACE BETS');
    expect(cardTitles[1]).toHaveTextContent('WIN CURRENCY');
    expect(cardTitles[2]).toHaveTextContent('LEADER BOARD');

    const cardContents = screen.getAllByText((content, element) => (
      element?.tagName.toLowerCase() === 'p'
    ));
    expect(cardContents).toHaveLength(3);
    expect(cardContents[0]).toHaveTextContent('Correctly guess the dice roll');
    expect(cardContents[1]).toHaveTextContent('If you guess is correct');
    expect(cardContents[2]).toHaveTextContent('Compare your result to others');

    const cardIcons = screen.getAllByRole('img');
    expect(cardIcons).toHaveLength(3);
    cardIcons.forEach((icon) => {
      expect(icon).toBeInTheDocument();
    });

    const playNowButton = screen.getByText('Play Now');
    expect(playNowButton).toBeInTheDocument();
    const playNowParentElement = playNowButton.parentElement;
    expect(playNowParentElement?.tagName).toBe('A');
    expect(playNowParentElement?.getAttribute('href')).toBe('/signup');

    const signUpButton = screen.getByText('Sign Up');
    expect(signUpButton).toBeInTheDocument();
    const signUpParentElement = signUpButton.parentElement;
    expect(signUpParentElement?.tagName).toBe('A');
    expect(signUpParentElement?.getAttribute('href')).toBe('/signup');

    const leaderBoardButton = screen.getByText('View');
    expect(leaderBoardButton).toBeInTheDocument();
    const leaderBoardButtonParentElement = leaderBoardButton.parentElement;
    expect(leaderBoardButtonParentElement?.tagName).toBe('A');
    expect(leaderBoardButtonParentElement?.getAttribute('href')).toBe('/leaderboard');

  })
})
