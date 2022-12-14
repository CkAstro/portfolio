import { useState, useEffect } from 'react';
import type { SquareSize, NucleoSquare, Squares } from '@/types';
import getNewSquares from './getNewSquares';
import nucleoChart from './nucleoChart';
import squareSizes from './squareSizes';

export const useSquares = (): Squares => {
   const [squares, setSquares] = useState<NucleoSquare[]>([]);
   const [squareIndex, setSquareIndex] = useState(1);
   const [squareSize, setSquareSize] = useState<SquareSize>(squareSizes[1]);
   const [windowSize, setWindowSize] = useState([window.innerWidth, window.innerHeight]);

   useEffect(() => {
      const handleWindowResize = (): void => setWindowSize([window.innerWidth, window.innerHeight]);
      window.addEventListener('resize', handleWindowResize);
      return () => window.removeEventListener('resize', handleWindowResize);
   }, []);

   useEffect(() => {
      const newSquareSize = squareSizes[squareIndex];
      const maxRow = window.innerHeight / newSquareSize.square + 1;
      const maxCol = window.innerWidth / newSquareSize.square;

      const newSquares = getNewSquares(nucleoChart, maxRow, maxCol);
      setSquares(newSquares);
      setSquareSize(newSquareSize);
   }, [squareIndex]);

   useEffect(() => {
      if (window.innerWidth < 461 && squareIndex !== 0) return void setSquareIndex(0);
      if (window.innerWidth < 1921 && squareIndex !== 1) return void setSquareIndex(1);
      if (window.innerWidth > 1920 && squareIndex !== 2) return void setSquareIndex(2);
      return undefined;
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [windowSize]);

   return { squares, squareSize };
};
