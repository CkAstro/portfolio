export const scaleUpData = (
   data: Uint8Array,
   adjust = true,
   mask: number[] | null = null
): Uint8Array => {
   const scale = 4;
   const scaledData = new Uint8Array(4 * data.length * scale * scale);
   for (let pos = 0; pos < data.length; pos++) {
      let val = data[pos];
      if (adjust) {
         val = ((5.0 + val) / 10.0) * 255;
         val = Math.max(0, Math.min(255, val));
      }

      const axis = data.length ** 0.5;
      const i = pos % axis;
      const j = Math.floor(pos / axis);

      for (let u = 0; u < scale; u++) {
         for (let v = 0; v < scale; v++) {
            const col = i * scale + u;
            const row = j * scale + v;
            const scaledPos = row * axis * scale + col;
            for (let w = 0; w < 3; w++) {
               scaledData[4 * scaledPos + w] = val;
            }
            // const dat = scaledData[4 * scaledPos];
            // if (mask?.[pos] !== 255)
            //    scaledData[4 * scaledPos + 0] = Math.max(0, 255 - (255 - dat) ** 1.075);
            // if (mask?.[pos] === 255) scaledData[4 * scaledPos + 2] *= 0.9;
            // if (mask?.[pos] === 255) scaledData[4 * scaledPos + 1] *= 0.9;
            scaledData[4 * scaledPos + 3] = 255; // opaque
         }
      }
   }

   return scaledData;
};
