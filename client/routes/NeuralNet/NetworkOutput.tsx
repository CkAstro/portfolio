import type { NetworkOutput as Output } from '@/types';
import OutputDisplay from './OutputDisplay';
import css from './NeuralNet.module.scss';

type Props = {
   output: Output[];
   handleClear: () => void;
   handleSubmit: (val: number) => void;
   userResponse: 'yes' | 'no' | 'submit' | null;
};

const NetworkOutput = ({ output, handleClear, handleSubmit, userResponse }: Props): JSX.Element => (
   <div className={css.output}>
      <button className={css.clear} onClick={handleClear}>
         clear
      </button>
      <OutputDisplay output={output} handleSubmit={handleSubmit} userResponse={userResponse} />
   </div>
);

export default NetworkOutput;
