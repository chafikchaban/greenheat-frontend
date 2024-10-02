import { fireEvent, render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Checkbox, { CheckboxProps } from './Checkbox';

describe('Checkbox component', () => {
    it('renders the label correctly', () => {
        const props: CheckboxProps = {
            checked: false,
            label: 'test label',
            value: 'test_value',
            onChange: vi.fn(),
        }
        render(<Checkbox {...props} />);
        const labelElement = screen.getByText('test label');

        expect(labelElement).toBeTruthy();
    });

    it('calls onChange with the correct value when clicked', () => {
        const onChangeMock = vi.fn();

        const props: CheckboxProps = {
            checked: false,
            label: 'test label',
            value: 'test_value',
            onChange: onChangeMock,
        };

        render(<Checkbox {...props} />);
        const checkbox = screen.getByRole('checkbox');
        fireEvent.click(checkbox);

        expect(onChangeMock).toHaveBeenCalledWith(true, 'test_value');
    });

    it('is checked when the checked prop is true', () => {
        const props: CheckboxProps = {
            checked: true,
            label: 'test label',
            value: 'test_value',
            onChange: vi.fn(),
        };
        render(<Checkbox {...props} />);
        const checkbox = screen.getByRole('checkbox');

        expect(checkbox).toBeChecked();
    });
});