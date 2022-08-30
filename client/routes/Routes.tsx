import { Route, Navigate, useParams } from 'react-router-dom';
import { Reversi } from './Reversi';

export type SubRoute = { id: number; prev: string; next: string; content: JSX.Element } | undefined;
type Route = Record<string, SubRoute> | undefined;

export const routes: Record<string, Route> = {
   reversi: Reversi,
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
