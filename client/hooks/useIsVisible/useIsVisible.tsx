import { useState, useEffect } from 'react';

export const useIsVisible = (
   ref: React.MutableRefObject<HTMLDivElement | null>,
   onlyOnce: boolean | undefined,
   rootMargin = '0px'
): boolean => {
   const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
      const observer = new IntersectionObserver(
         ([entry]) => {
            if (onlyOnce! && entry.isIntersecting) observer.unobserve(ref.current!);
            setIsVisible(entry.isIntersecting);
         },
         { rootMargin }
      );

      observer.observe(ref.current!);
      const { current } = ref;
      return () => observer.unobserve(current!);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return isVisible;
};
