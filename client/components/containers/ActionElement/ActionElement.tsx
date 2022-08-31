import { useRef } from 'react';
import { useIsVisible } from '@/hooks';

type Props = {
   actionClass: string;
   onlyOnce?: boolean;
   rootMargin?: string;
   className?: string;
   children: React.ReactNode;
};

export const ActionElement = ({
   actionClass,
   onlyOnce,
   rootMargin = '0px',
   className = '',
   children,
   ...rest
}: Props): JSX.Element => {
   const divRef = useRef<HTMLDivElement>(null);
   const isVisible = useIsVisible(divRef, onlyOnce, rootMargin);

   return (
      <div ref={divRef} className={`${className} ${isVisible ? actionClass : ''}`} {...rest}>
         {children}
      </div>
   );
};
