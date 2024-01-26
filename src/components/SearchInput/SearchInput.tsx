import { useCallback } from 'react';
import {
  StyledTextInput,
  StyledSearchContainer,
  StyledIcon,
} from './SearchInput.style';

type SearchInputProps = {
  onChangeText: (search: string) => void;
  placeHolder?: string;
  delayBeforeTriggerChange?: number;
};

let timeout: number = 0;
export default function SearchInput({
  onChangeText,
  placeHolder = 'Type your search',
  delayBeforeTriggerChange,
}: SearchInputProps) {
  const handleOnChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const text = event.target.value;
      if (!delayBeforeTriggerChange) {
        onChangeText(text);
      } else {
        clearTimeout(timeout);
        timeout = setTimeout(
          () => onChangeText(text),
          delayBeforeTriggerChange
        );
      }
    },
    [onChangeText, delayBeforeTriggerChange]
  );

  return (
    <StyledSearchContainer>
      <StyledIcon className='fa-solid fa-magnifying-glass' />
      <StyledTextInput
        type='text'
        placeholder={placeHolder}
        onChange={handleOnChange}
      />
    </StyledSearchContainer>
  );
}
