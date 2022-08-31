import { lazy, Suspense } from 'react';
import type { SubRoute } from '@/types';

const Page1 = lazy(() => import('./Page1'));
const Page2 = lazy(() => import('./Page2'));
const Page3 = lazy(() => import('./Page3'));
const Page4 = lazy(() => import('./Page4'));

export const DataVis: Record<string, SubRoute> = {
   default: {
      id: 1,
      prev: 'page4',
      next: 'page2',
      content: (
         <Suspense>
            <Page1 />
         </Suspense>
      ),
   },
   page1: {
      id: 1,
      prev: 'page4',
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
      next: 'page3',
      content: (
         <Suspense>
            <Page2 />
         </Suspense>
      ),
   },
   page3: {
      id: 3,
      prev: 'page2',
      next: 'page4',
      content: (
         <Suspense>
            <Page3 />
         </Suspense>
      ),
   },
   page4: {
      id: 3,
      prev: 'page3',
      next: 'page1',
      content: (
         <Suspense>
            <Page4 />
         </Suspense>
      ),
   },
};
