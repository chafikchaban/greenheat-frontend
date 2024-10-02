import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Select, SelectProps } from './Select';
import '@testing-library/jest-dom';

describe('Select component', () => {
    const mockOptions = [
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' },
    ];

    const renderComponent = (props: Partial<SelectProps> = {}) => {
        const defaultProps: SelectProps = {
            options: mockOptions,
            onSelect: vi.fn(),
            ...props
        };

        return render(<Select {...defaultProps} />);
    };

    it('renders the correct number of options', () => {
        renderComponent();

        const options = screen.getAllByRole('option');
        expect(options).toHaveLength(mockOptions.length);
    });

    it('displays the correct labels for the options', () => {
        renderComponent();

        mockOptions.forEach(option => {
            expect(screen.getByText(option.label)).toBeInTheDocument();
        });
    });

    it('calls onSelect with the correct value when an option is selected', () => {
        const mockOnSelect = vi.fn();
        renderComponent({ onSelect: mockOnSelect });

        const selectElement = screen.getByRole('combobox');
        fireEvent.change(selectElement, { target: { value: '2' } });

        expect(mockOnSelect).toHaveBeenCalledWith('2');
    });

    it('updates the selected value when an option is selected', () => {
        const mockOnSelect = vi.fn();
        renderComponent({ onSelect: mockOnSelect });

        const selectElement = screen.getByRole('combobox');
        fireEvent.change(selectElement, { target: { value: '2' } });

        expect(selectElement).toHaveValue('2');
    });
});
