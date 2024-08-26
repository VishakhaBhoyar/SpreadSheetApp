import { render, screen, fireEvent } from '@testing-library/react';
import Cell from '../app/components/Cell';
import { act } from 'react-dom/test-utils';
import useStore from '../stores/useStore';

jest.mock('../stores/useStore');

test('Cell component renders and updates value', () => {
  const setCell = jest.fn();
  useStore.mockReturnValue({
    grid: [''],
    setCell,
  });

  render(<Cell index={0} />);

  const input = screen.getByRole('textbox');
  fireEvent.change(input, { target: { value: 'Test' } });

  expect(setCell).toHaveBeenCalledWith(0, 'Test');
});
