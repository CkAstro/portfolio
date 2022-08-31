import { wind } from '@/assets';
import { ClusterItem } from '@/components';

export const Wind = (): JSX.Element => (
   <ClusterItem
      title={
         <span style={{ fontWeight: '400' }}>
            Stellar <span style={{ fontWeight: '900' }}>Wind</span>
         </span>
      }
      components="Python / Post-Processing / Algorithms"
      image={wind}
      description="What is stellar wind? Learn how and why stars expel matter."
      link="content/wind"
      textColor="var(--color-white)"
   />
);
