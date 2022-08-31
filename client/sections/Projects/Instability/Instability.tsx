import { instability } from '@/assets';
import { ClusterItem } from '@/components';

export const Instability = (): JSX.Element => (
   <ClusterItem
      title={
         <span style={{ fontWeight: '400' }}>
            Fluid <span style={{ fontWeight: '900' }}>Instabilities</span>
         </span>
      }
      components="React / WebGL / Fetch API"
      image={instability}
      description="Watch a fluid instability evolve in full 3D."
      link="content/instability"
   />
);
