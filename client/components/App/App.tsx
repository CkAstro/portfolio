import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Modal } from '@/components';
import { ContentRouter } from '@/routes';
import Sections from './Sections';

export const App = (): JSX.Element => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Sections />}>
               <Route path="/content" element={<Modal />}>
                  <Route index element={<Navigate replace to="/" />} />
                  {ContentRouter}
               </Route>
            </Route>
         </Routes>
      </BrowserRouter>
   );
};
