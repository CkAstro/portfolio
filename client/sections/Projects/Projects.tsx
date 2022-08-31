import { Cluster } from '@/components';
import { CSM } from './CSM';
import { DataVis } from './DataVis';
import { Emission } from './Emission';
import { Instability } from './Instability';
import { NeuralNet } from './NeuralNet';
import { Reversi } from './Reversi';

export const Projects = (): JSX.Element => (
   <div>
      <Reversi />
      <DataVis />
      <NeuralNet />
      <Cluster>
         <Instability />
         <CSM />
         <Emission />
      </Cluster>
   </div>
);
