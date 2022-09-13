import type { NetworkOutput } from 'types/NeuralNet';

export const getDefaultOutput = (): NetworkOutput[] => {
   let output: NetworkOutput[] = [];
   for (let i = 0; i < 10; i++) {
      output = output.concat({ z: null, activation: null, ind: i });
   }
   return output;
};
