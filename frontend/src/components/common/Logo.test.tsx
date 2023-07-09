import React from 'react';
import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import Logo from './Logo';

describe('Logo component', () => {
  it('renders with default width', () => {
    const { getByTestId } = render(<Logo />);
    const logoSvg = getByTestId('logo-svg');
    expect(logoSvg).toBeInTheDocument();
    expect(logoSvg).toHaveAttribute('width', '32');
  });

  it('renders with specified width', () => {
    const { getByTestId } = render(<Logo width={64} />);
    const logoSvg = getByTestId('logo-svg');
    expect(logoSvg).toBeInTheDocument();
    expect(logoSvg).toHaveAttribute('width', '64');
  });
});