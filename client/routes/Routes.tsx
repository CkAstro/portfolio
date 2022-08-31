import { Route, Navigate, useParams } from 'react-router-dom';
import type { SubRoute } from '@/types';
import { Binary } from './Binary';
import { CSM } from './CSM';
import { CSNRs } from './CSNRs';
import { DataVis } from './DataVis';
import { Emission } from './Emission';
import { Instability } from './Instability';
import { NeuralNet } from './NeuralNet';
import { Reversi } from './Reversi';
import { Wind } from './Wind';

type Route = Record<string, SubRoute> | undefined;

export const routes: Record<string, Route> = {
   binary: Binary,
   csm: CSM,
   csnrs: CSNRs,
   datavis: DataVis,
   emission: Emission,
   instability: Instability,
   neuralnet: NeuralNet,
   reversi: Reversi,
   wind: Wind,
};

const Element = (): JSX.Element => {
   const { topic, page } = useParams();

   const route = routes[topic!];
   if (route === undefined) return <Navigate replace to="/" />;

   const subRoute = route[page ?? 'default'];
   if (subRoute === undefined) return <Navigate replace to="/" />;

   return subRoute.content;
};

export const ContentRouter = (
   <Route path=":topic">
      <Route index element={<Element />} />
      <Route path=":page" element={<Element />} />
   </Route>
);
