import DetailView, {
  DetailField,
  DetailFieldRow,
} from '../../../components/DetailView/DetailView';
import { Planet } from '../../../core/constants/types';
import { formatDateToString, parseToDecimal } from '../../../core/utils/format';

export default function PlanetDetailView({
  planet,
}: {
  planet: Planet | null;
}) {
  const formatValue = (value: string | undefined) => value ?? 'N/A';

  return (
    <DetailView>
      <DetailFieldRow columns={2}>
        <DetailField label='Planet' value={formatValue(planet?.name)} />
        <DetailField label='Terrain' value={formatValue(planet?.terrain)} />
      </DetailFieldRow>
      <DetailFieldRow columns={2}>
        <DetailField label='Climate' value={formatValue(planet?.climate)} />
        <DetailField
          label='Population'
          value={formatValue(parseToDecimal(planet?.population ?? ''))}
        />
      </DetailFieldRow>

      <DetailFieldRow columns={2}>
        <DetailField
          label='Created'
          value={formatDateToString(planet?.created)}
        />
        <DetailField
          label='Edited'
          value={formatDateToString(planet?.edited)}
        />
      </DetailFieldRow>
      <DetailFieldRow columns={4}>
        <DetailField label='Gravity' value={formatValue(planet?.gravity)} />
        <DetailField
          label='Orbital Period'
          value={formatValue(planet?.orbital_period)}
        />
        <DetailField
          label='Rotation Period'
          value={formatValue(planet?.rotation_period)}
        />
        <DetailField
          label='Surface Water'
          value={formatValue(planet?.surface_water)}
        />
      </DetailFieldRow>
    </DetailView>
  );
}
