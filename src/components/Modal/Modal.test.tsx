import { fireEvent, render, screen } from '@testing-library/react';
import Modal from './Modal';

describe('Modal', () => {
  it('should render modal content when showModal is true', () => {
    // Arrange
    const showModal = true;
    const children = 'Modal Content';
    const onClosed = jest.fn();

    // Act
    render(
      <Modal showModal={showModal} onClosed={onClosed}>
        {children}
      </Modal>
    );

    // Assert
    expect(screen.getByText('Modal Content')).toBeInTheDocument();
  });

  it('should close modal when CloseButton is clicked', () => {
    // Arrange
    const showModal = true;
    const children = 'Modal Content';
    const onClosed = jest.fn();

    render(
      <Modal showModal={showModal} onClosed={onClosed}>
        {children}
      </Modal>
    );

    // Act
    fireEvent.click(screen.getByRole('button'));

    // Assert
    expect(onClosed).toHaveBeenCalled();
  });

  it('should call onClosed callback when modal is closed', () => {
    // Arrange
    const showModal = true;
    const children = 'Modal Content';
    const onClosed = jest.fn();

    render(
      <Modal showModal={showModal} onClosed={onClosed}>
        {children}
      </Modal>
    );

    // Act
    fireEvent.click(screen.getByRole('button'));

    // Assert
    expect(onClosed).toHaveBeenCalled();
  });

  it('should not render modal content when showModal is false', () => {
    // Arrange
    const showModal = false;
    const children = 'Modal Content';
    const onClosed = jest.fn();

    // Act
    render(
      <Modal showModal={showModal} onClosed={onClosed}>
        {children}
      </Modal>
    );

    // Assert
    expect(screen.queryByText('Modal Content')).not.toBeInTheDocument();
  });

  it('should not call onClosed callback when modal is not closed', () => {
    // Arrange
    const showModal = true;
    const children = 'Modal Content';
    const onClosed = jest.fn();

    render(
      <Modal showModal={showModal} onClosed={onClosed}>
        {children}
      </Modal>
    );

    // Assert
    expect(onClosed).not.toHaveBeenCalled();
  });

  it('should not throw errors when onClosed prop is not provided', () => {
    // Arrange
    const showModal = true;
    const children = 'Modal Content';

    // Act & Assert
    expect(() => {
      render(<Modal showModal={showModal}>{children}</Modal>);
    }).not.toThrow();
  });
});
