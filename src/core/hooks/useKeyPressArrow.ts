import { useEffect } from 'react';

const KeyCodes = {
  KeyLeft: 'ArrowLeft',
  KeyUp: 'ArrowUp',
  KeyRight: 'ArrowRight',
  KeyDown: 'ArrowDown',
  Esc: 'Escape',
  Enter: 'Enter',
};
type KeyCodes = keyof typeof KeyCodes;

export default function useKeyPressArrow(callback: (key: KeyCodes) => void) {
  useEffect(() => {
    const handleKeyPress = (ev: KeyboardEvent) => {
      const val = Object.entries(KeyCodes).find(
        ([ky]) => KeyCodes[ky as KeyCodes] === ev.key
      );
      if (val) {
        const [ky] = val;
        callback(ky as KeyCodes);
      }
    };
    document.body.addEventListener('keydown', handleKeyPress);
    return () => document.body.removeEventListener('keydown', handleKeyPress);
  }, [callback]);
}
