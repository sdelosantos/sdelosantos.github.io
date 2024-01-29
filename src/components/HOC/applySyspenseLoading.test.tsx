import { render, waitFor } from '@testing-library/react';
import { applySuspenseLoading } from '.';

describe('applySuspenseLoading', () => {
  it('should return a memoized component that wraps the original component in a Suspense component with a Loading fallback', () => {
    const Component = () => <div>Original Component</div>;
    const loadingMessage = 'Loading...';
    const WrappedComponent = applySuspenseLoading(Component, loadingMessage);
    const { container } = render(<WrappedComponent />);

    expect(container.innerHTML).toBe('<div>Loading...</div>');
  });

  it('should render the original component when it is ready', async () => {
    const Component = () => <div>Original Component</div>;
    const loadingMessage = 'Loading...';
    const WrappedComponent = applySuspenseLoading(Component, loadingMessage);
    const { container } = render(<WrappedComponent />);

    await waitFor(() => {
      expect(container.innerHTML).toBe('<div>Original Component</div>');
    });
  });

  it('should pass props to the original component', async () => {
    const Component = ({ name }: { name: string }) => <div>Hello, {name}!</div>;
    const loadingMessage = 'Loading...';
    const WrappedComponent = applySuspenseLoading(Component, loadingMessage);
    const { container } = render(<WrappedComponent name='John' />);

    await waitFor(() => {
      expect(container.innerHTML).toBe('<div>Hello, John!</div>');
    });
  });
});
