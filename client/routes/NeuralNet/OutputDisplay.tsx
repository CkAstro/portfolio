import type { NetworkOutput } from '@/types';
import css from './NeuralNet.module.scss';

const getColor = (data: number | null): string => {
   if (data === null) return 'gray';

   const val = parseInt((data * 100).toFixed(), 10);
   if (val > 85) return 'green';
   if (val > 0) return 'orange';
   return 'red';
};

type Props = {
   output: NetworkOutput[];
   handleSubmit: (val: number) => void;
   userResponse: 'yes' | 'no' | 'submit' | null;
};

const OutputDisplay = ({ output, handleSubmit, userResponse }: Props): JSX.Element => (
   <>
      {output.map((data: NetworkOutput, ind: number) => {
         const color = getColor(data.activation);
         const val = (data.activation! * 100).toFixed();
         return (
            <button
               key={data.ind}
               onClick={
                  userResponse !== null && userResponse !== 'submit'
                     ? (): void => handleSubmit(ind)
                     : undefined
               }
               className={`noselect ${css.value} ${css[color]} ${
                  userResponse !== null && userResponse !== 'submit' ? css.active : ''
               }`}
            >
               <div className={css.numDisplay}>{ind}</div>
               <div className={css[color]}>{data.activation !== null ? `${val}%` : null}</div>
            </button>
         );
      })}
   </>
);

export default OutputDisplay;
