import BoxContainer from '../../../components/BoxContainer/BoxContainer';
import Modal from '../../../components/Modal/Modal';
import TabsBox, { Tabs } from '../../../components/TabsBox/TabsBox';
import { Planet } from '../../../core/constants/types';
import PlanetDetailView from '../PlanetDetailView/PlanetDetailView';
import { PeopleTab } from './PlanetModal.util';
import { StyledTitle } from './PlanetModalDetail.style';

type PlanetDetailModalProps = {
  openModal: boolean;
  onClose?: () => void;
  planet: Planet | null;
};
export default function PlanetDetailModal({
  openModal = false,
  onClose,
  planet,
}: PlanetDetailModalProps) {
  return (
    <Modal showModal={openModal} onClosed={onClose}>
      <BoxContainer>
        <StyledTitle>
          <i className='fa-solid fa-earth-americas'></i>{' '}
          <label> {planet?.name ?? ''} Planet</label>
        </StyledTitle>
        <TabsBox>
          <Tabs name='planets' label='Planet' icon='fa-solid fa-earth-americas'>
            <PlanetDetailView planet={planet} />
          </Tabs>
          <Tabs name='residentes' label='Residents' icon='fa-solid fa-users'>
            <PeopleTab urlPeople={planet?.residents ?? []} />
          </Tabs>
        </TabsBox>
      </BoxContainer>
    </Modal>
  );
}
