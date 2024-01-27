import styled from 'styled-components';
import { theme } from '../../presentation/theme/theme';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  position: relative;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

export const CloseButton = styled.button`
  position: absolute;
  top: -10px;
  right: -10px;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${theme.sizes.xl}px;
  background-color: ${theme.colors.primaryColor};
  color: ${theme.colors.dark};
  border-radius: 50%;
  width: 30px;
  height: 30px;
  z-index: 999;
`;

export const ModalContent = styled.div`
  position: relative;
`;
