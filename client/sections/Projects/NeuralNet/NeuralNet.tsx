import { neuralnetShowcase } from '@/assets';
import { Showcase } from '@/components';
import css from '../Projects.module.scss';

export const NeuralNet = (): JSX.Element => (
   <Showcase
      title={
         <span style={{ fontWeight: '100' }}>
            Behind the scenes of a <span style={{ fontWeight: '900' }}>neural network</span>
         </span>
      }
      components="React / HTML5 Canvas / Data Processing / REST"
      image={neuralnetShowcase}
      description="A hand-writing number-guessing network. Learn in detail how it works, and help train it."
      link="content/neuralnet"
      actionClass={css.active}
      className={css.showcase}
   />
);
