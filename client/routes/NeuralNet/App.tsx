import { useState, useEffect, useRef } from 'react';
import { getNeuralNet, putNeuralNet } from '@/api';
import type { NetworkOutput as Output } from '@/types';
import NetworkInput from './NetworkInput';
import NetworkOutput from './NetworkOutput';
// import NetworkDisplay from './NetworkDisplay';
import { getDefaultOutput, normalizeData, scaleDownData, scaleUpData } from './utils';
import css from './NeuralNet.module.scss';

type LayerData = {
   weights: Uint8Array;
   bias: number;
   ind: number;
};

type ServerResponseData = {
   layer1: { weights: Uint8Array[]; biases: number[] };
   layer2: { weights: Uint8Array[]; biases: number[] };
};

const App = (): JSX.Element => {
   const [mask, setMask] = useState<Uint8Array>(new Uint8Array(112 * 112));
   const [output, setOutput] = useState<Output[]>(getDefaultOutput());
   const [userResponse, setUserResponse] = useState<'yes' | 'no' | 'submit' | null>(null);
   const [displayIsHidden, setDisplayIsHidden] = useState<boolean>(window.innerWidth < 830);
   const [layer1Data, setLayer1Data] = useState<LayerData[]>([]);
   const [layer2Data, setLayer2Data] = useState<LayerData[]>([]);

   const input = useRef<Uint8Array>(new Uint8Array(112 * 112 * 4).fill(255));
   const setInput = (data: Uint8Array): void => {
      input.current = data;
   };

   const normalizedInput = useRef<Uint8Array>(new Uint8Array(112 * 112 * 4).fill(255));
   const setNormalizedInput = (data: Uint8Array): void => {
      normalizedInput.current = data;
   };

   useEffect(() => {
      const handleWindowResize = (): void => setDisplayIsHidden(window.innerWidth < 830);
      window.addEventListener('resize', handleWindowResize);
      return () => window.removeEventListener('resize', handleWindowResize);
   }, []);

   useEffect(() => {
      const setNetworkData = (data: ServerResponseData): void => {
         let l1Data: LayerData[] = [];
         for (let i = 0; i < 16; i++) {
            const weights = data.layer1.weights[i];
            const bias = data.layer1.biases[i];
            l1Data = l1Data.concat({ weights, bias, ind: i });
         }
         setLayer1Data(l1Data);
      };

      getNeuralNet()
         .then((data) => setNetworkData(data as ServerResponseData))
         .catch((err) => new Error(err as string));
   }, []);

   // normalize input after update
   const handleUpdate = (): void => {
      const scaled = scaleDownData(input.current);
      const inputMask = normalizeData(scaled);
      const normalized = scaleUpData(inputMask, false);
      setMask(inputMask);
      setNormalizedInput(normalized);
   };

   const handleClear = (): void => {
      setInput(new Uint8Array(112 * 112 * 4).fill(255));
      setMask(new Uint8Array(112 * 112));
      setNormalizedInput(new Uint8Array(112 * 112 * 4).fill(255));
      setOutput(getDefaultOutput());
      setUserResponse(null);
   };

   const handleSubmit = (ind: number): void => {
      putNeuralNet({ mask, output, userResponse, guess: ind })
         .then(() => setUserResponse('submit'))
         .catch((err) => console.log(err));
   };

   return (
      <div className={css.container}>
         <div className={css.interactRegion}>
            <NetworkInput
               setInput={setInput}
               handleUpdate={handleUpdate}
               inputData={input}
               outputData={normalizedInput}
            />
            <NetworkOutput
               output={output}
               handleClear={handleClear}
               handleSubmit={handleSubmit}
               userResponse={userResponse}
            />
            {/* <div className={css.guessContainer}>{guessAreaMessage}</div> */}
         </div>
         {/* {networkDisplay} */}
      </div>
   );
};

export default App;
