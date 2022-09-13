export const scaleDownData = (data: Uint8Array): Uint8Array => {
   const inputSize = 28;
   const scale = 4;
   const scaledData = new Uint8Array(inputSize * inputSize);

   for (let pos = 0; pos < scaledData.length; pos++) {
      const i = pos % inputSize;
      const j = Math.floor(pos / inputSize);
      let avgValue = 0.0;
      for (let u = 0; u < scale; u++) {
         for (let v = 0; v < scale; v++) {
            const row = j * scale + v;
            const col = i * scale + u;
            const dataPos = row * scale * inputSize + col;
            avgValue += data[4 * dataPos];
         }
      }
      scaledData[pos] = avgValue / (scale * scale);
   }

   return scaledData;
};
