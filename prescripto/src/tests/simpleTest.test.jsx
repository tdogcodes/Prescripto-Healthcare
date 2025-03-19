import React from 'react';
import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import SimpleTestComponent from '../components/SimpleTestComponent';

describe('SimpleTestComponent', () => {
  test('renders "Hello, world!"', () => {
    render(<SimpleTestComponent />);
    const element = screen.getByText('Hello, world!');
    expect(element).toBeTruthy(); // Just check if the element is found
  });
});