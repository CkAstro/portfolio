import { useSquares } from '@/hooks';
import css from './NucleoDisplay.module.scss';

const NucleoInfo = (): JSX.Element => {
   const { squareSize } = useSquares();

   return (
      <div
         style={
            {
               '--squareSize': `${squareSize.square}px`,
            } as React.CSSProperties
         }
         className={css.learnMore}
      >
         <a href="https://en.wikipedia.org/wiki/Table_of_nuclides" target="_blank" rel="noreferrer">
            <div>nuclear isotopes</div>
            <div>&gt; learn more</div>
         </a>
      </div>
   );
};

export default NucleoInfo;
