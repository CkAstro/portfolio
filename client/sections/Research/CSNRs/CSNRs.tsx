import { csnrs } from '@/assets';
import { ClusterItem } from '@/components';

export const CSNRs = (): JSX.Element => (
   <ClusterItem
      title={
         <span style={{ fontWeight: '400' }}>
            Supernova <span style={{ fontWeight: '900' }}>Remnants</span>
         </span>
      }
      components="FORTRAN / Data-Collection / HPC"
      image={csnrs}
      description="A pulsar born during these fantastic explosions can create fascinating
      imagry."
      link="content/csnrs"
      textColor="var(--color-white)"
   />
);
