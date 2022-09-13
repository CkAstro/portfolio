import { ActionElement, Cluster } from '@/components';
import { Csm } from './Csm';
import { DataVis } from './DataVis';
import { Emission } from './Emission';
import { Instability } from './Instability';
import { NeuralNet } from './NeuralNet';
import { Reversi } from './Reversi';
import css from './Projects.module.scss';

export const Projects = (): JSX.Element => (
   <>
      <ActionElement onlyOnce className={css.header1} actionClass={css.active}>
         <h1>
            <span style={{ fontWeight: '100' }}>Select</span> full stack{' '}
            <span style={{ fontWeight: '100' }}>projects</span>
         </h1>
      </ActionElement>
      <Reversi />
      <DataVis />
      <NeuralNet />
      <ActionElement onlyOnce className={css.header2} actionClass={css.active}>
         <h1>
            Interactive <span style={{ fontWeight: '100' }}>figures</span>
         </h1>
      </ActionElement>
      <Cluster>
         <Instability />
         <Csm />
         <Emission />
      </Cluster>
   </>
);
