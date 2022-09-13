import { ActionElement, Cluster } from '@/components';
import { Binary } from './Binary';
import { CSNRs } from './CSNRs';
import { Wind } from './Wind';
import css from './Research.module.scss';

export const Research = (): JSX.Element => (
   <>
      <ActionElement onlyOnce className={css.header} actionClass={css.active}>
         <h1>
            <span style={{ fontWeight: '100' }}>Astrophysics</span> Research
         </h1>
      </ActionElement>
      <Cluster>
         <Wind />
         <Binary />
         <CSNRs />
      </Cluster>
   </>
);
