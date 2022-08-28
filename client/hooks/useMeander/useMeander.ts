import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { mouseLocation } from '@/store';
import type { RootState } from '@/store';
import type { SquareSize } from '@/types';
import { getGridLocation, updateGridLocation, updateMouseLocation } from './logic';

export const useMeander = (
   divRef: React.MutableRefObject<HTMLDivElement | null>,
   squareSize: SquareSize
): void => {
   const [isIdle, setIsIdle] = useState(false);
   const mouse = useSelector((state: RootState) => state.mouseLocation);
   const { update } = mouseLocation.actions;
   const dispatch = useDispatch();

   const idleRef = useRef<ReturnType<typeof setTimeout>>();
   const mouseRef = useRef(mouse);
   const meanderRef = useRef<ReturnType<typeof setTimeout>>();

   const meander = (): void => {
      const squareLoc = getGridLocation(mouseRef.current, divRef.current!, squareSize.square);
      const newSquare = updateGridLocation(squareLoc, mouseRef.current);
      const newMouseLocation = updateMouseLocation(newSquare, divRef.current!, squareSize.square);
      dispatch(update(newMouseLocation));
      meanderRef.current = setTimeout(() => meander(), 500);
   };

   // call meander loop when idle state is set
   useEffect(() => {
      if (isIdle) meander();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [isIdle]);

   // reset everything if user interacts with viewport
   useEffect(() => {
      if (!mouse.isActive) return;
      setIsIdle(false);
      clearTimeout(idleRef.current);
      clearTimeout(meanderRef.current);
      idleRef.current = setTimeout(() => setIsIdle(true), 4000);
   }, [mouse.isActive]);

   // update reference for meander()
   useEffect(() => {
      mouseRef.current = { ...mouse };
   }, [mouse]);

   // on init, start short idle timer
   useEffect(() => {
      idleRef.current = setTimeout(() => setIsIdle(true), 1000);
   }, []);
};
