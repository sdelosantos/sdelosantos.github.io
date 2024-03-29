import { useEffect, useState } from 'react';
import {
  CloseButton,
  ModalContainer,
  ModalContent,
  ModalOverlay,
} from './Modal.style';
import useKeyPressArrow from '../../core/hooks/useKeyPressArrow';

type ModalProps = {
  showModal: boolean;
  onClosed?: () => void;
  children: React.ReactNode;
};
export default function Modal({ showModal, children, onClosed }: ModalProps) {
  const [isModalOpen, setModalOpen] = useState(showModal);

  const closeModal = () => {
    onClosed?.();
    setModalOpen(false);
  };

  useKeyPressArrow((key) => {
    if (key === 'Esc') {
      closeModal();
    }
  });

  useEffect(() => setModalOpen(showModal), [showModal]);
  return (
    <div>
      {isModalOpen && (
        <ModalOverlay>
          <ModalContainer>
            <CloseButton onClick={closeModal}>&times;</CloseButton>
            <ModalContent>{children}</ModalContent>
          </ModalContainer>
        </ModalOverlay>
      )}
    </div>
  );
}
