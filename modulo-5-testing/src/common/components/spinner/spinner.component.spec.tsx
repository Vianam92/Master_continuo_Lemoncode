import React from 'react';
import { usePromiseTracker } from 'react-promise-tracker';
import { SpinnerComponent } from './spinner.component';
import { render } from '@testing-library/react';

jest.mock('react-promise-tracker');

describe('/components/spinner', () => {
  it('renders the spinner when promiseInProgress is true', () => {
    (usePromiseTracker as jest.Mock).mockReturnValue({
      promiseInProgress: true,
    });

    render(<SpinnerComponent />);
  });
});
