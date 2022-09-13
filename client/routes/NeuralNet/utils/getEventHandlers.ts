import type { MouseLocation } from '@/types';
// NOTE : mouseLocation, lastLocation are screen coords rather than element coords

type Props = {
   mouseLocation: React.MutableRefObject<MouseLocation>;
   setMouseLocation: (val: MouseLocation) => void;
   setLastLocation: (val: MouseLocation) => void;
   setRequireDataUpdate: (val: boolean) => void;
};

export const getEventHandlers = ({
   mouseLocation,
   setMouseLocation,
   setLastLocation,
   setRequireDataUpdate,
}: Props): Record<string, unknown> => ({
   onWheel: () => undefined,
   onPointerUp: (event: PointerEvent): void => {
      event.preventDefault();
      const { clientX, clientY } = event;
      setMouseLocation({ x: clientX, y: clientY, isActive: false });
      setRequireDataUpdate(true);
   },
   onPointerDown: (event: PointerEvent): void => {
      event.preventDefault();
      const { clientX, clientY } = event;
      setMouseLocation({ x: clientX, y: clientY, isActive: true });
      setLastLocation({ x: clientX, y: clientY, isActive: true });
   },
   onPointerLeave: () => undefined,
   onPointerMove: (event: PointerEvent): void => {
      event.preventDefault();
      if (!mouseLocation.current.isActive) return;

      const { clientX, clientY } = event;
      setLastLocation({ ...mouseLocation.current });
      setMouseLocation({ x: clientX, y: clientY, isActive: true });
   },
   onPointerOver: () => undefined,
   onPointerOut: () => undefined,
   onPointerEnter: () => undefined,
   onClick: () => undefined,
   onDoubleClick: () => undefined,
});
