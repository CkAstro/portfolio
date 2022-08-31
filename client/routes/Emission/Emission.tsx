import { lazy, Suspense } from 'react';
import type { SubRoute } from '@/types';

const Page1 = lazy(() => import('./Page1'));
const Page2 = lazy(() => import('./Page2'));

export const Emission: Record<string, SubRoute> = {
   default: {
      id: 1,
      prev: 'page2',
      next: 'page2',
      content: (
         <Suspense>
            <Page1 />
         </Suspense>
      ),
   },
   page1: {
      id: 1,
      prev: 'page2',
      next: 'page2',
      content: (
         <Suspense>
            <Page1 />
         </Suspense>
      ),
   },
   page2: {
      id: 2,
      prev: 'page1',
      next: 'page2',
      content: (
         <Suspense>
            <Page2 />
         </Suspense>
      ),
   },
};
