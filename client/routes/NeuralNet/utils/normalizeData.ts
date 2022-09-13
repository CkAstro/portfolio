export const normalizeData = (data: Uint8Array): Uint8Array => {
   const inputSize = data.length ** 0.5;

   // find left/right/top/bottom
   const positions = [inputSize, -1, inputSize, -1];
   for (let pos = 0; pos < data.length; pos++) {
      const i = pos % inputSize;
      const j = Math.floor(pos / inputSize);
      if (data[pos] < 255) {
         positions[0] = Math.min(positions[0], i);
         positions[1] = Math.max(positions[1], i);
         positions[2] = Math.min(positions[2], j);
         positions[3] = Math.max(positions[3], j);
      }
   }

   // shift data
   const shiftX = Math.floor((inputSize - positions[0] - positions[1]) / 2.0);
   const shiftY = Math.floor((inputSize - positions[2] - positions[3]) / 2.0);

   const shiftedData = new Uint8Array(data.length);
   for (let pos = 0; pos < data.length; pos++) {
      const i = pos % inputSize;
      const j = Math.floor(pos / inputSize);

      const iPos = i - shiftX;
      const jPos = j - shiftY;
      if (iPos < 0 || iPos > inputSize - 1 || jPos < 0 || jPos > inputSize - 1) {
         shiftedData[pos] = 255;
      } else {
         const shiftedPos = jPos * inputSize + iPos;
         shiftedData[pos] = data[shiftedPos];
      }
   }

   return shiftedData;
};
