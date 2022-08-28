import { useSelector } from 'react-redux';
import type { RootState } from '@/store';
import type { NucleoSquare, SquareSize } from '@/types';
import Element from './Element';
import css from './NucleoDisplay.module.scss';

type Props = {
   squares: NucleoSquare[];
   squareSize: SquareSize;
   divRef: React.MutableRefObject<HTMLDivElement | null>;
};

const ElementArray = ({ squares, squareSize, divRef }: Props): JSX.Element => {
   // if (!squares || !squareSize || !divRef.current) return <div />;
   const mouseLocation = useSelector((state: RootState) => state.mouseLocation);
   if (divRef.current === null) return <div />;

   const { left, top, height } = divRef.current.getBoundingClientRect();
   const buffer = top + height;

   const targetRow = Math.floor((buffer - mouseLocation.y) / squareSize.square);
   const targetCol = Math.floor((mouseLocation.x - left) / squareSize.square);

   const arrayMap = squares.map((square, ind) => {
      const activeRow = targetRow === square.row;
      const activeCol = targetCol === square.col;
      const key = ind; // always same order
      return (
         <Element
            key={key}
            square={square}
            squareSize={squareSize}
            hasMouseOver={activeRow && activeCol}
         />
      );
   });

   return (
      <div className={css.container}>
         <svg width="100%" height="100%" transform="scale(1, -1)">
            {arrayMap}
         </svg>
      </div>
   );
};

export default ElementArray;
