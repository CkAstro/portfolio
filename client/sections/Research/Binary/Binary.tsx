import { binary } from '@/assets';
import { ClusterItem } from '@/components';

export const Binary = (): JSX.Element => (
   <ClusterItem
      title={
         <span style={{ fontWeight: '400' }}>
            <span style={{ fontWeight: '900' }}>Binary</span> CSM
         </span>
      }
      components="FORTRAN / MPI / HPC / Bash"
      image={binary}
      description="Explore the unique environment around evolved stars before they supernova."
      link="content/binary"
      textColor="var(--color-white)"
   />
);
