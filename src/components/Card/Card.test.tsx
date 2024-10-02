import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Card } from './Card';

describe('Card component', () => {
    it('renders the title and children  correctly', () => {
        render(<Card title="Test Title">Test Content</Card>);
        const titleElement = screen.getByText('Test Title');
        const contentElement = screen.getByText('Test Content');
        expect(titleElement).toBeTruthy();
        expect(contentElement).toBeTruthy();
    });

});