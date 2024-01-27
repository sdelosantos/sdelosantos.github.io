import {
  StyledDetailContainer,
  StyledDetailRow,
  StyledFieldContainer,
  StyledFieldLabel,
  StyledFieldValue,
} from './DetailView.style';

type DetailFieldProps = {
  label: string;
  value: string;
};

type DetailFieldRowProps = {
  children:
    | React.ReactElement<DetailFieldProps>[]
    | React.ReactElement<DetailFieldProps>;
  columns?: number;
};

type DetailViewProps = {
  children:
    | React.ReactElement<DetailFieldRowProps>[]
    | React.ReactElement<DetailFieldRowProps>;
};
export const DetailField = ({ label, value }: DetailFieldProps) => {
  return (
    <StyledFieldContainer>
      <StyledFieldLabel>{label}</StyledFieldLabel>
      <StyledFieldValue>{value}</StyledFieldValue>
    </StyledFieldContainer>
  );
};

export const DetailFieldRow = ({
  children,
  columns = 1,
}: DetailFieldRowProps) => {
  return <StyledDetailRow columns={columns}>{children}</StyledDetailRow>;
};

export default function DetailView({ children }: DetailViewProps) {
  return <StyledDetailContainer>{children}</StyledDetailContainer>;
}
