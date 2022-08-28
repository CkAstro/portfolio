import { SketchCard, SketchItem } from '@/components';

const FrameworksCard = (): JSX.Element => (
   <SketchCard cardDelay={0.25}>
      <h1>
         Frameworks <span style={{ fontWeight: '100' }}>&</span> APIs
      </h1>
      <SketchItem percent={90} itemDelay={0.05}>
         React
      </SketchItem>
      <SketchItem percent={90} itemDelay={0.1}>
         NodeJS / Express
      </SketchItem>
      <SketchItem percent={90} itemDelay={0.15}>
         RESTful
      </SketchItem>
      <SketchItem percent={90} itemDelay={0.2}>
         OpenMP / MPI
      </SketchItem>
      <SketchItem percent={75} itemDelay={0.25}>
         Redux
      </SketchItem>
      <SketchItem percent={50} itemDelay={0.3}>
         OpenACC
      </SketchItem>
   </SketchCard>
);

export default FrameworksCard;
