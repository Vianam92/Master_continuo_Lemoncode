import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ConfirmationDialogComponent, Props } from './confirmation-dialog.component';

afterEach(() => {
  jest.clearAllMocks();
});

describe('ConfirmationDialogComponent', () => {
  const defaultProps: React.ComponentProps<typeof ConfirmationDialogComponent> = {
    isOpen: true,
    onAccept: jest.fn(),
    onClose: jest.fn(),
    title: 'Confirm Action' as React.ReactNode,
    labels: {
      closeButton: 'Close',
      acceptButton: 'Accept',
    },
    children: <p>Are you sure you want to proceed?</p>,
  };

  const setup = (props: Props = defaultProps) => render(<ConfirmationDialogComponent {...props}/>);

  it('should render the dialog with correct title and content', () => {
    setup();

    expect(screen.getByText('Confirm Action')).toBeInTheDocument();
    expect(screen.getByText('Are you sure you want to proceed?')).toBeInTheDocument();
    expect(screen.getByText('Close')).toBeInTheDocument();
    expect(screen.getByText('Accept')).toBeInTheDocument();
  });

  it('should call onClose when the close button is clicked', () => {
    setup();

    fireEvent.click(screen.getByText('Close'));
    expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
  });

  it('should call onAccept and onClose when the accept button is clicked', () => {
    setup();

    fireEvent.click(screen.getByText('Accept'));
    expect(defaultProps.onAccept).toHaveBeenCalledTimes(1);
    expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
  });

  it('should not render the dialog when isOpen is false', () => {
    const props = { ...defaultProps, isOpen: false };
    setup(props);

    expect(screen.queryByText('Confirm Action')).not.toBeInTheDocument();
    expect(screen.queryByText('Are you sure you want to proceed?')).not.toBeInTheDocument();
    expect(screen.queryByText('Close')).not.toBeInTheDocument();
    expect(screen.queryByText('Accept')).not.toBeInTheDocument();
  });
});

