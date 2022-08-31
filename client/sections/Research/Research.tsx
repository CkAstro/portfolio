import { Cluster } from '@/components';
import { Binary } from './Binary';
import { CSNRs } from './CSNRs';
import { Wind } from './Wind';
import css from './Research.module.scss';

export const Research = (): JSX.Element => (
   <Cluster>
      <Wind />
      <Binary />
      <CSNRs />
   </Cluster>
);
