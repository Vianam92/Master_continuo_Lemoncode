import { renderHook } from '@testing-library/react';
import { act } from 'react';
import { useConfirmationDialog } from './confirmation-dialog.hook';
import { Lookup } from 'common/models';

describe('/common/confirmationDialogHook', () => {
  it('should is open false', () => {
    const { result } = renderHook(() => useConfirmationDialog());
    
    expect(result.current.isOpen).toBeFalsy();
  });

  it('should is open return true', () => {
    const values: Lookup = {
      id: '1',
      name: 'Maria',
    };

    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onOpenDialog(values);
    });

    expect(result.current.isOpen).toBeTruthy();
  });
  it('should return empty lookup', () => {
    const { result } = renderHook(() => useConfirmationDialog());

    expect(result.current.itemToDelete).toEqual({ id: '', name: '' });
  });
  it('onAccept', () => {
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onAccept();
    });
    expect(result.current.itemToDelete).toEqual({ id: '', name: '' });
  });
});
