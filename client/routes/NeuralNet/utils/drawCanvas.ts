export const drawCanvas = (
   ctx: CanvasRenderingContext2D,
   { dataRef }: Record<string, unknown>
): void => {
   const data = (dataRef as React.MutableRefObject<Uint8Array | undefined>).current;
   if (data === undefined) return;

   const img = ctx.createImageData(ctx.canvas.width, ctx.canvas.height);
   for (let i = 0; i < img.data.length; i++) {
      img.data[i] = data[i];
   }

   ctx.putImageData(img, 0, 0);
};
