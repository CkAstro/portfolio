import { useEffect, useRef, memo } from 'react';

const useGL2Canvas = (
   glRef: React.MutableRefObject<WebGL2RenderingContext>,
   draw: (gl: WebGL2RenderingContext, args: Record<string, unknown>) => void,
   args: Record<string, unknown>
): React.MutableRefObject<HTMLCanvasElement> => {
   const canvasRef = useRef<HTMLCanvasElement>();
   const renderRef = useRef<number>();

   const animate = (): void => {
      draw(glRef.current, args);
      renderRef.current = requestAnimationFrame(animate);
   };

   // initialize canvas on load
   useEffect(() => {
      const canvas = canvasRef.current!;
      const gl = canvas.getContext('webgl2')!;
      gl.getExtension('OES_texture_float_linear');

      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;

      glRef.current = gl;

      renderRef.current = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(renderRef.current!);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return canvasRef as React.MutableRefObject<HTMLCanvasElement>;
};

type Props = {
   draw: (gl: WebGL2RenderingContext, args: Record<string, unknown>) => void;
   eventHandlers: Record<string, unknown>;
   [key: string]: unknown;
};

export const GL2Canvas = memo(({ draw, eventHandlers, ...args }: Props): JSX.Element => {
   const glRef = useRef<WebGL2RenderingContext>();
   const canvasRef = useGL2Canvas(
      glRef as React.MutableRefObject<WebGL2RenderingContext>,
      draw,
      args
   );

   // prevent default for mouse wheel and touch
   // NOTE : this is required for touch screen to function correctly
   useEffect(() => {
      const { canvas } = glRef.current!;

      // this is necessary to get around 'passive' event listeners
      // see more here: https://github.com/facebook/react/issues/19651
      canvas.addEventListener('wheel', (e: MouseEvent) => e.preventDefault());
      canvas.addEventListener('touchstart', (e: TouchEvent) => e.preventDefault());
      canvas.addEventListener('touchmove', (e: TouchEvent) => e.preventDefault());

      return (): void => {
         canvas.removeEventListener('wheel', (e: MouseEvent) => e.preventDefault());
         canvas.removeEventListener('touchstart', (e: TouchEvent) => e.preventDefault());
         canvas.removeEventListener('touchmove', (e: TouchEvent) => e.preventDefault());
      };
   }, []);

   return (
      <canvas
         ref={canvasRef}
         id="glCanvas"
         style={{ width: '100%', height: '100%' }}
         // eslint-disable-next-line react/jsx-props-no-spreading
         {...eventHandlers}
      />
   );
});
