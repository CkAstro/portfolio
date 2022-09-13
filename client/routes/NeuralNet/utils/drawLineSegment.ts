type MousePosition = {
   x: number | undefined;
   y: number | undefined;
};

export const drawLineSegment = (
   ctx: CanvasRenderingContext2D,
   lastPosition: MousePosition,
   thisPosition: MousePosition
): void => {
   if (lastPosition.x === undefined || lastPosition.y === undefined) return;
   const lineWidth = 8;

   // get unit vector of the line segment
   const vec = { x: thisPosition.x! - lastPosition.x, y: thisPosition.y! - lastPosition.y };
   const vec2 = (vec.x * vec.x + vec.y * vec.y) ** 0.5;
   const uvec = { x: vec.x / vec2, y: vec.y / vec2 };

   // then add unit vector to each end
   const v1 = {
      x: lastPosition.x - (lineWidth / 4) * uvec.x,
      y: lastPosition.y - (lineWidth / 4) * uvec.y,
   };
   const v2 = {
      x: thisPosition.x! + (lineWidth / 4) * uvec.x,
      y: thisPosition.y! + (lineWidth / 4) * uvec.y,
   };

   // draw segment
   ctx.lineWidth = lineWidth;
   ctx.beginPath();
   ctx.moveTo(v1.x, v1.y);
   ctx.lineTo(v2.x, v2.y);
   ctx.stroke();
};
