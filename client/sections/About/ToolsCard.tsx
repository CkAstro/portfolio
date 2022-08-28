import { SketchCard, SketchItem } from '@/components';

const ToolsCard = (): JSX.Element => (
   <SketchCard cardDelay={0.5}>
      <h1>
         Tools <span style={{ fontWeight: '100' }}>&</span> Software
      </h1>
      <SketchItem percent={95} itemDelay={0.05}>
         NumPy / SciPy
      </SketchItem>
      <SketchItem percent={90} itemDelay={0.1}>
         UNIX / Linux / Windows
      </SketchItem>
      <SketchItem percent={90} itemDelay={0.15}>
         Microsoft Office Suite
      </SketchItem>
      <SketchItem percent={80} itemDelay={0.2}>
         GiT
      </SketchItem>
      <SketchItem percent={75} itemDelay={0.25}>
         PANDAS
      </SketchItem>
      <SketchItem percent={75} itemDelay={0.3}>
         GIMP / Photoshop
      </SketchItem>
      <SketchItem percent={50} itemDelay={0.35}>
         Blender
      </SketchItem>
   </SketchCard>
);

export default ToolsCard;
