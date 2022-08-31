import { emission } from '@/assets';
import { ClusterItem } from '@/components';

export const Emission = (): JSX.Element => (
   <ClusterItem
      title={
         <span style={{ fontWeight: '400' }}>
            Supernova <span style={{ fontWeight: '900' }}>Emission</span>
         </span>
      }
      components="WebGL / GLSL / Python / FORTRAN"
      image={emission}
      description="Interact with a supernova simulation and see how emission changes with the view."
      link="content/emission"
   />
);
