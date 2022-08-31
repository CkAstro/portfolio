import { lazy, Suspense } from 'react';
import type { SubRoute } from '@/types';

const Page1 = lazy(() => import('./Page1'));

export const CSNRs: Record<string, SubRoute> = {
   default: {
      id: 1,
      prev: 'page1',
      next: 'page1',
      content: (
         <Suspense>
            <Page1 />
         </Suspense>
      ),
   },
   page1: {
      id: 1,
      prev: 'page1',
      next: 'page1',
      content: (
         <Suspense>
            <Page1 />
         </Suspense>
      ),
   },
};
