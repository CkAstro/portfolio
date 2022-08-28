import { useRef } from 'react';
import { useIsVisible } from '@/hooks';

type Props = {
   actionClass: string;
   onlyOnce?: boolean;
   rootMargin?: string;
   style?: React.CSSProperties;
   className?: string;
   children: React.ReactNode;
};

export const ActionElement = ({
   actionClass,
   onlyOnce,
   rootMargin = '0px',
   style,
   className = '',
   children,
}: Props): JSX.Element => {
   const divRef = useRef<HTMLDivElement>(null);
   const isVisible = useIsVisible(divRef, onlyOnce, rootMargin);

   return (
      <div ref={divRef} style={style} className={`${className} ${isVisible ? actionClass : ''}`}>
         {children}
      </div>
   );
};
