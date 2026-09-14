import { describe, expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { MyCounterApp } from '../../../src/counter/components/MyCounterApp';

describe('MyCounterApp', () => {
    test('should render the component with default properties', () => {
        render(<MyCounterApp />);
        // screen.debug()
        expect(screen.getByRole('heading', { level: 2}).innerHTML).toContain(
            `Counter: 10`
        );
        expect(screen.getByRole('button', { name: '+1'})).toBeDefined();
        expect(screen.getByRole('button', { name: '-1'})).toBeDefined();
        expect(screen.getByRole('button', { name: 'Reset'})).toBeDefined();
    });
    
    test('should increment the counter', () => {
        render(<MyCounterApp />);
        const labelH2 = screen.getByRole('heading', { level: 2});
        const button = screen.getByRole('button', { name: '+1'});
        fireEvent.click(button);
        expect(labelH2.innerHTML).toContain('Counter: 11');
    });
    
    test('should decrement the counter', () => {
        render(<MyCounterApp />);
        const labelH2 = screen.getByRole('heading', { level: 2});
        const button = screen.getByRole('button', { name: '-1'});
        fireEvent.click(button);
        expect(labelH2.innerHTML).toContain('Counter: 9');
    });
})