import { useRef } from 'react';
import { useMeander, useSquares } from '@/hooks';
import type { Squares } from '@/types';
import ElementArray from './ElementArray';
import NucleoInfo from './NucleoInfo';
import Overlay from './Overlay';
import Spotlight from './Spotlight';
import css from './NucleoDisplay.module.scss';

// The glowing border effect on this display is done by placing a 'spotlight'
//    on the lowest layer; a circular glow effect which follows the mouse
//    The 'grid' and elements are then drawn on top of the spotlight with a 2px
//    gap in between. This gap allows the spotlight to come through and acts as
//    the interactive border
//
// The effect relies heavily on useMousePosition context even though it is not used
//    in the main component - this allows us to easily use the spotlight along with
//    the hover effect and also makes implementing a planned idle effect much easier
//
// NOTE : The element blocks are drawn as SVGs to fix a zoom issue in Firefox
//    it also seems to be a slight performance boost

export const NucleoDisplay = (): JSX.Element => {
   const { squares, squareSize }: Squares = useSquares();
   const divRef = useRef<HTMLDivElement | null>(null);
   useMeander(divRef, squareSize);

   return (
      <div ref={divRef} className={`noselect ${css.nucleo}`}>
         <Spotlight squares={squares} squareSize={squareSize} divRef={divRef} />
         <Overlay squares={squares} squareSize={squareSize} />
         <ElementArray squares={squares} squareSize={squareSize} divRef={divRef} />
         <NucleoInfo />
      </div>
   );
};
