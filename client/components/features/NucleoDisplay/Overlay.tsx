import { memo } from 'react';
import type { NucleoSquare, SquareSize } from '@/types';
import css from './NucleoDisplay.module.scss';

// This overlay should only be rendered once. It draws a full black
//    background and then uses a mask to cut out space for each element
//    (leaving the grid boundaries visible) so the spotlight can shine
//    through from the lower layer
//
// NOTE : scale(1, -1) used here  in order to fix display to bottom of
//    section rather than top

type Props = {
   squares: NucleoSquare[];
   squareSize: SquareSize;
};

const Overlay = ({ squares, squareSize }: Props): JSX.Element => {
   // if (!squares || !squareSize) return <div />;

   // mask is rendered below as all white, then each square
   //    is added to the mask as black to create the cut-out effect
   const squareBorders = squares.map((square: NucleoSquare, ind: number): React.ReactNode => {
      const xloc = square.col * squareSize.square;
      const yloc = square.row * squareSize.square;
      const key = ind; // does not change
      return (
         <rect
            key={key}
            x={`${xloc + squareSize.gap / 2}px`}
            y={`${yloc + squareSize.gap / 2}px`}
            width={`${squareSize.square - squareSize.gap}px`}
            height={`${squareSize.square - squareSize.gap}px`}
            fill="black"
         />
      );
   });

   return (
      <div className={css.container}>
         <svg width="100%" height="100%" transform="scale(1, -1)">
            <defs>
               <mask id="overlayMask">
                  <rect width="100%" height="100%" fill="white" />
                  {squareBorders}
               </mask>
            </defs>
            <rect width="100%" height="100%" fill="#1e1e1e" mask="url(#overlayMask)" />
         </svg>
      </div>
   );
};

export default memo(Overlay);
