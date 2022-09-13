import { useState, useEffect, useRef, useMemo } from 'react';
import { Canvas2D } from '@/components';
import type { MouseLocation } from '@/types';
import { drawCanvas, drawLineSegment, getEventHandlers } from './utils';
import css from './NeuralNet.module.scss';

type Props = {
   setInput: (val: Uint8Array) => void;
   handleUpdate: () => void;
   inputData: React.MutableRefObject<Uint8Array>;
   outputData: React.MutableRefObject<Uint8Array>;
};

const NetworkInput = ({ setInput, handleUpdate, inputData, outputData }: Props): JSX.Element => {
   const [requireDataUpdate, setRequireDataUpdate] = useState(false);

   const mouseLocation = useRef<MouseLocation>({ x: 0, y: 0, isActive: false });
   const setMouseLocation = (location: MouseLocation): void => {
      mouseLocation.current = location;
   };

   const lastLocation = useRef<MouseLocation>({ x: 0, y: 0, isActive: false });
   const setLastLocation = (location: MouseLocation): void => {
      lastLocation.current = location;
   };

   const handleInteract = (ctx: CanvasRenderingContext2D): void => {
      if (!mouseLocation.current.isActive) return;

      const { top, left, width, height } = ctx.canvas.getBoundingClientRect();

      const thisPos = {
         ...mouseLocation.current,
      };
      thisPos.x -= left;
      thisPos.y -= top;

      const lastPos = {
         ...lastLocation.current,
      };
      lastPos.x -= left;
      lastPos.y -= top;

      drawLineSegment(ctx, lastPos, thisPos);
      const imageData = ctx.getImageData(0, 0, width, height);
      setInput(imageData.data as unknown as Uint8Array);
   };

   useEffect(() => {
      if (!requireDataUpdate) return;
      handleUpdate();
      setRequireDataUpdate(false);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [requireDataUpdate]);

   const eventHandlers: Record<string, unknown> = useMemo(
      () =>
         getEventHandlers({
            mouseLocation,
            setMouseLocation,
            setLastLocation,
            setRequireDataUpdate,
         }),
      []
   );

   return (
      <div className={css.input}>
         <Canvas2D
            draw={drawCanvas}
            onInteract={handleInteract}
            eventHandlers={eventHandlers}
            dataRef={inputData}
            style={{ width: 'var(--canvas-size)', height: 'var(--canvas-size)' }}
         />
         <Canvas2D
            draw={drawCanvas}
            dataRef={outputData}
            style={{ width: 'var(--canvas-size)', height: 'var(--canvas-size)' }}
         />
      </div>
   );
};

export default NetworkInput;
