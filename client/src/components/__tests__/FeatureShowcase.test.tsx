import React from 'react';
import { render, screen } from '@testing-library/react';
import FeatureShowcase from '../FeatureShowcase';
import '@testing-library/jest-dom';

describe('FeatureShowcase Component', () => {
  test('renders at least 5 features', () => {
    render(<FeatureShowcase />);
    
    // Using the test-id we added to find feature cards
    const featureCards = screen.getAllByTestId('feature-card');
    
    // Assert that we have at least 5 features
    expect(featureCards.length).toBeGreaterThanOrEqual(5);
  });

  test('each feature has a title, description and link', () => {
    render(<FeatureShowcase />);
    
    // Get all the feature cards
    const featureCards = screen.getAllByTestId('feature-card');
    
    // Check that each feature has the expected structure
    featureCards.forEach(card => {
      // Each feature should have a title
      const title = card.querySelector('h3');
      expect(title).toBeInTheDocument();
      
      // Each feature should have a description paragraph
      const description = card.querySelector('p');
      expect(description).toBeInTheDocument();
      
      // Each feature should have a "Learn More" link
      const link = card.querySelector('[data-testid="feature-link"]');
      expect(link).toBeInTheDocument();
      expect(link).toHaveTextContent(/Learn More/i);
    });
  });

  test('features include icons', () => {
    render(<FeatureShowcase />);
    
    // Find all the feature icons using the test-id we added
    const iconContainers = screen.getAllByTestId('feature-icon');
    
    // We should have at least 5 icons (one for each feature)
    expect(iconContainers.length).toBeGreaterThanOrEqual(5);
  });
});