import { csm } from '@/assets';
import { ClusterItem } from '@/components';

export const CSM = (): JSX.Element => (
   <ClusterItem
      title={
         <span style={{ fontWeight: '400' }}>
            <span style={{ fontWeight: '900' }}>Circumstellar</span> Data
         </span>
      }
      components="HTML5 Canvas / REST / Post-Processing"
      image={csm}
      description="Select from 36 CSM research models and view + export data in detail."
      link="content/csm"
   />
);
