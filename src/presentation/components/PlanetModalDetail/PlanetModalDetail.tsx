import BoxContainer from '../../../components/BoxContainer/BoxContainer';
import Modal from '../../../components/Modal/Modal';
import TabsBox, { Tabs } from '../../../components/TabsBox/TabsBox';
import { Planet } from '../../../core/constants/types';
import PlanetDetailView from '../PlanetDetailView/PlanetDetailView';
import { PeapleTab } from './PlanetModal.util';
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
          <Tabs name='planets' label='Planets'>
            <PlanetDetailView planet={planet} />
          </Tabs>
          <Tabs name='peaple' label='Peaple'>
            <PeapleTab urlPeaple={planet?.residents ?? []} />
          </Tabs>
        </TabsBox>
      </BoxContainer>
    </Modal>
  );
}
