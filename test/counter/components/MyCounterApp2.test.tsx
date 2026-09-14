import { describe, expect, test, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { MyCounterApp } from '../../../src/counter/components/MyCounterApp';

const handleAddMock = vi.fn();
const handleSubtractMock = vi.fn();
const handleResetMock = vi.fn();

// useCounter
vi.mock('../../../src/counter/hooks/useCounter', () => ({
    useCounter: () => ({
        counter: 20,
        handleAdd: handleAddMock,
        handleSubtract: handleSubtractMock,
        handleReset: handleResetMock,
    })
}));

describe('MyCounterApp', () => {
    test('should render the component', () => {
        render(<MyCounterApp/>);
        expect(screen.getByRole('heading', { level: 2}).innerHTML).toContain(
            `Counter: 20`
        );
    
        expect(screen.getByRole('button', { name: '+1'})).toBeDefined();
        expect(screen.getByRole('button', { name: '-1'})).toBeDefined();
        expect(screen.getByRole('button', { name: 'Reset'})).toBeDefined();
    });

    test('should call handleAdd if button is clicked', () => {
        render(<MyCounterApp/>);
        const button = screen.getByRole('button', { name: '+1'});
        fireEvent.click(button);
        expect(handleAddMock).toHaveBeenCalled();
        expect(handleAddMock).toHaveBeenCalledTimes(1);
        expect(handleResetMock).not.toHaveBeenCalled();
        expect(handleSubtractMock).not.toHaveBeenCalled();
    });
});
