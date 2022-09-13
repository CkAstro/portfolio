import { useEffect, useRef, memo } from 'react';

const useCanvas2D = (
   ctxRef: React.MutableRefObject<CanvasRenderingContext2D>,
   draw: (ctx: CanvasRenderingContext2D, args: Record<string, unknown>) => void,
   args: Record<string, unknown>
): React.MutableRefObject<HTMLCanvasElement> => {
   const canvasRef = useRef<HTMLCanvasElement>();
   const renderRef = useRef<number>();

   const animate = (): void => {
      draw(ctxRef.current, args);
      renderRef.current = requestAnimationFrame(animate);
   };

   // initialize canvas on load
   useEffect(() => {
      const canvas = canvasRef.current!;
      const context = canvas.getContext('2d')!;

      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;

      ctxRef.current = context;

      renderRef.current = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(renderRef.current!);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return canvasRef as React.MutableRefObject<HTMLCanvasElement>;
};

type Props = {
   draw: (ctx: CanvasRenderingContext2D, args: Record<string, unknown>) => void;
   style: React.CSSProperties;
   onInteract?: (ctx: CanvasRenderingContext2D) => void;
   eventHandlers?: Record<string, unknown>;
   [key: string]: unknown;
};

export const Canvas2D = memo(
   ({ draw, style, onInteract, eventHandlers, ...args }: Props): JSX.Element => {
      const ctxRef = useRef<CanvasRenderingContext2D>();
      const canvasRef = useCanvas2D(
         ctxRef as React.MutableRefObject<CanvasRenderingContext2D>,
         draw,
         args
      );

      // prevent default for mouse wheel and touch
      // NOTE : this is required for touch screen to function correctly
      useEffect(() => {
         const { canvas } = ctxRef.current!;

         // this is necessary to get around 'passive' event listeners
         // see more here: https://github.com/facebook/react/issues/19651
         canvas.addEventListener('wheel', (e: MouseEvent) => e.preventDefault());
         canvas.addEventListener('touchstart', (e: TouchEvent) => e.preventDefault());
         canvas.addEventListener('touchmove', (e: TouchEvent) => e.preventDefault());
         if (onInteract !== undefined) {
            canvas.addEventListener('pointermove', () => onInteract(ctxRef.current!));
            // canvas.addEventListener('pointerup', () => onInteract(ctxRef.current!));
         }

         return (): void => {
            canvas.removeEventListener('wheel', (e: MouseEvent) => e.preventDefault());
            canvas.removeEventListener('touchstart', (e: TouchEvent) => e.preventDefault());
            canvas.removeEventListener('touchmove', (e: TouchEvent) => e.preventDefault());
            const { current } = ctxRef;
            if (onInteract !== undefined) {
               canvas.removeEventListener('pointermove', () => onInteract(current!));
               // canvas.removeEventListener('pointerup', () => onInteract(current!));
            }
         };
         // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

      return (
         <canvas
            ref={canvasRef}
            id="glCanvas"
            style={style}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...eventHandlers}
         />
      );
   }
);
