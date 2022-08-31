import { datavisShowcase } from '@/assets';
import { Showcase } from '@/components';
import css from '../Projects.module.scss';

export const DataVis = (): JSX.Element => (
   <Showcase
      title={
         <span style={{ fontWeight: '100' }}>
            use <span style={{ fontWeight: '900' }}>DataVis</span> to view data anywhere
         </span>
      }
      components="WebGL / GLSL / React / Node / REST"
      image={datavisShowcase}
      description="Upload and view volumetric scalar data."
      link="content/datavis"
      actionClass={css.active}
      className={css.showcase}
   />
);
